import { NextResponse } from 'next/server';
import { query } from '@/lib/server/db';
import { sendOtpEmail } from '@/lib/server/email';
import { hashPassword } from '@/lib/server/adminAuth';
import {
  createOtpVerification,
  verifyOtpVerification,
  createActionToken,
  verifyActionToken,
} from '@/lib/server/otp';

export async function POST(request: Request) {
  try {
    const body = (await request.json().catch(() => ({}))) as {
      action?: string;
      email?: string;
      otp?: string;
      resetToken?: string;
      newPassword?: string;
    };

    const action = String(body.action || '').trim();

    // =========================================================================
    // STEP 1: Send OTP to User's Email (Default or action === 'send-otp')
    // =========================================================================
    if (!action || action === 'send-otp') {
      const email = String(body.email || '').trim().toLowerCase();

      if (!email) {
        return NextResponse.json({ error: 'Please enter your admin email address.' }, { status: 400 });
      }

      // Look up user in PostgreSQL
      const users = await query<{ id: string; name: string; email: string }>(
        'SELECT id, name, email FROM users WHERE lower(email) = lower($1)',
        [email]
      );

      const user = users[0];
      if (user) {
        // Generate 6-digit OTP
        const { otp } = await createOtpVerification({
          userId: user.id,
          email: user.email,
          purpose: 'forgot_password',
          cooldownSeconds: 60,
        });

        // Dispatch OTP Email
        await sendOtpEmail({
          toEmail: user.email,
          recipientName: user.name,
          otp,
          purposeTitle: 'Reset Your Admin Password',
          purposeDescription:
            'A request was made to reset your Neno Admin password. Enter the 6-digit verification code below to reset your password.',
        });
      }

      // Standard generic response to prevent account enumeration if email does not exist
      return NextResponse.json({
        ok: true,
        message: 'If an account with that email address exists, a 6-digit verification code has been sent.',
      });
    }

    // =========================================================================
    // STEP 2: Verify OTP -> Issue Reset Action Token
    // =========================================================================
    if (action === 'verify-otp') {
      const email = String(body.email || '').trim().toLowerCase();
      const otp = String(body.otp || '').trim();

      if (!email) {
        return NextResponse.json({ error: 'Email address is required.' }, { status: 400 });
      }

      if (!otp) {
        return NextResponse.json({ error: 'Verification code is required.' }, { status: 400 });
      }

      const verification = await verifyOtpVerification({
        email,
        purpose: 'forgot_password',
        otp,
      });

      if (!verification.success) {
        return NextResponse.json({ error: verification.error }, { status: 400 });
      }

      const users = await query<{ id: string }>(
        'SELECT id FROM users WHERE lower(email) = lower($1)',
        [email]
      );

      const user = users[0];
      if (!user) {
        return NextResponse.json({ error: 'User account not found.' }, { status: 404 });
      }

      // Generate signed reset token
      const resetToken = createActionToken({
        userId: user.id,
        email,
        purpose: 'forgot_password_reset',
        expiresInSeconds: 600, // 10 minutes
      });

      return NextResponse.json({
        ok: true,
        resetToken,
        message: 'Verification successful. Please create your new password.',
      });
    }

    // =========================================================================
    // STEP 3: Reset Password with Verified Token
    // =========================================================================
    if (action === 'reset-password') {
      const resetToken = String(body.resetToken || '').trim();
      const newPassword = String(body.newPassword || '');

      if (!resetToken) {
        return NextResponse.json(
          { error: 'Reset token missing. Please verify your OTP code first.' },
          { status: 400 }
        );
      }

      const tokenVerification = verifyActionToken({
        token: resetToken,
        expectedPurpose: 'forgot_password_reset',
      });

      if (!tokenVerification.valid || !tokenVerification.data?.userId) {
        return NextResponse.json(
          { error: tokenVerification.error || 'Invalid or expired reset session. Please request a new code.' },
          { status: 400 }
        );
      }

      if (!newPassword || newPassword.length < 6) {
        return NextResponse.json(
          { error: 'New password must be at least 6 characters long.' },
          { status: 400 }
        );
      }

      // Hash new password using standard scrypt
      const newPasswordHash = hashPassword(newPassword);

      await query('UPDATE users SET password_hash = $2, updated_at = NOW() WHERE id = $1', [
        tokenVerification.data.userId,
        newPasswordHash,
      ]);

      return NextResponse.json({
        ok: true,
        message: 'Your password has been reset successfully. You can now log in.',
      });
    }

    return NextResponse.json({ error: 'Invalid action specified.' }, { status: 400 });
  } catch (err) {
    console.error('Forgot Password API Error:', err);
    return NextResponse.json({ error: 'Failed to process password reset request.' }, { status: 500 });
  }
}
