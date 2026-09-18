import { NextResponse } from 'next/server';
import { isAdminRequest } from '@/lib/server/adminAuth';
import { query } from '@/lib/server/db';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

const columns = `id, title, slug, category, author, to_char(publish_date, 'YYYY-MM-DD') AS "publishDate", reading_time AS "readingTime", short_description AS "shortDescription", content, button_text AS "buttonText", button_link AS "buttonLink", status, updated_at AS "updatedAt"`;
const unauthorized = () => NextResponse.json({ error: 'Unauthorised.' }, { status: 401 });

export async function PUT(request: Request, context: { params: Promise<{ id: string }> }) {
  if (!(await isAdminRequest())) return unauthorized();
  const { id } = await context.params; 
  const body = await request.json();
  const rows = await query(
    `UPDATE blogs SET title=$2,slug=$3,category=$4,author=$5,publish_date=$6,reading_time=$7,short_description=$8,content=$9,button_text=$10,button_link=$11,status=$12,updated_at=NOW() WHERE id=$1 RETURNING ${columns}`, 
    [id, body.title, body.slug, body.category, body.author, body.publishDate || null, body.readingTime || '', body.shortDescription, body.content, body.buttonText || '', body.buttonLink || '', body.status]
  );
  return rows[0] ? NextResponse.json(rows[0]) : NextResponse.json({ error: 'Blog not found.' }, { status: 404 });
}

export async function DELETE(_: Request, context: { params: Promise<{ id: string }> }) {
  if (!(await isAdminRequest())) return unauthorized();
  const { id } = await context.params; 
  await query('DELETE FROM blogs WHERE id=$1', [id]); 
  return NextResponse.json({ ok: true });
}
