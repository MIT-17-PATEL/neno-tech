import pg from 'pg';
import crypto from 'node:crypto';
import {
  createOtpVerification,
  verifyOtpVerification,
  createActionToken,
  verifyActionToken,
} from '../src/lib/server/otp.ts';
import { hashPassword, verifyPassword } from '../src/lib/server/adminAuth.ts';

const { Pool } = pg;
if (!process.env.DATABASE_URL) throw new Error('DATABASE_URL is required in source/.env.');
const pool = new Pool({ connectionString: process.env.DATABASE_URL });

async function runTests() {
  console.log('====================================================');
  console.log('   NENO TECHNOLOGY - SECURE OTP AUTOMATED TEST SUITE');
  console.log('====================================================\n');

  let passed = 0;
  let failed = 0;

  const assert = (condition, description) => {
    if (condition) {
      console.log(`  ✅ PASS: ${description}`);
      passed++;
    } else {
      console.error(`  ❌ FAIL: ${description}`);
      failed++;
    }
  };

  try {
    // 0. Setup a test user
    const testUserId = crypto.randomUUID();
    const testEmailOld = `test.admin.${Date.now()}@neno.com`;
    const testEmailNew = `test.new.${Date.now()}@neno.com`;
    const initialPassword = 'InitialPassword123!';
    const initialHash = hashPassword(initialPassword);

    await pool.query(
      `INSERT INTO users (id, name, email, password_hash, role) VALUES ($1, $2, $3, $4, 'admin')`,
      [testUserId, 'Test Admin', testEmailOld, initialHash]
    );
    console.log(`[Setup] Created test user: ${testEmailOld}`);

    // =========================================================================
    // TEST SUITE 1: OTP Core Security Properties
    // =========================================================================
    console.log('\n--- 1. Testing Core OTP Security Rules ---');

    // 1.1 6-Digit Format
    const { otp: otp1, expiresAt: exp1 } = await createOtpVerification({
      userId: testUserId,
      email: testEmailOld,
      purpose: 'change_password',
    });
    assert(otp1.length === 6 && /^\d{6}$/.test(otp1), 'Generated OTP is exactly 6 numeric digits');
    assert(
      Math.abs(exp1.getTime() - (Date.now() + 10 * 60 * 1000)) < 5000,
      'OTP expiration is set to 10 minutes from creation'
    );

    // 1.2 Resend Cooldown (60s)
    let cooldownBlocked = false;
    try {
      await createOtpVerification({
        userId: testUserId,
        email: testEmailOld,
        purpose: 'change_password',
        cooldownSeconds: 60,
      });
    } catch (err) {
      cooldownBlocked = err.message.includes('Please wait');
    }
    assert(cooldownBlocked, 'Resend request within 60s cooldown is properly blocked');

    // 1.3 Wrong Attempt Tracking & Limit (Max 5 attempts)
    console.log('\n--- 2. Testing Wrong OTP Attempt Limiting ---');
    const wrongRes1 = await verifyOtpVerification({
      email: testEmailOld,
      purpose: 'change_password',
      otp: '000000',
    });
    assert(wrongRes1.success === false && wrongRes1.remainingAttempts === 4, '1st wrong attempt recorded, 4 remaining');

    await verifyOtpVerification({ email: testEmailOld, purpose: 'change_password', otp: '111111' });
    await verifyOtpVerification({ email: testEmailOld, purpose: 'change_password', otp: '222222' });
    await verifyOtpVerification({ email: testEmailOld, purpose: 'change_password', otp: '333333' });
    const wrongRes5 = await verifyOtpVerification({
      email: testEmailOld,
      purpose: 'change_password',
      otp: '444444',
    });
    assert(wrongRes5.success === false && wrongRes5.remainingAttempts === 0, '5th wrong attempt locks the code');

    // Try verifying with correct OTP after lockout -> should fail
    const lockoutAttempt = await verifyOtpVerification({
      email: testEmailOld,
      purpose: 'change_password',
      otp: otp1,
    });
    assert(
      lockoutAttempt.success === false && lockoutAttempt.error?.includes('locked'),
      'Locked OTP rejects even correct OTP code'
    );

    // =========================================================================
    // TEST SUITE 2: FEATURE 1 - CHANGE EMAIL (Staged 2-Step OTP)
    // =========================================================================
    console.log('\n--- 3. Testing Feature 1: CHANGE EMAIL (2-Step Staged OTP) ---');

    // Step A: Send OTP to old email (cooldown override for test)
    const { otp: oldEmailOtp } = await createOtpVerification({
      userId: testUserId,
      email: testEmailOld,
      purpose: 'change_email_old',
      metadata: { newEmail: testEmailNew },
      cooldownSeconds: 0,
    });

    // Step B: Verify old email OTP
    const oldVerify = await verifyOtpVerification({
      email: testEmailOld,
      purpose: 'change_email_old',
      otp: oldEmailOtp,
    });
    assert(oldVerify.success === true, 'Old email OTP verified successfully');

    // Generate Stage Token
    const stageToken = createActionToken({
      userId: testUserId,
      email: testEmailOld,
      purpose: 'change_email_stage2',
      metadata: { newEmail: testEmailNew },
      expiresInSeconds: 600,
    });

    // Step C: Send OTP to new email
    const { otp: newEmailOtp } = await createOtpVerification({
      userId: testUserId,
      email: testEmailNew,
      purpose: 'change_email_new',
      metadata: { oldEmail: testEmailOld },
      cooldownSeconds: 0,
    });

    // Ensure email in DB has NOT changed before new OTP verification
    const dbCheckBefore = await pool.query('SELECT email FROM users WHERE id = $1', [testUserId]);
    assert(dbCheckBefore.rows[0].email === testEmailOld, 'Database email remains OLD email before new OTP is verified');

    // Step D: Verify new email OTP and Stage Token
    const stageCheck = verifyActionToken({
      token: stageToken,
      expectedPurpose: 'change_email_stage2',
    });
    assert(stageCheck.valid === true, 'Stage token is valid and verified');

    const newVerify = await verifyOtpVerification({
      email: testEmailNew,
      purpose: 'change_email_new',
      otp: newEmailOtp,
    });
    assert(newVerify.success === true, 'New email OTP verified successfully');

    // Perform database update
    await pool.query('UPDATE users SET email = $2, updated_at = NOW() WHERE id = $1', [testUserId, testEmailNew]);
    const dbCheckAfter = await pool.query('SELECT email FROM users WHERE id = $1', [testUserId]);
    assert(dbCheckAfter.rows[0].email === testEmailNew, 'Database email updated to NEW email after both OTPs verified');

    // Ensure OTP replay fails (Single Use)
    const replayAttempt = await verifyOtpVerification({
      email: testEmailNew,
      purpose: 'change_email_new',
      otp: newEmailOtp,
    });
    assert(replayAttempt.success === false, 'Replaying already-used OTP is rejected (Single Use enforced)');

    // =========================================================================
    // TEST SUITE 3: FEATURE 2 - CHANGE PASSWORD
    // =========================================================================
    console.log('\n--- 4. Testing Feature 2: CHANGE PASSWORD (OTP Authorization) ---');

    // Step A: Request OTP
    const { otp: changePassOtp } = await createOtpVerification({
      userId: testUserId,
      email: testEmailNew,
      purpose: 'change_password',
      cooldownSeconds: 0,
    });

    // Step B: Verify OTP
    const passOtpVerify = await verifyOtpVerification({
      email: testEmailNew,
      purpose: 'change_password',
      otp: changePassOtp,
    });
    assert(passOtpVerify.success === true, 'Change Password OTP verified successfully');

    // Step C: Issue action token & update password
    const passActionToken = createActionToken({
      userId: testUserId,
      email: testEmailNew,
      purpose: 'change_password_action',
    });

    const passTokenCheck = verifyActionToken({
      token: passActionToken,
      expectedPurpose: 'change_password_action',
    });
    assert(passTokenCheck.valid === true, 'Password update action token verified');

    const updatedPassword = 'NewSecretPassword456!';
    const updatedHash = hashPassword(updatedPassword);
    await pool.query('UPDATE users SET password_hash = $2, updated_at = NOW() WHERE id = $1', [
      testUserId,
      updatedHash,
    ]);

    const userDbAfterPass = await pool.query('SELECT password_hash FROM users WHERE id = $1', [testUserId]);
    const isNewPassValid = verifyPassword(updatedPassword, userDbAfterPass.rows[0].password_hash);
    const isOldPassInvalid = !verifyPassword(initialPassword, userDbAfterPass.rows[0].password_hash);
    assert(isNewPassValid, 'New password validates successfully with scrypt hash');
    assert(isOldPassInvalid, 'Old password is no longer valid');

    // =========================================================================
    // TEST SUITE 4: FEATURE 3 - FORGOT PASSWORD
    // =========================================================================
    console.log('\n--- 5. Testing Feature 3: FORGOT PASSWORD (OTP Recovery) ---');

    // Step A: Send OTP for forgot password
    const { otp: forgotOtp } = await createOtpVerification({
      userId: testUserId,
      email: testEmailNew,
      purpose: 'forgot_password',
      cooldownSeconds: 0,
    });

    // Step B: Verify OTP
    const forgotVerify = await verifyOtpVerification({
      email: testEmailNew,
      purpose: 'forgot_password',
      otp: forgotOtp,
    });
    assert(forgotVerify.success === true, 'Forgot Password OTP verified successfully');

    // Step C: Reset token issuance & password reset
    const resetToken = createActionToken({
      userId: testUserId,
      email: testEmailNew,
      purpose: 'forgot_password_reset',
    });

    const resetCheck = verifyActionToken({
      token: resetToken,
      expectedPurpose: 'forgot_password_reset',
    });
    assert(resetCheck.valid === true, 'Forgot password reset token verified');

    const resetFinalPassword = 'FinalResetPassword789!';
    const resetFinalHash = hashPassword(resetFinalPassword);
    await pool.query('UPDATE users SET password_hash = $2, updated_at = NOW() WHERE id = $1', [
      testUserId,
      resetFinalHash,
    ]);

    const userDbAfterReset = await pool.query('SELECT password_hash FROM users WHERE id = $1', [testUserId]);
    assert(
      verifyPassword(resetFinalPassword, userDbAfterReset.rows[0].password_hash),
      'Password reset through OTP recovery successfully'
    );

    // =========================================================================
    // Cleanup test user
    // =========================================================================
    await pool.query('DELETE FROM users WHERE id = $1', [testUserId]);
    console.log(`\n[Cleanup] Deleted test user: ${testUserId}`);

    console.log('\n====================================================');
    console.log(`TEST SUMMARY: ${passed} PASSED, ${failed} FAILED`);
    console.log('====================================================');

    if (failed > 0) {
      process.exit(1);
    }
  } catch (err) {
    console.error('Test execution exception:', err);
    process.exit(1);
  } finally {
    await pool.end();
  }
}

runTests();
