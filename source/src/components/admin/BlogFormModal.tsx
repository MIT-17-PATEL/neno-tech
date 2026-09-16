'use client';
/* eslint-disable react-hooks/set-state-in-effect */

import { useEffect, useState } from 'react';
import type { Blog, BlogInput, BlogStatus } from '@/types/admin';
import { AdminIcon } from './AdminIcons';
import { DateInput } from './DateInput';
import { parseAdminDate, toAdminDateInput, toStoredAdminDate } from '@/lib/admin/dateUtils';
import styles from './admin.module.css';

const blankBlog: BlogInput = { title: '', slug: '', category: '', author: '', publishDate: '', readingTime: '', shortDescription: '', content: '', buttonText: '', buttonLink: '', status: 'Draft' };
const fields: Array<keyof BlogInput> = ['title', 'slug', 'category', 'author', 'publishDate', 'readingTime', 'shortDescription', 'content', 'buttonText', 'buttonLink', 'status'];

type Props = { blog?: Blog | null; onClose: () => void; onSave: (input: BlogInput) => void };

export const BlogFormModal = ({ blog, onClose, onSave }: Props) => {
  const [form, setForm] = useState<BlogInput>(blankBlog);
  const [errors, setErrors] = useState<Partial<Record<keyof BlogInput, string>>>({});

  useEffect(() => {
    if (blog) {
      const next = {} as BlogInput;
      fields.forEach((field) => { next[field] = (field === 'publishDate' ? toAdminDateInput(blog[field]) : blog[field]) as never; });
      setForm(next);
    } else setForm(blankBlog);
  }, [blog]);

  const update = (field: keyof BlogInput, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  };
  const titleToSlug = () => { if (!form.slug && form.title) update('slug', form.title.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')); };
  const submit = (event: React.FormEvent) => {
    event.preventDefault();
    const nextErrors: Partial<Record<keyof BlogInput, string>> = {};
    if (!form.title.trim()) nextErrors.title = 'A title is required.';
    if (!form.slug.trim()) nextErrors.slug = 'A slug is required.';
    if (!form.category.trim()) nextErrors.category = 'Choose or enter a category.';
    if (!form.author.trim()) nextErrors.author = 'An author is required.';
    if (form.publishDate && !parseAdminDate(form.publishDate)) nextErrors.publishDate = 'Use a valid date in DD:MM:YYYY format.';
    if (!form.shortDescription.trim()) nextErrors.shortDescription = 'A short description is required.';
    if (!form.content.trim()) nextErrors.content = 'Blog content is required.';
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;
    onSave({ ...form, publishDate: toStoredAdminDate(form.publishDate) });
  };

  return <div className={styles.modalLayer} role="dialog" aria-modal="true" aria-label={blog ? 'Edit blog' : 'Add blog'}>
    <button className={styles.modalBackdrop} onClick={onClose} aria-label="Close form" />
    <section className={`${styles.modal} ${styles.formModal}`}>
      <header className={styles.modalHeader}><div><p className={styles.eyebrow}>{blog ? 'EDIT ENTRY' : 'NEW ENTRY'}</p><h2>{blog ? 'Edit blog' : 'Create a blog'}</h2></div><button className={styles.iconButton} onClick={onClose} aria-label="Close"><AdminIcon name="close" /></button></header>
      <form onSubmit={submit} className={styles.blogForm}>
        <label className={styles.fullField}>Blog title<input autoFocus value={form.title} onChange={(e) => update('title', e.target.value)} onBlur={titleToSlug} placeholder="Enter a clear, useful title" />{errors.title && <small>{errors.title}</small>}</label>
        <label>Slug<input value={form.slug} onChange={(e) => update('slug', e.target.value)} placeholder="your-blog-slug" />{errors.slug && <small>{errors.slug}</small>}</label>
        <label>Category<input list="blog-categories" value={form.category} onChange={(e) => update('category', e.target.value)} placeholder="e.g. Agentic AI" />{errors.category && <small>{errors.category}</small>}<datalist id="blog-categories"><option value="Agentic AI"/><option value="Engineering"/><option value="AI Strategy"/><option value="Modernisation"/></datalist></label>
        <label>Author<input value={form.author} onChange={(e) => update('author', e.target.value)} placeholder="Author name" />{errors.author && <small>{errors.author}</small>}</label>
        <label className={styles.dateField}>Publish date <span>(DD:MM:YYYY)</span><DateInput value={form.publishDate} onChange={(value) => update('publishDate', value)} error={errors.publishDate} aria-label="Publish date (DD:MM:YYYY)" /></label>
        <label>Reading time<input value={form.readingTime} onChange={(e) => update('readingTime', e.target.value)} placeholder="e.g. 5 min read" /></label>
        <label>Status<select value={form.status} onChange={(e) => update('status', e.target.value as BlogStatus)}><option value="Draft">Draft</option><option value="Published">Published</option></select></label>
        <label className={styles.fullField}>Short description<textarea rows={3} value={form.shortDescription} onChange={(e) => update('shortDescription', e.target.value)} placeholder="A concise summary for the blog listing" />{errors.shortDescription && <small>{errors.shortDescription}</small>}</label>
        <label className={styles.fullField}>Blog content<textarea rows={8} value={form.content} onChange={(e) => update('content', e.target.value)} placeholder="Write the blog content here..." />{errors.content && <small>{errors.content}</small>}</label>
        <label>Button text<input value={form.buttonText} onChange={(e) => update('buttonText', e.target.value)} placeholder="e.g. Read article" /></label>
        <label>Button link<input value={form.buttonLink} onChange={(e) => update('buttonLink', e.target.value)} placeholder="/blog-single/my-blog" /></label>
        <footer className={styles.modalFooter}><button type="button" className={styles.secondaryButton} onClick={onClose}>Cancel</button><button type="submit" className={styles.primaryButton}>{blog ? 'Save changes' : 'Create blog'}<AdminIcon name="arrow" /></button></footer>
      </form>
    </section>
  </div>;
};
