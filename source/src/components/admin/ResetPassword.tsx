'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState, Suspense } from 'react';
import { AdminIcon } from './AdminIcons';
import styles from './admin.module.css';

const ResetPasswordForm = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get('token') || '';

  const [verifying, setVerifying] = useState(true);
  const [tokenValid, setTokenValid] = useState(false);
  const [tokenError, setTokenError] = useState('');

  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!token) {
      setVerifying(false);
      setTokenValid(false);
      setTokenError('No reset token provided. Please request a new password reset link.');
      return;
    }

    fetch(`/api/admin/reset-password?token=${encodeURIComponent(token)}`)
      .then((res) => res.json() as Promise<{ valid?: boolean; error?: string }>)
      .then((data) => {
        if (data.valid) {
          setTokenValid(true);
        } else {
          setTokenValid(false);
          setTokenError(data.error || 'This reset link is invalid or has expired.');
        }
      })
      .catch(() => {
        setTokenValid(false);
        setTokenError('Unable to verify reset token. Please check your network connection.');
      })
      .finally(() => setVerifying(false));
  }, [token]);

  const handleSubmit = async (e: React.FormEvent) => {
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
      const res = await fetch('/api/admin/reset-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token, newPassword }),
      });

      const data = (await res.json()) as { ok?: boolean; error?: string; message?: string };
      if (!res.ok) {
        throw new Error(data.error || 'Failed to reset password.');
      }

      setSuccess(true);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'An error occurred. Please try again.';
      setError(msg);
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
            <p className={styles.eyebrow}>ADMIN ACCESS</p>
            <h2>Set new password</h2>
            <p>Create a secure new password for your admin account.</p>
          </div>

          {verifying ? (
            <div className={styles.adminLoading} style={{ padding: '30px 0', minHeight: 'auto' }}>
              <span className={styles.spinner} /> Verifying reset link…
            </div>
          ) : success ? (
            <div className={styles.resetSentState}>
              <div className={styles.sentIconWrap}>
                <AdminIcon name="check" />
              </div>
              <h3>Password reset complete</h3>
              <p className={styles.resetNoticeText}>Your password has been updated successfully. You can now log in with your new password.</p>
              <div style={{ marginTop: '24px' }}>
                <Link href="/get/admin/login" className={styles.primaryButton} style={{ width: '100%', justifyContent: 'center' }}>
                  Sign in with new password <AdminIcon name="arrow" />
                </Link>
              </div>
            </div>
          ) : !tokenValid ? (
            <div className={styles.resetSentState}>
              <p className={styles.loginError} style={{ margin: '15px 0' }}>{tokenError}</p>
              <div style={{ marginTop: '20px' }}>
                <Link href="/get/admin/forgot-password" className={styles.primaryButton} style={{ width: '100%', justifyContent: 'center' }}>
                  Request new reset link <AdminIcon name="arrow" />
                </Link>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '16px' }}>
              <label>
                New password
                <span className={styles.passwordInput}>
                  <input
                    type={showNew ? 'text' : 'password'}
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="At least 6 characters"
                    autoComplete="new-password"
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
                    <span className={styles.spinner} /> Updating password…
                  </>
                ) : (
                  <>
                    Reset password <AdminIcon name="arrow" />
                  </>
                )}
              </button>

              <div style={{ textAlign: 'center', marginTop: '12px' }}>
                <Link href="/get/admin/login" className={styles.textLink}>
                  ← Cancel and return to Sign in
                </Link>
              </div>
            </form>
          )}
        </div>
      </div>
    </main>
  );
};

export const ResetPassword = () => (
  <Suspense fallback={<div className={styles.adminLoading}><span className={styles.spinner} />Loading…</div>}>
    <ResetPasswordForm />
  </Suspense>
);
