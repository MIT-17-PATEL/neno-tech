import { query } from './db';
import BlogV1Data from '@/assets/jsonData/blog/BlogV1Data.json';

export interface PublicBlog {
  id: string;
  title: string;
  slug: string;
  category: string;
  author: string;
  date: string;
  publishDate: string;
  readingTime: string;
  readTime: string;
  shortDescription: string;
  description: string;
  content: string;
  buttonText: string;
  buttonLink: string;
  thumb: string;
  thumbFull: string;
  status: 'Published' | 'Draft';
  updatedAt: string;
}

interface DbBlogRow {
  id: string;
  title: string;
  slug: string;
  category: string;
  author: string;
  date: string | null;
  publishDate: string | null;
  readingTime: string;
  shortDescription: string;
  content: string;
  buttonText: string;
  buttonLink: string;
  status: 'Published' | 'Draft';
  updatedAt: string;
}

const mapRowToPublicBlog = (row: DbBlogRow): PublicBlog => {
  const formattedDate = row.date || 'Recent';
  const readingTime = row.readingTime ? (row.readingTime.includes('min') ? row.readingTime : `${row.readingTime} min read`) : '5 min read';
  const thumbNum = ['1', '2', '3', '4', '5', '6'].includes(String(row.id)) ? String(row.id) : '1';
  
  return {
    id: String(row.id),
    title: row.title,
    slug: row.slug,
    category: row.category || 'AI Architecture',
    author: row.author || 'Neno AI Lab',
    date: formattedDate,
    publishDate: row.publishDate || '',
    readingTime,
    readTime: readingTime,
    shortDescription: row.shortDescription,
    description: row.shortDescription,
    content: row.content,
    buttonText: row.buttonText || 'Read Article',
    buttonLink: row.buttonLink || `/blog-single-with-sidebar/${row.slug || row.id}`,
    thumb: `${thumbNum}.jpg`,
    thumbFull: `${thumbNum}-full.jpg`,
    status: row.status,
    updatedAt: row.updatedAt,
  };
};

const getFallbackBlogs = (): PublicBlog[] => {
  return BlogV1Data.map(b => ({
    id: String(b.id),
    title: b.title,
    slug: b.slug || `article-${b.id}`,
    category: b.category,
    author: b.author,
    date: b.date,
    publishDate: '',
    readingTime: b.readingTime || b.readTime || '5 min read',
    readTime: b.readingTime || b.readTime || '5 min read',
    shortDescription: b.shortDescription || b.description,
    description: b.shortDescription || b.description,
    content: b.shortDescription || b.description,
    buttonText: b.buttonText || 'Read Article',
    buttonLink: `/blog-single-with-sidebar/${b.slug || b.id}`,
    thumb: b.thumb || `${b.id}.jpg`,
    thumbFull: b.thumbFull || `${b.id}-full.jpg`,
    status: 'Published',
    updatedAt: new Date().toISOString(),
  }));
};

const columns = `
  id, 
  title, 
  slug, 
  category, 
  author, 
  to_char(publish_date, 'DD Month, YYYY') AS "date", 
  to_char(publish_date, 'YYYY-MM-DD') AS "publishDate", 
  reading_time AS "readingTime", 
  short_description AS "shortDescription", 
  content, 
  button_text AS "buttonText", 
  button_link AS "buttonLink", 
  status, 
  updated_at AS "updatedAt"
`;

export const getPublishedBlogs = async (): Promise<PublicBlog[]> => {
  // During static page export in build phase (e.g. AWS Amplify CodeBuild), avoid hanging on remote DB
  if (process.env.NEXT_PHASE === 'phase-production-build') {
    return getFallbackBlogs();
  }

  try {
    const rows = await query<DbBlogRow>(
      `SELECT ${columns} FROM blog_posts WHERE status = 'Published' ORDER BY publish_date DESC NULLS LAST, updated_at DESC`
    );
    if (rows && rows.length > 0) {
      return rows.map(mapRowToPublicBlog);
    }
  } catch (error) {
    console.warn('Database query failed in getPublishedBlogs, using baseline articles:', error);
  }
  return getFallbackBlogs();
};

export const getPublishedBlogByIdOrSlug = async (idOrSlug: string): Promise<PublicBlog | null> => {
  if (process.env.NEXT_PHASE === 'phase-production-build') {
    const fallback = getFallbackBlogs().find(b => b.id === idOrSlug || b.slug === idOrSlug);
    return fallback || null;
  }

  try {
    const rows = await query<DbBlogRow>(
      `SELECT ${columns} FROM blog_posts WHERE (id = $1 OR slug = $1) AND status = 'Published' LIMIT 1`,
      [idOrSlug]
    );
    if (rows.length) {
      return mapRowToPublicBlog(rows[0]);
    }
  } catch (error) {
    console.warn(`Database query for blog "${idOrSlug}" failed:`, error);
  }

  // Check fallback baseline by id or slug
  const fallback = getFallbackBlogs().find(b => b.id === idOrSlug || b.slug === idOrSlug);
  return fallback || null;
};
