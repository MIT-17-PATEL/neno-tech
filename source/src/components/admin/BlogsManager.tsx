'use client';
/* eslint-disable react-hooks/set-state-in-effect */

import { useEffect, useMemo, useState } from 'react';
import { createBlog, getBlogs, removeBlog, setBlogStatus, updateBlog } from '@/lib/admin/blogStore';
import type { Blog, BlogInput } from '@/types/admin';
import { AdminIcon } from './AdminIcons';
import { formatAdminDate } from '@/lib/admin/dateUtils';
import { AdminShell } from './AdminShell';
import { BlogFormModal } from './BlogFormModal';
import styles from './admin.module.css';

type Notice = { type: 'success' | 'error'; text: string } | null;
const PAGE_SIZE = 6;
const dateLabel = (date: string) => formatAdminDate(date);

export const BlogsManager = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('All');
  const [category, setCategory] = useState('All');
  const [sort, setSort] = useState('updated');
  const [page, setPage] = useState(1);
  const [formBlog, setFormBlog] = useState<Blog | null | undefined>(undefined);
  const [viewBlog, setViewBlog] = useState<Blog | null>(null);
  const [deleteBlog, setDeleteBlog] = useState<Blog | null>(null);
  const [notice, setNotice] = useState<Notice>(null);
  const [error, setError] = useState(false);

  const refresh = async () => { try { setBlogs(await getBlogs()); setError(false); } catch { setError(true); } finally { setLoading(false); } };
  useEffect(() => { const timer = window.setTimeout(() => { void refresh(); }, 250); return () => window.clearTimeout(timer); }, []);
  useEffect(() => {
    if (window.location.search.includes('new=1')) setFormBlog(null);
  }, []);
  useEffect(() => { if (!notice) return; const timer = window.setTimeout(() => setNotice(null), 3200); return () => window.clearTimeout(timer); }, [notice]);

  const categories = useMemo(() => Array.from(new Set(blogs.map((blog) => blog.category))).sort(), [blogs]);
  const filtered = useMemo(() => {
    const needle = search.toLowerCase().trim();
    const results = blogs.filter((blog) => (!needle || [blog.title, blog.author, blog.category, blog.slug].some((value) => value.toLowerCase().includes(needle))) && (status === 'All' || blog.status === status) && (category === 'All' || blog.category === category));
    return results.sort((a, b) => sort === 'title' ? a.title.localeCompare(b.title) : sort === 'date' ? b.publishDate.localeCompare(a.publishDate) : b.updatedAt.localeCompare(a.updatedAt));
  }, [blogs, search, status, category, sort]);
  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const visible = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
  useEffect(() => setPage(1), [search, status, category, sort]);
  useEffect(() => { if (page > totalPages) setPage(totalPages); }, [page, totalPages]);

  const save = async (input: BlogInput) => {
    try {
      const isEdit = Boolean(formBlog?.id);
      if (formBlog) await updateBlog(formBlog.id, input); else await createBlog(input);
      await refresh(); setFormBlog(undefined); setNotice({ type: 'success', text: isEdit ? 'Blog changes saved.' : 'Blog created successfully.' });
    } catch { setNotice({ type: 'error', text: 'We could not save this blog. Please try again.' }); }
  };
  const changeStatus = async (blog: Blog) => { try { const next = blog.status === 'Draft' ? 'Published' : 'Draft'; await setBlogStatus(blog.id, next); await refresh(); setNotice({ type: 'success', text: `Blog moved to ${next.toLowerCase()}.` }); } catch { setNotice({ type: 'error', text: 'Unable to update the status.' }); } };
  const confirmDelete = async () => { if (!deleteBlog) return; try { await removeBlog(deleteBlog.id); await refresh(); setNotice({ type: 'success', text: 'Blog deleted.' }); } catch { setNotice({ type: 'error', text: 'Unable to delete this blog.' }); } finally { setDeleteBlog(null); } };

  return <AdminShell title="Blog management" subtitle="Create, refine and publish Neno’s point of view." action={<button className={styles.primaryButton} onClick={() => setFormBlog(null)}><AdminIcon name="plus" />Add blog</button>}>
    {notice && <div className={`${styles.notice} ${notice.type === 'error' ? styles.noticeError : ''}`} role="status"><AdminIcon name={notice.type === 'success' ? 'check' : 'close'} />{notice.text}</div>}
    <section className={styles.panel}><header className={styles.tableHeader}><div><h2>All blogs</h2><p>{loading ? 'Loading your local blog library…' : `${filtered.length} ${filtered.length === 1 ? 'entry' : 'entries'} found`}</p></div><div className={styles.filterBar}><label className={styles.searchField} data-search-box><span className={styles.searchIconWrap}><AdminIcon name="search"/></span><input data-search-input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search blogs" /></label><select aria-label="Filter by category" value={category} onChange={(e) => setCategory(e.target.value)}><option value="All">All categories</option>{categories.map((item) => <option key={item}>{item}</option>)}</select><select aria-label="Filter by status" value={status} onChange={(e) => setStatus(e.target.value)}><option value="All">All statuses</option><option>Published</option><option>Draft</option></select><select aria-label="Sort blogs" value={sort} onChange={(e) => setSort(e.target.value)}><option value="updated">Recently updated</option><option value="date">Publish date</option><option value="title">Title A–Z</option></select></div></header>
      {loading ? <div className={styles.loadingState}><span className={styles.spinner} />Loading blogs…</div> : error ? <div className={styles.emptyState}><strong>Unable to load local blogs.</strong><button className={styles.textLink} onClick={refresh}>Try again</button></div> : <><div className={styles.tableWrap}><table className={styles.blogTable}><thead><tr><th>Blog</th><th>Category</th><th>Author</th><th>Published</th><th>Status</th><th><span className={styles.screenReaderOnly}>Actions</span></th></tr></thead><tbody>{visible.map((blog) => <tr key={blog.id}><td><div className={styles.blogTitleCell}><span className={styles.blogInitial}>{blog.title.slice(0, 1)}</span><div><strong>{blog.title}</strong><span>/{blog.slug}</span></div></div></td><td>{blog.category}</td><td>{blog.author}</td><td>{dateLabel(blog.publishDate)}</td><td><button className={`${styles.status} ${blog.status === 'Published' ? styles.published : styles.draft}`} onClick={() => changeStatus(blog)} title="Toggle status">{blog.status}</button></td><td><div className={styles.rowActions}><button onClick={() => setViewBlog(blog)} aria-label={`View ${blog.title}`}><AdminIcon name="eye"/></button><button onClick={() => setFormBlog(blog)} aria-label={`Edit ${blog.title}`}><AdminIcon name="edit"/></button><button className={styles.deleteAction} onClick={() => setDeleteBlog(blog)} aria-label={`Delete ${blog.title}`}><AdminIcon name="trash"/></button></div></td></tr>)}</tbody></table></div>{!visible.length && <div className={styles.emptyState}><span className={styles.emptyIcon}><AdminIcon name="blogs" /></span><strong>No blogs match these filters.</strong><p>Try a different search or create a new blog.</p><button className={styles.secondaryButton} onClick={() => { setSearch(''); setStatus('All'); setCategory('All'); }}>Clear filters</button></div>}{filtered.length > PAGE_SIZE && <footer className={styles.pagination}><span>Showing {(page - 1) * PAGE_SIZE + 1}–{Math.min(page * PAGE_SIZE, filtered.length)} of {filtered.length}</span><div><button onClick={() => setPage((value) => Math.max(1, value - 1))} disabled={page === 1}>Previous</button><span>{page} / {totalPages}</span><button onClick={() => setPage((value) => Math.min(totalPages, value + 1))} disabled={page === totalPages}>Next</button></div></footer>}</>}
    </section>
    {formBlog !== undefined && <BlogFormModal blog={formBlog} onClose={() => setFormBlog(undefined)} onSave={save} />}
    {viewBlog && <div className={styles.modalLayer} role="dialog" aria-modal="true" aria-label="View blog"><button className={styles.modalBackdrop} onClick={() => setViewBlog(null)} aria-label="Close"/><article className={`${styles.modal} ${styles.viewModal}`}><header className={styles.modalHeader}><div><span className={`${styles.status} ${viewBlog.status === 'Published' ? styles.published : styles.draft}`}>{viewBlog.status}</span><h2>{viewBlog.title}</h2></div><button className={styles.iconButton} onClick={() => setViewBlog(null)} aria-label="Close"><AdminIcon name="close"/></button></header><div className={styles.blogMeta}><span>{viewBlog.category}</span><span>{viewBlog.author}</span><span>{dateLabel(viewBlog.publishDate)}</span><span>{viewBlog.readingTime || 'Reading time not set'}</span></div><p className={styles.blogSummary}>{viewBlog.shortDescription}</p><div className={styles.blogContent}>{viewBlog.content}</div><footer className={styles.modalFooter}><button className={styles.secondaryButton} onClick={() => { setViewBlog(null); setFormBlog(viewBlog); }}>Edit blog</button><button className={styles.primaryButton} onClick={() => setViewBlog(null)}>Close</button></footer></article></div>}
    {deleteBlog && <div className={styles.modalLayer} role="dialog" aria-modal="true" aria-label="Delete blog"><button className={styles.modalBackdrop} onClick={() => setDeleteBlog(null)} aria-label="Close"/><section className={`${styles.modal} ${styles.confirmModal}`}><span className={styles.dangerIcon}><AdminIcon name="trash"/></span><h2>Delete this blog?</h2><p><strong>{deleteBlog.title}</strong> will be permanently removed from this local admin workspace.</p><footer className={styles.modalFooter}><button className={styles.secondaryButton} onClick={() => setDeleteBlog(null)}>Cancel</button><button className={styles.dangerButton} onClick={confirmDelete}>Delete blog</button></footer></section></div>}
  </AdminShell>;
};
