import type { Blog, BlogInput } from '@/types/admin';

const STORAGE_KEY = 'neno_admin_blogs_v3';

export const INITIAL_BLOGS: Blog[] = [];

const DUMMY_IDS = new Set(['blog-1', 'blog-2', 'blog-3', 'blog-4', 'blog-5']);
const DUMMY_SLUGS = new Set([
  'architecting-autonomous-multi-agent-swarms',
  'production-rag-at-scale-hybrid-search',
  'engineering-real-time-voice-agents-sub-500ms',
  'building-production-mcp-servers-enterprise-databases',
  'lora-fine-tuning-vs-prompt-context-caching-benchmark',
]);

const getStoredBlogs = (): Blog[] => {
  if (typeof window === 'undefined') return [];
  try {
    // Clear legacy dummy cache if present
    if (localStorage.getItem('neno_admin_blogs_v2')) localStorage.removeItem('neno_admin_blogs_v2');
    if (localStorage.getItem('neno_admin_blogs')) localStorage.removeItem('neno_admin_blogs');

    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as Blog[];
    return Array.isArray(parsed)
      ? parsed.filter((b) => !DUMMY_IDS.has(b.id) && !DUMMY_SLUGS.has(b.slug))
      : [];
  } catch {
    return [];
  }
};

const setStoredBlogs = (blogs: Blog[]) => {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(blogs));
  } catch (error) {
    console.warn('Unable to persist blogs to localStorage:', error);
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

export const getBlogs = async (): Promise<Blog[]> => {
  try {
    const data = await request<Blog[]>('/api/admin/blogs');
    if (Array.isArray(data)) {
      setStoredBlogs(data);
      return data;
    }
    return getStoredBlogs();
  } catch {
    return getStoredBlogs();
  }
};

export const createBlog = async (input: BlogInput): Promise<Blog> => {
  const newBlog: Blog = {
    ...input,
    id: typeof crypto !== 'undefined' && crypto.randomUUID ? crypto.randomUUID() : `blog_post_${Date.now()}`,
    updatedAt: new Date().toISOString().split('T')[0],
  };

  try {
    const saved = await request<Blog>('/api/admin/blogs', { method: 'POST', body: JSON.stringify(input) });
    const current = getStoredBlogs();
    setStoredBlogs([saved, ...current.filter((b) => b.id !== saved.id)]);
    return saved;
  } catch {
    const current = getStoredBlogs();
    setStoredBlogs([newBlog, ...current]);
    return newBlog;
  }
};

export const updateBlog = async (id: string, input: BlogInput): Promise<Blog> => {
  const updatedBlog: Blog = {
    ...input,
    id,
    updatedAt: new Date().toISOString().split('T')[0],
  };

  try {
    const saved = await request<Blog>(`/api/admin/blogs/${id}`, { method: 'PUT', body: JSON.stringify(input) });
    const current = getStoredBlogs();
    setStoredBlogs(current.map((b) => (b.id === id ? saved : b)));
    return saved;
  } catch {
    const current = getStoredBlogs();
    setStoredBlogs(current.map((b) => (b.id === id ? updatedBlog : b)));
    return updatedBlog;
  }
};

export const removeBlog = async (id: string) => {
  try {
    await request(`/api/admin/blogs/${id}`, { method: 'DELETE' });
  } catch {
    // continue to local removal
  }
  const current = getStoredBlogs();
  setStoredBlogs(current.filter((b) => b.id !== id));
};

export const setBlogStatus = async (id: string, status: Blog['status']) => {
  const blogs = await getBlogs();
  const current = blogs.find((blog) => blog.id === id);
  if (!current) throw new Error('Blog not found.');
  return updateBlog(id, { ...current, status });
};
