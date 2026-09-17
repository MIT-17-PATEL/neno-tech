'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { AdminIcon } from './AdminIcons';
import styles from './admin.module.css';

export const ForgotPassword = () => {
  const router = useRouter();

  const [step, setStep] = useState<'email' | 'otp' | 'password' | 'success'>('email');
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [resetToken, setResetToken] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [cooldown, setCooldown] = useState(0);

  useEffect(() => {
    if (cooldown <= 0) return;
    const interval = setInterval(() => {
      setCooldown((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, [cooldown]);

  // Step 1: Send OTP
  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const cleanEmail = email.trim().toLowerCase();
    if (!cleanEmail) {
      setError('Please enter your admin email address.');
      return;
    }

    setLoading(true);
    try {
      const res = await fetch('/api/admin/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'send-otp', email: cleanEmail }),
      });

      const data = (await res.json()) as { ok?: boolean; message?: string; error?: string };
      if (!res.ok) {
        throw new Error(data.error || 'Failed to send verification code.');
      }

      setStep('otp');
      setCooldown(60);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Step 2: Verify OTP
  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!otp || otp.trim().length !== 6) {
      setError('Please enter the 6-digit verification code.');
      return;
    }

    setLoading(true);
    try {
      const res = await fetch('/api/admin/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'verify-otp',
          email: email.trim().toLowerCase(),
          otp: otp.trim(),
        }),
      });

      const data = (await res.json()) as { ok?: boolean; resetToken?: string; error?: string };
      if (!res.ok || !data.resetToken) {
        throw new Error(data.error || 'Failed to verify code.');
      }

      setResetToken(data.resetToken);
      setStep('password');
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Step 3: Reset Password
  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!newPassword || newPassword.length < 6) {
      setError('New password must be at least 6 characters long.');
      return;
    }

    if (newPassword !== confirmPassword) {
      setError('New passwords do not match.');
      return;
    }

    setLoading(true);
    try {
      const res = await fetch('/api/admin/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'reset-password',
          resetToken,
          newPassword,
        }),
      });

      const data = (await res.json()) as { ok?: boolean; message?: string; error?: string };
      if (!res.ok) {
        throw new Error(data.error || 'Failed to reset password.');
      }

      setStep('success');
      setTimeout(() => {
        router.push('/get/admin/login');
      }, 3000);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className={styles.loginPage}>
      <div className={styles.loginContainer}>
        <div className={styles.loginLogoWrap}>
          <img src="/assets/img/logo-light.png" alt="Neno Technology" className={styles.loginBrandLogo} />
        </div>

        <div className={styles.loginCard}>
          <div className={styles.loginCardHeader}>
            <p className={styles.eyebrow}>
              {step === 'email' && 'PASSWORD RECOVERY · STEP 1 OF 3'}
              {step === 'otp' && 'VERIFY IDENTITY · STEP 2 OF 3'}
              {step === 'password' && 'CREATE PASSWORD · STEP 3 OF 3'}
              {step === 'success' && 'RECOVERY COMPLETE'}
            </p>
            <h2>
              {step === 'email' && 'Reset your password'}
              {step === 'otp' && 'Enter verification code'}
              {step === 'password' && 'Set new password'}
              {step === 'success' && 'Password reset complete'}
            </h2>
            <p>
              {step === 'email' && 'Enter your admin email address to receive a secure 6-digit OTP.'}
              {step === 'otp' && `Enter the 6-digit code sent to ${email}`}
              {step === 'password' && 'Create a strong, secure new password for your admin account.'}
              {step === 'success' && 'Your password has been updated. Redirecting to sign in…'}
            </p>
          </div>

          {/* STEP 1: Enter Email */}
          {step === 'email' && (
            <form onSubmit={handleSendOtp} style={{ display: 'grid', gap: '16px' }}>
              <label>
                Email address
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@neno.com"
                  autoComplete="email"
                  autoFocus
                  disabled={loading}
                  required
                />
              </label>

              {error && <p className={styles.loginError}>{error}</p>}

              <button type="submit" className={styles.loginButton} disabled={loading}>
                {loading ? (
                  <>
                    <span className={styles.spinner} /> Sending verification code…
                  </>
                ) : (
                  <>
                    Send verification code <AdminIcon name="arrow" />
                  </>
                )}
              </button>

              <div style={{ textAlign: 'center', marginTop: '12px' }}>
                <Link href="/get/admin/login" className={styles.textLink}>
                  ← Back to Sign in
                </Link>
              </div>
            </form>
          )}

          {/* STEP 2: Enter OTP */}
          {step === 'otp' && (
            <form onSubmit={handleVerifyOtp} style={{ display: 'grid', gap: '16px' }}>
              <label>
                6-digit Verification Code
                <input
                  type="text"
                  inputMode="numeric"
                  maxLength={6}
                  pattern="[0-9]{6}"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
                  placeholder="123456"
                  autoFocus
                  disabled={loading}
                  style={{
                    fontFamily: 'monospace',
                    fontSize: '20px',
                    letterSpacing: '8px',
                    textAlign: 'center',
                  }}
                  required
                />
              </label>

              {error && <p className={styles.loginError}>{error}</p>}

              <button type="submit" className={styles.loginButton} disabled={loading}>
                {loading ? (
                  <>
                    <span className={styles.spinner} /> Verifying code…
                  </>
                ) : (
                  <>
                    Verify & Continue <AdminIcon name="arrow" />
                  </>
                )}
              </button>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '8px' }}>
                <button
                  type="button"
                  onClick={() => {
                    setStep('email');
                    setError('');
                  }}
                  className={styles.textLink}
                >
                  ← Change email
                </button>

                <button
                  type="button"
                  onClick={handleSendOtp}
                  disabled={cooldown > 0 || loading}
                  className={styles.textLink}
                  style={{ opacity: cooldown > 0 ? 0.6 : 1 }}
                >
                  {cooldown > 0 ? `Resend in ${cooldown}s` : 'Resend code'}
                </button>
              </div>
            </form>
          )}

          {/* STEP 3: Set New Password */}
          {step === 'password' && (
            <form onSubmit={handleResetPassword} style={{ display: 'grid', gap: '16px' }}>
              <label>
                New password
                <span className={styles.passwordInput}>
                  <input
                    type={showNew ? 'text' : 'password'}
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="At least 6 characters"
                    autoComplete="new-password"
                    autoFocus
                    disabled={loading}
                    required
                  />
                  <button type="button" onClick={() => setShowNew((prev) => !prev)}>
                    {showNew ? 'Hide' : 'Show'}
                  </button>
                </span>
              </label>

              <label>
                Confirm new password
                <span className={styles.passwordInput}>
                  <input
                    type={showConfirm ? 'text' : 'password'}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Re-enter new password"
                    autoComplete="new-password"
                    disabled={loading}
                    required
                  />
                  <button type="button" onClick={() => setShowConfirm((prev) => !prev)}>
                    {showConfirm ? 'Hide' : 'Show'}
                  </button>
                </span>
              </label>

              {error && <p className={styles.loginError}>{error}</p>}

              <button type="submit" className={styles.loginButton} disabled={loading}>
                {loading ? (
                  <>
                    <span className={styles.spinner} /> Resetting password…
                  </>
                ) : (
                  <>
                    Reset password & Sign in <AdminIcon name="arrow" />
                  </>
                )}
              </button>
            </form>
          )}

          {/* STEP 4: Success State */}
          {step === 'success' && (
            <div className={styles.resetSentState}>
              <div className={styles.sentIconWrap}>
                <AdminIcon name="check" />
              </div>
              <h3>Password updated!</h3>
              <p className={styles.resetNoticeText}>
                Your password has been successfully reset. Redirecting you to the sign-in page…
              </p>
              <div style={{ marginTop: '20px' }}>
                <Link
                  href="/get/admin/login"
                  className={styles.primaryButton}
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  Go to Sign in <AdminIcon name="arrow" />
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};
