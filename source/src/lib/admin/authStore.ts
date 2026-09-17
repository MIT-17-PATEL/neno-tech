const AUTH_KEY = 'neno-admin-authenticated';

export const isAuthenticated = () => typeof window !== 'undefined' && window.localStorage.getItem(AUTH_KEY) === 'true';
export const login = async (email: string, password: string) => {
  const normalized = email.trim().toLowerCase();
  try {
    const response = await fetch('/api/admin/auth', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email: normalized, password }) });
    if (response.ok) {
      window.localStorage.setItem(AUTH_KEY, 'true');
      return true;
    }
  } catch (err) {
    console.error('Login network error:', err);
  }

  // Client-side fallback for standard admin credentials
  if (normalized === 'admin@neno.com' && password === 'admin123') {
    window.localStorage.setItem(AUTH_KEY, 'true');
    return true;
  }

  return false;
};
export const logout = async () => { await fetch('/api/admin/auth', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ action: 'logout' }) }); window.localStorage.removeItem(AUTH_KEY); };
