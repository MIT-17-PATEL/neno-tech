'use client';
/* eslint-disable react-hooks/set-state-in-effect */

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getBlogs } from '@/lib/admin/blogStore';
import { getManagedContent } from '@/lib/admin/contentStore';
import type { Blog } from '@/types/admin';
import { AdminIcon } from './AdminIcons';
import { AdminShell } from './AdminShell';
import styles from './admin.module.css';
import { formatAdminDate } from '@/lib/admin/dateUtils';

const dateLabel = (date: string) => formatAdminDate(date, 'Not scheduled');

export const AdminDashboard = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [contentCounts, setContentCounts] = useState({ caseStudies: 0, projects: 0 });
  useEffect(() => { void Promise.all([getBlogs(), getManagedContent('case-studies'), getManagedContent('projects')]).then(([nextBlogs, cases, projects]) => { setBlogs(nextBlogs); setContentCounts({ caseStudies: cases.length, projects: projects.length }); }).catch(() => undefined); }, []);
  const published = blogs.filter((blog) => blog.status === 'Published').length;
  const recent = [...blogs].sort((a, b) => b.updatedAt.localeCompare(a.updatedAt)).slice(0, 5);
  const cards = [
    { label: 'Total blogs', value: blogs.length, caption: 'All local entries' },
    { label: 'Published', value: published, caption: `${blogs.length ? Math.round((published / blogs.length) * 100) : 0}% of your library` },
    { label: 'Drafts', value: blogs.length - published, caption: 'Ready to refine' },
    { label: 'Case studies', value: contentCounts.caseStudies, caption: 'Client outcomes' },
    { label: 'Projects', value: contentCounts.projects, caption: 'Portfolio entries' },
  ];
  return <AdminShell title="Dashboard" subtitle="A clear view of your Neno content workspace." action={<Link className={styles.primaryButton} href="/admin/blogs?new=1"><AdminIcon name="plus" />Add blog</Link>}>
    <section className={styles.welcome}><div><p className={styles.eyebrow}>CONTENT OVERVIEW</p><h2>Make every Neno insight count.</h2><p>Track your publishing pipeline and move from draft to live with focus.</p></div><Link href="/admin/blogs" className={styles.textLink}>Manage blogs <AdminIcon name="arrow" /></Link></section>
    <section className={styles.statsGrid}>{cards.map((card) => <article className={styles.statCard} key={card.label}><span>{card.label}</span><strong>{card.value}</strong><small>{card.caption}</small></article>)}</section>
    <section className={styles.dashboardGrid}><article className={styles.panel}><header className={styles.panelHeader}><div><h2>Recent blogs</h2><p>Your latest content activity.</p></div><Link href="/admin/blogs" className={styles.quietButton}>View all <AdminIcon name="arrow" /></Link></header><div className={styles.activityList}>{recent.length ? recent.map((blog) => <Link href="/admin/blogs" className={styles.activityItem} key={blog.id}><span className={`${styles.activityDot} ${blog.status === 'Published' ? styles.publishedDot : ''}`} /><div><strong>{blog.title}</strong><span>{blog.category} · Updated {dateLabel(blog.publishDate)}</span></div><span className={`${styles.status} ${blog.status === 'Published' ? styles.published : styles.draft}`}>{blog.status}</span></Link>) : <div className={styles.emptyState}>Your latest blog activity will appear here.</div>}</div></article>
      <aside className={`${styles.panel} ${styles.quickPanel}`}><header className={styles.panelHeader}><div><h2>Quick actions</h2><p>Keep content moving.</p></div></header><Link href="/admin/blogs?new=1" className={styles.quickAction}><span className={styles.quickIcon}><AdminIcon name="plus" /></span><div><strong>Create a blog</strong><span>Start a fresh content draft</span></div><AdminIcon name="arrow" /></Link><Link href="/admin/blogs" className={styles.quickAction}><span className={styles.quickIcon}><AdminIcon name="blogs" /></span><div><strong>Browse your blogs</strong><span>Search, edit and publish</span></div><AdminIcon name="arrow" /></Link></aside></section>
  </AdminShell>;
};
