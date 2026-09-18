import type { CaseStudy, CaseStudyInput, ContentStatus } from '@/types/admin';

const STORAGE_KEY = 'neno_admin_case_studies_v3';


const getStoredCaseStudies = (): CaseStudy[] => {
  if (typeof window === 'undefined') return [];
  try {
    // Clear legacy dummy cache if present
    if (localStorage.getItem('neno_admin_case_studies_v2')) localStorage.removeItem('neno_admin_case_studies_v2');
    if (localStorage.getItem('neno_admin_case_studies')) localStorage.removeItem('neno_admin_case_studies');

    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as CaseStudy[];
    return Array.isArray(parsed)
      ? parsed.filter((c) => !c.id.startsWith('cs-') && !c.slug.includes('autonomous-voice-ai'))
      : [];
  } catch {
    return [];
  }
};

const setStoredCaseStudies = (cases: CaseStudy[]) => {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cases));
  } catch (error) {
    console.warn('Unable to persist case studies to localStorage:', error);
  }
};

export const getCaseStudies = async (): Promise<CaseStudy[]> => {
  try {
    const res = await fetch('/api/admin/content/case-studies', { cache: 'no-store' });
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data)) {
        setStoredCaseStudies(data);
        return data;
      }
    }
  } catch {
    // Graceful fallback
  }
  return getStoredCaseStudies();
};

export const createCaseStudy = async (input: CaseStudyInput): Promise<CaseStudy> => {
  const newCaseStudy: CaseStudy = {
    ...input,
    id: `cs-${Date.now()}`,
    createdAt: new Date().toISOString().split('T')[0],
    updatedAt: new Date().toISOString().split('T')[0],
  };

  try {
    const res = await fetch('/api/admin/content/case-studies', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newCaseStudy),
    });
    if (res.ok) {
      const saved = await res.json();
      const current = getStoredCaseStudies();
      const merged = [saved, ...current.filter((c) => c.id !== saved.id)];
      setStoredCaseStudies(merged);
      return saved;
    }
  } catch {
    // fallback to local
  }

  const current = getStoredCaseStudies();
  const next = [newCaseStudy, ...current];
  setStoredCaseStudies(next);
  return newCaseStudy;
};

export const updateCaseStudy = async (id: string, input: Partial<CaseStudyInput>): Promise<CaseStudy> => {
  const current = getStoredCaseStudies();
  const existing = current.find((c) => c.id === id);
  const updated: CaseStudy = {
    ...(existing || {
      id,
      title: '',
      slug: '',
      client: '',
      industry: '',
      badge: '',
      heroImage: '',
      overview: '',
      challenge: '',
      solution: '',
      implementation: '',
      results: '',
      metric1Value: '',
      metric1Label: '',
      metric2Value: '',
      metric2Label: '',
      metric3Value: '',
      metric3Label: '',
      technologies: [],
      status: 'Published' as ContentStatus,
      publishDate: new Date().toISOString().split('T')[0],
      createdAt: new Date().toISOString().split('T')[0],
      updatedAt: new Date().toISOString().split('T')[0],
    }),
    ...input,
    updatedAt: new Date().toISOString().split('T')[0],
  };

  try {
    const res = await fetch(`/api/admin/content/case-studies/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updated),
    });
    if (res.ok) {
      const saved = await res.json();
      const next = current.map((c) => (c.id === id ? saved : c));
      setStoredCaseStudies(next);
      return saved;
    }
  } catch {
    // fallback to local
  }

  const next = current.map((c) => (c.id === id ? updated : c));
  setStoredCaseStudies(next);
  return updated;
};

export const deleteCaseStudy = async (id: string): Promise<void> => {
  try {
    await fetch(`/api/admin/content/case-studies/${id}`, { method: 'DELETE' });
  } catch {
    // fallback to local
  }
  const current = getStoredCaseStudies();
  const next = current.filter((c) => c.id !== id);
  setStoredCaseStudies(next);
};

export const setCaseStudyStatus = async (id: string, status: ContentStatus): Promise<CaseStudy> => {
  return updateCaseStudy(id, { status });
};
