import type { ManagedContent, ManagedContentInput } from '@/types/admin';

export type ContentCollection = 'case-studies' | 'projects';

const STORAGE_KEY_PREFIX = 'neno_admin_content_v3_';


const getStoredContent = (collection: ContentCollection): ManagedContent[] => {
  if (typeof window === 'undefined') return [];
  try {
    // Clear legacy dummy cache if present
    if (localStorage.getItem(`neno_admin_content_v2_${collection}`)) {
      localStorage.removeItem(`neno_admin_content_v2_${collection}`);
    }
    if (localStorage.getItem(`neno_admin_content_${collection}`)) {
      localStorage.removeItem(`neno_admin_content_${collection}`);
    }

    const raw = localStorage.getItem(`${STORAGE_KEY_PREFIX}${collection}`);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as ManagedContent[];
    return Array.isArray(parsed)
      ? parsed.filter((item) => !item.id.startsWith('proj-') && !item.id.startsWith('cs-'))
      : [];
  } catch {
    return [];
  }
};

const setStoredContent = (collection: ContentCollection, items: ManagedContent[]) => {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(`${STORAGE_KEY_PREFIX}${collection}`, JSON.stringify(items));
  } catch (error) {
    console.warn(`Unable to persist ${collection} to localStorage:`, error);
  }
};

const request = async <T>(url: string, options?: RequestInit): Promise<T> => {
  const response = await fetch(url, { ...options, headers: { 'Content-Type': 'application/json', ...options?.headers } });
  const raw = await response.text();
  let body: unknown = null;
  if (raw.trim()) {
    try { body = JSON.parse(raw) as unknown; } catch { body = null; }
  }
  if (!response.ok) {
    const message = body && typeof body === 'object' && 'error' in body && typeof body.error === 'string' ? body.error : `Admin request failed (${response.status}).`;
    throw new Error(message);
  }
  return body as T;
};

export const getManagedContent = async (collection: ContentCollection): Promise<ManagedContent[]> => {
  try {
    const data = await request<ManagedContent[]>(`/api/admin/content/${collection}`);
    if (Array.isArray(data)) {
      setStoredContent(collection, data);
      return data;
    }
    return getStoredContent(collection);
  } catch {
    return getStoredContent(collection);
  }
};

export const createManagedContent = async (collection: ContentCollection, input: ManagedContentInput): Promise<ManagedContent> => {
  const newItem: ManagedContent = {
    ...input,
    id: `${collection === 'projects' ? 'proj' : 'cs'}-${Date.now()}`,
    updatedAt: new Date().toISOString().split('T')[0],
  };

  try {
    const saved = await request<ManagedContent>(`/api/admin/content/${collection}`, { method: 'POST', body: JSON.stringify(input) });
    const current = getStoredContent(collection);
    setStoredContent(collection, [saved, ...current.filter((i) => i.id !== saved.id)]);
    return saved;
  } catch {
    const current = getStoredContent(collection);
    setStoredContent(collection, [newItem, ...current]);
    return newItem;
  }
};

export const updateManagedContent = async (collection: ContentCollection, id: string, input: ManagedContentInput): Promise<ManagedContent> => {
  const updatedItem: ManagedContent = {
    ...input,
    id,
    updatedAt: new Date().toISOString().split('T')[0],
  };

  try {
    const saved = await request<ManagedContent>(`/api/admin/content/${collection}/${id}`, { method: 'PUT', body: JSON.stringify(input) });
    const current = getStoredContent(collection);
    setStoredContent(collection, current.map((i) => (i.id === id ? saved : i)));
    return saved;
  } catch {
    const current = getStoredContent(collection);
    setStoredContent(collection, current.map((i) => (i.id === id ? updatedItem : i)));
    return updatedItem;
  }
};

export const deleteManagedContent = async (collection: ContentCollection, id: string) => {
  try {
    await request(`/api/admin/content/${collection}/${id}`, { method: 'DELETE' });
  } catch {
    // continue to local removal
  }
  const current = getStoredContent(collection);
  setStoredContent(collection, current.filter((i) => i.id !== id));
};
