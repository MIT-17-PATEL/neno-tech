import crypto from 'node:crypto';
import { NextResponse } from 'next/server';
import { isAdminRequest } from '@/lib/server/adminAuth';
import { query } from '@/lib/server/db';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

const unauthorized = () => NextResponse.json({ error: 'Unauthorised.' }, { status: 401 });
const columns = `id, title, slug, category, author, to_char(publish_date, 'YYYY-MM-DD') AS "publishDate", reading_time AS "readingTime", short_description AS "shortDescription", content, button_text AS "buttonText", button_link AS "buttonLink", status, updated_at AS "updatedAt"`;

export async function GET() {
  if (!(await isAdminRequest())) return unauthorized();
  return NextResponse.json(await query(`SELECT ${columns} FROM blogs ORDER BY updated_at DESC`), {
    headers: {
      'Cache-Control': 'no-store, no-cache, must-revalidate',
    },
  });
}

export async function POST(request: Request) {
  if (!(await isAdminRequest())) return unauthorized();
  const body = await request.json();
  const id = crypto.randomUUID();
  const rows = await query(
    `INSERT INTO blogs (id,title,slug,category,author,publish_date,reading_time,short_description,content,button_text,button_link,status) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12) RETURNING ${columns}`, 
    [id, body.title, body.slug, body.category, body.author, body.publishDate || null, body.readingTime || '', body.shortDescription, body.content, body.buttonText || '', body.buttonLink || '', body.status]
  );
  return NextResponse.json(rows[0], { status: 201 });
}
