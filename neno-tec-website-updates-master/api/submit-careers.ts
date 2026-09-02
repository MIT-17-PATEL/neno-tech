import type { VercelRequest, VercelResponse } from '@vercel/node';

const ALLOWED_ORIGINS = [
  'https://nenotechnology.com',
  'https://www.nenotechnology.com',
  'https://nenotechnology-redefined.vercel.app',
  'http://localhost:3000',
];

const rateMap = new Map<string, number>();
const RATE_LIMIT_MS = 15000;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const last = rateMap.get(ip) || 0;
  if (now - last < RATE_LIMIT_MS) return true;
  rateMap.set(ip, now);
  if (rateMap.size > 500) {
    for (const [key, time] of rateMap) {
      if (now - time > 60000) rateMap.delete(key);
    }
  }
  return false;
}

function sanitize(val: string, maxLen = 1000): string {
  let s = String(val || '').replace(/<[^>]*>/g, '').trim().slice(0, maxLen);
  if (/^[=+\-@\t\r]/.test(s)) s = `'${s}`;
  return s;
}

function isValidEmail(email: string): boolean {
  return /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/.test(email) && email.length <= 254;
}

function isValidUrl(url: string): boolean {
  if (!url) return true;
  try {
    const parsed = new URL(url);
    return parsed.protocol === 'https:' || parsed.protocol === 'http:';
  } catch {
    return false;
  }
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const origin = req.headers.origin || '';
  if (ALLOWED_ORIGINS.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  if (origin && !ALLOWED_ORIGINS.includes(origin)) {
    return res.status(403).json({ error: 'Forbidden' });
  }

  const ip = (req.headers['x-forwarded-for'] as string)?.split(',')[0]?.trim() || 'unknown';
  if (isRateLimited(ip)) {
    return res.status(429).json({ error: 'Too many requests. Please wait before trying again.' });
  }

  const body = req.body;
  if (!body || typeof body !== 'object') {
    return res.status(400).json({ error: 'Invalid request body' });
  }

  if (body.website_url) {
    return res.status(200).json({ success: true });
  }

  if (!body.fullName || !body.email || !body.position) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  if (!isValidEmail(body.email)) {
    return res.status(400).json({ error: 'Invalid email address' });
  }
  if (body.linkedin && !isValidUrl(body.linkedin)) {
    return res.status(400).json({ error: 'Invalid LinkedIn URL' });
  }
  if (body.portfolio && !isValidUrl(body.portfolio)) {
    return res.status(400).json({ error: 'Invalid portfolio URL' });
  }
  if (body.resumeLink && !isValidUrl(body.resumeLink)) {
    return res.status(400).json({ error: 'Invalid resume URL' });
  }

  const payload = new URLSearchParams({
    submittedAt: new Date().toISOString(),
    fullName: sanitize(body.fullName, 100),
    email: sanitize(body.email, 254),
    phone: sanitize(body.phone || '', 30),
    location: sanitize(body.location || '', 150),
    linkedin: sanitize(body.linkedin || '', 300),
    portfolio: sanitize(body.portfolio || '', 300),
    position: sanitize(body.position, 100),
    experience: sanitize(body.experience || '', 50),
    currentCTC: sanitize(body.currentCTC || '', 50),
    expectedCTC: sanitize(body.expectedCTC || '', 50),
    noticePeriod: sanitize(body.noticePeriod || '', 50),
    resumeLink: sanitize(body.resumeLink || '', 500),
    coverLetter: sanitize(body.coverLetter || '', 3000),
    source: 'careers-page',
  });

  const endpoint = process.env.CAREERS_SHEET_ENDPOINT;
  if (!endpoint) {
    console.error('CAREERS_SHEET_ENDPOINT not configured');
    return res.status(500).json({ error: 'Server configuration error' });
  }

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: payload.toString(),
      redirect: 'manual',
    });

    if (response.status === 302 || response.status === 200 || response.status === 301) {
      return res.status(200).json({ success: true });
    }
    console.error('Apps Script responded with:', response.status, await response.text().catch(() => ''));
    return res.status(502).json({ error: 'Submission failed' });
  } catch (err) {
    console.error('Error forwarding to Apps Script:', err);
    return res.status(502).json({ error: 'Submission failed' });
  }
}
