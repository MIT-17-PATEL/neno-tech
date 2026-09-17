'use client';
/* eslint-disable react-hooks/set-state-in-effect */

import Link from 'next/link';
import { useEffect, useState, useMemo } from 'react';
import { getBlogs } from '@/lib/admin/blogStore';
import { getProjects } from '@/lib/admin/projectStore';
import { getCaseStudies } from '@/lib/admin/caseStudyStore';
import type { Blog, Project, CaseStudy, ContentStatus } from '@/types/admin';
import { AdminIcon } from './AdminIcons';
import { AdminShell } from './AdminShell';
import styles from './admin.module.css';
import { formatAdminDate } from '@/lib/admin/dateUtils';

type TimeFilter = '7D' | '30D' | '3M' | '12M';

type CombinedContent = {
  id: string;
  title: string;
  type: 'Blog' | 'Project' | 'Case Study';
  context: string;
  status: ContentStatus;
  rawDate: string;
  editHref: string;
};

const dateLabel = (date: string) => formatAdminDate(date, 'Not scheduled');

export const AdminDashboard = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
  const [loading, setLoading] = useState(true);
  const [timeFilter, setTimeFilter] = useState<TimeFilter>('30D');
  const [hoveredBucket, setHoveredBucket] = useState<number | null>(null);

  useEffect(() => {
    void Promise.all([getBlogs(), getProjects(), getCaseStudies()])
      .then(([b, p, c]) => {
        setBlogs(b);
        setProjects(p);
        setCaseStudies(c);
      })
      .catch(() => undefined)
      .finally(() => setLoading(false));
  }, []);

  // Compute metrics
  const blogPublished = blogs.filter((b) => b.status === 'Published').length;
  const blogDrafts = blogs.length - blogPublished;

  const projectPublished = projects.filter((p) => p.status === 'Published').length;
  const projectDrafts = projects.length - projectPublished;

  const casePublished = caseStudies.filter((c) => c.status === 'Published').length;
  const caseDrafts = caseStudies.length - casePublished;

  const totalContent = blogs.length + projects.length + caseStudies.length;

  const cards = [
    { label: 'Total Blogs', value: blogs.length, caption: `${blogPublished} Published · ${blogDrafts} Drafts` },
    { label: 'Published Blogs', value: blogPublished, caption: `${blogs.length ? Math.round((blogPublished / blogs.length) * 100) : 0}% of blog library` },
    { label: 'Draft Blogs', value: blogDrafts, caption: 'Pending publication' },
    { label: 'Total Projects', value: projects.length, caption: `${projectPublished} Published` },
    { label: 'Published Projects', value: projectPublished, caption: 'Live portfolio items' },
    { label: 'Total Case Studies', value: caseStudies.length, caption: `${casePublished} Published` },
    { label: 'Published Case Studies', value: casePublished, caption: 'Client outcomes' },
    { label: 'Total Content', value: totalContent, caption: 'Blogs + Projects + Case Studies' },
  ];

  // Combined recent content items
  const recentContent = useMemo<CombinedContent[]>(() => {
    const list: CombinedContent[] = [
      ...blogs.map((b) => ({
        id: `blog-${b.id}`,
        title: b.title,
        type: 'Blog' as const,
        context: b.category || 'General',
        status: b.status as ContentStatus,
        rawDate: b.updatedAt || b.publishDate || new Date().toISOString(),
        editHref: '/get/admin/blogs',
      })),
      ...projects.map((p) => ({
        id: `project-${p.id}`,
        title: p.title,
        type: 'Project' as const,
        context: `${p.client}${p.industry ? ` · ${p.industry}` : ''}`,
        status: p.status,
        rawDate: p.updatedAt || p.createdAt || new Date().toISOString(),
        editHref: '/get/admin/projects',
      })),
      ...caseStudies.map((c) => ({
        id: `case-${c.id}`,
        title: c.title,
        type: 'Case Study' as const,
        context: `${c.client}${c.industry ? ` · ${c.industry}` : ''}`,
        status: c.status,
        rawDate: c.updatedAt || c.createdAt || c.publishDate || new Date().toISOString(),
        editHref: '/get/admin/case-studies',
      })),
    ];

    return list.sort((a, b) => new Date(b.rawDate).getTime() - new Date(a.rawDate).getTime()).slice(0, 8);
  }, [blogs, projects, caseStudies]);

  // Activity Graph Buckets
  const graphData = useMemo(() => {
    const now = new Date();
    let bucketCount = 7;
    let daysPerBucket = 1;

    if (timeFilter === '7D') {
      bucketCount = 7;
      daysPerBucket = 1;
    } else if (timeFilter === '30D') {
      bucketCount = 6;
      daysPerBucket = 5;
    } else if (timeFilter === '3M') {
      bucketCount = 6;
      daysPerBucket = 15;
    } else if (timeFilter === '12M') {
      bucketCount = 12;
      daysPerBucket = 30;
    }

    const buckets = Array.from({ length: bucketCount }, (_, i) => {
      const endOffset = (bucketCount - 1 - i) * daysPerBucket;
      const startOffset = endOffset + daysPerBucket;

      const endDate = new Date(now.getTime() - endOffset * 86400000);
      const startDate = new Date(now.getTime() - startOffset * 86400000);

      const label =
        daysPerBucket === 1
          ? startDate.toLocaleDateString('en-US', { weekday: 'short', month: 'numeric', day: 'numeric' })
          : daysPerBucket >= 30
          ? startDate.toLocaleDateString('en-US', { month: 'short' })
          : `${startDate.getDate()}/${startDate.getMonth() + 1}`;

      return {
        label,
        startTime: startDate.getTime(),
        endTime: endDate.getTime(),
        blogs: 0,
        projects: 0,
        caseStudies: 0,
      };
    });

    const checkDateInBucket = (dateStr: string, bucket: (typeof buckets)[0]) => {
      if (!dateStr) return false;
      const t = new Date(dateStr).getTime();
      return t >= bucket.startTime && t <= bucket.endTime;
    };

    // Populate counts
    blogs.forEach((b) => {
      const bDate = b.updatedAt || b.publishDate;
      const bucket = buckets.find((bk) => checkDateInBucket(bDate, bk));
      if (bucket) bucket.blogs += 1;
      else if (buckets.length) buckets[buckets.length - 1].blogs += 1;
    });

    projects.forEach((p) => {
      const pDate = p.updatedAt || p.createdAt;
      const bucket = buckets.find((bk) => checkDateInBucket(pDate, bk));
      if (bucket) bucket.projects += 1;
      else if (buckets.length) buckets[buckets.length - 1].projects += 1;
    });

    caseStudies.forEach((c) => {
      const cDate = c.updatedAt || c.createdAt || c.publishDate;
      const bucket = buckets.find((bk) => checkDateInBucket(cDate, bk));
      if (bucket) bucket.caseStudies += 1;
      else if (buckets.length) buckets[buckets.length - 1].caseStudies += 1;
    });

    const maxVal = Math.max(1, ...buckets.flatMap((b) => [b.blogs, b.projects, b.caseStudies]));

    return { buckets, maxVal };
  }, [blogs, projects, caseStudies, timeFilter]);

  // Distribution chart parameters
  const distributionData = useMemo(() => {
    const total = totalContent || 1;
    const blogPct = Math.round((blogs.length / total) * 100);
    const projPct = Math.round((projects.length / total) * 100);
    const casePct = Math.max(0, 100 - blogPct - projPct);

    return [
      { label: 'Blogs', count: blogs.length, pct: blogPct, color: '#7476FF' },
      { label: 'Projects', count: projects.length, pct: projPct, color: '#10B981' },
      { label: 'Case Studies', count: caseStudies.length, pct: casePct, color: '#3B82F6' },
    ];
  }, [blogs.length, projects.length, caseStudies.length, totalContent]);

  return (
    <AdminShell
      title="Dashboard"
      subtitle="A clear view of your Neno content workspace across Blogs, Projects, and Case Studies."
      action={
        <Link className={styles.primaryButton} href="/get/admin/blogs?new=1">
          <AdminIcon name="plus" /> Add blog
        </Link>
      }
    >
      {/* Welcome Banner */}
      <section className={styles.welcome}>
        <div>
          <p className={styles.eyebrow}>CONTENT OVERVIEW</p>
          <h2>Make every Neno insight count.</h2>
          <p>Monitor publishing velocity, content distribution, and activity across your entire portfolio.</p>
        </div>
        <div style={{ display: 'flex', gap: '10px' }}>
          <Link href="/get/admin/blogs" className={styles.textLink}>
            Blogs <AdminIcon name="arrow" />
          </Link>
          <Link href="/get/admin/projects" className={styles.textLink}>
            Projects <AdminIcon name="arrow" />
          </Link>
          <Link href="/get/admin/case-studies" className={styles.textLink}>
            Case Studies <AdminIcon name="arrow" />
          </Link>
        </div>
      </section>

      {/* Overview Stats Grid */}
      <section className={styles.statsGridEnhanced}>
        {cards.map((card) => (
          <article className={styles.statCard} key={card.label}>
            <span>{card.label}</span>
            <strong>{card.value}</strong>
            <small>{card.caption}</small>
          </article>
        ))}
      </section>

      {/* Middle Section: Activity Graph + Content Distribution */}
      <section className={styles.dashboardGridEnhanced}>
        {/* Activity Graph */}
        <article className={styles.panel}>
          <header className={styles.panelHeader}>
            <div>
              <h2>Content activity over time</h2>
              <p>Items created or updated across Blogs, Projects, and Case Studies.</p>
            </div>
            <div className={styles.filterPills}>
              {(['7D', '30D', '3M', '12M'] as TimeFilter[]).map((tf) => (
                <button
                  key={tf}
                  type="button"
                  className={`${styles.filterPill} ${timeFilter === tf ? styles.filterPillActive : ''}`}
                  onClick={() => setTimeFilter(tf)}
                >
                  {tf}
                </button>
              ))}
            </div>
          </header>

          <div className={styles.graphContainer}>
            {/* Chart Legend */}
            <div className={styles.chartLegend}>
              <span className={styles.legendItem}>
                <span className={styles.legendDot} style={{ background: '#7476FF' }} /> Blogs
              </span>
              <span className={styles.legendItem}>
                <span className={styles.legendDot} style={{ background: '#10B981' }} /> Projects
              </span>
              <span className={styles.legendItem}>
                <span className={styles.legendDot} style={{ background: '#3B82F6' }} /> Case Studies
              </span>
            </div>

            {/* SVG Grouped Bar / Activity Chart */}
            <div className={styles.svgWrapper}>
              <svg viewBox="0 0 600 200" className={styles.chartSvg} preserveAspectRatio="none">
                {/* Horizontal Grid lines */}
                <line x1="0" y1="40" x2="600" y2="40" stroke="#293241" strokeDasharray="4 4" strokeWidth="1" />
                <line x1="0" y1="90" x2="600" y2="90" stroke="#293241" strokeDasharray="4 4" strokeWidth="1" />
                <line x1="0" y1="140" x2="600" y2="140" stroke="#293241" strokeDasharray="4 4" strokeWidth="1" />
                <line x1="0" y1="180" x2="600" y2="180" stroke="#293241" strokeWidth="1" />

                {graphData.buckets.map((b, idx) => {
                  const stepWidth = 600 / graphData.buckets.length;
                  const centerX = idx * stepWidth + stepWidth / 2;
                  const barWidth = Math.max(6, Math.min(16, stepWidth / 4));
                  const groupGap = 3;

                  const chartMaxHeight = 130;
                  const getH = (v: number) => (v / graphData.maxVal) * chartMaxHeight;

                  const bH = Math.max(4, getH(b.blogs));
                  const pH = Math.max(4, getH(b.projects));
                  const cH = Math.max(4, getH(b.caseStudies));

                  const isHovered = hoveredBucket === idx;

                  return (
                    <g
                      key={idx}
                      onMouseEnter={() => setHoveredBucket(idx)}
                      onMouseLeave={() => setHoveredBucket(null)}
                      style={{ cursor: 'pointer' }}
                    >
                      {/* Hover Highlight Area */}
                      {isHovered && (
                        <rect
                          x={idx * stepWidth + 2}
                          y={10}
                          width={stepWidth - 4}
                          height={170}
                          fill="rgba(116, 118, 255, 0.08)"
                          rx="4"
                        />
                      )}

                      {/* Blog Bar */}
                      <rect
                        x={centerX - barWidth * 1.5 - groupGap}
                        y={180 - bH}
                        width={barWidth}
                        height={bH}
                        fill="#7476FF"
                        rx="3"
                        opacity={isHovered ? 1 : 0.85}
                      />
                      {/* Project Bar */}
                      <rect
                        x={centerX - barWidth * 0.5}
                        y={180 - pH}
                        width={barWidth}
                        height={pH}
                        fill="#10B981"
                        rx="3"
                        opacity={isHovered ? 1 : 0.85}
                      />
                      {/* Case Study Bar */}
                      <rect
                        x={centerX + barWidth * 0.5 + groupGap}
                        y={180 - cH}
                        width={barWidth}
                        height={cH}
                        fill="#3B82F6"
                        rx="3"
                        opacity={isHovered ? 1 : 0.85}
                      />

                      {/* Bucket X-Axis Label */}
                      <text
                        x={centerX}
                        y="196"
                        fill="#9AA4B2"
                        fontSize="10"
                        textAnchor="middle"
                        fontFamily="var(--font-plus-jakarta-sans)"
                      >
                        {b.label}
                      </text>
                    </g>
                  );
                })}
              </svg>

              {/* Tooltip Overlay */}
              {hoveredBucket !== null && graphData.buckets[hoveredBucket] && (
                <div className={styles.graphTooltip}>
                  <strong>{graphData.buckets[hoveredBucket].label}</strong>
                  <div>
                    <span style={{ color: '#7476FF' }}>● Blogs: {graphData.buckets[hoveredBucket].blogs}</span>
                    <span style={{ color: '#10B981' }}>● Projects: {graphData.buckets[hoveredBucket].projects}</span>
                    <span style={{ color: '#3B82F6' }}>● Case Studies: {graphData.buckets[hoveredBucket].caseStudies}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </article>

        {/* Content Distribution Card */}
        <article className={styles.panel}>
          <header className={styles.panelHeader}>
            <div>
              <h2>Content distribution</h2>
              <p>Relative ratio across content types.</p>
            </div>
          </header>

          <div className={styles.distributionBody}>
            {/* SVG Ring Donut Chart */}
            <div className={styles.donutWrapper}>
              <svg viewBox="0 0 160 160" className={styles.donutSvg}>
                <circle cx="80" cy="80" r="60" stroke="#181F29" strokeWidth="20" fill="none" />
                {totalContent > 0 && (
                  <>
                    {/* Blog Segment */}
                    <circle
                      cx="80"
                      cy="80"
                      r="60"
                      stroke="#7476FF"
                      strokeWidth="20"
                      fill="none"
                      strokeDasharray={`${(distributionData[0].pct * 377) / 100} 377`}
                      strokeDashoffset="0"
                      transform="rotate(-90 80 80)"
                    />
                    {/* Project Segment */}
                    <circle
                      cx="80"
                      cy="80"
                      r="60"
                      stroke="#10B981"
                      strokeWidth="20"
                      fill="none"
                      strokeDasharray={`${(distributionData[1].pct * 377) / 100} 377`}
                      strokeDashoffset={`${-((distributionData[0].pct * 377) / 100)}`}
                      transform="rotate(-90 80 80)"
                    />
                    {/* Case Study Segment */}
                    <circle
                      cx="80"
                      cy="80"
                      r="60"
                      stroke="#3B82F6"
                      strokeWidth="20"
                      fill="none"
                      strokeDasharray={`${(distributionData[2].pct * 377) / 100} 377`}
                      strokeDashoffset={`${-(((distributionData[0].pct + distributionData[1].pct) * 377) / 100)}`}
                      transform="rotate(-90 80 80)"
                    />
                  </>
                )}
              </svg>
              <div className={styles.donutCenter}>
                <strong>{totalContent}</strong>
                <span>Total Items</span>
              </div>
            </div>

            {/* Distribution Legend List */}
            <div className={styles.distributionLegendList}>
              {distributionData.map((d) => (
                <div key={d.label} className={styles.distributionRow}>
                  <div className={styles.distributionMeta}>
                    <span className={styles.legendDot} style={{ background: d.color }} />
                    <span className={styles.distributionLabel}>{d.label}</span>
                    <strong className={styles.distributionCount}>{d.count}</strong>
                    <small className={styles.distributionPct}>({d.pct}%)</small>
                  </div>
                  <div className={styles.distributionBarTrack}>
                    <div className={styles.distributionBarFill} style={{ width: `${d.pct}%`, background: d.color }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </article>
      </section>

      {/* Bottom Section: Unified Recent Content Table + Quick Actions */}
      <section className={styles.dashboardGridEnhanced} style={{ marginTop: '20px' }}>
        {/* Unified Recent Content Table */}
        <article className={styles.panel}>
          <header className={styles.panelHeader}>
            <div>
              <h2>Recent activity across all content</h2>
              <p>Latest updates across Blogs, Projects, and Case Studies.</p>
            </div>
            <Link href="/get/admin/blogs" className={styles.quietButton}>
              View all blogs <AdminIcon name="arrow" />
            </Link>
          </header>

          <div className={styles.tableResponsive}>
            {loading ? (
              <div className={styles.emptyState}>Loading latest content...</div>
            ) : recentContent.length ? (
              <table className={styles.recentTable}>
                <thead>
                  <tr>
                    <th>Title & Context</th>
                    <th>Type</th>
                    <th>Status</th>
                    <th>Date</th>
                    <th style={{ textAlign: 'right' }}>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {recentContent.map((item) => (
                    <tr key={item.id}>
                      <td>
                        <div className={styles.recentTitleGroup}>
                          <strong>{item.title}</strong>
                          <span>{item.context}</span>
                        </div>
                      </td>
                      <td>
                        <span
                          className={`${styles.typeBadge} ${
                            item.type === 'Blog'
                              ? styles.badgeBlog
                              : item.type === 'Project'
                              ? styles.badgeProject
                              : styles.badgeCaseStudy
                          }`}
                        >
                          {item.type}
                        </span>
                      </td>
                      <td>
                        <span
                          className={`${styles.status} ${
                            item.status === 'Published' ? styles.published : styles.draft
                          }`}
                        >
                          {item.status}
                        </span>
                      </td>
                      <td className={styles.dateCell}>{dateLabel(item.rawDate)}</td>
                      <td style={{ textAlign: 'right' }}>
                        <Link href={item.editHref} className={styles.quietButton}>
                          Edit <AdminIcon name="arrow" />
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div className={styles.emptyState}>Your latest activity across all content will appear here.</div>
            )}
          </div>
        </article>

        {/* Quick Actions */}
        <aside className={`${styles.panel} ${styles.quickPanel}`}>
          <header className={styles.panelHeader}>
            <div>
              <h2>Quick actions</h2>
              <p>Shortcuts for Neno content.</p>
            </div>
          </header>

          <Link href="/get/admin/blogs?new=1" className={styles.quickAction}>
            <span className={styles.quickIcon}>
              <AdminIcon name="plus" />
            </span>
            <div>
              <strong>Create a blog</strong>
              <span>Draft a new blog article</span>
            </div>
            <AdminIcon name="arrow" />
          </Link>

          <Link href="/get/admin/projects" className={styles.quickAction}>
            <span className={styles.quickIcon} style={{ background: 'rgba(16, 185, 129, 0.14)', color: '#34d399' }}>
              <AdminIcon name="plus" />
            </span>
            <div>
              <strong>Manage projects</strong>
              <span>Add or edit portfolio entries</span>
            </div>
            <AdminIcon name="arrow" />
          </Link>

          <Link href="/get/admin/case-studies" className={styles.quickAction}>
            <span className={styles.quickIcon} style={{ background: 'rgba(59, 130, 246, 0.14)', color: '#60a5fa' }}>
              <AdminIcon name="plus" />
            </span>
            <div>
              <strong>Manage case studies</strong>
              <span>Add or edit client outcomes</span>
            </div>
            <AdminIcon name="arrow" />
          </Link>

          <Link href="/get/admin/settings" className={styles.quickAction}>
            <span className={styles.quickIcon} style={{ background: 'rgba(245, 158, 11, 0.14)', color: '#fbbf24' }}>
              <AdminIcon name="dashboard" />
            </span>
            <div>
              <strong>Admin settings</strong>
              <span>Manage system configuration</span>
            </div>
            <AdminIcon name="arrow" />
          </Link>
        </aside>
      </section>
    </AdminShell>
  );
};
