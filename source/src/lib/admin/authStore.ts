const AUTH_KEY = 'neno-admin-authenticated';

export const isAuthenticated = () => typeof window !== 'undefined' && window.localStorage.getItem(AUTH_KEY) === 'true';
export const login = async (email: string, password: string) => {
  const response = await fetch('/api/admin/auth', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email, password }) });
  if (!response.ok) return false;
  window.localStorage.setItem(AUTH_KEY, 'true');
  return true;
};
export const logout = async () => { await fetch('/api/admin/auth', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ action: 'logout' }) }); window.localStorage.removeItem(AUTH_KEY); };
