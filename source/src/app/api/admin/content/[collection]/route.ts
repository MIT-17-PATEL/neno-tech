import crypto from 'node:crypto';
import { NextResponse } from 'next/server';
import { isAdminRequest } from '@/lib/server/adminAuth';
import { query } from '@/lib/server/db';

const tableFor = (collection: string) => collection === 'case-studies' ? 'case_studies' : collection === 'projects' ? 'projects' : null;
const columns = `id,title,slug,category,client,to_char(publish_date,'YYYY-MM-DD') AS "publishDate",description AS "shortDescription",content,link,status,updated_at AS "updatedAt"`;
const unauthorized = () => NextResponse.json({ error: 'Unauthorised.' }, { status: 401 });

export async function GET(_: Request, context: { params: Promise<{ collection: string }> }) {
  if (!(await isAdminRequest())) return unauthorized();
  const table = tableFor((await context.params).collection);
  if (!table) return NextResponse.json({ error: 'Unknown content collection.' }, { status: 400 });
  try {
    return NextResponse.json(await query(`SELECT ${columns} FROM "${table}" ORDER BY updated_at DESC`));
  } catch (error) {
    console.error('Admin content list failed:', error);
    return NextResponse.json({ error: 'Unable to load content from PostgreSQL.', details: process.env.NODE_ENV === 'production' ? undefined : error instanceof Error ? error.message : String(error) }, { status: 500 });
  }
}

export async function POST(request: Request, context: { params: Promise<{ collection: string }> }) {
  if (!(await isAdminRequest())) return unauthorized();
  const table = tableFor((await context.params).collection);
  if (!table) return NextResponse.json({ error: 'Unknown content collection.' }, { status: 400 });
  try {
    const body = await request.json();
    const id = crypto.randomUUID();
    const rows = await query(`INSERT INTO "${table}" (id,title,slug,category,client,publish_date,description,content,link,status) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10) RETURNING ${columns}`, [id, body.title, body.slug || id, body.category || '', body.client || '', body.publishDate || null, body.shortDescription, body.content, body.link || '', body.status]);
    return NextResponse.json(rows[0], { status: 201 });
  } catch (error) {
    console.error('Admin content create failed:', error);
    return NextResponse.json({ error: 'Unable to save content to PostgreSQL.', details: process.env.NODE_ENV === 'production' ? undefined : error instanceof Error ? error.message : String(error) }, { status: 500 });
  }
}
