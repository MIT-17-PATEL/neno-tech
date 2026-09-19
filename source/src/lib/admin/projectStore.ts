import type { Project, ProjectInput, ContentStatus } from '@/types/admin';

const STORAGE_KEY = 'neno_admin_projects_v3';


const getStoredProjects = (): Project[] => {
  if (typeof window === 'undefined') return [];
  try {
    // Clear legacy dummy cache if present
    if (localStorage.getItem('neno_admin_projects_v2')) localStorage.removeItem('neno_admin_projects_v2');
    if (localStorage.getItem('neno_admin_projects')) localStorage.removeItem('neno_admin_projects');

    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as Project[];
    return Array.isArray(parsed)
      ? parsed.filter((p) => !p.id.startsWith('proj-') && !p.slug.includes('ai-native-crm'))
      : [];
  } catch {
    return [];
  }
};

const setStoredProjects = (projects: Project[]) => {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
  } catch (error) {
    console.warn('Unable to persist projects to localStorage:', error);
  }
};

export const getProjects = async (): Promise<Project[]> => {
  try {
    const res = await fetch('/api/admin/content/projects', { cache: 'no-store' });
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data)) {
        setStoredProjects(data);
        return data;
      }
    }
  } catch {
    // Graceful fallback
  }
  return getStoredProjects();
};

export const createProject = async (input: ProjectInput): Promise<Project> => {
  const newProject: Project = {
    ...input,
    id: `proj-${Date.now()}`,
    createdAt: new Date().toISOString().split('T')[0],
    updatedAt: new Date().toISOString().split('T')[0],
  };

  try {
    const res = await fetch('/api/admin/content/projects', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newProject),
    });
    if (res.ok) {
      const saved = await res.json();
      const current = getStoredProjects();
      const merged = [saved, ...current.filter((p) => p.id !== saved.id)];
      setStoredProjects(merged);
      return saved;
    }
  } catch {
    // fallback to local
  }

  const current = getStoredProjects();
  const next = [newProject, ...current];
  setStoredProjects(next);
  return newProject;
};

export const updateProject = async (id: string, input: Partial<ProjectInput>): Promise<Project> => {
  const current = getStoredProjects();
  const existing = current.find((p) => p.id === id);
  const updated: Project = {
    ...(existing || {
      id,
      title: '',
      slug: '',
      client: '',
      industry: '',
      shortDescription: '',
      fullDescription: '',
      image: '',
      metric1Value: '',
      metric1Label: '',
      metric2Value: '',
      metric2Label: '',
      metric3Value: '',
      metric3Label: '',
      tags: [],
      relatedCaseStudy: '',
      status: 'Published' as ContentStatus,
      createdAt: new Date().toISOString().split('T')[0],
      updatedAt: new Date().toISOString().split('T')[0],
    }),
    ...input,
    updatedAt: new Date().toISOString().split('T')[0],
  };

  try {
    const res = await fetch(`/api/admin/content/projects/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updated),
    });
    if (res.ok) {
      const saved = await res.json();
      const next = current.map((p) => (p.id === id ? saved : p));
      setStoredProjects(next);
      return saved;
    }
  } catch {
    // fallback to local
  }

  const next = current.map((p) => (p.id === id ? updated : p));
  setStoredProjects(next);
  return updated;
};

export const deleteProject = async (id: string): Promise<void> => {
  try {
    await fetch(`/api/admin/content/projects/${id}`, { method: 'DELETE' });
  } catch {
    // fallback to local
  }
  const current = getStoredProjects();
  const next = current.filter((p) => p.id !== id);
  setStoredProjects(next);
};

export const setProjectStatus = async (id: string, status: ContentStatus): Promise<Project> => {
  return updateProject(id, { status });
};
