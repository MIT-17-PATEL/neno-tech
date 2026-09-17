import type { Blog, BlogInput } from '@/types/admin';
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
export const getBlogs = (): Promise<Blog[]> => request('/api/admin/blogs');
export const createBlog = (input: BlogInput): Promise<Blog> => request('/api/admin/blogs', { method: 'POST', body: JSON.stringify(input) });
export const updateBlog = (id: string, input: BlogInput): Promise<Blog> => request(`/api/admin/blogs/${id}`, { method: 'PUT', body: JSON.stringify(input) });
export const removeBlog = (id: string) => request(`/api/admin/blogs/${id}`, { method: 'DELETE' });
export const setBlogStatus = async (id: string, status: Blog['status']) => {
  const blogs = await getBlogs();
  const current = blogs.find((blog) => blog.id === id);
  if (!current) throw new Error('Blog not found.');
  return request(`/api/admin/blogs/${id}`, { method: 'PUT', body: JSON.stringify({ ...current, status }) });
};
