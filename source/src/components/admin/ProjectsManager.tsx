'use client';

import React, { useEffect, useMemo, useState } from 'react';
import type { Project, ProjectInput, ContentStatus } from '@/types/admin';
import { NENO_INDUSTRIES } from '@/types/admin';
import { getProjects, createProject, updateProject, deleteProject, setProjectStatus } from '@/lib/admin/projectStore';
import { AdminIcon } from './AdminIcons';
import { AdminShell } from './AdminShell';
import styles from './admin.module.css';

const PAGE_SIZE = 8;

export const ProjectsManager: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [search, setSearch] = useState('');
  const [industry, setIndustry] = useState('All');
  const [status, setStatus] = useState('All');
  const [page, setPage] = useState(1);

  const [formProject, setFormProject] = useState<Project | null | undefined>(undefined); // undefined: closed, null: new
  const [viewProject, setViewProject] = useState<Project | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<Project | null>(null);
  const [notice, setNotice] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const refresh = async () => {
    try {
      setLoading(true);
      setError(false);
      const data = await getProjects();
      setProjects(data);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void refresh();
  }, []);

  useEffect(() => {
    if (!notice) return;
    const timer = window.setTimeout(() => setNotice(null), 3500);
    return () => window.clearTimeout(timer);
  }, [notice]);

  useEffect(() => {
    setPage(1);
  }, [search, industry, status]);

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    return projects.filter((item) => {
      const matchSearch =
        !q ||
        item.title.toLowerCase().includes(q) ||
        item.client.toLowerCase().includes(q) ||
        item.industry.toLowerCase().includes(q) ||
        item.tags.some((t) => t.toLowerCase().includes(q));
      const matchIndustry = industry === 'All' || item.industry === industry;
      const matchStatus = status === 'All' || item.status === status;
      return matchSearch && matchIndustry && matchStatus;
    });
  }, [projects, search, industry, status]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const visible = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const handleSave = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const tagsRaw = String(formData.get('tags') || '');
    const tags = tagsRaw
      .split(',')
      .map((t) => t.trim())
      .filter(Boolean);

    const input: ProjectInput = {
      title: String(formData.get('title') || '').trim(),
      slug: String(formData.get('slug') || '').trim(),
      client: String(formData.get('client') || '').trim(),
      industry: String(formData.get('industry') || '').trim(),
      shortDescription: String(formData.get('shortDescription') || '').trim(),
      fullDescription: String(formData.get('fullDescription') || '').trim(),
      image: String(formData.get('image') || '').trim() || '/assets/img/projects/project-ai-1.jpg',
      metric1Value: String(formData.get('metric1Value') || '').trim(),
      metric1Label: String(formData.get('metric1Label') || '').trim(),
      metric2Value: String(formData.get('metric2Value') || '').trim(),
      metric2Label: String(formData.get('metric2Label') || '').trim(),
      metric3Value: String(formData.get('metric3Value') || '').trim(),
      metric3Label: String(formData.get('metric3Label') || '').trim(),
      tags: tags.length ? tags : ['AI CRM', 'Enterprise'],
      relatedCaseStudy: String(formData.get('relatedCaseStudy') || '').trim(),
      status: (String(formData.get('status')) as ContentStatus) || 'Draft',
    };

    if (!input.slug) {
      input.slug = input.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    }

    try {
      if (formProject?.id) {
        await updateProject(formProject.id, input);
        setNotice({ type: 'success', text: 'Project updated successfully.' });
      } else {
        await createProject(input);
        setNotice({ type: 'success', text: 'New project created successfully.' });
      }
      setFormProject(undefined);
      await refresh();
    } catch {
      setNotice({ type: 'error', text: 'Failed to save project. Please check fields and retry.' });
    }
  };

  const handleToggleStatus = async (project: Project) => {
    const nextStatus: ContentStatus = project.status === 'Published' ? 'Draft' : 'Published';
    try {
      await setProjectStatus(project.id, nextStatus);
      setNotice({ type: 'success', text: `Project moved to ${nextStatus.toLowerCase()}.` });
      await refresh();
    } catch {
      setNotice({ type: 'error', text: 'Unable to update status.' });
    }
  };

  const handleDelete = async () => {
    if (!deleteTarget) return;
    try {
      await deleteProject(deleteTarget.id);
      setNotice({ type: 'success', text: 'Project deleted.' });
      await refresh();
    } catch {
      setNotice({ type: 'error', text: 'Unable to delete this project.' });
    } finally {
      setDeleteTarget(null);
    }
  };

  return (
    <AdminShell
      title="Projects"
      subtitle="Maintain the products and delivery work in Neno’s portfolio."
      action={
        <button className={styles.primaryButton} onClick={() => setFormProject(null)}>
          <AdminIcon name="plus" /> Add project
        </button>
      }
    >
      {notice && (
        <div className={`${styles.notice} ${notice.type === 'error' ? styles.noticeError : ''}`} role="status">
          <AdminIcon name={notice.type === 'success' ? 'check' : 'close'} /> {notice.text}
        </div>
      )}

      <section className={styles.panel}>
        <header className={styles.tableHeader}>
          <div>
            <h2>All projects</h2>
            <p>{loading ? 'Loading local portfolio…' : `${filtered.length} ${filtered.length === 1 ? 'project' : 'projects'} found`}</p>
          </div>
          <div className={styles.filterBar}>
            <label className={styles.searchField} data-search-box>
              <span className={styles.searchIconWrap}>
                <AdminIcon name="search" />
              </span>
              <input
                data-search-input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search projects..."
              />
            </label>
            <select aria-label="Filter by industry" value={industry} onChange={(e) => setIndustry(e.target.value)}>
              <option value="All">All industries</option>
              {NENO_INDUSTRIES.map((ind) => (
                <option key={ind} value={ind}>
                  {ind}
                </option>
              ))}
            </select>
            <select aria-label="Filter by status" value={status} onChange={(e) => setStatus(e.target.value)}>
              <option value="All">All statuses</option>
              <option value="Published">Published</option>
              <option value="Draft">Draft</option>
            </select>
          </div>
        </header>

        {loading ? (
          <div className={styles.loadingState}>
            <span className={styles.spinner} /> Loading projects…
          </div>
        ) : error ? (
          <div className={styles.emptyState}>
            <strong>Unable to load projects.</strong>
            <button className={styles.textLink} onClick={refresh}>
              Try again
            </button>
          </div>
        ) : (
          <>
            <div className={styles.tableWrap}>
              <table className={styles.blogTable}>
                <thead>
                  <tr>
                    <th>Project</th>
                    <th>Client / Industry</th>
                    <th>Key Metrics</th>
                    <th>Tags</th>
                    <th>Status</th>
                    <th>
                      <span className={styles.screenReaderOnly}>Actions</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {visible.map((proj) => (
                    <tr key={proj.id}>
                      <td>
                        <div className={styles.blogTitleCell}>
                          <div className={styles.projectImageThumb}>
                            <img
                              src={proj.image || '/assets/img/projects/project-ai-1.jpg'}
                              alt={proj.title}
                              onError={(e) => {
                                (e.currentTarget as HTMLImageElement).src = '/assets/img/projects/project-ai-1.jpg';
                              }}
                            />
                          </div>
                          <div>
                            <strong>{proj.title}</strong>
                            <span>/{proj.slug}</span>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div>
                          <strong>{proj.client || 'Enterprise'}</strong>
                          <span style={{ display: 'block', fontSize: '11px', color: '#9AA4B2' }}>{proj.industry}</span>
                        </div>
                      </td>
                      <td>
                        <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                          {proj.metric1Value && (
                            <span className={styles.metricBadge}>
                              <strong>{proj.metric1Value}</strong> {proj.metric1Label}
                            </span>
                          )}
                          {proj.metric2Value && (
                            <span className={styles.metricBadge}>
                              <strong>{proj.metric2Value}</strong> {proj.metric2Label}
                            </span>
                          )}
                        </div>
                      </td>
                      <td>
                        <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
                          {proj.tags.slice(0, 3).map((tag) => (
                            <span key={tag} className={styles.tagPill}>
                              {tag}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td>
                        <button
                          className={`${styles.status} ${proj.status === 'Published' ? styles.published : styles.draft}`}
                          onClick={() => handleToggleStatus(proj)}
                          title="Click to toggle status"
                        >
                          {proj.status}
                        </button>
                      </td>
                      <td>
                        <div className={styles.rowActions}>
                          <button onClick={() => setViewProject(proj)} aria-label={`View ${proj.title}`}>
                            <AdminIcon name="eye" />
                          </button>
                          <button onClick={() => setFormProject(proj)} aria-label={`Edit ${proj.title}`}>
                            <AdminIcon name="edit" />
                          </button>
                          <button
                            className={styles.deleteAction}
                            onClick={() => setDeleteTarget(proj)}
                            aria-label={`Delete ${proj.title}`}
                          >
                            <AdminIcon name="trash" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {!visible.length && (
              <div className={styles.emptyState}>
                <span className={styles.emptyIcon}>
                  <AdminIcon name="blogs" />
                </span>
                <strong>No projects match your filter criteria.</strong>
                <p>Try clearing your search keyword or add a new project.</p>
                <button
                  className={styles.secondaryButton}
                  onClick={() => {
                    setSearch('');
                    setIndustry('All');
                    setStatus('All');
                  }}
                >
                  Clear filters
                </button>
              </div>
            )}

            {filtered.length > PAGE_SIZE && (
              <footer className={styles.pagination}>
                <span>
                  Showing {(page - 1) * PAGE_SIZE + 1}–{Math.min(page * PAGE_SIZE, filtered.length)} of {filtered.length}
                </span>
                <div>
                  <button onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={page === 1}>
                    Previous
                  </button>
                  <span>
                    {page} / {totalPages}
                  </span>
                  <button onClick={() => setPage((p) => Math.min(totalPages, p + 1))} disabled={page === totalPages}>
                    Next
                  </button>
                </div>
              </footer>
            )}
          </>
        )}
      </section>

      {/* CREATE / EDIT PROJECT MODAL */}
      {formProject !== undefined && (
        <div className={styles.modalLayer} role="dialog" aria-modal="true">
          <button className={styles.modalBackdrop} onClick={() => setFormProject(undefined)} aria-label="Close" />
          <form className={`${styles.modal} ${styles.formModal}`} onSubmit={handleSave}>
            <header className={styles.modalHeader}>
              <div>
                <p className={styles.eyebrow}>{formProject ? 'EDIT PROJECT' : 'NEW PROJECT'}</p>
                <h2>{formProject ? 'Edit Project' : 'Add New Project'}</h2>
              </div>
              <button
                type="button"
                className={styles.iconButton}
                onClick={() => setFormProject(undefined)}
                aria-label="Close"
              >
                <AdminIcon name="close" />
              </button>
            </header>

            <div className={styles.blogForm}>
              <label className={styles.fullField}>
                Project title *
                <input name="title" defaultValue={formProject?.title} required placeholder="e.g. AI-Native CRM System" />
              </label>

              <label>
                Slug (URL identifier)
                <input
                  name="slug"
                  defaultValue={formProject?.slug}
                  placeholder="e.g. ai-native-crm-system (auto-generated if empty)"
                />
              </label>

              <label>
                Client / Company *
                <input name="client" defaultValue={formProject?.client} required placeholder="e.g. Enterprise FinTech" />
              </label>

              <label>
                Industry *
                <select name="industry" defaultValue={formProject?.industry || NENO_INDUSTRIES[0]}>
                  {NENO_INDUSTRIES.map((ind) => (
                    <option key={ind} value={ind}>
                      {ind}
                    </option>
                  ))}
                </select>
              </label>

              <label>
                Status
                <select name="status" defaultValue={formProject?.status || 'Published'}>
                  <option value="Published">Published</option>
                  <option value="Draft">Draft</option>
                </select>
              </label>

              <label className={styles.fullField}>
                Project image path or URL
                <input
                  name="image"
                  defaultValue={formProject?.image || '/assets/img/projects/project-ai-1.jpg'}
                  placeholder="/assets/img/projects/project-ai-1.jpg"
                />
              </label>

              <label className={styles.fullField}>
                Short description *
                <textarea
                  name="shortDescription"
                  rows={2}
                  defaultValue={formProject?.shortDescription}
                  required
                  placeholder="Concise overview summarizing the project outcome..."
                />
              </label>

              <label className={styles.fullField}>
                Full project description *
                <textarea
                  name="fullDescription"
                  rows={5}
                  defaultValue={formProject?.fullDescription}
                  required
                  placeholder="Detailed breakdown of architecture, engineering methodology, and technical deliverables..."
                />
              </label>

              {/* 3 Metrics Fields */}
              <div className={styles.fullField}>
                <p className={styles.formSectionTitle}>Key Performance Metrics</p>
                <div className={styles.metricsFormGrid}>
                  <div>
                    <label>Metric 1 Value</label>
                    <input name="metric1Value" defaultValue={formProject?.metric1Value} placeholder="e.g. +140%" />
                  </div>
                  <div>
                    <label>Metric 1 Label</label>
                    <input
                      name="metric1Label"
                      defaultValue={formProject?.metric1Label}
                      placeholder="e.g. Pipeline Velocity"
                    />
                  </div>

                  <div>
                    <label>Metric 2 Value</label>
                    <input name="metric2Value" defaultValue={formProject?.metric2Value} placeholder="e.g. -65%" />
                  </div>
                  <div>
                    <label>Metric 2 Label</label>
                    <input
                      name="metric2Label"
                      defaultValue={formProject?.metric2Label}
                      placeholder="e.g. Resolution Time"
                    />
                  </div>

                  <div>
                    <label>Metric 3 Value</label>
                    <input name="metric3Value" defaultValue={formProject?.metric3Value} placeholder="e.g. 99.4%" />
                  </div>
                  <div>
                    <label>Metric 3 Label</label>
                    <input
                      name="metric3Label"
                      defaultValue={formProject?.metric3Label}
                      placeholder="e.g. Accuracy Rate"
                    />
                  </div>
                </div>
              </div>

              <label className={styles.fullField}>
                Technology / Tags (comma-separated)
                <input
                  name="tags"
                  defaultValue={formProject?.tags?.join(', ') || 'AI CRM, Enterprise, Automation'}
                  placeholder="AI CRM, Enterprise, Automation, Multi-Agent"
                />
              </label>

              <label className={styles.fullField}>
                Related Case Study
                <input
                  name="relatedCaseStudy"
                  defaultValue={formProject?.relatedCaseStudy}
                  placeholder="e.g. Autonomous Voice AI Agents for Real-Time FinTech Underwriting"
                />
              </label>

              <footer className={styles.modalFooter}>
                <button type="button" className={styles.secondaryButton} onClick={() => setFormProject(undefined)}>
                  Cancel
                </button>
                <button type="submit" className={styles.primaryButton}>
                  {formProject ? 'Save project changes' : 'Create project'}
                </button>
              </footer>
            </div>
          </form>
        </div>
      )}

      {/* VIEW PROJECT MODAL */}
      {viewProject && (
        <div className={styles.modalLayer} role="dialog" aria-modal="true" aria-label="View project">
          <button className={styles.modalBackdrop} onClick={() => setViewProject(null)} aria-label="Close" />
          <article className={`${styles.modal} ${styles.viewModal} ${styles.formModal}`}>
            <header className={styles.modalHeader}>
              <div>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '8px' }}>
                  <span
                    className={`${styles.status} ${viewProject.status === 'Published' ? styles.published : styles.draft}`}
                  >
                    {viewProject.status}
                  </span>
                  <span className={styles.tagPill}>{viewProject.industry}</span>
                  <span style={{ fontSize: '12px', color: '#9AA4B2' }}>Client: {viewProject.client}</span>
                </div>
                <h2>{viewProject.title}</h2>
              </div>
              <button className={styles.iconButton} onClick={() => setViewProject(null)} aria-label="Close">
                <AdminIcon name="close" />
              </button>
            </header>

            <div className={styles.viewModalBody}>
              {viewProject.image && (
                <div className={styles.viewBannerWrap}>
                  <img
                    src={viewProject.image}
                    alt={viewProject.title}
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = '/assets/img/projects/project-ai-1.jpg';
                    }}
                  />
                </div>
              )}

              <div className={styles.viewContentSection}>
                <h4>Overview</h4>
                <p className={styles.blogSummary}>{viewProject.shortDescription}</p>
              </div>

              <div className={styles.viewContentSection}>
                <h4>Full Architecture & Implementation</h4>
                <div className={styles.blogContent}>{viewProject.fullDescription}</div>
              </div>

              {/* Metrics cards */}
              <div className={styles.viewContentSection}>
                <h4>Performance Metrics</h4>
                <div className={styles.metricsViewGrid}>
                  {viewProject.metric1Value && (
                    <div className={styles.metricViewCard}>
                      <strong>{viewProject.metric1Value}</strong>
                      <span>{viewProject.metric1Label || 'Metric 1'}</span>
                    </div>
                  )}
                  {viewProject.metric2Value && (
                    <div className={styles.metricViewCard}>
                      <strong>{viewProject.metric2Value}</strong>
                      <span>{viewProject.metric2Label || 'Metric 2'}</span>
                    </div>
                  )}
                  {viewProject.metric3Value && (
                    <div className={styles.metricViewCard}>
                      <strong>{viewProject.metric3Value}</strong>
                      <span>{viewProject.metric3Label || 'Metric 3'}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Tags */}
              {viewProject.tags && viewProject.tags.length > 0 && (
                <div className={styles.viewContentSection}>
                  <h4>Technologies & Tags</h4>
                  <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                    {viewProject.tags.map((tag) => (
                      <span key={tag} className={styles.tagPill}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Related Case Study */}
              {viewProject.relatedCaseStudy && (
                <div className={styles.viewContentSection}>
                  <h4>Related Case Study</h4>
                  <div className={styles.relatedBox}>
                    <AdminIcon name="blogs" />
                    <span>{viewProject.relatedCaseStudy}</span>
                  </div>
                </div>
              )}
            </div>

            <footer className={styles.modalFooter}>
              <button
                className={styles.secondaryButton}
                onClick={() => {
                  const p = viewProject;
                  setViewProject(null);
                  setFormProject(p);
                }}
              >
                Edit project
              </button>
              <button className={styles.primaryButton} onClick={() => setViewProject(null)}>
                Close
              </button>
            </footer>
          </article>
        </div>
      )}

      {/* DELETE CONFIRMATION MODAL */}
      {deleteTarget && (
        <div className={styles.modalLayer} role="dialog" aria-modal="true" aria-label="Delete project">
          <button className={styles.modalBackdrop} onClick={() => setDeleteTarget(null)} aria-label="Close" />
          <section className={`${styles.modal} ${styles.confirmModal}`}>
            <span className={styles.dangerIcon}>
              <AdminIcon name="trash" />
            </span>
            <h2>Delete this project?</h2>
            <p>
              <strong>{deleteTarget.title}</strong> will be permanently removed from your project portfolio.
            </p>
            <footer className={styles.modalFooter}>
              <button className={styles.secondaryButton} onClick={() => setDeleteTarget(null)}>
                Cancel
              </button>
              <button className={styles.dangerButton} onClick={handleDelete}>
                Delete project
              </button>
            </footer>
          </section>
        </div>
      )}
    </AdminShell>
  );
};
