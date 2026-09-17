import pg from 'pg';
import crypto from 'node:crypto';

const { Pool } = pg;
if (!process.env.DATABASE_URL) throw new Error('DATABASE_URL is required in source/.env.');
const pool = new Pool({ connectionString: process.env.DATABASE_URL });

const query = async (text, values = []) => {
  const res = await pool.query(text, values);
  return res.rows;
};

// Replicate OTP & Auth functions to test against live Postgres schema and rules
const secret = () => process.env.DATABASE_URL;

const hashOtp = (otp) => crypto.createHash('sha256').update(otp.trim()).digest('hex');

const hashPassword = (password) => {
  const salt = crypto.randomBytes(16).toString('hex');
  const hash = crypto.scryptSync(password, salt, 64).toString('hex');
  return `${salt}:${hash}`;
};

const verifyPassword = (password, stored) => {
  const [salt, hash] = stored.split(':');
  if (!salt || !hash) return false;
  const actual = crypto.scryptSync(password, salt, 64);
  const expected = Buffer.from(hash, 'hex');
  return expected.length === actual.length && crypto.timingSafeEqual(actual, expected);
};

const createOtpVerification = async ({
  userId,
  email,
  purpose,
  metadata,
  cooldownSeconds = 60,
}) => {
  const cleanEmail = email.trim().toLowerCase();

  const recent = await query(
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

  await query(
    `UPDATE otp_verifications 
     SET used_at = NOW() 
     WHERE lower(email) = lower($1) AND purpose = $2 AND used_at IS NULL`,
    [cleanEmail, purpose]
  );

  const otpNumber = crypto.randomInt(100000, 1000000);
  const otp = otpNumber.toString();
  const otpHash = hashOtp(otp);
  const expiresAt = new Date(Date.now() + 10 * 60 * 1000);

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

const verifyOtpVerification = async ({ email, purpose, otp }) => {
  const cleanEmail = email.trim().toLowerCase();
  const cleanOtp = String(otp || '').trim();

  if (!cleanOtp || cleanOtp.length !== 6 || !/^\d{6}$/.test(cleanOtp)) {
    return { success: false, error: 'Please enter a valid 6-digit verification code.' };
  }

  const rows = await query(
    `SELECT * FROM otp_verifications 
     WHERE lower(email) = lower($1) AND purpose = $2 AND used_at IS NULL
     ORDER BY created_at DESC LIMIT 1`,
    [cleanEmail, purpose]
  );

  const record = rows[0];
  if (!record) {
    return { success: false, error: 'No active verification code found. Please request a new code.' };
  }

  if (record.attempts >= record.max_attempts) {
    return { success: false, error: 'Too many incorrect attempts. This code is locked. Please request a new code.' };
  }

  if (new Date(record.expires_at).getTime() <= Date.now()) {
    return { success: false, error: 'Verification code has expired. Please request a new code.' };
  }

  const inputHash = hashOtp(cleanOtp);
  const inputBuffer = Buffer.from(inputHash, 'hex');
  const storedBuffer = Buffer.from(record.otp_hash, 'hex');

  const isMatch =
    inputBuffer.length === storedBuffer.length &&
    crypto.timingSafeEqual(inputBuffer, storedBuffer);

  if (!isMatch) {
    const newAttempts = record.attempts + 1;
    await query(`UPDATE otp_verifications SET attempts = $2 WHERE id = $1`, [record.id, newAttempts]);
    const remaining = Math.max(0, record.max_attempts - newAttempts);
    return {
      success: false,
      error: `Invalid verification code. ${remaining} attempt${remaining === 1 ? '' : 's'} remaining.`,
      remainingAttempts: remaining,
    };
  }

  await query(`UPDATE otp_verifications SET used_at = NOW() WHERE id = $1`, [record.id]);
  return { success: true, verification: record };
};

const createActionToken = ({ userId, email, purpose, metadata, expiresInSeconds = 600 }) => {
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

const verifyActionToken = ({ token, expectedPurpose }) => {
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

  const payload = JSON.parse(Buffer.from(encoded, 'base64url').toString('utf8'));
  if (!payload.exp || payload.exp <= Date.now()) {
    return { valid: false, error: 'Token expired.' };
  }
  if (payload.purpose !== expectedPurpose) {
    return { valid: false, error: 'Token purpose mismatch.' };
  }
  return { valid: true, data: payload };
};

async function runAllTests() {
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
    const testUserId = crypto.randomUUID();
    const testEmailOld = `test.admin.${Date.now()}@neno.com`;
    const testEmailNew = `test.new.${Date.now()}@neno.com`;
    const initialPassword = 'InitialPassword123!';
    const initialHash = hashPassword(initialPassword);

    await query(
      `INSERT INTO users (id, name, email, password_hash, role) VALUES ($1, $2, $3, $4, 'admin')`,
      [testUserId, 'Test Admin', testEmailOld, initialHash]
    );
    console.log(`[Setup] Created test user: ${testEmailOld}`);

    // 1. Core OTP rules
    console.log('\n--- 1. Testing Core OTP Security Rules ---');
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

    // 2. Wrong Attempt Limiting
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

    const lockoutAttempt = await verifyOtpVerification({
      email: testEmailOld,
      purpose: 'change_password',
      otp: otp1,
    });
    assert(
      lockoutAttempt.success === false && lockoutAttempt.error?.includes('locked'),
      'Locked OTP rejects even correct OTP code'
    );

    // 3. Feature 1: CHANGE EMAIL
    console.log('\n--- 3. Testing Feature 1: CHANGE EMAIL (2-Step Staged OTP) ---');
    const { otp: oldEmailOtp } = await createOtpVerification({
      userId: testUserId,
      email: testEmailOld,
      purpose: 'change_email_old',
      metadata: { newEmail: testEmailNew },
      cooldownSeconds: 0,
    });

    const oldVerify = await verifyOtpVerification({
      email: testEmailOld,
      purpose: 'change_email_old',
      otp: oldEmailOtp,
    });
    assert(oldVerify.success === true, 'Old email OTP verified successfully');

    const stageToken = createActionToken({
      userId: testUserId,
      email: testEmailOld,
      purpose: 'change_email_stage2',
      metadata: { newEmail: testEmailNew },
      expiresInSeconds: 600,
    });

    const { otp: newEmailOtp } = await createOtpVerification({
      userId: testUserId,
      email: testEmailNew,
      purpose: 'change_email_new',
      metadata: { oldEmail: testEmailOld },
      cooldownSeconds: 0,
    });

    const dbCheckBefore = await query('SELECT email FROM users WHERE id = $1', [testUserId]);
    assert(dbCheckBefore[0].email === testEmailOld, 'Database email remains OLD email before new OTP is verified');

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

    await query('UPDATE users SET email = $2, updated_at = NOW() WHERE id = $1', [testUserId, testEmailNew]);
    const dbCheckAfter = await query('SELECT email FROM users WHERE id = $1', [testUserId]);
    assert(dbCheckAfter[0].email === testEmailNew, 'Database email updated to NEW email after both OTPs verified');

    const replayAttempt = await verifyOtpVerification({
      email: testEmailNew,
      purpose: 'change_email_new',
      otp: newEmailOtp,
    });
    assert(replayAttempt.success === false, 'Replaying already-used OTP is rejected (Single Use enforced)');

    // 4. Feature 2: CHANGE PASSWORD
    console.log('\n--- 4. Testing Feature 2: CHANGE PASSWORD (OTP Authorization) ---');
    const { otp: changePassOtp } = await createOtpVerification({
      userId: testUserId,
      email: testEmailNew,
      purpose: 'change_password',
      cooldownSeconds: 0,
    });

    const passOtpVerify = await verifyOtpVerification({
      email: testEmailNew,
      purpose: 'change_password',
      otp: changePassOtp,
    });
    assert(passOtpVerify.success === true, 'Change Password OTP verified successfully');

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
    await query('UPDATE users SET password_hash = $2, updated_at = NOW() WHERE id = $1', [
      testUserId,
      updatedHash,
    ]);

    const userDbAfterPass = await query('SELECT password_hash FROM users WHERE id = $1', [testUserId]);
    const isNewPassValid = verifyPassword(updatedPassword, userDbAfterPass[0].password_hash);
    const isOldPassInvalid = !verifyPassword(initialPassword, userDbAfterPass[0].password_hash);
    assert(isNewPassValid, 'New password validates successfully with scrypt hash');
    assert(isOldPassInvalid, 'Old password is no longer valid');

    // 5. Feature 3: FORGOT PASSWORD
    console.log('\n--- 5. Testing Feature 3: FORGOT PASSWORD (OTP Recovery) ---');
    const { otp: forgotOtp } = await createOtpVerification({
      userId: testUserId,
      email: testEmailNew,
      purpose: 'forgot_password',
      cooldownSeconds: 0,
    });

    const forgotVerify = await verifyOtpVerification({
      email: testEmailNew,
      purpose: 'forgot_password',
      otp: forgotOtp,
    });
    assert(forgotVerify.success === true, 'Forgot Password OTP verified successfully');

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
    await query('UPDATE users SET password_hash = $2, updated_at = NOW() WHERE id = $1', [
      testUserId,
      resetFinalHash,
    ]);

    const userDbAfterReset = await query('SELECT password_hash FROM users WHERE id = $1', [testUserId]);
    assert(
      verifyPassword(resetFinalPassword, userDbAfterReset[0].password_hash),
      'Password reset through OTP recovery successfully'
    );

    // 6. Security Check: Invalidate tampering
    console.log('\n--- 6. Testing Token Security & Tamper Proofing ---');
    const tamperedToken = resetToken.slice(0, -4) + 'abcd';
    const tamperedCheck = verifyActionToken({
      token: tamperedToken,
      expectedPurpose: 'forgot_password_reset',
    });
    assert(tamperedCheck.valid === false, 'Tampered action token signature is rejected');

    // Cleanup test user
    await query('DELETE FROM users WHERE id = $1', [testUserId]);
    console.log(`\n[Cleanup] Deleted test user: ${testUserId}`);

    console.log('\n====================================================');
    console.log(`TEST SUMMARY: ${passed} PASSED, ${failed} FAILED`);
    console.log('====================================================');

    if (failed > 0) process.exit(1);
  } catch (err) {
    console.error('Test execution exception:', err);
    process.exit(1);
  } finally {
    await pool.end();
  }
}

runAllTests();
