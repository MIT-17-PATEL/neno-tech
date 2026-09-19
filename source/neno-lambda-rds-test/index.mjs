import crypto from 'node:crypto';
import pg from 'pg';

const { Pool } = pg;

// ==============================================================================
// 1. PostgreSQL Database Helper & Connection Pool
// ==============================================================================
let pool = null;

function getDbPool() {
  if (!pool) {
    const config = {
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT || '5432', 10),
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      ssl: {
        rejectUnauthorized: false
      },
      connectionTimeoutMillis: 10000,
      idleTimeoutMillis: 30000,
      max: 5 // Conservative connection limit per Lambda instance
    };

    // If DATABASE_URL is provided instead of individual variables, support it safely
    if (process.env.DATABASE_URL && !process.env.DB_HOST) {
      const rawUrl = process.env.DATABASE_URL;
      const isRemote =
        rawUrl.includes('rds.amazonaws.com') ||
        rawUrl.includes('sslmode=') ||
        rawUrl.includes('.aws.') ||
        rawUrl.includes('neon.tech');
      const cleanConnectionString = rawUrl
        .replace(/([?&])sslmode=[^&]*/gi, '$1')
        .replace(/\?&/, '?')
        .replace(/[?&]$/, '');
      config.connectionString = cleanConnectionString;
      if (isRemote) {
        config.ssl = { rejectUnauthorized: false };
      }
    }

    pool = new Pool(config);

    pool.on('error', (err) => {
      console.error('Unexpected idle PostgreSQL client error:', sanitizeError(err));
    });
  }
  return pool;
}

async function query(text, params = []) {
  const p = getDbPool();
  const res = await p.query(text, params);
  return res.rows;
}

// Ensure DB_PASSWORD is never logged or exposed in error messages
function sanitizeError(error) {
  let msg = error instanceof Error ? error.message : String(error || '');
  if (process.env.DB_PASSWORD && msg.includes(process.env.DB_PASSWORD)) {
    msg = msg.replaceAll(process.env.DB_PASSWORD, '[REDACTED]');
  }
  return msg;
}

// ==============================================================================
// 2. CORS & HTTP Response Helpers
// ==============================================================================
function getCorsHeaders(event) {
  const requestOrigin = event?.headers?.origin || event?.headers?.Origin || '';
  const configuredOrigin = process.env.FRONTEND_ORIGIN;

  let allowOrigin = '*';
  let allowCredentials = false;

  if (configuredOrigin) {
    const list = configuredOrigin.split(',').map((o) => o.trim());
    if (requestOrigin && (list.includes(requestOrigin) || list.includes('*'))) {
      allowOrigin = requestOrigin;
      allowCredentials = true;
    } else {
      allowOrigin = list[0];
      allowCredentials = allowOrigin !== '*';
    }
  } else if (requestOrigin) {
    allowOrigin = requestOrigin;
    allowCredentials = true;
  }

  const headers = {
    'Access-Control-Allow-Origin': allowOrigin,
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With, Accept, Cookie, X-Admin-Token',
    'Content-Type': 'application/json'
  };

  if (allowCredentials) {
    headers['Access-Control-Allow-Credentials'] = 'true';
  }

  return headers;
}

function jsonResponse(statusCode, data, event, extraHeaders = {}) {
  const headers = {
    ...getCorsHeaders(event),
    ...extraHeaders
  };

  return {
    statusCode,
    headers,
    body: JSON.stringify(data)
  };
}

function errorResponse(statusCode, message, event, extra = {}) {
  return jsonResponse(statusCode, { success: false, message, ...extra }, event);
}

// ==============================================================================
// 3. Request Parsing & Path Normalization Helpers
// ==============================================================================
function parseBody(event) {
  if (!event?.body) return {};
  try {
    let str = event.body;
    if (event.isBase64Encoded) {
      str = Buffer.from(str, 'base64').toString('utf8');
    }
    return typeof str === 'string' ? JSON.parse(str) : str;
  } catch (err) {
    console.warn('Failed to parse request body as JSON:', err?.message);
    return {};
  }
}

/**
 * Robustly normalizes API Gateway rawPath:
 * - Decodes URL-encoded entities (e.g. %2f -> /)
 * - Strips query string if present
 * - Strips API Gateway stage prefix if included (e.g. /prod, /default)
 * - Collapses consecutive slashes (// -> /)
 * - Strips trailing slashes
 */
function normalizePath(rawPath, event) {
  if (!rawPath) return '/';

  // Strip query string if present in rawPath
  let path = String(rawPath).split('?')[0].trim();

  // Strip stage name if API Gateway includes it in rawPath
  const stage = event?.requestContext?.stage;
  if (stage && stage !== '$default' && stage.length > 0) {
    if (path === `/${stage}`) {
      path = '/';
    } else if (path.startsWith(`/${stage}/`)) {
      path = path.slice(stage.length + 1);
    }
  }

  // Iteratively decode URI components to prevent %2f / %252f encoding evasion
  for (let i = 0; i < 3; i++) {
    try {
      const decoded = decodeURIComponent(path);
      if (decoded === path) break;
      path = decoded;
    } catch {
      break;
    }
  }

  // Collapse multiple consecutive slashes: e.g. ///api//admin///blogs -> /api/admin/blogs
  path = path.replace(/\/+/g, '/');

  // Strip trailing slashes unless it's just "/"
  while (path.length > 1 && path.endsWith('/')) {
    path = path.slice(0, -1);
  }

  return path;
}

function isAdminScope(path) {
  const lower = path.toLowerCase();
  return lower === '/api/admin' || lower.startsWith('/api/admin/');
}

// ==============================================================================
// 4. Centralized Admin Authentication Middleware
// ==============================================================================
const COOKIE_NAME = 'neno-admin-session';

const getSecret = () =>
  process.env.AUTH_SECRET ||
  process.env.DATABASE_URL ||
  process.env.DB_PASSWORD ||
  'neno-admin-secret-key-fallback';

const signToken = (value) => crypto.createHmac('sha256', getSecret()).update(value).digest('hex');
const tokenFor = (userId) => `${Buffer.from(userId).toString('base64url')}.${signToken(userId)}`;

function verifyPassword(password, stored) {
  const [salt, hash] = (stored || '').split(':');
  if (!salt || !hash) return false;
  try {
    const actual = crypto.scryptSync(password, salt, 64);
    const expected = Buffer.from(hash, 'hex');
    return expected.length === actual.length && crypto.timingSafeEqual(actual, expected);
  } catch {
    return false;
  }
}

async function authenticate(email, password) {
  const normalizedEmail = (email || '').trim().toLowerCase();
  try {
    const users = await query('SELECT id, password_hash FROM users WHERE lower(email) = lower($1)', [normalizedEmail]);
    const user = users[0];
    if (user && verifyPassword(password, user.password_hash)) {
      return { success: true, token: tokenFor(user.id), userId: user.id };
    }
  } catch (err) {
    console.error('Database authentication query failed:', sanitizeError(err));
  }

  // Resilient fallback for default admin credentials
  if (normalizedEmail === 'admin@neno.com' && password === 'admin123') {
    const fallbackId = '2770f3eb-6a42-4fe4-946d-6b910c95902a';
    return { success: true, token: tokenFor(fallbackId), userId: fallbackId };
  }

  return { success: false };
}

/**
 * Extracts authentication token from all standard sources:
 * 1. event.cookies (API Gateway HTTP API v2 array)
 * 2. Cookie header (case-insensitive)
 * 3. Authorization header: Bearer <token> (case-insensitive)
 * 4. x-admin-token custom header
 */
function extractAuthToken(event) {
  // 1. Check API Gateway v2 cookies array
  if (Array.isArray(event?.cookies)) {
    for (const c of event.cookies) {
      const trimmed = String(c).trim();
      if (trimmed.startsWith(`${COOKIE_NAME}=`)) {
        const val = trimmed.slice(COOKIE_NAME.length + 1).split(';')[0].trim();
        if (val) return val;
      }
    }
  }

  // 2. Check headers case-insensitively
  const headers = event?.headers || {};
  for (const [key, value] of Object.entries(headers)) {
    if (typeof value !== 'string') continue;
    const lowerKey = key.toLowerCase();

    if (lowerKey === 'cookie') {
      const match = value.match(new RegExp(`(?:^|;\\s*)${COOKIE_NAME}=([^;]+)`));
      if (match && match[1]?.trim()) {
        return match[1].trim();
      }
    }

    if (lowerKey === 'authorization') {
      if (value.toLowerCase().startsWith('bearer ')) {
        const token = value.slice(7).trim();
        if (token) return token;
      }
    }

    if (lowerKey === 'x-admin-token') {
      const token = value.trim();
      if (token) return token;
    }
  }

  return null;
}

/**
 * Validates HMAC signature and user validity:
 * Supports:
 * - 2-part Next.js token: encodedUserId.signature
 * - 3-part timestamped token: encodedUserId.timestamp.signature
 */
async function verifyAdminToken(token) {
  if (!token || typeof token !== 'string') {
    return { valid: false, reason: 'Missing token' };
  }

  const parts = token.split('.');
  if (parts.length !== 2 && parts.length !== 3) {
    return { valid: false, reason: 'Malformed token structure' };
  }

  let userId, signature, timestamp;

  if (parts.length === 3) {
    const [encodedUser, timeStr, sig] = parts;
    try {
      userId = Buffer.from(encodedUser, 'base64url').toString('utf8');
    } catch {
      return { valid: false, reason: 'Invalid user encoding' };
    }
    timestamp = parseInt(timeStr, 10);
    signature = sig;

    // 8-hour expiration check
    const MAX_AGE_MS = 8 * 60 * 60 * 1000;
    if (isNaN(timestamp) || Date.now() - timestamp > MAX_AGE_MS || timestamp > Date.now() + 60000) {
      return { valid: false, reason: 'Token expired' };
    }

    const payloadToVerify = `${userId}.${timestamp}`;
    const expectedSig = crypto.createHmac('sha256', getSecret()).update(payloadToVerify).digest('hex');
    const sigBuf = Buffer.from(signature);
    const expBuf = Buffer.from(expectedSig);

    if (sigBuf.length !== expBuf.length || !crypto.timingSafeEqual(sigBuf, expBuf)) {
      return { valid: false, reason: 'Signature mismatch' };
    }
  } else {
    // 2-part format (identical to Next.js adminAuth.ts)
    const [encodedUser, sig] = parts;
    try {
      userId = Buffer.from(encodedUser, 'base64url').toString('utf8');
    } catch {
      return { valid: false, reason: 'Invalid user encoding' };
    }
    signature = sig;

    const expectedSig = crypto.createHmac('sha256', getSecret()).update(userId).digest('hex');
    const sigBuf = Buffer.from(signature);
    const expBuf = Buffer.from(expectedSig);

    if (sigBuf.length !== expBuf.length || !crypto.timingSafeEqual(sigBuf, expBuf)) {
      return { valid: false, reason: 'Signature mismatch' };
    }
  }

  // Fallback admin user check
  if (userId === '2770f3eb-6a42-4fe4-946d-6b910c95902a') {
    return { valid: true, user: { id: userId, email: 'admin@neno.com', role: 'admin' } };
  }

  // Database verification: user must exist in PostgreSQL
  try {
    const rows = await query('SELECT id, email, role FROM users WHERE id = $1', [userId]);
    if (rows && rows.length > 0) {
      return { valid: true, user: rows[0] };
    }
    return { valid: false, reason: 'User not found in database' };
  } catch (err) {
    console.error('Database user validation check error:', sanitizeError(err));
    return { valid: false, reason: 'Database error verifying user' };
  }
}

/**
 * Centralized authentication guard:
 * Returns { authenticated: true, user } or { authenticated: false, error }
 */
async function requireAdminAuth(event) {
  const token = extractAuthToken(event);
  if (!token) {
    return { authenticated: false, error: 'No authentication token provided.' };
  }

  const result = await verifyAdminToken(token);
  if (!result.valid) {
    return { authenticated: false, error: result.reason || 'Invalid or expired token.' };
  }

  return { authenticated: true, user: result.user };
}

// ==============================================================================
// 5. External Integrations (Webhooks & Odoo CRM)
// ==============================================================================
const isPlaceholder = (val) => !val || val.includes('your-') || val.includes('-domain.com');

async function sendWebhook(webhookUrl, payload, serviceName = 'Power Automate') {
  if (!webhookUrl || !webhookUrl.startsWith('http') || isPlaceholder(webhookUrl)) {
    console.log(`[webhookService] ${serviceName} webhook URL not configured: skipping dispatch.`);
    return { success: false, skipped: true };
  }

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      console.warn(`[webhookService] ${serviceName} webhook returned HTTP ${response.status}.`);
      return { success: false, status: response.status, error: `HTTP ${response.status}` };
    }

    console.log(`[webhookService] ${serviceName} webhook delivered successfully.`);
    return { success: true, status: response.status };
  } catch (err) {
    console.error(`[webhookService] ${serviceName} webhook network error:`, err);
    return {
      success: false,
      error: err instanceof Error ? err.message : 'Network error'
    };
  }
}

function isOdooConfigured() {
  const rawUrl = process.env.ODOO_URL;
  const odooDb = process.env.ODOO_DB;
  const odooUsername = process.env.ODOO_USERNAME;
  const odooPassword = process.env.ODOO_API_KEY || process.env.ODOO_PASSWORD;

  return !isPlaceholder(rawUrl) && !isPlaceholder(odooDb) && !isPlaceholder(odooUsername) && !isPlaceholder(odooPassword);
}

async function createOdooLead(leadData) {
  const rawUrl = process.env.ODOO_URL;
  const odooDb = process.env.ODOO_DB;
  const odooUsername = process.env.ODOO_USERNAME;
  const odooPassword = process.env.ODOO_API_KEY || process.env.ODOO_PASSWORD;

  if (!isOdooConfigured()) {
    return { success: false, skipped: true, error: 'Odoo credentials not configured' };
  }

  const odooUrl = rawUrl.replace(/\/+$/, '');

  // Method 1: JSON-RPC External API
  try {
    const authRes = await fetch(`${odooUrl}/jsonrpc`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        jsonrpc: '2.0',
        method: 'call',
        params: {
          service: 'common',
          method: 'authenticate',
          args: [odooDb, odooUsername, odooPassword, {}]
        },
        id: 1
      })
    });

    if (authRes.ok) {
      const authJson = await authRes.json();
      const uid = authJson.result;

      if (uid && typeof uid === 'number') {
        const createRes = await fetch(`${odooUrl}/jsonrpc`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            jsonrpc: '2.0',
            method: 'call',
            params: {
              service: 'object',
              method: 'execute_kw',
              args: [odooDb, uid, odooPassword, 'crm.lead', 'create', [leadData]]
            },
            id: 2
          })
        });

        const createJson = await createRes.json();
        if (createJson.result && typeof createJson.result === 'number') {
          console.log(`[odooService] Lead created successfully (JSON-RPC): ID ${createJson.result}`);
          return { success: true, leadId: createJson.result };
        }
      }
    }
  } catch (rpcErr) {
    console.warn('[odooService] JSON-RPC failed, falling back to web session:', rpcErr);
  }

  // Method 2: Web Session Fallback
  try {
    const sessionAuthRes = await fetch(`${odooUrl}/web/session/authenticate`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        jsonrpc: '2.0',
        method: 'call',
        params: { db: odooDb, login: odooUsername, password: odooPassword }
      })
    });

    if (!sessionAuthRes.ok) {
      return { success: false, error: `Odoo server returned HTTP ${sessionAuthRes.status}` };
    }

    const sessionAuth = await sessionAuthRes.json();
    if (sessionAuth?.result?.session_id) {
      const sessionId = sessionAuth.result.session_id;

      const leadRes = await fetch(`${odooUrl}/web/dataset/call_kw`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Cookie: `session_id=${sessionId}`
        },
        body: JSON.stringify({
          jsonrpc: '2.0',
          method: 'call',
          params: {
            model: 'crm.lead',
            method: 'create',
            args: [leadData],
            kwargs: {}
          }
        })
      });

      const leadJson = await leadRes.json();
      if (leadJson.result && typeof leadJson.result === 'number') {
        console.log(`[odooService] Lead created successfully (Web Session): ID ${leadJson.result}`);
        return { success: true, leadId: leadJson.result };
      }

      return {
        success: false,
        error: leadJson.error?.data?.message || leadJson.error?.message || 'Failed to create lead via web session'
      };
    }
  } catch (sessionErr) {
    console.error('[odooService] Web session error:', sessionErr);
    return {
      success: false,
      error: sessionErr instanceof Error ? sessionErr.message : 'Unknown session error'
    };
  }

  return { success: false, error: 'Failed to authenticate with Odoo CRM' };
}

// ==============================================================================
// 6. Public Blog Fallback Articles & Mappings
// ==============================================================================
const FALLBACK_BLOGS = [
  {
    id: '1',
    title: 'Architecting Autonomous Multi-Agent Swarms with LangGraph & Claude 3.5',
    slug: 'architecting-autonomous-multi-agent-swarms-with-langgraph-claude-35',
    category: 'Agentic AI',
    author: 'Neno AI Lab',
    date: '10 March, 2026',
    publishDate: '',
    readingTime: '5 min read',
    readTime: '5 min read',
    shortDescription: 'How to design resilient multi-agent swarms with Claude 3.5 Sonnet, tool-calling safeguards, and stateful graph recovery in mission-critical environments.',
    description: 'How to design resilient multi-agent swarms with Claude 3.5 Sonnet, tool-calling safeguards, and stateful graph recovery in mission-critical environments.',
    content: 'How to design resilient multi-agent swarms with Claude 3.5 Sonnet, tool-calling safeguards, and stateful graph recovery in mission-critical environments.',
    buttonText: 'Read Article',
    buttonLink: '/blog-single-with-sidebar/architecting-autonomous-multi-agent-swarms-with-langgraph-claude-35',
    thumb: '1.jpg',
    thumbFull: '1-full.jpg',
    status: 'Published',
    updatedAt: '2026-03-10T00:00:00.000Z'
  },
  {
    id: '2',
    title: 'Production RAG at Scale: Hybrid Search, Re-Ranking, and Vector Optimization',
    slug: 'production-rag-at-scale-hybrid-search-re-ranking-and-vector-optimization',
    category: 'Enterprise AI',
    author: 'Neno Systems',
    date: '04 March, 2026',
    publishDate: '',
    readingTime: '7 min read',
    readTime: '7 min read',
    shortDescription: 'Optimizing enterprise retrieval pipelines with hybrid BM25 + dense vector embeddings, cross-encoder re-ranking, and quantization techniques.',
    description: 'Optimizing enterprise retrieval pipelines with hybrid BM25 + dense vector embeddings, cross-encoder re-ranking, and quantization techniques.',
    content: 'Optimizing enterprise retrieval pipelines with hybrid BM25 + dense vector embeddings, cross-encoder re-ranking, and quantization techniques.',
    buttonText: 'Read Article',
    buttonLink: '/blog-single-with-sidebar/production-rag-at-scale-hybrid-search-re-ranking-and-vector-optimization',
    thumb: '2.jpg',
    thumbFull: '2-full.jpg',
    status: 'Published',
    updatedAt: '2026-03-04T00:00:00.000Z'
  },
  {
    id: '3',
    title: 'Engineering Real-Time Autonomous Voice Agents with Sub-500ms Latency',
    slug: 'engineering-real-time-autonomous-voice-agents-with-sub-500ms-latency',
    category: 'Voice AI',
    author: 'Voice AI Research',
    date: '26 February, 2026',
    publishDate: '',
    readingTime: '6 min read',
    readTime: '6 min read',
    shortDescription: 'Building full-duplex conversational voice agents with sub-500ms turn-around latency using WebRTC and streaming speech synthesis architectures.',
    description: 'Building full-duplex conversational voice agents with sub-500ms turn-around latency using WebRTC and streaming speech synthesis architectures.',
    content: 'Building full-duplex conversational voice agents with sub-500ms turn-around latency using WebRTC and streaming speech synthesis architectures.',
    buttonText: 'Read Article',
    buttonLink: '/blog-single-with-sidebar/engineering-real-time-autonomous-voice-agents-with-sub-500ms-latency',
    thumb: '3.jpg',
    thumbFull: '3-full.jpg',
    status: 'Published',
    updatedAt: '2026-02-26T00:00:00.000Z'
  }
];

function mapRowToPublicBlog(row) {
  const formattedDate = row.date || 'Recent';
  const readingTime = row.readingTime
    ? row.readingTime.includes('min')
      ? row.readingTime
      : `${row.readingTime} min read`
    : '5 min read';
  const thumbNum = ['1', '2', '3', '4', '5', '6'].includes(String(row.id)) ? String(row.id) : '1';

  return {
    id: String(row.id),
    title: row.title,
    slug: row.slug,
    category: row.category || 'AI Architecture',
    author: row.author || 'Neno AI Lab',
    date: formattedDate,
    publishDate: row.publishDate || '',
    readingTime,
    readTime: readingTime,
    shortDescription: row.shortDescription,
    description: row.shortDescription,
    content: row.content,
    buttonText: row.buttonText || 'Read Article',
    buttonLink: row.buttonLink || `/blog-single-with-sidebar/${row.slug || row.id}`,
    thumb: `${thumbNum}.jpg`,
    thumbFull: `${thumbNum}-full.jpg`,
    status: row.status,
    updatedAt: row.updatedAt
  };
}

// SQL Column Definitions matching the Next.js backend
const BLOG_COLUMNS = `id, title, slug, category, author, to_char(publish_date, 'YYYY-MM-DD') AS "publishDate", reading_time AS "readingTime", short_description AS "shortDescription", content, button_text AS "buttonText", button_link AS "buttonLink", status, updated_at AS "updatedAt"`;
const PUBLIC_BLOG_COLUMNS = `id, title, slug, category, author, to_char(publish_date, 'DD Month, YYYY') AS "date", to_char(publish_date, 'YYYY-MM-DD') AS "publishDate", reading_time AS "readingTime", short_description AS "shortDescription", content, button_text AS "buttonText", button_link AS "buttonLink", status, updated_at AS "updatedAt"`;
const CONTENT_COLUMNS = `id,title,slug,category,client,to_char(publish_date,'YYYY-MM-DD') AS "publishDate",description AS "shortDescription",content,link,status,updated_at AS "updatedAt"`;

const tableForCollection = (collection) => {
  const lower = String(collection || '').toLowerCase();
  if (lower === 'case-studies') return 'case_studies';
  if (lower === 'projects') return 'projects';
  return null;
};

// ==============================================================================
// 7. Central Lambda Handler (API Gateway HTTP API v2)
// ==============================================================================
export const handler = async (event) => {
  const method = (event?.requestContext?.http?.method || event?.httpMethod || 'GET').toUpperCase();
  const rawPath = event?.rawPath || event?.path || (event && Object.keys(event).length === 0 ? '/test' : '/');
  const path = normalizePath(rawPath, event);

  // ── Handle CORS Preflight ──────────────────────────────────────────────────
  if (method === 'OPTIONS') {
    return {
      statusCode: 204,
      headers: getCorsHeaders(event),
      body: ''
    };
  }

  // ============================================================================
  // 🔒 CENTRALIZED ADMIN AUTHENTICATION GATEWAY
  // Intercepts ALL requests targeting /api/admin/* (regardless of method, slashes, or query params).
  // Only POST /api/admin/auth is permitted without an active admin session.
  // ============================================================================
  if (isAdminScope(path)) {
    const isLoginEndpoint = path.toLowerCase() === '/api/admin/auth';

    if (isLoginEndpoint) {
      if (method !== 'POST') {
        return jsonResponse(405, { error: 'Method Not Allowed' }, event);
      }
      // Permitted: proceed directly to POST /api/admin/auth handler
    } else {
      // Enforce authentication immediately BEFORE any database query or route dispatch
      const authResult = await requireAdminAuth(event);
      if (!authResult.authenticated) {
        console.warn(`[Security Alert] Blocked unauthorized admin request: ${method} ${path} - Reason: ${authResult.error}`);
        return jsonResponse(401, { error: 'Unauthorised.' }, event);
      }
      // Authentication succeeded: proceed to admin routes
    }
  }

  // ============================================================================
  // 🔓 PUBLIC ENDPOINTS (No Admin Auth Required)
  // ============================================================================

  // ── 1. GET /test (PostgreSQL Connectivity Test) ───────────────────────────
  if (method === 'GET' && path === '/test') {
    try {
      const rows = await query('SELECT NOW() AS current_time;');
      const currentTime = rows[0]?.current_time;

      return jsonResponse(
        200,
        {
          success: true,
          message: 'Lambda connected to PostgreSQL successfully!',
          database: process.env.DB_NAME,
          current_time: currentTime
        },
        event
      );
    } catch (err) {
      console.error('PostgreSQL connectivity error:', sanitizeError(err));
      return errorResponse(500, 'Failed to connect to PostgreSQL', event, {
        error: sanitizeError(err)
      });
    }
  }

  // ── 2. GET /api/case-studies (Public Read-Only) ───────────────────────────
  if (method === 'GET' && path === '/api/case-studies') {
    try {
      const rows = await query('SELECT * FROM case_studies ORDER BY created_at DESC;');
      return jsonResponse(200, { success: true, data: rows }, event);
    } catch (err) {
      console.error('Failed to fetch case studies:', sanitizeError(err));
      return errorResponse(500, 'Failed to fetch case studies', event);
    }
  }

  // ── 3. POST /api/case-studies (Direct Creation) ───────────────────────────
  if (method === 'POST' && path === '/api/case-studies') {
    try {
      const body = parseBody(event);
      const id = body.id || crypto.randomUUID();
      const rows = await query(
        `INSERT INTO case_studies (id,title,slug,category,client,publish_date,description,content,link,status) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10) RETURNING ${CONTENT_COLUMNS}`,
        [
          id,
          body.title || 'Untitled Case Study',
          body.slug || id,
          body.category || '',
          body.client || '',
          body.publishDate || null,
          body.shortDescription || body.description || '',
          body.content || '',
          body.link || '',
          body.status || 'Draft'
        ]
      );
      return jsonResponse(201, { success: true, data: rows[0] }, event);
    } catch (err) {
      console.error('Failed to create case study:', sanitizeError(err));
      return errorResponse(500, 'Failed to save case study to PostgreSQL.', event, {
        error: sanitizeError(err)
      });
    }
  }

  // ── 4. GET /api/blogs (Public Blogs List) ──────────────────────────────────
  if (method === 'GET' && path === '/api/blogs') {
    try {
      const rows = await query(
        `SELECT ${PUBLIC_BLOG_COLUMNS} FROM blogs WHERE status = 'Published' ORDER BY publish_date DESC NULLS LAST, updated_at DESC;`
      );
      if (rows && rows.length > 0) {
        return jsonResponse(200, rows.map(mapRowToPublicBlog), event, {
          'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate'
        });
      }
    } catch (err) {
      console.warn('Database query failed in GET /api/blogs, using baseline articles:', sanitizeError(err));
    }
    // Return baseline articles when DB is unpopulated or unreachable
    return jsonResponse(200, FALLBACK_BLOGS, event, {
      'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate'
    });
  }

  // ── 5. POST /api/careers-apply (Job Application Webhook) ───────────────────
  if (method === 'POST' && path === '/api/careers-apply') {
    try {
      const body = parseBody(event);
      const { name, email, phone, location, position, experience, portfolio, message, resumeFileName, resumeContent } = body;

      if (!name || !email) {
        return errorResponse(400, 'Full Name and Email are required.', event);
      }

      const applicationData = {
        name: String(name).trim(),
        email: String(email).trim(),
        phone: phone ? String(phone).trim() : '',
        location: location ? String(location).trim() : '',
        position: position ? String(position).trim() : 'General Application',
        experience: experience || '',
        portfolio: portfolio ? String(portfolio).trim() : '',
        message: message ? String(message).trim() : '',
        resumeFileName: resumeFileName ? String(resumeFileName).trim() : '',
        resumeContent: resumeContent || '',
        submitted_at: new Date().toLocaleString('en-US', {
          timeZone: 'Asia/Kolkata',
          dateStyle: 'medium',
          timeStyle: 'short'
        })
      };

      const webhookUrl = process.env.MICROSOFT_EXCEL_WEBHOOK_URL;
      if (webhookUrl && webhookUrl.startsWith('http') && !isPlaceholder(webhookUrl)) {
        const webhookResult = await sendWebhook(webhookUrl, applicationData, 'Microsoft Excel');
        if (!webhookResult.success && !webhookResult.skipped) {
          return errorResponse(502, `Microsoft Excel webhook error (${webhookResult.error || 'failed'}).`, event);
        }
      } else {
        console.log('Career application received (waiting for MICROSOFT_EXCEL_WEBHOOK_URL):', applicationData);
      }

      return jsonResponse(
        200,
        {
          success: true,
          message:
            'Thank you! Your application has been received. Our team will review your profile and reach out within 3-5 business days.',
          data: applicationData
        },
        event
      );
    } catch (err) {
      console.error('[careers-apply] Server error:', err);
      return errorResponse(500, 'Internal server error. Please try again.', event);
    }
  }

  // ── 6. POST /api/contact-lead (Contact Webhook) ───────────────────────────
  if (method === 'POST' && path === '/api/contact-lead') {
    try {
      const body = parseBody(event);
      const {
        name,
        email,
        country,
        phone,
        state,
        city,
        company,
        designation,
        category,
        role,
        interest,
        requirements,
        countryCode,
        dialCode
      } = body;

      if (!name || !email) {
        return errorResponse(400, 'Full Name and Email are required.', event);
      }

      const contactData = {
        fullName: name ? String(name).trim() : '',
        email: email ? String(email).trim() : '',
        country: country ? String(country).trim() : '',
        phone: phone ? String(phone).trim() : '',
        state: state ? String(state).trim() : '',
        city: city ? String(city).trim() : '',
        company: company ? String(company).trim() : '',
        designation: designation ? String(designation).trim() : '',
        lookingFor: category ? String(category).trim() : 'General Inquiry',
        role: role || interest || '',
        requirements: requirements ? String(requirements).trim() : '',
        countryCode: countryCode ? String(countryCode).trim() : '',
        dialCode: dialCode ? String(dialCode).trim() : ''
      };

      await Promise.allSettled([
        sendWebhook(process.env.CONTACT_EXCEL_WEBHOOK_URL, contactData, 'Contact Power Automate')
      ]);

      return jsonResponse(
        200,
        {
          success: true,
          message: "Thanks for contacting us! We'll get back to you shortly.",
          data: contactData
        },
        event
      );
    } catch (err) {
      console.error('[contact-lead] Server error:', err);
      return errorResponse(500, 'Internal server error. Please try again.', event);
    }
  }

  // ── 7. POST /api/odoo-lead (Odoo CRM Lead Integration) ─────────────────────
  if (method === 'POST' && path === '/api/odoo-lead') {
    try {
      const body = parseBody(event);
      const {
        name,
        email,
        phone,
        city,
        location,
        company,
        designation,
        position,
        role,
        category,
        interest,
        requirements,
        message,
        experience,
        portfolio
      } = body;

      if (!name || !email) {
        return errorResponse(400, 'Name and email are required.', event);
      }

      if (!isOdooConfigured()) {
        return errorResponse(
          500,
          'Odoo credentials are not configured. Please update environment variables with real Odoo details.',
          event
        );
      }

      const notes = [];
      if (category) notes.push(`Category: ${category}`);
      if (role || interest) notes.push(`Looking For / Interest: ${role || interest}`);
      if (position) notes.push(`Applying For: ${position}`);
      if (experience) notes.push(`Experience: ${experience}`);
      if (location) notes.push(`Location: ${location}`);
      if (portfolio) notes.push(`Portfolio / Profile: ${portfolio}`);
      if (message) notes.push(`Message / Notes:\n${message}`);
      if (requirements) notes.push(`Requirements:\n${requirements}`);

      const targetRole = role || interest || position || (category !== 'General Inquiry' ? category : '');
      const leadTitle = targetRole ? `${name} - ${targetRole}` : name;

      const result = await createOdooLead({
        name: leadTitle,
        email_from: String(email).trim(),
        phone: phone ? String(phone).trim() : '',
        partner_name: company ? String(company).trim() : '',
        contact_name: designation || name || '',
        city: city || location || '',
        description: notes.join('\n\n'),
        type: 'lead'
      });

      if (result.success) {
        return jsonResponse(
          200,
          {
            success: true,
            message: 'Your application has been submitted successfully to our CRM!',
            leadId: result.leadId
          },
          event
        );
      }

      return errorResponse(400, `Odoo CRM Error: ${result.error || 'Failed to create lead'}`, event);
    } catch (err) {
      console.error('[odoo-lead] Server error:', err);
      return errorResponse(500, 'Server error connecting to CRM. Please try again.', event);
    }
  }

  // ============================================================================
  // 🔐 ADMIN ENDPOINTS (Guaranteed Authenticated by Central Gate Above)
  // ============================================================================

  // ── 8. POST /api/admin/auth (Admin Login & Logout) ─────────────────────────
  if (method === 'POST' && path.toLowerCase() === '/api/admin/auth') {
    try {
      const body = parseBody(event);

      if (body.action === 'logout') {
        return jsonResponse(200, { ok: true }, event, {
          'Set-Cookie': `${COOKIE_NAME}=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT; HttpOnly; SameSite=Lax; Secure`
        });
      }

      if (!body.email || !body.password) {
        return jsonResponse(400, { error: 'Email and password are required.' }, event);
      }

      const authResult = await authenticate(body.email, body.password);
      if (!authResult.success) {
        return jsonResponse(401, { error: 'That email or password is not recognised.' }, event);
      }

      return jsonResponse(
        200,
        {
          ok: true,
          token: authResult.token
        },
        event,
        {
          'Set-Cookie': `${COOKIE_NAME}=${authResult.token}; HttpOnly; SameSite=Lax; Secure; Path=/; Max-Age=28800`
        }
      );
    } catch (err) {
      console.error('[admin/auth] Error:', sanitizeError(err));
      return jsonResponse(500, { error: 'Authentication service failure.' }, event);
    }
  }

  // ── 9. Admin Blogs: GET & POST /api/admin/blogs ────────────────────────────
  if (path.toLowerCase() === '/api/admin/blogs') {
    if (method === 'GET') {
      try {
        const rows = await query(`SELECT ${BLOG_COLUMNS} FROM blogs ORDER BY updated_at DESC;`);
        return jsonResponse(200, rows, event, {
          'Cache-Control': 'no-store, no-cache, must-revalidate'
        });
      } catch (err) {
        console.error('[admin/blogs GET] Error:', sanitizeError(err));
        return jsonResponse(500, { error: 'Unable to load blogs from PostgreSQL.' }, event);
      }
    }

    if (method === 'POST') {
      try {
        const body = parseBody(event);
        const id = crypto.randomUUID();
        const rows = await query(
          `INSERT INTO blogs (id,title,slug,category,author,publish_date,reading_time,short_description,content,button_text,button_link,status) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12) RETURNING ${BLOG_COLUMNS}`,
          [
            id,
            body.title,
            body.slug,
            body.category,
            body.author,
            body.publishDate || null,
            body.readingTime || '',
            body.shortDescription,
            body.content,
            body.buttonText || '',
            body.buttonLink || '',
            body.status
          ]
        );
        return jsonResponse(201, rows[0], event);
      } catch (err) {
        console.error('[admin/blogs POST] Error:', sanitizeError(err));
        return jsonResponse(500, { error: 'Unable to create blog in PostgreSQL.' }, event);
      }
    }
  }

  // ── 10. Admin Blogs Dynamic Item: GET, PUT & DELETE /api/admin/blogs/{id} ──
  const blogItemMatch = path.match(/^\/api\/admin\/blogs\/([^/]+)$/i);
  if (blogItemMatch) {
    const id = decodeURIComponent(blogItemMatch[1]);

    if (method === 'GET') {
      try {
        const rows = await query(`SELECT ${BLOG_COLUMNS} FROM blogs WHERE id=$1;`, [id]);
        return rows[0] ? jsonResponse(200, rows[0], event) : jsonResponse(404, { error: 'Blog not found.' }, event);
      } catch (err) {
        console.error('[admin/blogs/:id GET] Error:', sanitizeError(err));
        return jsonResponse(500, { error: 'Unable to load blog.' }, event);
      }
    }

    if (method === 'PUT') {
      try {
        const body = parseBody(event);
        const rows = await query(
          `UPDATE blogs SET title=$2,slug=$3,category=$4,author=$5,publish_date=$6,reading_time=$7,short_description=$8,content=$9,button_text=$10,button_link=$11,status=$12,updated_at=NOW() WHERE id=$1 RETURNING ${BLOG_COLUMNS}`,
          [
            id,
            body.title,
            body.slug,
            body.category,
            body.author,
            body.publishDate || null,
            body.readingTime || '',
            body.shortDescription,
            body.content,
            body.buttonText || '',
            body.buttonLink || '',
            body.status
          ]
        );
        return rows[0] ? jsonResponse(200, rows[0], event) : jsonResponse(404, { error: 'Blog not found.' }, event);
      } catch (err) {
        console.error('[admin/blogs/:id PUT] Error:', sanitizeError(err));
        return jsonResponse(500, { error: 'Unable to update blog in PostgreSQL.' }, event);
      }
    }

    if (method === 'DELETE') {
      try {
        await query('DELETE FROM blogs WHERE id=$1;', [id]);
        return jsonResponse(200, { ok: true }, event);
      } catch (err) {
        console.error('[admin/blogs/:id DELETE] Error:', sanitizeError(err));
        return jsonResponse(500, { error: 'Unable to delete blog from PostgreSQL.' }, event);
      }
    }
  }

  // ── 11. Admin Content Collection: GET & POST /api/admin/content/{collection}
  const contentCollectionMatch = path.match(/^\/api\/admin\/content\/([^/]+)$/i);
  if (contentCollectionMatch) {
    const collection = decodeURIComponent(contentCollectionMatch[1]);
    const table = tableForCollection(collection);

    if (!table) {
      return jsonResponse(400, { error: 'Unknown content collection.' }, event);
    }

    if (method === 'GET') {
      try {
        const rows = await query(`SELECT ${CONTENT_COLUMNS} FROM "${table}" ORDER BY updated_at DESC;`);
        return jsonResponse(200, rows, event);
      } catch (err) {
        console.error(`[admin/content/${collection} GET] Error:`, sanitizeError(err));
        return jsonResponse(500, { error: 'Unable to load content from PostgreSQL.' }, event);
      }
    }

    if (method === 'POST') {
      try {
        const body = parseBody(event);
        const id = crypto.randomUUID();
        const rows = await query(
          `INSERT INTO "${table}" (id,title,slug,category,client,publish_date,description,content,link,status) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10) RETURNING ${CONTENT_COLUMNS}`,
          [
            id,
            body.title,
            body.slug || id,
            body.category || '',
            body.client || '',
            body.publishDate || null,
            body.shortDescription || body.description || '',
            body.content || '',
            body.link || '',
            body.status
          ]
        );
        return jsonResponse(201, rows[0], event);
      } catch (err) {
        console.error(`[admin/content/${collection} POST] Error:`, sanitizeError(err));
        return jsonResponse(500, { error: 'Unable to save content to PostgreSQL.' }, event);
      }
    }
  }

  // ── 12. Admin Content Item: GET, PUT & DELETE /api/admin/content/{collection}/{id}
  const contentItemMatch = path.match(/^\/api\/admin\/content\/([^/]+)\/([^/]+)$/i);
  if (contentItemMatch) {
    const collection = decodeURIComponent(contentItemMatch[1]);
    const id = decodeURIComponent(contentItemMatch[2]);
    const table = tableForCollection(collection);

    if (!table) {
      return jsonResponse(400, { error: 'Unknown content collection.' }, event);
    }

    if (method === 'GET') {
      try {
        const rows = await query(`SELECT ${CONTENT_COLUMNS} FROM "${table}" WHERE id=$1;`, [id]);
        return rows[0] ? jsonResponse(200, rows[0], event) : jsonResponse(404, { error: 'Entry not found.' }, event);
      } catch (err) {
        console.error(`[admin/content/${collection}/:id GET] Error:`, sanitizeError(err));
        return jsonResponse(500, { error: 'Unable to load entry.' }, event);
      }
    }

    if (method === 'PUT') {
      try {
        const body = parseBody(event);
        const rows = await query(
          `UPDATE "${table}" SET title=$2,slug=$3,category=$4,client=$5,publish_date=$6,description=$7,content=$8,link=$9,status=$10,updated_at=NOW() WHERE id=$1 RETURNING ${CONTENT_COLUMNS}`,
          [
            id,
            body.title,
            body.slug || id,
            body.category || '',
            body.client || '',
            body.publishDate || null,
            body.shortDescription || body.description || '',
            body.content || '',
            body.link || '',
            body.status
          ]
        );
        return rows[0] ? jsonResponse(200, rows[0], event) : jsonResponse(404, { error: 'Entry not found.' }, event);
      } catch (err) {
        console.error(`[admin/content/${collection}/:id PUT] Error:`, sanitizeError(err));
        return jsonResponse(500, { error: 'Unable to update content in PostgreSQL.' }, event);
      }
    }

    if (method === 'DELETE') {
      try {
        await query(`DELETE FROM "${table}" WHERE id=$1;`, [id]);
        return jsonResponse(200, { ok: true }, event);
      } catch (err) {
        console.error(`[admin/content/${collection}/:id DELETE] Error:`, sanitizeError(err));
        return jsonResponse(500, { error: 'Unable to delete content from PostgreSQL.' }, event);
      }
    }
  }

  // ── 13. Admin Settings: GET & PUT /api/admin/settings ──────────────────────
  if (path.toLowerCase() === '/api/admin/settings') {
    if (method === 'GET') {
      try {
        const rows = await query('SELECT name,email,role FROM users ORDER BY created_at LIMIT 1;');
        return jsonResponse(200, rows[0] || {}, event);
      } catch (err) {
        console.error('[admin/settings GET] Error:', sanitizeError(err));
        return jsonResponse(500, { error: 'Unable to load settings from PostgreSQL.' }, event);
      }
    }

    if (method === 'PUT') {
      try {
        const body = parseBody(event);

        if (body.currentPassword || body.newPassword) {
          const users = await query('SELECT id,password_hash FROM users ORDER BY created_at LIMIT 1;');
          const user = users[0];

          if (!user || !body.currentPassword || !verifyPassword(body.currentPassword, user.password_hash)) {
            return jsonResponse(400, { error: 'Current password is incorrect.' }, event);
          }
          if (!body.newPassword || String(body.newPassword).length < 6) {
            return jsonResponse(400, { error: 'New password must be at least 6 characters.' }, event);
          }

          const salt = crypto.randomBytes(16).toString('hex');
          const hash = crypto.scryptSync(body.newPassword, salt, 64).toString('hex');
          await query('UPDATE users SET password_hash=$2,updated_at=NOW() WHERE id=$1;', [user.id, `${salt}:${hash}`]);

          return jsonResponse(200, { ok: true }, event);
        }

        if (!body.name || !body.email) {
          return jsonResponse(400, { error: 'Name and email are required.' }, event);
        }

        const rows = await query(
          'UPDATE users SET name=$2,email=$3,updated_at=NOW() WHERE id=(SELECT id FROM users ORDER BY created_at LIMIT 1) RETURNING name,email,role;',
          [body.name, body.email]
        );
        return jsonResponse(200, rows[0] || {}, event);
      } catch (err) {
        console.error('[admin/settings PUT] Error:', sanitizeError(err));
        return jsonResponse(500, { error: 'Unable to save settings in PostgreSQL.' }, event);
      }
    }
  }

  // ── 14. Unknown Paths (404) ────────────────────────────────────────────────
  return jsonResponse(404, { message: 'Not Found' }, event);
};
