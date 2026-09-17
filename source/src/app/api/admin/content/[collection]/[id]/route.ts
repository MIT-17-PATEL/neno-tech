import { NextResponse } from 'next/server';
import { isAdminRequest } from '@/lib/server/adminAuth';
import { query } from '@/lib/server/db';

const tableFor = (collection: string) => collection === 'case-studies' ? 'case_studies' : collection === 'projects' ? 'projects' : null;
const columns = `id,title,slug,category,client,to_char(publish_date,'YYYY-MM-DD') AS "publishDate",description AS "shortDescription",content,link,status,updated_at AS "updatedAt"`;
const unauthorized = () => NextResponse.json({ error: 'Unauthorised.' }, { status: 401 });

export async function PUT(request: Request, context: { params: Promise<{ collection: string; id: string }> }) {
  if (!(await isAdminRequest())) return unauthorized();
  const { collection, id } = await context.params;
  const table = tableFor(collection);
  if (!table) return NextResponse.json({ error: 'Unknown content collection.' }, { status: 400 });
  try {
    const body = await request.json();
    const rows = await query(`UPDATE "${table}" SET title=$2,slug=$3,category=$4,client=$5,publish_date=$6,description=$7,content=$8,link=$9,status=$10,updated_at=NOW() WHERE id=$1 RETURNING ${columns}`, [id, body.title, body.slug || id, body.category || '', body.client || '', body.publishDate || null, body.shortDescription, body.content, body.link || '', body.status]);
    return rows[0] ? NextResponse.json(rows[0]) : NextResponse.json({ error: 'Entry not found.' }, { status: 404 });
  } catch (error) {
    console.error('Admin content update failed:', error);
    return NextResponse.json({ error: 'Unable to update content in PostgreSQL.', details: process.env.NODE_ENV === 'production' ? undefined : error instanceof Error ? error.message : String(error) }, { status: 500 });
  }
}

export async function DELETE(_: Request, context: { params: Promise<{ collection: string; id: string }> }) {
  if (!(await isAdminRequest())) return unauthorized();
  const { collection, id } = await context.params;
  const table = tableFor(collection);
  if (!table) return NextResponse.json({ error: 'Unknown content collection.' }, { status: 400 });
  try {
    await query(`DELETE FROM "${table}" WHERE id=$1`, [id]);
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Admin content delete failed:', error);
    return NextResponse.json({ error: 'Unable to delete content from PostgreSQL.', details: process.env.NODE_ENV === 'production' ? undefined : error instanceof Error ? error.message : String(error) }, { status: 500 });
  }
}
