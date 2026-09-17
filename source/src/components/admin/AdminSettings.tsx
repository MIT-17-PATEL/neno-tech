'use client';

import { useEffect, useState } from 'react';
import { AdminIcon } from './AdminIcons';
import { AdminShell } from './AdminShell';
import styles from './admin.module.css';

export const AdminSettings = () => {
  const [notice, setNotice] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
  const [loading, setLoading] = useState(true);
  const [savingProfile, setSavingProfile] = useState(false);

  const [profile, setProfile] = useState({ name: '', email: '', role: 'Workspace administrator' });

  // ---------------------------------------------------------------------------
  // CHANGE EMAIL STATE
  // ---------------------------------------------------------------------------
  const [emailModalOpen, setEmailModalOpen] = useState(false);
  const [emailStep, setEmailStep] = useState<'input' | 'verify_old' | 'verify_new'>('input');
  const [newEmail, setNewEmail] = useState('');
  const [oldEmailOtp, setOldEmailOtp] = useState('');
  const [newEmailOtp, setNewEmailOtp] = useState('');
  const [emailStageToken, setEmailStageToken] = useState('');
  const [emailLoading, setEmailLoading] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [emailCooldown, setEmailCooldown] = useState(0);

  // ---------------------------------------------------------------------------
  // CHANGE PASSWORD STATE
  // ---------------------------------------------------------------------------
  const [passwordStep, setPasswordStep] = useState<'init' | 'verify_otp' | 'set_new'>('init');
  const [passwordOtp, setPasswordOtp] = useState('');
  const [passwordToken, setPasswordToken] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [passwordLoading, setPasswordLoading] = useState(false);
  const [passwordError, setPasswordError] = useState('');
  const [passwordCooldown, setPasswordCooldown] = useState(0);

  const showToast = (message: string, type: 'success' | 'error' = 'success') => {
    setNotice({ message, type });
    window.setTimeout(() => setNotice(null), 5000);
  };

  // Cooldown timers
  useEffect(() => {
    if (emailCooldown <= 0) return;
    const interval = setInterval(() => {
      setEmailCooldown((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, [emailCooldown]);

  useEffect(() => {
    if (passwordCooldown <= 0) return;
    const interval = setInterval(() => {
      setPasswordCooldown((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, [passwordCooldown]);

  useEffect(() => {
    fetch('/api/admin/settings')
      .then((res) => (res.ok ? res.json() : Promise.reject(new Error('Unable to load admin settings.'))))
      .then((data) => {
        setProfile({
          name: data.name || '',
          email: data.email || '',
          role: data.role || 'Workspace administrator',
        });
      })
      .catch((err: Error) => showToast(err.message, 'error'))
      .finally(() => setLoading(false));
  }, []);

  // ---------------------------------------------------------------------------
  // PROFILE DISPLAY NAME SUBMIT
  // ---------------------------------------------------------------------------
  const handleProfileSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setNotice(null);

    const name = profile.name.trim();
    if (!name) {
      showToast('Display name is required.', 'error');
      return;
    }

    setSavingProfile(true);
    try {
      const res = await fetch('/api/admin/settings', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name }),
      });

      const data = (await res.json()) as { name?: string; email?: string; role?: string; error?: string };
      if (!res.ok) {
        throw new Error(data.error || 'Failed to update profile.');
      }

      setProfile((prev) => ({ ...prev, name: data.name || name }));
      showToast('Profile display name updated successfully.');
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Unable to save profile.';
      showToast(msg, 'error');
    } finally {
      setSavingProfile(false);
    }
  };

  // ---------------------------------------------------------------------------
  // CHANGE EMAIL FLOW HANDLERS
  // ---------------------------------------------------------------------------
  const openEmailChangeModal = () => {
    setEmailStep('input');
    setNewEmail('');
    setOldEmailOtp('');
    setNewEmailOtp('');
    setEmailStageToken('');
    setEmailError('');
    setEmailModalOpen(true);
  };

  const closeEmailChangeModal = () => {
    if (!emailLoading) {
      setEmailModalOpen(false);
    }
  };

  const handleSendOldEmailOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setEmailError('');
    const cleanNewEmail = newEmail.trim().toLowerCase();

    if (!cleanNewEmail) {
      setEmailError('Please enter a new email address.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(cleanNewEmail)) {
      setEmailError('Please enter a valid email address.');
      return;
    }

    if (cleanNewEmail === profile.email.toLowerCase()) {
      setEmailError('New email cannot be the same as your current email.');
      return;
    }

    setEmailLoading(true);
    try {
      const res = await fetch('/api/admin/settings/email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'send-old-otp', newEmail: cleanNewEmail }),
      });
      const data = (await res.json()) as { ok?: boolean; message?: string; error?: string };
      if (!res.ok) {
        throw new Error(data.error || 'Failed to send verification code.');
      }

      setEmailStep('verify_old');
      setEmailCooldown(60);
    } catch (err: unknown) {
      setEmailError(err instanceof Error ? err.message : 'An error occurred.');
    } finally {
      setEmailLoading(false);
    }
  };

  const handleVerifyOldEmailOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setEmailError('');

    if (!oldEmailOtp || oldEmailOtp.trim().length !== 6) {
      setEmailError('Please enter the 6-digit code sent to your current email.');
      return;
    }

    setEmailLoading(true);
    try {
      const res = await fetch('/api/admin/settings/email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'verify-old-otp',
          otp: oldEmailOtp.trim(),
          newEmail: newEmail.trim().toLowerCase(),
        }),
      });
      const data = (await res.json()) as { ok?: boolean; stageToken?: string; error?: string; message?: string };
      if (!res.ok || !data.stageToken) {
        throw new Error(data.error || 'Failed to verify current email code.');
      }

      setEmailStageToken(data.stageToken);
      setEmailStep('verify_new');
      setEmailCooldown(60);
    } catch (err: unknown) {
      setEmailError(err instanceof Error ? err.message : 'An error occurred.');
    } finally {
      setEmailLoading(false);
    }
  };

  const handleResendNewEmailOtp = async () => {
    if (emailCooldown > 0 || emailLoading) return;
    setEmailError('');
    setEmailLoading(true);
    try {
      const res = await fetch('/api/admin/settings/email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'resend-new-otp', stageToken: emailStageToken }),
      });
      const data = (await res.json()) as { ok?: boolean; error?: string; message?: string };
      if (!res.ok) {
        throw new Error(data.error || 'Failed to resend code.');
      }
      setEmailCooldown(60);
    } catch (err: unknown) {
      setEmailError(err instanceof Error ? err.message : 'Unable to resend code.');
    } finally {
      setEmailLoading(false);
    }
  };

  const handleVerifyNewEmailOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setEmailError('');

    if (!newEmailOtp || newEmailOtp.trim().length !== 6) {
      setEmailError('Please enter the 6-digit code sent to your new email.');
      return;
    }

    setEmailLoading(true);
    try {
      const res = await fetch('/api/admin/settings/email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'verify-new-otp',
          otp: newEmailOtp.trim(),
          stageToken: emailStageToken,
        }),
      });
      const data = (await res.json()) as {
        ok?: boolean;
        message?: string;
        error?: string;
        user?: { email?: string; name?: string };
      };
      if (!res.ok) {
        throw new Error(data.error || 'Failed to verify new email code.');
      }

      setProfile((prev) => ({ ...prev, email: data.user?.email || newEmail.trim().toLowerCase() }));
      setEmailModalOpen(false);
      showToast(data.message || 'Email updated successfully.');
    } catch (err: unknown) {
      setEmailError(err instanceof Error ? err.message : 'An error occurred.');
    } finally {
      setEmailLoading(false);
    }
  };

  // ---------------------------------------------------------------------------
  // CHANGE PASSWORD FLOW HANDLERS
  // ---------------------------------------------------------------------------
  const handleRequestPasswordOtp = async () => {
    setPasswordError('');
    setPasswordLoading(true);
    try {
      const res = await fetch('/api/admin/settings/password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'send-otp' }),
      });
      const data = (await res.json()) as { ok?: boolean; message?: string; error?: string };
      if (!res.ok) {
        throw new Error(data.error || 'Failed to send verification code.');
      }

      setPasswordStep('verify_otp');
      setPasswordCooldown(60);
    } catch (err: unknown) {
      setPasswordError(err instanceof Error ? err.message : 'An error occurred.');
    } finally {
      setPasswordLoading(false);
    }
  };

  const handleVerifyPasswordOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setPasswordError('');

    if (!passwordOtp || passwordOtp.trim().length !== 6) {
      setPasswordError('Please enter the 6-digit code sent to your registered email.');
      return;
    }

    setPasswordLoading(true);
    try {
      const res = await fetch('/api/admin/settings/password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'verify-otp', otp: passwordOtp.trim() }),
      });
      const data = (await res.json()) as { ok?: boolean; passwordToken?: string; error?: string };
      if (!res.ok || !data.passwordToken) {
        throw new Error(data.error || 'Invalid verification code.');
      }

      setPasswordToken(data.passwordToken);
      setPasswordStep('set_new');
    } catch (err: unknown) {
      setPasswordError(err instanceof Error ? err.message : 'An error occurred.');
    } finally {
      setPasswordLoading(false);
    }
  };

  const handleUpdatePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setPasswordError('');

    if (!newPassword || newPassword.length < 6) {
      setPasswordError('New password must be at least 6 characters long.');
      return;
    }

    if (newPassword !== confirmPassword) {
      setPasswordError('New passwords do not match.');
      return;
    }

    setPasswordLoading(true);
    try {
      const res = await fetch('/api/admin/settings/password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'update-password',
          passwordToken,
          newPassword,
        }),
      });

      const data = (await res.json()) as { ok?: boolean; message?: string; error?: string };
      if (!res.ok) {
        throw new Error(data.error || 'Failed to change password.');
      }

      // Reset password flow state
      setPasswordStep('init');
      setPasswordOtp('');
      setPasswordToken('');
      setNewPassword('');
      setConfirmPassword('');
      showToast(data.message || 'Password changed successfully.');
    } catch (err: unknown) {
      setPasswordError(err instanceof Error ? err.message : 'Unable to change password.');
    } finally {
      setPasswordLoading(false);
    }
  };

  return (
    <AdminShell title="Settings" subtitle="Manage your Neno Admin profile, secure email, and password credentials.">
      {notice && (
        <div
          className={`${styles.notice} ${notice.type === 'error' ? styles.noticeError : styles.noticeSuccess}`}
          role="status"
        >
          <AdminIcon name={notice.type === 'error' ? 'close' : 'check'} />
          {notice.message}
        </div>
      )}

      <div className={styles.settingsGrid}>
        {/* Profile Card */}
        <section className={styles.panel}>
          <header className={styles.panelHeader}>
            <div>
              <h2>Admin Profile</h2>
              <p>Your admin identity and registered email in this workspace.</p>
            </div>
          </header>

          <form className={styles.settingsForm} onSubmit={handleProfileSubmit}>
            <label>
              Display name
              <input
                name="displayName"
                value={profile.name}
                onChange={(e) => setProfile((current) => ({ ...current, name: e.target.value }))}
                placeholder="Admin Name"
                disabled={loading || savingProfile}
                required
              />
            </label>

            <label>
              Registered email address
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <input name="email" type="email" value={profile.email} disabled style={{ opacity: 0.85 }} />
                <button
                  type="button"
                  onClick={openEmailChangeModal}
                  className={styles.secondaryButton}
                  style={{ whiteSpace: 'nowrap', padding: '0 16px', height: '42px', flexShrink: 0 }}
                  title="Change registered email with 2-step OTP verification"
                >
                  Change Email
                </button>
              </div>
              <small style={{ color: '#687385', fontSize: '11px', marginTop: '4px' }}>
                🔒 Email modifications require 2-step OTP verification (Current & New email).
              </small>
            </label>

            <label>
              Role
              <input value={profile.role} disabled />
            </label>

            <button className={styles.primaryButton} type="submit" disabled={loading || savingProfile}>
              {savingProfile ? (
                <>
                  <span className={styles.spinner} /> Saving profile…
                </>
              ) : (
                <>
                  <AdminIcon name="check" /> Save display name
                </>
              )}
            </button>
          </form>
        </section>

        {/* Password Security Card with OTP Flow */}
        <section className={styles.panel}>
          <header className={styles.panelHeader}>
            <div>
              <h2>Password & Security</h2>
              <p>Change your admin password via secure OTP authorization.</p>
            </div>
          </header>

          <div className={styles.settingsForm}>
            {passwordStep === 'init' && (
              <div style={{ display: 'grid', gap: '16px' }}>
                <div
                  style={{
                    background: '#181F29',
                    border: '1px solid #293241',
                    borderRadius: '8px',
                    padding: '16px',
                  }}
                >
                  <p style={{ margin: 0, fontSize: '13.5px', color: '#9AA4B2', lineHeight: '1.5' }}>
                    To change your password, a 6-digit verification code will be sent to your registered email (
                    <strong style={{ color: '#F5F7FA' }}>{profile.email}</strong>).
                  </p>
                </div>

                {passwordError && <p className={styles.loginError}>{passwordError}</p>}

                <button
                  type="button"
                  className={styles.primaryButton}
                  onClick={handleRequestPasswordOtp}
                  disabled={passwordLoading || loading}
                >
                  {passwordLoading ? (
                    <>
                      <span className={styles.spinner} /> Sending verification code…
                    </>
                  ) : (
                    <>
                      Send Password Change Code <AdminIcon name="arrow" />
                    </>
                  )}
                </button>
              </div>
            )}

            {passwordStep === 'verify_otp' && (
              <form onSubmit={handleVerifyPasswordOtp} style={{ display: 'grid', gap: '16px' }}>
                <div
                  style={{
                    background: 'rgba(116, 118, 255, 0.08)',
                    border: '1px solid rgba(116, 118, 255, 0.25)',
                    borderRadius: '8px',
                    padding: '14px',
                  }}
                >
                  <p style={{ margin: 0, fontSize: '13px', color: '#89c7fe' }}>
                    Enter the 6-digit code sent to <strong>{profile.email}</strong>.
                  </p>
                </div>

                <label>
                  6-digit Verification Code
                  <input
                    type="text"
                    inputMode="numeric"
                    maxLength={6}
                    pattern="[0-9]{6}"
                    value={passwordOtp}
                    onChange={(e) => setPasswordOtp(e.target.value.replace(/\D/g, ''))}
                    placeholder="123456"
                    autoFocus
                    disabled={passwordLoading}
                    style={{
                      fontFamily: 'monospace',
                      fontSize: '18px',
                      letterSpacing: '6px',
                      textAlign: 'center',
                    }}
                    required
                  />
                </label>

                {passwordError && <p className={styles.loginError}>{passwordError}</p>}

                <div style={{ display: 'flex', gap: '10px' }}>
                  <button type="submit" className={styles.primaryButton} disabled={passwordLoading} style={{ flex: 1 }}>
                    {passwordLoading ? (
                      <>
                        <span className={styles.spinner} /> Verifying…
                      </>
                    ) : (
                      'Verify Code'
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={handleRequestPasswordOtp}
                    disabled={passwordCooldown > 0 || passwordLoading}
                    className={styles.secondaryButton}
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    {passwordCooldown > 0 ? `Resend (${passwordCooldown}s)` : 'Resend Code'}
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setPasswordStep('init');
                    setPasswordError('');
                  }}
                  className={styles.textLink}
                  style={{ textAlign: 'center', marginTop: '4px' }}
                >
                  Cancel
                </button>
              </form>
            )}

            {passwordStep === 'set_new' && (
              <form onSubmit={handleUpdatePassword} style={{ display: 'grid', gap: '16px' }}>
                <div
                  style={{
                    background: 'rgba(52, 211, 153, 0.1)',
                    border: '1px solid rgba(52, 211, 153, 0.3)',
                    borderRadius: '8px',
                    padding: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: '#34d399',
                    fontSize: '13px',
                  }}
                >
                  <AdminIcon name="check" /> Code verified! Please create your new password.
                </div>

                <label>
                  New password
                  <span className={styles.passwordInput}>
                    <input
                      type={showNew ? 'text' : 'password'}
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      placeholder="At least 6 characters"
                      autoComplete="new-password"
                      disabled={passwordLoading}
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
                      disabled={passwordLoading}
                      required
                    />
                    <button type="button" onClick={() => setShowConfirm((prev) => !prev)}>
                      {showConfirm ? 'Hide' : 'Show'}
                    </button>
                  </span>
                </label>

                {passwordError && <p className={styles.loginError}>{passwordError}</p>}

                <button type="submit" className={styles.primaryButton} disabled={passwordLoading}>
                  {passwordLoading ? (
                    <>
                      <span className={styles.spinner} /> Updating password…
                    </>
                  ) : (
                    'Update password'
                  )}
                </button>
              </form>
            )}
          </div>
        </section>
      </div>

      {/* --------------------------------------------------------------------- */}
      {/* 2-STEP CHANGE EMAIL MODAL */}
      {/* --------------------------------------------------------------------- */}
      {emailModalOpen && (
        <div className={styles.modalLayer} role="dialog" aria-modal="true" aria-label="Change Admin Email">
          <button className={styles.modalBackdrop} onClick={closeEmailChangeModal} aria-label="Close modal" />
          <section className={`${styles.modal} ${styles.formModal}`} style={{ maxWidth: '480px' }}>
            <header className={styles.modalHeader}>
              <div>
                <p className={styles.eyebrow}>
                  {emailStep === 'input' && 'STEP 1 OF 2'}
                  {emailStep === 'verify_old' && 'VERIFY CURRENT EMAIL'}
                  {emailStep === 'verify_new' && 'VERIFY NEW EMAIL'}
                </p>
                <h2>Change Email Address</h2>
              </div>
              <button className={styles.iconButton} onClick={closeEmailChangeModal} aria-label="Close">
                <AdminIcon name="close" />
              </button>
            </header>

            <div style={{ padding: '24px', display: 'grid', gap: '16px' }}>
              {/* STEP 1: Enter New Email */}
              {emailStep === 'input' && (
                <form onSubmit={handleSendOldEmailOtp} style={{ display: 'grid', gap: '16px' }}>
                  <p style={{ color: '#9AA4B2', fontSize: '13.5px', margin: 0 }}>
                    Enter your new email address. We will first send a verification code to your current email (
                    <strong>{profile.email}</strong>) to confirm this request.
                  </p>

                  <label>
                    New Email Address
                    <input
                      type="email"
                      value={newEmail}
                      onChange={(e) => setNewEmail(e.target.value)}
                      placeholder="newadmin@neno.com"
                      autoFocus
                      disabled={emailLoading}
                      required
                    />
                  </label>

                  {emailError && <p className={styles.loginError}>{emailError}</p>}

                  <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end', marginTop: '8px' }}>
                    <button
                      type="button"
                      className={styles.secondaryButton}
                      onClick={closeEmailChangeModal}
                      disabled={emailLoading}
                    >
                      Cancel
                    </button>
                    <button type="submit" className={styles.primaryButton} disabled={emailLoading}>
                      {emailLoading ? (
                        <>
                          <span className={styles.spinner} /> Sending code…
                        </>
                      ) : (
                        <>
                          Send Code to Current Email <AdminIcon name="arrow" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}

              {/* STEP 2: Verify Old Email OTP */}
              {emailStep === 'verify_old' && (
                <form onSubmit={handleVerifyOldEmailOtp} style={{ display: 'grid', gap: '16px' }}>
                  <div
                    style={{
                      background: 'rgba(116, 118, 255, 0.1)',
                      border: '1px solid rgba(116, 118, 255, 0.25)',
                      borderRadius: '8px',
                      padding: '12px',
                      fontSize: '13px',
                      color: '#89c7fe',
                    }}
                  >
                    Step 1 of 2: Enter the 6-digit code sent to current email: <strong>{profile.email}</strong>
                  </div>

                  <label>
                    Current Email Verification Code
                    <input
                      type="text"
                      inputMode="numeric"
                      maxLength={6}
                      pattern="[0-9]{6}"
                      value={oldEmailOtp}
                      onChange={(e) => setOldEmailOtp(e.target.value.replace(/\D/g, ''))}
                      placeholder="123456"
                      autoFocus
                      disabled={emailLoading}
                      style={{
                        fontFamily: 'monospace',
                        fontSize: '18px',
                        letterSpacing: '6px',
                        textAlign: 'center',
                      }}
                      required
                    />
                  </label>

                  {emailError && <p className={styles.loginError}>{emailError}</p>}

                  <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end', marginTop: '8px' }}>
                    <button
                      type="button"
                      className={styles.secondaryButton}
                      onClick={() => setEmailStep('input')}
                      disabled={emailLoading}
                    >
                      Back
                    </button>
                    <button type="submit" className={styles.primaryButton} disabled={emailLoading}>
                      {emailLoading ? (
                        <>
                          <span className={styles.spinner} /> Verifying…
                        </>
                      ) : (
                        'Verify & Proceed'
                      )}
                    </button>
                  </div>
                </form>
              )}

              {/* STEP 3: Verify New Email OTP */}
              {emailStep === 'verify_new' && (
                <form onSubmit={handleVerifyNewEmailOtp} style={{ display: 'grid', gap: '16px' }}>
                  <div
                    style={{
                      background: 'rgba(52, 211, 153, 0.1)',
                      border: '1px solid rgba(52, 211, 153, 0.3)',
                      borderRadius: '8px',
                      padding: '12px',
                      fontSize: '13px',
                      color: '#34d399',
                    }}
                  >
                    Step 2 of 2: Current email verified! Enter the 6-digit code sent to your new email: <strong>{newEmail}</strong>
                  </div>

                  <label>
                    New Email Verification Code
                    <input
                      type="text"
                      inputMode="numeric"
                      maxLength={6}
                      pattern="[0-9]{6}"
                      value={newEmailOtp}
                      onChange={(e) => setNewEmailOtp(e.target.value.replace(/\D/g, ''))}
                      placeholder="123456"
                      autoFocus
                      disabled={emailLoading}
                      style={{
                        fontFamily: 'monospace',
                        fontSize: '18px',
                        letterSpacing: '6px',
                        textAlign: 'center',
                      }}
                      required
                    />
                  </label>

                  {emailError && <p className={styles.loginError}>{emailError}</p>}

                  <div style={{ display: 'flex', gap: '10px', justifyContent: 'space-between', marginTop: '8px' }}>
                    <button
                      type="button"
                      onClick={handleResendNewEmailOtp}
                      disabled={emailCooldown > 0 || emailLoading}
                      className={styles.secondaryButton}
                    >
                      {emailCooldown > 0 ? `Resend (${emailCooldown}s)` : 'Resend Code'}
                    </button>

                    <button type="submit" className={styles.primaryButton} disabled={emailLoading}>
                      {emailLoading ? (
                        <>
                          <span className={styles.spinner} /> Updating email…
                        </>
                      ) : (
                        <>
                          <AdminIcon name="check" /> Verify & Change Email
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </section>
        </div>
      )}
    </AdminShell>
  );
};
