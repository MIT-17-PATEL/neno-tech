import crypto from 'node:crypto';
import { NextResponse } from 'next/server';
import { isAdminRequest } from '@/lib/server/adminAuth';
import { query } from '@/lib/server/db';

const unauthorized = () => NextResponse.json({ error: 'Unauthorised.' }, { status: 401 });

const PROJECT_COLS = `
  id,
  title,
  slug,
  client,
  COALESCE(industry, category, '') AS "industry",
  description AS "shortDescription",
  content AS "fullDescription",
  COALESCE(image, link, '') AS "image",
  COALESCE(metric1_value, '') AS "metric1Value",
  COALESCE(metric1_label, '') AS "metric1Label",
  COALESCE(metric2_value, '') AS "metric2Value",
  COALESCE(metric2_label, '') AS "metric2Label",
  COALESCE(metric3_value, '') AS "metric3Value",
  COALESCE(metric3_label, '') AS "metric3Label",
  COALESCE(tags, '{}') AS "tags",
  COALESCE(related_case_study, '') AS "relatedCaseStudy",
  status,
  to_char(created_at, 'YYYY-MM-DD') AS "createdAt",
  to_char(updated_at, 'YYYY-MM-DD') AS "updatedAt"
`;

const CASE_STUDY_COLS = `
  id,
  title,
  slug,
  client,
  COALESCE(industry, category, '') AS "industry",
  COALESCE(badge, 'NENO AI DEPLOYMENT') AS "badge",
  COALESCE(hero_image, link, '') AS "heroImage",
  COALESCE(overview, description, '') AS "overview",
  COALESCE(challenge, '') AS "challenge",
  COALESCE(solution, content, '') AS "solution",
  COALESCE(implementation, '') AS "implementation",
  COALESCE(results, '') AS "results",
  COALESCE(metric1_value, '') AS "metric1Value",
  COALESCE(metric1_label, '') AS "metric1Label",
  COALESCE(metric2_value, '') AS "metric2Value",
  COALESCE(metric2_label, '') AS "metric2Label",
  COALESCE(metric3_value, '') AS "metric3Value",
  COALESCE(metric3_label, '') AS "metric3Label",
  COALESCE(technologies, '{}') AS "technologies",
  status,
  to_char(publish_date, 'YYYY-MM-DD') AS "publishDate",
  to_char(created_at, 'YYYY-MM-DD') AS "createdAt",
  to_char(updated_at, 'YYYY-MM-DD') AS "updatedAt"
`;

export async function GET(_: Request, context: { params: Promise<{ collection: string }> }) {
  if (!(await isAdminRequest())) return unauthorized();
  const { collection } = await context.params;

  try {
    if (collection === 'projects') {
      const rows = await query(`SELECT ${PROJECT_COLS} FROM projects ORDER BY updated_at DESC`);
      return NextResponse.json(rows);
    }

    if (collection === 'case-studies') {
      const rows = await query(`SELECT ${CASE_STUDY_COLS} FROM case_studies ORDER BY updated_at DESC`);
      return NextResponse.json(rows);
    }

    return NextResponse.json({ error: 'Unknown content collection.' }, { status: 400 });
  } catch (error) {
    console.error('Admin content list failed:', error);
    return NextResponse.json(
      {
        error: 'Unable to load content from PostgreSQL.',
        details: process.env.NODE_ENV === 'production' ? undefined : error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}

export async function POST(request: Request, context: { params: Promise<{ collection: string }> }) {
  if (!(await isAdminRequest())) return unauthorized();
  const { collection } = await context.params;

  try {
    const body = await request.json();
    const id = body.id || `item-${crypto.randomUUID().slice(0, 8)}`;
    const slug = body.slug || body.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

    if (collection === 'projects') {
      const rows = await query(
        `INSERT INTO projects (
          id, title, slug, category, client, description, content, link,
          industry, image, metric1_value, metric1_label, metric2_value, metric2_label,
          metric3_value, metric3_label, tags, related_case_study, status
        ) VALUES (
          $1, $2, $3, $4, $5, $6, $7, $8,
          $9, $10, $11, $12, $13, $14,
          $15, $16, $17, $18, $19
        ) RETURNING ${PROJECT_COLS}`,
        [
          id,
          body.title,
          slug,
          body.industry || body.category || '',
          body.client || '',
          body.shortDescription || '',
          body.fullDescription || '',
          body.image || '',
          body.industry || '',
          body.image || '',
          body.metric1Value || '',
          body.metric1Label || '',
          body.metric2Value || '',
          body.metric2Label || '',
          body.metric3Value || '',
          body.metric3Label || '',
          body.tags || [],
          body.relatedCaseStudy || '',
          body.status || 'Published',
        ]
      );
      return NextResponse.json(rows[0], { status: 201 });
    }

    if (collection === 'case-studies') {
      const rows = await query(
        `INSERT INTO case_studies (
          id, title, slug, category, client, description, content, link, publish_date,
          industry, badge, hero_image, overview, challenge, solution, implementation,
          results, metric1_value, metric1_label, metric2_value, metric2_label,
          metric3_value, metric3_label, technologies, status
        ) VALUES (
          $1, $2, $3, $4, $5, $6, $7, $8, $9,
          $10, $11, $12, $13, $14, $15, $16,
          $17, $18, $19, $20, $21,
          $22, $23, $24, $25
        ) RETURNING ${CASE_STUDY_COLS}`,
        [
          id,
          body.title,
          slug,
          body.industry || body.category || '',
          body.client || '',
          body.overview || '',
          body.solution || '',
          body.heroImage || '',
          body.publishDate || null,
          body.industry || '',
          body.badge || 'NENO AI DEPLOYMENT',
          body.heroImage || '',
          body.overview || '',
          body.challenge || '',
          body.solution || '',
          body.implementation || '',
          body.results || '',
          body.metric1Value || '',
          body.metric1Label || '',
          body.metric2Value || '',
          body.metric2Label || '',
          body.metric3Value || '',
          body.metric3Label || '',
          body.technologies || [],
          body.status || 'Published',
        ]
      );
      return NextResponse.json(rows[0], { status: 201 });
    }

    return NextResponse.json({ error: 'Unknown content collection.' }, { status: 400 });
  } catch (error) {
    console.error('Admin content create failed:', error);
    return NextResponse.json(
      {
        error: 'Unable to save content to PostgreSQL.',
        details: process.env.NODE_ENV === 'production' ? undefined : error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}
