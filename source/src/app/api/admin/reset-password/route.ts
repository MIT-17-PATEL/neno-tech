import crypto from 'node:crypto';
import { NextResponse } from 'next/server';
import { query } from '@/lib/server/db';
import { hashPassword } from '@/lib/server/adminAuth';
import { verifyActionToken } from '@/lib/server/otp';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const rawToken = searchParams.get('token') || '';

  if (!rawToken) {
    return NextResponse.json({ valid: false, error: 'Reset token is required.' }, { status: 400 });
  }

  // First check if it is a signed action token
  const actionCheck = verifyActionToken({
    token: rawToken,
    expectedPurpose: 'forgot_password_reset',
  });

  if (actionCheck.valid) {
    return NextResponse.json({ valid: true });
  }

  // Fallback to legacy password_reset_tokens table check
  const tokenHash = crypto.createHash('sha256').update(rawToken).digest('hex');

  const rows = await query<{ user_id: string; expires_at: string; used_at: string | null }>(
    'SELECT user_id, expires_at, used_at FROM password_reset_tokens WHERE token_hash = $1',
    [tokenHash]
  );

  const row = rows[0];
  if (!row) {
    return NextResponse.json({ valid: false, error: 'Invalid or unrecognized reset token.' }, { status: 404 });
  }

  if (row.used_at) {
    return NextResponse.json({ valid: false, error: 'This reset token has already been used.' }, { status: 400 });
  }

  if (new Date(row.expires_at).getTime() <= Date.now()) {
    return NextResponse.json({ valid: false, error: 'This password reset link has expired.' }, { status: 400 });
  }

  return NextResponse.json({ valid: true });
}

export async function POST(request: Request) {
  try {
    const body = (await request.json().catch(() => ({}))) as { token?: string; newPassword?: string };
    const rawToken = String(body.token || '').trim();
    const newPassword = String(body.newPassword || '');

    if (!rawToken) {
      return NextResponse.json({ error: 'Reset token is required.' }, { status: 400 });
    }

    if (!newPassword || newPassword.length < 6) {
      return NextResponse.json({ error: 'New password must be at least 6 characters long.' }, { status: 400 });
    }

    // 1. Check if token is a signed action token
    const actionCheck = verifyActionToken({
      token: rawToken,
      expectedPurpose: 'forgot_password_reset',
    });

    if (actionCheck.valid && actionCheck.data?.userId) {
      const newPasswordHash = hashPassword(newPassword);
      await query('UPDATE users SET password_hash = $2, updated_at = NOW() WHERE id = $1', [
        actionCheck.data.userId,
        newPasswordHash,
      ]);

      return NextResponse.json({
        ok: true,
        message: 'Your password has been reset successfully. You can now log in.',
      });
    }

    // 2. Legacy token fallback
    const tokenHash = crypto.createHash('sha256').update(rawToken).digest('hex');

    const rows = await query<{ id: string; user_id: string; expires_at: string; used_at: string | null }>(
      'SELECT id, user_id, expires_at, used_at FROM password_reset_tokens WHERE token_hash = $1',
      [tokenHash]
    );

    const row = rows[0];
    if (!row) {
      return NextResponse.json({ error: 'Invalid or unrecognized reset token.' }, { status: 400 });
    }

    if (row.used_at) {
      return NextResponse.json({ error: 'This reset token has already been used.' }, { status: 400 });
    }

    if (new Date(row.expires_at).getTime() <= Date.now()) {
      return NextResponse.json({ error: 'This password reset link has expired.' }, { status: 400 });
    }

    const newPasswordHash = hashPassword(newPassword);

    await query('UPDATE users SET password_hash = $2, updated_at = NOW() WHERE id = $1', [
      row.user_id,
      newPasswordHash,
    ]);

    await query('UPDATE password_reset_tokens SET used_at = NOW() WHERE id = $1', [row.id]);

    return NextResponse.json({
      ok: true,
      message: 'Your password has been reset successfully. You can now log in.',
    });
  } catch (err) {
    console.error('Reset Password API Error:', err);
    return NextResponse.json({ error: 'Failed to reset password.' }, { status: 500 });
  }
}
