import type { Blog, BlogInput } from '@/types/admin';

const STORAGE_KEY = 'neno_admin_blogs_v2';

export const INITIAL_BLOGS: Blog[] = [
  {
    id: 'blog-1',
    title: 'Architecting Autonomous Multi-Agent Swarms with LangGraph & Claude 3.5',
    slug: 'architecting-autonomous-multi-agent-swarms',
    category: 'Agentic AI',
    author: 'Neno AI Lab',
    publishDate: '2026-03-10',
    readingTime: '5 min read',
    shortDescription: 'How to design resilient multi-agent swarms with Claude 3.5 Sonnet, tool-calling safeguards, and stateful graph recovery in mission-critical environments.',
    content: 'Building production-grade multi-agent architectures requires transitioning from linear chains to stateful cyclical execution graphs. In this deep dive, we explore how LangGraph orchestrates specialized micro-agents with deterministic handoffs, error-recovery loops, and rigorous human-in-the-loop validation checkpoints.',
    buttonText: 'Read Article',
    buttonLink: '/blog-single-with-sidebar/1',
    status: 'Published',
    updatedAt: '2026-03-10',
  },
  {
    id: 'blog-2',
    title: 'Production RAG at Scale: Hybrid Search, Re-Ranking, and Vector Optimization',
    slug: 'production-rag-at-scale-hybrid-search',
    category: 'Enterprise AI',
    author: 'Neno Systems',
    publishDate: '2026-03-04',
    readingTime: '7 min read',
    shortDescription: 'Optimizing enterprise retrieval pipelines with hybrid BM25 + dense vector embeddings, cross-encoder re-ranking, and quantization techniques.',
    content: 'Standard vector search degrades when dealing with enterprise acronyms, part numbers, and domain-specific terminology. Learn how we engineer hybrid sparse-dense retrieval pipelines with Cohere re-ranking and pgvector index tuning to achieve 98.6% retrieval precision.',
    buttonText: 'Read Article',
    buttonLink: '/blog-single-with-sidebar/2',
    status: 'Published',
    updatedAt: '2026-03-04',
  },
  {
    id: 'blog-3',
    title: 'Engineering Real-Time Autonomous Voice Agents with Sub-500ms Latency',
    slug: 'engineering-real-time-voice-agents-sub-500ms',
    category: 'Voice AI',
    author: 'Voice AI Research',
    publishDate: '2026-02-26',
    readingTime: '6 min read',
    shortDescription: 'Building full-duplex conversational voice agents with sub-500ms turn-around latency using WebRTC and streaming speech synthesis architectures.',
    content: 'Human conversation requires response latencies under 500 milliseconds. We examine audio chunk streaming, websocket pipeline parallelization, local voice activity detection (VAD), and speculative LLM completion to eliminate conversational lag.',
    buttonText: 'Read Article',
    buttonLink: '/blog-single-with-sidebar/3',
    status: 'Published',
    updatedAt: '2026-02-26',
  },
  {
    id: 'blog-4',
    title: 'Building Production MCP Servers: Connecting LLMs to Enterprise Databases',
    slug: 'building-production-mcp-servers-enterprise-databases',
    category: 'Tool Use & MCP',
    author: 'Mit Patel',
    publishDate: '2026-02-18',
    readingTime: '8 min read',
    shortDescription: 'Connecting LLMs securely to production databases, internal APIs, and private infrastructure using the Model Context Protocol (MCP).',
    content: 'The Model Context Protocol establishes an open, standardized bridge between foundation models and private data silos. Here is an end-to-end engineering guide to deploying secure, rate-limited, and audited MCP servers in high-compliance environments.',
    buttonText: 'Read Article',
    buttonLink: '/blog-single-with-sidebar/4',
    status: 'Published',
    updatedAt: '2026-02-18',
  },
  {
    id: 'blog-5',
    title: 'LoRA Fine-Tuning vs Prompt Context Caching: 2026 Production Benchmark',
    slug: 'lora-fine-tuning-vs-prompt-context-caching-benchmark',
    category: 'Model Engineering',
    author: 'Neno Research',
    publishDate: '2026-02-12',
    readingTime: '6 min read',
    shortDescription: 'A comprehensive benchmark on cost, latency, and accuracy trade-offs between LoRA fine-tuning and prompt context caching for domain-specific tasks.',
    content: 'With context caching now widely available across top-tier LLM providers, should engineering teams still invest in LoRA fine-tuning? We analyze empirical benchmarks across 100,000 evaluation prompts measuring domain adherence, token expenditure, and cold-start latency.',
    buttonText: 'Read Article',
    buttonLink: '/blog-single-with-sidebar/5',
    status: 'Published',
    updatedAt: '2026-02-12',
  },
];

const getStoredBlogs = (): Blog[] => {
  if (typeof window === 'undefined') return INITIAL_BLOGS;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_BLOGS));
      return INITIAL_BLOGS;
    }
    const parsed = JSON.parse(raw) as Blog[];
    return Array.isArray(parsed) && parsed.length ? parsed : INITIAL_BLOGS;
  } catch {
    return INITIAL_BLOGS;
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
    if (Array.isArray(data) && data.length) {
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
    id: `blog-${Date.now()}`,
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
