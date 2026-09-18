import { NextResponse } from 'next/server';
import { getPublishedBlogs } from '@/lib/server/blogs';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  try {
    const blogs = await getPublishedBlogs();
    return NextResponse.json(blogs, {
      headers: {
        'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
      },
    });
  } catch {
    return NextResponse.json([], { status: 500 });
  }
}
