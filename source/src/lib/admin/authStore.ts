const AUTH_KEY = 'neno-admin-authenticated';

export const isAuthenticated = () =>
  typeof window !== 'undefined' && window.localStorage.getItem(AUTH_KEY) === 'true';

export const verifySessionWithServer = async (): Promise<boolean> => {
  try {
    const res = await fetch('/api/admin/auth');
    if (res.ok) {
      if (typeof window !== 'undefined') window.localStorage.setItem(AUTH_KEY, 'true');
      return true;
    }
  } catch {
    // network or auth error
  }
  if (typeof window !== 'undefined') window.localStorage.removeItem(AUTH_KEY);
  return false;
};

export const login = async (email: string, password: string): Promise<boolean> => {
  const response = await fetch('/api/admin/auth', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });
  if (!response.ok) return false;
  if (typeof window !== 'undefined') window.localStorage.setItem(AUTH_KEY, 'true');
  return true;
};

export const logout = async (): Promise<void> => {
  await fetch('/api/admin/auth', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ action: 'logout' }),
  });
  if (typeof window !== 'undefined') window.localStorage.removeItem(AUTH_KEY);
};
