'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { login } from '@/lib/admin/authStore';
import { AdminIcon } from './AdminIcons';
import styles from './admin.module.css';

export const AdminLogin = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(true);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError('');
    if (!email || !password) {
      setError('Enter your email and password to continue.');
      return;
    }
    setLoading(true);
    window.setTimeout(async () => {
      if (await login(email, password)) {
        router.push('/get/admin');
      } else {
        setError('That email or password is not recognised.');
        setLoading(false);
      }
    }, 450);
  };

  return (
    <main className={styles.loginPage}>
      <div className={styles.loginContainer}>
        <div className={styles.loginLogoWrap}>
          <img
            src="/assets/img/logo-light.png"
            alt="Neno Technology"
            className={styles.loginBrandLogo}
          />
        </div>
        <form className={styles.loginCard} onSubmit={submit}>
          <div className={styles.loginCardHeader}>
            <p className={styles.eyebrow}>ADMIN ACCESS</p>
            <h2>Sign in to Neno Admin</h2>
            <p>Use your admin credentials to continue.</p>
          </div>

          <label>
            Email address
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@neno.com"
              autoComplete="email"
              required
            />
          </label>

          <label>
            Password
            <span className={styles.passwordInput}>
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                autoComplete="current-password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword((value) => !value)}
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </span>
          </label>

          {error && <p className={styles.loginError}>{error}</p>}

          <div className={styles.loginOptions}>
            <label>
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
              />
              Remember me
            </label>
            <Link href="/get/admin/forgot-password" className={styles.textLink}>
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            className={styles.loginButton}
            disabled={loading}
          >
            {loading ? (
              <>
                <span className={styles.spinner} />
                Signing in…
              </>
            ) : (
              <>
                Sign in <AdminIcon name="arrow" />
              </>
            )}
          </button>

          <p className={styles.demoCredentials}>
            Demo: <strong>admin@neno.com</strong> · <strong>admin123</strong>
          </p>
        </form>
      </div>
    </main>
  );
};


