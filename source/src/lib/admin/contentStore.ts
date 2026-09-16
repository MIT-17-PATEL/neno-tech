import type { ManagedContent, ManagedContentInput } from '@/types/admin';
export type ContentCollection = 'case-studies' | 'projects';
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
export const getManagedContent = (collection: ContentCollection): Promise<ManagedContent[]> => request(`/api/admin/content/${collection}`);
export const createManagedContent = (collection: ContentCollection, input: ManagedContentInput): Promise<ManagedContent> => request(`/api/admin/content/${collection}`, { method: 'POST', body: JSON.stringify(input) });
export const updateManagedContent = (collection: ContentCollection, id: string, input: ManagedContentInput): Promise<ManagedContent> => request(`/api/admin/content/${collection}/${id}`, { method: 'PUT', body: JSON.stringify(input) });
export const deleteManagedContent = (collection: ContentCollection, id: string) => request(`/api/admin/content/${collection}/${id}`, { method: 'DELETE' });
