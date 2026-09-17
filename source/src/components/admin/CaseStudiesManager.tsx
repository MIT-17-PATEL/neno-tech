'use client';

import React, { useEffect, useMemo, useState } from 'react';
import type { CaseStudy, CaseStudyInput, ContentStatus } from '@/types/admin';
import { NENO_INDUSTRIES } from '@/types/admin';
import {
  getCaseStudies,
  createCaseStudy,
  updateCaseStudy,
  deleteCaseStudy,
  setCaseStudyStatus,
} from '@/lib/admin/caseStudyStore';
import { AdminIcon } from './AdminIcons';
import { AdminShell } from './AdminShell';
import styles from './admin.module.css';

const PAGE_SIZE = 8;

export const CaseStudiesManager: React.FC = () => {
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [search, setSearch] = useState('');
  const [industry, setIndustry] = useState('All');
  const [status, setStatus] = useState('All');
  const [page, setPage] = useState(1);

  const [formCaseStudy, setFormCaseStudy] = useState<CaseStudy | null | undefined>(undefined);
  const [viewCaseStudy, setViewCaseStudy] = useState<CaseStudy | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<CaseStudy | null>(null);
  const [notice, setNotice] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const refresh = async () => {
    try {
      setLoading(true);
      setError(false);
      const data = await getCaseStudies();
      setCaseStudies(data);
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
    return caseStudies.filter((item) => {
      const matchSearch =
        !q ||
        item.title.toLowerCase().includes(q) ||
        item.client.toLowerCase().includes(q) ||
        item.industry.toLowerCase().includes(q) ||
        item.badge?.toLowerCase().includes(q) ||
        item.technologies.some((t) => t.toLowerCase().includes(q));
      const matchIndustry = industry === 'All' || item.industry === industry;
      const matchStatus = status === 'All' || item.status === status;
      return matchSearch && matchIndustry && matchStatus;
    });
  }, [caseStudies, search, industry, status]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const visible = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const handleSave = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const techRaw = String(formData.get('technologies') || '');
    const technologies = techRaw
      .split(',')
      .map((t) => t.trim())
      .filter(Boolean);

    const input: CaseStudyInput = {
      title: String(formData.get('title') || '').trim(),
      slug: String(formData.get('slug') || '').trim(),
      client: String(formData.get('client') || '').trim(),
      industry: String(formData.get('industry') || '').trim(),
      badge: String(formData.get('badge') || '').trim() || 'NENO AI DEPLOYMENT',
      heroImage: String(formData.get('heroImage') || '').trim() || '/assets/img/projects/project-ai-1.jpg',
      overview: String(formData.get('overview') || '').trim(),
      challenge: String(formData.get('challenge') || '').trim(),
      solution: String(formData.get('solution') || '').trim(),
      implementation: String(formData.get('implementation') || '').trim(),
      results: String(formData.get('results') || '').trim(),
      metric1Value: String(formData.get('metric1Value') || '').trim(),
      metric1Label: String(formData.get('metric1Label') || '').trim(),
      metric2Value: String(formData.get('metric2Value') || '').trim(),
      metric2Label: String(formData.get('metric2Label') || '').trim(),
      metric3Value: String(formData.get('metric3Value') || '').trim(),
      metric3Label: String(formData.get('metric3Label') || '').trim(),
      technologies: technologies.length ? technologies : ['Neno AI', 'LLM Pipeline', 'Next.js'],
      status: (String(formData.get('status')) as ContentStatus) || 'Published',
      publishDate: String(formData.get('publishDate') || '').trim() || new Date().toISOString().split('T')[0],
    };

    if (!input.slug) {
      input.slug = input.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    }

    try {
      if (formCaseStudy?.id) {
        await updateCaseStudy(formCaseStudy.id, input);
        setNotice({ type: 'success', text: 'Case study updated successfully.' });
      } else {
        await createCaseStudy(input);
        setNotice({ type: 'success', text: 'New case study created successfully.' });
      }
      setFormCaseStudy(undefined);
      await refresh();
    } catch {
      setNotice({ type: 'error', text: 'Failed to save case study. Please try again.' });
    }
  };

  const handleToggleStatus = async (cs: CaseStudy) => {
    const nextStatus: ContentStatus = cs.status === 'Published' ? 'Draft' : 'Published';
    try {
      await setCaseStudyStatus(cs.id, nextStatus);
      setNotice({ type: 'success', text: `Case study moved to ${nextStatus.toLowerCase()}.` });
      await refresh();
    } catch {
      setNotice({ type: 'error', text: 'Unable to update status.' });
    }
  };

  const handleDelete = async () => {
    if (!deleteTarget) return;
    try {
      await deleteCaseStudy(deleteTarget.id);
      setNotice({ type: 'success', text: 'Case study deleted.' });
      await refresh();
    } catch {
      setNotice({ type: 'error', text: 'Unable to delete case study.' });
    } finally {
      setDeleteTarget(null);
    }
  };

  return (
    <AdminShell
      title="Case Studies"
      subtitle="Show the outcomes, architectures, and systems Neno has helped deliver."
      action={
        <button className={styles.primaryButton} onClick={() => setFormCaseStudy(null)}>
          <AdminIcon name="plus" /> Add case study
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
            <h2>All case studies</h2>
            <p>
              {loading
                ? 'Loading case studies…'
                : `${filtered.length} ${filtered.length === 1 ? 'entry' : 'entries'} found`}
            </p>
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
                placeholder="Search case studies..."
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
            <span className={styles.spinner} /> Loading case studies…
          </div>
        ) : error ? (
          <div className={styles.emptyState}>
            <strong>Unable to load case studies.</strong>
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
                    <th>Case Study</th>
                    <th>Client / Industry</th>
                    <th>Key Metrics</th>
                    <th>Technologies</th>
                    <th>Published</th>
                    <th>Status</th>
                    <th>
                      <span className={styles.screenReaderOnly}>Actions</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {visible.map((cs) => (
                    <tr key={cs.id}>
                      <td>
                        <div className={styles.blogTitleCell}>
                          <div className={styles.projectImageThumb}>
                            <img
                              src={cs.heroImage || '/assets/img/projects/project-ai-1.jpg'}
                              alt={cs.title}
                              onError={(e) => {
                                (e.currentTarget as HTMLImageElement).src = '/assets/img/projects/project-ai-1.jpg';
                              }}
                            />
                          </div>
                          <div>
                            <span className={styles.badgeLabel}>{cs.badge}</span>
                            <strong>{cs.title}</strong>
                            <span>/{cs.slug}</span>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div>
                          <strong>{cs.client || 'Enterprise'}</strong>
                          <span style={{ display: 'block', fontSize: '11px', color: '#9AA4B2' }}>{cs.industry}</span>
                        </div>
                      </td>
                      <td>
                        <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                          {cs.metric1Value && (
                            <span className={styles.metricBadge}>
                              <strong>{cs.metric1Value}</strong> {cs.metric1Label}
                            </span>
                          )}
                          {cs.metric2Value && (
                            <span className={styles.metricBadge}>
                              <strong>{cs.metric2Value}</strong> {cs.metric2Label}
                            </span>
                          )}
                        </div>
                      </td>
                      <td>
                        <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
                          {cs.technologies.slice(0, 3).map((tech) => (
                            <span key={tech} className={styles.tagPill}>
                              {tech}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td>{cs.publishDate || '—'}</td>
                      <td>
                        <button
                          className={`${styles.status} ${cs.status === 'Published' ? styles.published : styles.draft}`}
                          onClick={() => handleToggleStatus(cs)}
                          title="Click to toggle status"
                        >
                          {cs.status}
                        </button>
                      </td>
                      <td>
                        <div className={styles.rowActions}>
                          <button onClick={() => setViewCaseStudy(cs)} aria-label={`View ${cs.title}`}>
                            <AdminIcon name="eye" />
                          </button>
                          <button onClick={() => setFormCaseStudy(cs)} aria-label={`Edit ${cs.title}`}>
                            <AdminIcon name="edit" />
                          </button>
                          <button
                            className={styles.deleteAction}
                            onClick={() => setDeleteTarget(cs)}
                            aria-label={`Delete ${cs.title}`}
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
                <strong>No case studies match these filters.</strong>
                <p>Try searching for a different keyword or create a new case study.</p>
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

      {/* CREATE / EDIT CASE STUDY MODAL */}
      {formCaseStudy !== undefined && (
        <div className={styles.modalLayer} role="dialog" aria-modal="true">
          <button className={styles.modalBackdrop} onClick={() => setFormCaseStudy(undefined)} aria-label="Close" />
          <form className={`${styles.modal} ${styles.formModal}`} onSubmit={handleSave}>
            <header className={styles.modalHeader}>
              <div>
                <p className={styles.eyebrow}>{formCaseStudy ? 'EDIT CASE STUDY' : 'NEW CASE STUDY'}</p>
                <h2>{formCaseStudy ? 'Edit Case Study' : 'Create Case Study'}</h2>
              </div>
              <button
                type="button"
                className={styles.iconButton}
                onClick={() => setFormCaseStudy(undefined)}
                aria-label="Close"
              >
                <AdminIcon name="close" />
              </button>
            </header>

            <div className={styles.blogForm}>
              <label className={styles.fullField}>
                Case Study Title *
                <input
                  name="title"
                  defaultValue={formCaseStudy?.title}
                  required
                  placeholder="e.g. Autonomous Voice AI Agents for Real-Time FinTech Underwriting"
                />
              </label>

              <label>
                Slug (URL identifier)
                <input
                  name="slug"
                  defaultValue={formCaseStudy?.slug}
                  placeholder="e.g. autonomous-voice-ai-agents (auto-generated if empty)"
                />
              </label>

              <label>
                Client / Company *
                <input
                  name="client"
                  defaultValue={formCaseStudy?.client}
                  required
                  placeholder="e.g. Global FinTech & Lending Platform"
                />
              </label>

              <label>
                Industry *
                <select name="industry" defaultValue={formCaseStudy?.industry || NENO_INDUSTRIES[0]}>
                  {NENO_INDUSTRIES.map((ind) => (
                    <option key={ind} value={ind}>
                      {ind}
                    </option>
                  ))}
                </select>
              </label>

              <label>
                Badge Tag *
                <input
                  name="badge"
                  defaultValue={formCaseStudy?.badge || 'NENO VOICE DEPLOYMENT'}
                  placeholder="e.g. NENO VOICE DEPLOYMENT or AGENTIC AI SYSTEMS"
                />
              </label>

              <label>
                Hero Image Path or URL
                <input
                  name="heroImage"
                  defaultValue={formCaseStudy?.heroImage || '/assets/img/projects/project-ai-1.jpg'}
                  placeholder="/assets/img/projects/project-ai-1.jpg"
                />
              </label>

              <label>
                Publish Date (YYYY-MM-DD)
                <input
                  name="publishDate"
                  type="date"
                  defaultValue={formCaseStudy?.publishDate || new Date().toISOString().split('T')[0]}
                />
              </label>

              <label>
                Status
                <select name="status" defaultValue={formCaseStudy?.status || 'Published'}>
                  <option value="Published">Published</option>
                  <option value="Draft">Draft</option>
                </select>
              </label>

              <label className={styles.fullField}>
                Short Summary / Overview *
                <textarea
                  name="overview"
                  rows={2}
                  defaultValue={formCaseStudy?.overview}
                  required
                  placeholder="Executive summary of the case study outcome and impact..."
                />
              </label>

              <label className={styles.fullField}>
                Challenge *
                <textarea
                  name="challenge"
                  rows={3}
                  defaultValue={formCaseStudy?.challenge}
                  required
                  placeholder="The core operational friction, backlog, or cost driver faced prior to Neno intervention..."
                />
              </label>

              <label className={styles.fullField}>
                Solution *
                <textarea
                  name="solution"
                  rows={3}
                  defaultValue={formCaseStudy?.solution}
                  required
                  placeholder="The AI system, model architecture, or squad deployed by Neno..."
                />
              </label>

              <label className={styles.fullField}>
                Implementation / Approach *
                <textarea
                  name="implementation"
                  rows={3}
                  defaultValue={formCaseStudy?.implementation}
                  required
                  placeholder="Technical details on data streams, integrations, latency benchmarks, and guardrails..."
                />
              </label>

              <label className={styles.fullField}>
                Results & Business Impact *
                <textarea
                  name="results"
                  rows={3}
                  defaultValue={formCaseStudy?.results}
                  required
                  placeholder="Measurable efficiency gains, cost reductions, and operational milestones achieved..."
                />
              </label>

              {/* 3 Metrics */}
              <div className={styles.fullField}>
                <p className={styles.formSectionTitle}>Verified Result Metrics</p>
                <div className={styles.metricsFormGrid}>
                  <div>
                    <label>Metric 1 Value</label>
                    <input name="metric1Value" defaultValue={formCaseStudy?.metric1Value} placeholder="e.g. 68%" />
                  </div>
                  <div>
                    <label>Metric 1 Label</label>
                    <input
                      name="metric1Label"
                      defaultValue={formCaseStudy?.metric1Label}
                      placeholder="e.g. Cost Reduction"
                    />
                  </div>

                  <div>
                    <label>Metric 2 Value</label>
                    <input
                      name="metric2Value"
                      defaultValue={formCaseStudy?.metric2Value}
                      placeholder="e.g. 4.2x Faster"
                    />
                  </div>
                  <div>
                    <label>Metric 2 Label</label>
                    <input
                      name="metric2Label"
                      defaultValue={formCaseStudy?.metric2Label}
                      placeholder="e.g. Call Qualification"
                    />
                  </div>

                  <div>
                    <label>Metric 3 Value</label>
                    <input name="metric3Value" defaultValue={formCaseStudy?.metric3Value} placeholder="e.g. 99.4%" />
                  </div>
                  <div>
                    <label>Metric 3 Label</label>
                    <input
                      name="metric3Label"
                      defaultValue={formCaseStudy?.metric3Label}
                      placeholder="e.g. Accuracy Rate"
                    />
                  </div>
                </div>
              </div>

              <label className={styles.fullField}>
                Technologies / Tags (comma-separated)
                <input
                  name="technologies"
                  defaultValue={
                    formCaseStudy?.technologies?.join(', ') ||
                    'Neno Voice, <200ms Audio Pipeline, Claude 3.5 Sonnet, Twilio SIP'
                  }
                  placeholder="Neno Voice, Claude 3.5 Sonnet, Twilio SIP, Next.js"
                />
              </label>

              <footer className={styles.modalFooter}>
                <button type="button" className={styles.secondaryButton} onClick={() => setFormCaseStudy(undefined)}>
                  Cancel
                </button>
                <button type="submit" className={styles.primaryButton}>
                  {formCaseStudy ? 'Save case study changes' : 'Create case study'}
                </button>
              </footer>
            </div>
          </form>
        </div>
      )}

      {/* VIEW CASE STUDY MODAL */}
      {viewCaseStudy && (
        <div className={styles.modalLayer} role="dialog" aria-modal="true" aria-label="View case study">
          <button className={styles.modalBackdrop} onClick={() => setViewCaseStudy(null)} aria-label="Close" />
          <article className={`${styles.modal} ${styles.viewModal} ${styles.formModal}`}>
            <header className={styles.modalHeader}>
              <div>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '8px' }}>
                  <span
                    className={`${styles.status} ${viewCaseStudy.status === 'Published' ? styles.published : styles.draft}`}
                  >
                    {viewCaseStudy.status}
                  </span>
                  <span className={styles.badgeLabel}>{viewCaseStudy.badge}</span>
                  <span className={styles.tagPill}>{viewCaseStudy.industry}</span>
                  <span style={{ fontSize: '12px', color: '#9AA4B2' }}>Client: {viewCaseStudy.client}</span>
                </div>
                <h2>{viewCaseStudy.title}</h2>
              </div>
              <button className={styles.iconButton} onClick={() => setViewCaseStudy(null)} aria-label="Close">
                <AdminIcon name="close" />
              </button>
            </header>

            <div className={styles.viewModalBody}>
              {viewCaseStudy.heroImage && (
                <div className={styles.viewBannerWrap}>
                  <img
                    src={viewCaseStudy.heroImage}
                    alt={viewCaseStudy.title}
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = '/assets/img/projects/project-ai-1.jpg';
                    }}
                  />
                </div>
              )}

              <div className={styles.viewContentSection}>
                <h4>Executive Summary</h4>
                <p className={styles.blogSummary}>{viewCaseStudy.overview}</p>
              </div>

              <div className={styles.viewGridTwo}>
                <div className={styles.viewContentSection}>
                  <h4 style={{ color: '#f87171' }}>The Challenge</h4>
                  <div className={styles.blogContent}>{viewCaseStudy.challenge}</div>
                </div>
                <div className={styles.viewContentSection}>
                  <h4 style={{ color: '#34d399' }}>The Neno Solution</h4>
                  <div className={styles.blogContent}>{viewCaseStudy.solution}</div>
                </div>
              </div>

              <div className={styles.viewContentSection}>
                <h4>Implementation & Architecture</h4>
                <div className={styles.blogContent}>{viewCaseStudy.implementation}</div>
              </div>

              <div className={styles.viewContentSection}>
                <h4>Results & Delivery Milestones</h4>
                <div className={styles.blogContent}>{viewCaseStudy.results}</div>
              </div>

              {/* Metrics */}
              <div className={styles.viewContentSection}>
                <h4>Performance & Impact Metrics</h4>
                <div className={styles.metricsViewGrid}>
                  {viewCaseStudy.metric1Value && (
                    <div className={styles.metricViewCard}>
                      <strong>{viewCaseStudy.metric1Value}</strong>
                      <span>{viewCaseStudy.metric1Label || 'Metric 1'}</span>
                    </div>
                  )}
                  {viewCaseStudy.metric2Value && (
                    <div className={styles.metricViewCard}>
                      <strong>{viewCaseStudy.metric2Value}</strong>
                      <span>{viewCaseStudy.metric2Label || 'Metric 2'}</span>
                    </div>
                  )}
                  {viewCaseStudy.metric3Value && (
                    <div className={styles.metricViewCard}>
                      <strong>{viewCaseStudy.metric3Value}</strong>
                      <span>{viewCaseStudy.metric3Label || 'Metric 3'}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Technologies */}
              {viewCaseStudy.technologies && viewCaseStudy.technologies.length > 0 && (
                <div className={styles.viewContentSection}>
                  <h4>Technologies Deployed</h4>
                  <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                    {viewCaseStudy.technologies.map((tech) => (
                      <span key={tech} className={styles.tagPill}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div style={{ padding: '0 26px 12px', fontSize: '12px', color: '#687385' }}>
                Published: {viewCaseStudy.publishDate || '—'}
              </div>
            </div>

            <footer className={styles.modalFooter}>
              <button
                className={styles.secondaryButton}
                onClick={() => {
                  const cs = viewCaseStudy;
                  setViewCaseStudy(null);
                  setFormCaseStudy(cs);
                }}
              >
                Edit case study
              </button>
              <button className={styles.primaryButton} onClick={() => setViewCaseStudy(null)}>
                Close
              </button>
            </footer>
          </article>
        </div>
      )}

      {/* DELETE CONFIRMATION MODAL */}
      {deleteTarget && (
        <div className={styles.modalLayer} role="dialog" aria-modal="true" aria-label="Delete case study">
          <button className={styles.modalBackdrop} onClick={() => setDeleteTarget(null)} aria-label="Close" />
          <section className={`${styles.modal} ${styles.confirmModal}`}>
            <span className={styles.dangerIcon}>
              <AdminIcon name="trash" />
            </span>
            <h2>Delete this case study?</h2>
            <p>
              <strong>{deleteTarget.title}</strong> will be permanently removed from your case study library.
            </p>
            <footer className={styles.modalFooter}>
              <button className={styles.secondaryButton} onClick={() => setDeleteTarget(null)}>
                Cancel
              </button>
              <button className={styles.dangerButton} onClick={handleDelete}>
                Delete case study
              </button>
            </footer>
          </section>
        </div>
      )}
    </AdminShell>
  );
};
