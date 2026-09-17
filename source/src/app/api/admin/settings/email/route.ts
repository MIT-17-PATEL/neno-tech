import { NextResponse } from 'next/server';
import { getAdminUser } from '@/lib/server/adminAuth';
import { query } from '@/lib/server/db';
import { sendOtpEmail } from '@/lib/server/email';
import {
  createOtpVerification,
  verifyOtpVerification,
  createActionToken,
  verifyActionToken,
} from '@/lib/server/otp';

const unauthorized = () => NextResponse.json({ error: 'Unauthorised.' }, { status: 401 });
const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export async function POST(request: Request) {
  const user = await getAdminUser();
  if (!user) return unauthorized();

  try {
    const body = (await request.json().catch(() => ({}))) as {
      action?: string;
      newEmail?: string;
      otp?: string;
      stageToken?: string;
    };

    const action = String(body.action || '').trim();

    // =========================================================================
    // STEP 1: Send OTP to OLD / Current Email
    // =========================================================================
    if (action === 'send-old-otp') {
      const newEmail = String(body.newEmail || '').trim().toLowerCase();

      if (!newEmail || !isValidEmail(newEmail)) {
        return NextResponse.json({ error: 'Please enter a valid new email address.' }, { status: 400 });
      }

      if (newEmail === user.email.toLowerCase()) {
        return NextResponse.json(
          { error: 'The new email address cannot be the same as your current email.' },
          { status: 400 }
        );
      }

      // Check if new email is already used by another user
      const existing = await query<{ id: string }>(
        'SELECT id FROM users WHERE lower(email) = lower($1) AND id != $2',
        [newEmail, user.id]
      );
      if (existing.length > 0) {
        return NextResponse.json(
          { error: 'That email address is already in use by another user.' },
          { status: 400 }
        );
      }

      // Create OTP for current email
      const { otp } = await createOtpVerification({
        userId: user.id,
        email: user.email,
        purpose: 'change_email_old',
        metadata: { newEmail },
        cooldownSeconds: 60,
      });

      // Dispatch OTP email to current email
      await sendOtpEmail({
        toEmail: user.email,
        recipientName: user.name,
        otp,
        purposeTitle: 'Change Email Verification (Current Email)',
        purposeDescription: `A request was made to change your Neno Admin email to ${newEmail}. Please enter the verification code below to verify ownership of your current email address.`,
      });

      return NextResponse.json({
        ok: true,
        message: `A 6-digit verification code has been sent to your current email (${user.email}).`,
      });
    }

    // =========================================================================
    // STEP 2: Verify OLD Email OTP -> Dispatch OTP to NEW Email
    // =========================================================================
    if (action === 'verify-old-otp') {
      const otp = String(body.otp || '').trim();
      const newEmail = String(body.newEmail || '').trim().toLowerCase();

      if (!otp) {
        return NextResponse.json({ error: 'Verification code is required.' }, { status: 400 });
      }

      if (!newEmail || !isValidEmail(newEmail)) {
        return NextResponse.json({ error: 'Please specify the new email address.' }, { status: 400 });
      }

      // Verify OTP sent to old email
      const verification = await verifyOtpVerification({
        email: user.email,
        purpose: 'change_email_old',
        otp,
      });

      if (!verification.success) {
        return NextResponse.json({ error: verification.error }, { status: 400 });
      }

      // Create OTP for NEW email
      const { otp: newEmailOtp } = await createOtpVerification({
        userId: user.id,
        email: newEmail,
        purpose: 'change_email_new',
        metadata: { oldEmail: user.email },
        cooldownSeconds: 60,
      });

      // Dispatch OTP email to NEW email address
      await sendOtpEmail({
        toEmail: newEmail,
        recipientName: user.name,
        otp: newEmailOtp,
        purposeTitle: 'Verify Your New Email Address',
        purposeDescription:
          'Please enter the 6-digit verification code below to complete updating your Neno Admin account email address.',
      });

      // Generate signed stage token
      const stageToken = createActionToken({
        userId: user.id,
        email: user.email,
        purpose: 'change_email_stage2',
        metadata: { newEmail },
        expiresInSeconds: 600, // 10 minutes
      });

      return NextResponse.json({
        ok: true,
        stageToken,
        message: `Current email verified. A 6-digit verification code has now been sent to ${newEmail}.`,
      });
    }

    // =========================================================================
    // STEP 2.1: Resend OTP to NEW Email
    // =========================================================================
    if (action === 'resend-new-otp') {
      const stageToken = String(body.stageToken || '').trim();
      const tokenVerification = verifyActionToken<{ newEmail: string }>({
        token: stageToken,
        expectedPurpose: 'change_email_stage2',
      });

      if (!tokenVerification.valid || !tokenVerification.data?.metadata?.newEmail) {
        return NextResponse.json(
          { error: tokenVerification.error || 'Invalid session. Please restart email change.' },
          { status: 400 }
        );
      }

      const newEmail = tokenVerification.data.metadata.newEmail;

      const { otp: newEmailOtp } = await createOtpVerification({
        userId: user.id,
        email: newEmail,
        purpose: 'change_email_new',
        metadata: { oldEmail: user.email },
        cooldownSeconds: 60,
      });

      await sendOtpEmail({
        toEmail: newEmail,
        recipientName: user.name,
        otp: newEmailOtp,
        purposeTitle: 'Verify Your New Email Address',
        purposeDescription:
          'Please enter the 6-digit verification code below to complete updating your Neno Admin account email address.',
      });

      return NextResponse.json({
        ok: true,
        message: `A new verification code has been sent to ${newEmail}.`,
      });
    }

    // =========================================================================
    // STEP 3: Verify NEW Email OTP -> Update Email in Database
    // =========================================================================
    if (action === 'verify-new-otp') {
      const otp = String(body.otp || '').trim();
      const stageToken = String(body.stageToken || '').trim();

      if (!otp) {
        return NextResponse.json({ error: 'Verification code is required.' }, { status: 400 });
      }

      const tokenVerification = verifyActionToken<{ newEmail: string }>({
        token: stageToken,
        expectedPurpose: 'change_email_stage2',
      });

      if (!tokenVerification.valid || !tokenVerification.data?.metadata?.newEmail) {
        return NextResponse.json(
          { error: tokenVerification.error || 'Invalid or expired email change session. Please start over.' },
          { status: 400 }
        );
      }

      const newEmail = tokenVerification.data.metadata.newEmail;

      // Verify OTP sent to new email
      const verification = await verifyOtpVerification({
        email: newEmail,
        purpose: 'change_email_new',
        otp,
      });

      if (!verification.success) {
        return NextResponse.json({ error: verification.error }, { status: 400 });
      }

      // Both OTPs verified! Update the email in PostgreSQL database
      const updatedRows = await query<{ id: string; name: string; email: string; role: string }>(
        'UPDATE users SET email = $2, updated_at = NOW() WHERE id = $1 RETURNING id, name, email, role',
        [user.id, newEmail]
      );

      return NextResponse.json({
        ok: true,
        message: 'Your email address has been updated successfully.',
        user: updatedRows[0],
      });
    }

    return NextResponse.json({ error: 'Invalid action specified.' }, { status: 400 });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : 'An error occurred processing your request.';
    return NextResponse.json({ error: msg }, { status: 400 });
  }
}
