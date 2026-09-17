import { NextResponse } from 'next/server';
import { getAdminUser, hashPassword } from '@/lib/server/adminAuth';
import { query } from '@/lib/server/db';
import { sendOtpEmail } from '@/lib/server/email';
import {
  createOtpVerification,
  verifyOtpVerification,
  createActionToken,
  verifyActionToken,
} from '@/lib/server/otp';

const unauthorized = () => NextResponse.json({ error: 'Unauthorised.' }, { status: 401 });

export async function POST(request: Request) {
  const user = await getAdminUser();
  if (!user) return unauthorized();

  try {
    const body = (await request.json().catch(() => ({}))) as {
      action?: string;
      otp?: string;
      passwordToken?: string;
      newPassword?: string;
    };

    const action = String(body.action || '').trim();

    // =========================================================================
    // STEP 1: Send OTP to User's Registered Email
    // =========================================================================
    if (action === 'send-otp') {
      const { otp } = await createOtpVerification({
        userId: user.id,
        email: user.email,
        purpose: 'change_password',
        cooldownSeconds: 60,
      });

      await sendOtpEmail({
        toEmail: user.email,
        recipientName: user.name,
        otp,
        purposeTitle: 'Change Password Verification',
        purposeDescription:
          'A request was made to change your Neno Admin password. Enter the 6-digit verification code below to authorize this password change.',
      });

      return NextResponse.json({
        ok: true,
        message: `A 6-digit verification code has been sent to your registered email (${user.email}).`,
      });
    }

    // =========================================================================
    // STEP 2: Verify OTP -> Issue One-Time Password Token
    // =========================================================================
    if (action === 'verify-otp') {
      const otp = String(body.otp || '').trim();
      if (!otp) {
        return NextResponse.json({ error: 'Verification code is required.' }, { status: 400 });
      }

      const verification = await verifyOtpVerification({
        email: user.email,
        purpose: 'change_password',
        otp,
      });

      if (!verification.success) {
        return NextResponse.json({ error: verification.error }, { status: 400 });
      }

      // Generate signed token to unlock the password input step
      const passwordToken = createActionToken({
        userId: user.id,
        email: user.email,
        purpose: 'change_password_action',
        expiresInSeconds: 600, // 10 minutes
      });

      return NextResponse.json({
        ok: true,
        passwordToken,
        message: 'Verification successful. Please enter your new password.',
      });
    }

    // =========================================================================
    // STEP 3: Update Password (Only after OTP Verification Token is Validated)
    // =========================================================================
    if (action === 'update-password') {
      const passwordToken = String(body.passwordToken || '').trim();
      const newPassword = String(body.newPassword || '');

      if (!passwordToken) {
        return NextResponse.json(
          { error: 'Verification token missing. Please verify with OTP first.' },
          { status: 400 }
        );
      }

      const tokenVerification = verifyActionToken({
        token: passwordToken,
        expectedPurpose: 'change_password_action',
      });

      if (!tokenVerification.valid || tokenVerification.data?.userId !== user.id) {
        return NextResponse.json(
          { error: tokenVerification.error || 'Invalid or expired verification session. Please request a new code.' },
          { status: 400 }
        );
      }

      if (!newPassword || newPassword.length < 6) {
        return NextResponse.json(
          { error: 'New password must be at least 6 characters long.' },
          { status: 400 }
        );
      }

      // Hash password securely using existing scrypt hashing scheme
      const newPasswordHash = hashPassword(newPassword);

      await query('UPDATE users SET password_hash = $2, updated_at = NOW() WHERE id = $1', [
        user.id,
        newPasswordHash,
      ]);

      return NextResponse.json({
        ok: true,
        message: 'Your password has been changed successfully.',
      });
    }

    return NextResponse.json({ error: 'Invalid action specified.' }, { status: 400 });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : 'An error occurred processing your request.';
    return NextResponse.json({ error: msg }, { status: 400 });
  }
}
