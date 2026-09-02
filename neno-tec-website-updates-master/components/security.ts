/**
 * Client-side security utilities for form submissions.
 *
 * Provides:
 *  - Input sanitization (strip HTML, limit length)
 *  - Rate limiting (per-form cooldown)
 *  - Honeypot bot detection
 */

/* ── Sanitization ─────────────────────────────────────────────── */

/** Strip HTML tags and trim whitespace */
function stripHtml(str: string): string {
  return str.replace(/<[^>]*>/g, '').trim();
}

/** Escape characters that could be used in formula injection (Google Sheets) */
function escapeFormulaInjection(str: string): string {
  // Google Sheets interprets =, +, -, @, \t, \r at the start as formulas
  const dangerous = /^[=+\-@\t\r]/;
  if (dangerous.test(str)) {
    return `'${str}`;
  }
  return str;
}

/** Sanitize a single form field value */
export function sanitize(value: string, maxLength = 1000): string {
  let clean = stripHtml(value);
  clean = clean.slice(0, maxLength);
  clean = escapeFormulaInjection(clean);
  return clean;
}

/** Sanitize all values in a payload object */
export function sanitizePayload(
  payload: Record<string, string>,
  fieldLimits?: Record<string, number>
): Record<string, string> {
  const sanitized: Record<string, string> = {};
  for (const [key, value] of Object.entries(payload)) {
    const limit = fieldLimits?.[key] ?? 1000;
    sanitized[key] = sanitize(value, limit);
  }
  return sanitized;
}

/* ── Rate Limiting ────────────────────────────────────────────── */

const lastSubmitTimes: Record<string, number> = {};

/** 
 * Check if a form can be submitted based on cooldown period.
 * Returns `true` if allowed, `false` if rate-limited.
 */
export function checkRateLimit(formId: string, cooldownMs = 30000): boolean {
  const now = Date.now();
  const lastTime = lastSubmitTimes[formId] || 0;
  if (now - lastTime < cooldownMs) {
    return false;
  }
  lastSubmitTimes[formId] = now;
  return true;
}

/** Get remaining cooldown in seconds (for UI feedback) */
export function getRemainingCooldown(formId: string, cooldownMs = 30000): number {
  const now = Date.now();
  const lastTime = lastSubmitTimes[formId] || 0;
  const remaining = cooldownMs - (now - lastTime);
  return remaining > 0 ? Math.ceil(remaining / 1000) : 0;
}

/* ── Honeypot ─────────────────────────────────────────────────── */

/**
 * Check if the honeypot field was filled (indicates bot).
 * Returns `true` if it's a bot (field was filled).
 */
export function isBot(honeypotValue: string): boolean {
  return honeypotValue.length > 0;
}

/* ── Email Validation ─────────────────────────────────────────── */

const EMAIL_REGEX = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;

export function isValidEmail(email: string): boolean {
  return EMAIL_REGEX.test(email) && email.length <= 254;
}

/* ── Phone Validation ─────────────────────────────────────────── */

const PHONE_REGEX = /^[\d\s\-()]{6,20}$/;

export function isValidPhone(phone: string): boolean {
  if (!phone) return true; // phone is often optional
  return PHONE_REGEX.test(phone);
}

/* ── URL Validation ───────────────────────────────────────────── */

export function isValidUrl(url: string): boolean {
  if (!url) return true; // URLs are often optional
  try {
    const parsed = new URL(url);
    return parsed.protocol === 'https:' || parsed.protocol === 'http:';
  } catch {
    return false;
  }
}
