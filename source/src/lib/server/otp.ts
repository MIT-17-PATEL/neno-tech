import crypto from 'node:crypto';
import { query } from './db';

const secret = () => process.env.DATABASE_URL as string;

export type OtpPurpose =
  | 'change_email_old'
  | 'change_email_new'
  | 'change_password'
  | 'forgot_password';

export interface OtpRecord {
  id: string;
  user_id: string | null;
  email: string;
  otp_hash: string;
  purpose: OtpPurpose;
  metadata: Record<string, unknown> | null;
  attempts: number;
  max_attempts: number;
  expires_at: string;
  used_at: string | null;
  created_at: string;
}

export const hashOtp = (otp: string): string => {
  return crypto.createHash('sha256').update(otp.trim()).digest('hex');
};

/**
 * Creates a secure 6-digit OTP, stores its SHA-256 hash in PostgreSQL,
 * enforces a 60s resend cooldown and 10-minute expiration.
 */
export const createOtpVerification = async ({
  userId,
  email,
  purpose,
  metadata,
  cooldownSeconds = 60,
}: {
  userId?: string | null;
  email: string;
  purpose: OtpPurpose;
  metadata?: Record<string, unknown>;
  cooldownSeconds?: number;
}): Promise<{ otp: string; expiresAt: Date }> => {
  const cleanEmail = email.trim().toLowerCase();

  // 1. Check Resend Cooldown
  const recent = await query<{ created_at: string }>(
    `SELECT created_at FROM otp_verifications 
     WHERE lower(email) = lower($1) AND purpose = $2 
     ORDER BY created_at DESC LIMIT 1`,
    [cleanEmail, purpose]
  );

  if (recent.length > 0) {
    const lastCreated = new Date(recent[0].created_at).getTime();
    const elapsedSeconds = Math.floor((Date.now() - lastCreated) / 1000);
    if (elapsedSeconds < cooldownSeconds) {
      const waitTime = cooldownSeconds - elapsedSeconds;
      throw new Error(`Please wait ${waitTime} second${waitTime === 1 ? '' : 's'} before requesting a new code.`);
    }
  }

  // 2. Invalidate any existing unused OTPs for this email and purpose
  await query(
    `UPDATE otp_verifications 
     SET used_at = NOW() 
     WHERE lower(email) = lower($1) AND purpose = $2 AND used_at IS NULL`,
    [cleanEmail, purpose]
  );

  // 3. Generate 6-digit numeric OTP (100000 - 999999)
  const otpNumber = crypto.randomInt(100000, 1000000);
  const otp = otpNumber.toString();
  const otpHash = hashOtp(otp);

  const expiresAt = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes

  // 4. Save to PostgreSQL
  await query(
    `INSERT INTO otp_verifications (id, user_id, email, otp_hash, purpose, metadata, attempts, max_attempts, expires_at)
     VALUES ($1, $2, $3, $4, $5, $6, 0, 5, $7)`,
    [
      crypto.randomUUID(),
      userId || null,
      cleanEmail,
      otpHash,
      purpose,
      metadata ? JSON.stringify(metadata) : null,
      expiresAt,
    ]
  );

  return { otp, expiresAt };
};

/**
 * Validates a submitted OTP against PostgreSQL:
 * - Checks expiration (10 min)
 * - Checks max attempts (5 max)
 * - Compares SHA-256 hashes using timing-safe comparison
 * - Marks OTP as used upon success
 */
export const verifyOtpVerification = async ({
  email,
  purpose,
  otp,
}: {
  email: string;
  purpose: OtpPurpose;
  otp: string;
}): Promise<{
  success: boolean;
  error?: string;
  verification?: OtpRecord;
  remainingAttempts?: number;
}> => {
  const cleanEmail = email.trim().toLowerCase();
  const cleanOtp = String(otp || '').trim();

  if (!cleanOtp || cleanOtp.length !== 6 || !/^\d{6}$/.test(cleanOtp)) {
    return { success: false, error: 'Please enter a valid 6-digit verification code.' };
  }

  const rows = await query<OtpRecord>(
    `SELECT * FROM otp_verifications 
     WHERE lower(email) = lower($1) AND purpose = $2 AND used_at IS NULL
     ORDER BY created_at DESC LIMIT 1`,
    [cleanEmail, purpose]
  );

  const record = rows[0];
  if (!record) {
    return {
      success: false,
      error: 'No active verification code found. Please request a new code.',
    };
  }

  // Check if locked out
  if (record.attempts >= record.max_attempts) {
    return {
      success: false,
      error: 'Too many incorrect attempts. This code is locked. Please request a new code.',
    };
  }

  // Check expiration
  if (new Date(record.expires_at).getTime() <= Date.now()) {
    return {
      success: false,
      error: 'Verification code has expired. Please request a new code.',
    };
  }

  // Compare OTP hashes
  const inputHash = hashOtp(cleanOtp);
  const inputBuffer = Buffer.from(inputHash, 'hex');
  const storedBuffer = Buffer.from(record.otp_hash, 'hex');

  const isMatch =
    inputBuffer.length === storedBuffer.length &&
    crypto.timingSafeEqual(inputBuffer, storedBuffer);

  if (!isMatch) {
    const newAttempts = record.attempts + 1;
    await query(
      `UPDATE otp_verifications SET attempts = $2 WHERE id = $1`,
      [record.id, newAttempts]
    );

    const remaining = Math.max(0, record.max_attempts - newAttempts);
    if (remaining === 0) {
      return {
        success: false,
        error: 'Too many incorrect attempts. This code is locked. Please request a new code.',
        remainingAttempts: 0,
      };
    }

    return {
      success: false,
      error: `Invalid verification code. ${remaining} attempt${remaining === 1 ? '' : 's'} remaining.`,
      remainingAttempts: remaining,
    };
  }

  // Mark as used
  await query(
    `UPDATE otp_verifications SET used_at = NOW() WHERE id = $1`,
    [record.id]
  );

  return { success: true, verification: record };
};

/**
 * Creates an HMAC-signed one-time action token (e.g., to bridge verified OTP step to new password / new email submission)
 */
export const createActionToken = ({
  userId,
  email,
  purpose,
  metadata,
  expiresInSeconds = 600, // 10 minutes
}: {
  userId?: string | null;
  email: string;
  purpose: string;
  metadata?: Record<string, unknown>;
  expiresInSeconds?: number;
}): string => {
  const payload = JSON.stringify({
    userId: userId || null,
    email: email.trim().toLowerCase(),
    purpose,
    metadata: metadata || null,
    nonce: crypto.randomBytes(16).toString('hex'),
    exp: Date.now() + expiresInSeconds * 1000,
  });

  const base64Payload = Buffer.from(payload, 'utf8').toString('base64url');
  const signature = crypto.createHmac('sha256', secret()).update(base64Payload).digest('hex');
  return `${base64Payload}.${signature}`;
};

/**
 * Validates and decodes an action token.
 */
export const verifyActionToken = <T = Record<string, unknown>>({
  token,
  expectedPurpose,
}: {
  token: string;
  expectedPurpose: string;
}): { valid: boolean; error?: string; data?: { userId: string | null; email: string; purpose: string; metadata: T | null } } => {
  if (!token) return { valid: false, error: 'Action token is required.' };
  const [encoded, signature] = token.split('.');
  if (!encoded || !signature) return { valid: false, error: 'Invalid action token format.' };

  const expectedSig = crypto.createHmac('sha256', secret()).update(encoded).digest('hex');
  if (
    signature.length !== expectedSig.length ||
    !crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expectedSig))
  ) {
    return { valid: false, error: 'Invalid token signature.' };
  }

  try {
    const payload = JSON.parse(Buffer.from(encoded, 'base64url').toString('utf8')) as {
      userId: string | null;
      email: string;
      purpose: string;
      metadata: T | null;
      exp: number;
    };

    if (!payload.exp || payload.exp <= Date.now()) {
      return { valid: false, error: 'This verification token has expired. Please verify again.' };
    }

    if (payload.purpose !== expectedPurpose) {
      return { valid: false, error: 'Token purpose mismatch.' };
    }

    return {
      valid: true,
      data: {
        userId: payload.userId,
        email: payload.email,
        purpose: payload.purpose,
        metadata: payload.metadata,
      },
    };
  } catch {
    return { valid: false, error: 'Failed to decode token.' };
  }
};
