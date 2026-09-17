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

export async function PUT(request: Request, context: { params: Promise<{ collection: string; id: string }> }) {
  if (!(await isAdminRequest())) return unauthorized();
  const { collection, id } = await context.params;

  try {
    const body = await request.json();

    if (collection === 'projects') {
      const rows = await query(
        `UPDATE projects SET
          title = COALESCE($2, title),
          slug = COALESCE($3, slug),
          client = COALESCE($4, client),
          category = COALESCE($5, category),
          industry = COALESCE($5, industry),
          description = COALESCE($6, description),
          content = COALESCE($7, content),
          link = COALESCE($8, link),
          image = COALESCE($8, image),
          metric1_value = COALESCE($9, metric1_value),
          metric1_label = COALESCE($10, metric1_label),
          metric2_value = COALESCE($11, metric2_value),
          metric2_label = COALESCE($12, metric2_label),
          metric3_value = COALESCE($13, metric3_value),
          metric3_label = COALESCE($14, metric3_label),
          tags = COALESCE($15, tags),
          related_case_study = COALESCE($16, related_case_study),
          status = COALESCE($17, status),
          updated_at = NOW()
        WHERE id = $1
        RETURNING ${PROJECT_COLS}`,
        [
          id,
          body.title,
          body.slug,
          body.client,
          body.industry || body.category,
          body.shortDescription,
          body.fullDescription,
          body.image,
          body.metric1Value,
          body.metric1Label,
          body.metric2Value,
          body.metric2Label,
          body.metric3Value,
          body.metric3Label,
          body.tags,
          body.relatedCaseStudy,
          body.status,
        ]
      );
      return rows[0] ? NextResponse.json(rows[0]) : NextResponse.json({ error: 'Project not found.' }, { status: 404 });
    }

    if (collection === 'case-studies') {
      const rows = await query(
        `UPDATE case_studies SET
          title = COALESCE($2, title),
          slug = COALESCE($3, slug),
          client = COALESCE($4, client),
          category = COALESCE($5, category),
          industry = COALESCE($5, industry),
          badge = COALESCE($6, badge),
          hero_image = COALESCE($7, hero_image),
          link = COALESCE($7, link),
          overview = COALESCE($8, overview),
          description = COALESCE($8, description),
          challenge = COALESCE($9, challenge),
          solution = COALESCE($10, solution),
          content = COALESCE($10, content),
          implementation = COALESCE($11, implementation),
          results = COALESCE($12, results),
          metric1_value = COALESCE($13, metric1_value),
          metric1_label = COALESCE($14, metric1_label),
          metric2_value = COALESCE($15, metric2_value),
          metric2_label = COALESCE($16, metric2_label),
          metric3_value = COALESCE($17, metric3_value),
          metric3_label = COALESCE($18, metric3_label),
          technologies = COALESCE($19, technologies),
          publish_date = COALESCE($20, publish_date),
          status = COALESCE($21, status),
          updated_at = NOW()
        WHERE id = $1
        RETURNING ${CASE_STUDY_COLS}`,
        [
          id,
          body.title,
          body.slug,
          body.client,
          body.industry || body.category,
          body.badge,
          body.heroImage,
          body.overview,
          body.challenge,
          body.solution,
          body.implementation,
          body.results,
          body.metric1Value,
          body.metric1Label,
          body.metric2Value,
          body.metric2Label,
          body.metric3Value,
          body.metric3Label,
          body.technologies,
          body.publishDate || null,
          body.status,
        ]
      );
      return rows[0] ? NextResponse.json(rows[0]) : NextResponse.json({ error: 'Case study not found.' }, { status: 404 });
    }

    return NextResponse.json({ error: 'Unknown content collection.' }, { status: 400 });
  } catch (error) {
    console.error('Admin content update failed:', error);
    return NextResponse.json(
      {
        error: 'Unable to update content in PostgreSQL.',
        details: process.env.NODE_ENV === 'production' ? undefined : error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}

export async function DELETE(_: Request, context: { params: Promise<{ collection: string; id: string }> }) {
  if (!(await isAdminRequest())) return unauthorized();
  const { collection, id } = await context.params;

  const table = collection === 'case-studies' ? 'case_studies' : collection === 'projects' ? 'projects' : null;
  if (!table) return NextResponse.json({ error: 'Unknown content collection.' }, { status: 400 });

  try {
    await query(`DELETE FROM "${table}" WHERE id = $1`, [id]);
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Admin content delete failed:', error);
    return NextResponse.json(
      {
        error: 'Unable to delete content from PostgreSQL.',
        details: process.env.NODE_ENV === 'production' ? undefined : error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}
