import type { Project, ProjectInput, ContentStatus } from '@/types/admin';

const STORAGE_KEY = 'neno_admin_projects_v2';

const INITIAL_PROJECTS: Project[] = [
  {
    id: 'proj-1',
    title: 'AI-Native CRM System for Enterprise Bottleneck Resolution',
    slug: 'ai-native-crm-system',
    client: 'Enterprise FinTech',
    industry: 'Financial Services',
    shortDescription: 'Engineered an autonomous multi-agent CRM system that identifies deal pipeline bottlenecks, generates instant lead summaries, and automates high-touch follow-up workflows for global revenue teams.',
    fullDescription: 'Designed and deployed a state-of-the-art AI-native CRM architecture that replaces manual SDR qualification and CRM data entry with autonomous event-driven agent swarms. The system connects directly with company communication channels, monitors deal progression, flags stall risks, and dynamically generates personalized multi-channel outreach strategies tailored to prospect behavior.',
    image: '/assets/img/projects/project-ai-1.jpg',
    metric1Value: '+140%',
    metric1Label: 'Pipeline Velocity',
    metric2Value: '-65%',
    metric2Label: 'Resolution Time',
    metric3Value: '99.4%',
    metric3Label: 'Accuracy Rate',
    tags: ['AI CRM', 'Enterprise', 'Automation', 'Multi-Agent'],
    relatedCaseStudy: 'Autonomous Voice AI Agents for Real-Time FinTech Underwriting',
    status: 'Published',
    createdAt: '2026-01-15',
    updatedAt: '2026-03-10',
  },
  {
    id: 'proj-2',
    title: 'Smart Email Outreach & Personalized Content Platform',
    slug: 'smart-email-outreach-platform',
    client: 'Hyper-Growth SaaS',
    industry: 'Enterprise SaaS',
    shortDescription: 'Built a contextual generative AI engine that personalizes multi-channel outreach at scale, dynamically tailoring pitches based on prospect behavioral data with a 3.4x higher response rate.',
    fullDescription: 'Architected an automated content personalization and outreach orchestration engine. It analyzes prospect LinkedIn activity, recent firmographic milestones, and historical sales conversation transcripts to craft bespoke pitch sequences that resonate deeply with B2B executives while preserving brand voice and tone guardrails.',
    image: '/assets/img/projects/project-ai-2.jpg',
    metric1Value: '3.4x',
    metric1Label: 'Response Rate',
    metric2Value: '68.4%',
    metric2Label: 'Open Rate',
    metric3Value: '15 hrs/wk',
    metric3Label: 'Rep Hours Saved',
    tags: ['Sales Tech', 'Outreach', 'LLM', 'Contextual AI'],
    relatedCaseStudy: 'Autonomous Dialer & Unified CRM for Enterprise SaaS Sales',
    status: 'Published',
    createdAt: '2026-02-01',
    updatedAt: '2026-03-12',
  },
  {
    id: 'proj-3',
    title: 'Unified Enterprise Data Hub & Predictive Forecasting',
    slug: 'unified-enterprise-data-hub',
    client: 'Global Logistics Corp',
    industry: 'Logistics & Supply Chain',
    shortDescription: 'Architected a cloud-native real-time predictive analytics hub integrating fragmented data lakes into a centralized neural forecasting engine with 99.4% demand prediction accuracy.',
    fullDescription: 'Modernized a fragmented enterprise logistics infrastructure by implementing real-time Apache Kafka streaming pipelines into high-throughput neural forecasting models. The platform processes millions of sensor and freight tracking records per second, providing instant dispatch routing recalculations and predictive maintenance alerts across global fleets.',
    image: '/assets/img/projects/project-ai-3.jpg',
    metric1Value: '99.4%',
    metric1Label: 'Forecast Accuracy',
    metric2Value: '10M+ rows/s',
    metric2Label: 'Data Processing',
    metric3Value: '-22%',
    metric3Label: 'Fuel Overhead',
    tags: ['Data Intelligence', 'Analytics', 'AWS', 'Kafka'],
    relatedCaseStudy: 'Forward-Deployed Squad: Modernizing Legacy Logistics ERP with AI',
    status: 'Published',
    createdAt: '2026-02-18',
    updatedAt: '2026-03-14',
  },
];

const getStoredProjects = (): Project[] => {
  if (typeof window === 'undefined') return INITIAL_PROJECTS;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_PROJECTS));
      return INITIAL_PROJECTS;
    }
    const parsed = JSON.parse(raw) as Project[];
    return Array.isArray(parsed) && parsed.length ? parsed : INITIAL_PROJECTS;
  } catch {
    return INITIAL_PROJECTS;
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
      if (Array.isArray(data) && data.length) {
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
