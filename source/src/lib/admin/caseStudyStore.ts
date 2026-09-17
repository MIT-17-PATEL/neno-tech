import type { CaseStudy, CaseStudyInput, ContentStatus } from '@/types/admin';

const STORAGE_KEY = 'neno_admin_case_studies_v2';

const INITIAL_CASE_STUDIES: CaseStudy[] = [
  {
    id: 'cs-1',
    title: 'Autonomous Voice AI Agents for Real-Time FinTech Underwriting',
    slug: 'autonomous-voice-ai-agents-fintech',
    client: 'Global FinTech & Lending Platform',
    industry: 'Financial Services',
    badge: 'NENO VOICE DEPLOYMENT',
    heroImage: '/assets/img/projects/project-ai-1.jpg',
    overview: 'Deployed autonomous voice agents powered by <200ms streaming LLM pipelines to conduct borrower pre-qualifications and real-time document verification.',
    challenge: 'Manual call centers faced 45% drop-off during peak lending seasons and high operational costs ($4.20 per qualification call).',
    solution: 'Built a customized voice pipeline with Neno Voice, carrier-grade SIP routing, and deterministic guardrails ensuring 100% regulatory compliance.',
    implementation: 'Configured sub-200ms low-latency WebSocket audio streams directly integrated into Twilio SIP trunks. Deployed Claude 3.5 Sonnet with customized prompt chains for real-time risk scoring, KYC check validation, and seamless warm transfers.',
    results: 'Eliminated manual qualification backlogs while slashing per-call operational costs by 68% and improving qualification conversion accuracy to 99.4%.',
    metric1Value: '68%',
    metric1Label: 'Cost Reduction',
    metric2Value: '4.2x Faster',
    metric2Label: 'Call Qualification',
    metric3Value: '99.4%',
    metric3Label: 'Accuracy Rate',
    technologies: ['Neno Voice', '<200ms Audio Pipeline', 'Claude 3.5 Sonnet', 'Twilio SIP', 'PostgreSQL'],
    status: 'Published',
    publishDate: '2026-01-20',
    createdAt: '2026-01-10',
    updatedAt: '2026-03-05',
  },
  {
    id: 'cs-2',
    title: 'Multi-Agent Swarms for Automated Healthcare Claims Adjudication',
    slug: 'multi-agent-swarms-healthcare-claims',
    client: 'Tier-1 Healthcare Network',
    industry: 'Healthcare & Insurance',
    badge: 'AGENTIC AI SYSTEMS',
    heroImage: '/assets/img/projects/project-ai-2.jpg',
    overview: 'Engineered multi-agent swarms that autonomously review medical claims, parse unstructured EHR notes, cross-reference policy guidelines, and flag fraud.',
    challenge: 'Over 20,000 weekly claims resulted in an 18-day processing backlog and significant billing discrepancy disputes.',
    solution: 'Implemented deterministic multi-agent architectures running inside HIPAA-compliant private cloud VPCs with continuous human-in-the-loop oversight.',
    implementation: 'Developed a swarm of specialized micro-agents: OCR & Document Extraction Agent, Policy Verification Agent, Fraud Detection Classifier, and Reconciliation Agent coordinated via an event-driven task queue.',
    results: 'Accelerated claims turnaround from 18 days to 4 hours with 99.8% precision, saving $1.4M in annual administrative overhead.',
    metric1Value: '10x Faster',
    metric1Label: 'Processing Speed',
    metric2Value: '$1.4M',
    metric2Label: 'Annual Overhead Saved',
    metric3Value: '99.8%',
    metric3Label: 'Adjudication Precision',
    technologies: ['Multi-Agent Swarms', 'Private RAG', 'HIPAA Compliant VPC', 'Python / FastAPI', 'Vector Search'],
    status: 'Published',
    publishDate: '2026-02-05',
    createdAt: '2026-01-28',
    updatedAt: '2026-03-08',
  },
  {
    id: 'cs-3',
    title: 'Forward-Deployed Squad: Modernizing Legacy Logistics ERP with AI',
    slug: 'forward-deployed-squad-logistics-erp',
    client: 'Global Freight & Supply Chain Operator',
    industry: 'Logistics & Supply Chain',
    badge: 'FORWARD DEPLOYED SQUAD',
    heroImage: '/assets/img/projects/project-ai-3.jpg',
    overview: 'Embedded a 5-engineer Neno squad to modernize a legacy on-premises ERP into a real-time, predictive dispatch and tracking platform.',
    challenge: 'Legacy architecture suffered from siloed database tables, zero mobile observability, and 12-hour delayed cargo route recalculations.',
    solution: 'Redesigned data pipelines with modern Next.js frontends, Kafka real-time event streaming, and predictive route optimization models.',
    implementation: 'Squad embedded directly on-site and remotely. Replaced monolithic batch queries with Kafka streams, connected IoT sensor feeds to cloud analytics, and launched custom Next.js progressive dispatch consoles.',
    results: 'Delivered MVP to production in 14 days. Reduced fleet fuel overhead by 22% and established 100% real-time GPS tracking across 3,400 active freight vehicles.',
    metric1Value: '14 Days',
    metric1Label: 'Time to Production',
    metric2Value: '-22%',
    metric2Label: 'Fuel Overhead',
    metric3Value: '100%',
    metric3Label: 'Real-Time Visibility',
    technologies: ['Next.js', 'TypeScript', 'Apache Kafka', 'Kubernetes', 'Fine-Tuned Llama 3'],
    status: 'Published',
    publishDate: '2026-02-22',
    createdAt: '2026-02-12',
    updatedAt: '2026-03-11',
  },
  {
    id: 'cs-4',
    title: 'Autonomous Dialer & Unified CRM for Enterprise SaaS Sales',
    slug: 'autonomous-dialer-unified-crm-saas',
    client: 'High-Growth B2B Cloud Platform',
    industry: 'Enterprise SaaS',
    badge: 'NENO DIALER & CRM',
    heroImage: '/assets/img/projects/project-ai-1.jpg',
    overview: 'Deployed Neno Dialer with bidirectional CRM synchronization to automate outbound follow-ups, qualification notes, and calendar scheduling.',
    challenge: 'Sales reps spent over 3 hours daily manually logging notes, dialing unanswered calls, and juggling disconnected spreadsheets.',
    solution: 'Integrated Neno Dialer directly with Salesforce and HubSpot, enabling automatic call transcription, sentiment analysis, and instant meeting booking.',
    implementation: 'Created seamless browser and mobile CTI integration. Deployed Whisper transcription and sentiment scoring to automatically update Salesforce lead stages and book executive meetings.',
    results: 'Increased connect rates by 34%, saved reps 15 hours per week on administrative work, and increased generated pipeline by 2.8x.',
    metric1Value: '+34%',
    metric1Label: 'Connect Rate',
    metric2Value: '15 hrs/wk',
    metric2Label: 'Rep Hours Saved',
    metric3Value: '2.8x',
    metric3Label: 'Pipeline Generated',
    technologies: ['Neno Dialer', 'Neno CRM', 'Salesforce API', 'HubSpot Sync', 'Voice Sentiment AI'],
    status: 'Published',
    publishDate: '2026-03-01',
    createdAt: '2026-02-20',
    updatedAt: '2026-03-15',
  },
];

const getStoredCaseStudies = (): CaseStudy[] => {
  if (typeof window === 'undefined') return INITIAL_CASE_STUDIES;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_CASE_STUDIES));
      return INITIAL_CASE_STUDIES;
    }
    const parsed = JSON.parse(raw) as CaseStudy[];
    return Array.isArray(parsed) && parsed.length ? parsed : INITIAL_CASE_STUDIES;
  } catch {
    return INITIAL_CASE_STUDIES;
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
      if (Array.isArray(data) && data.length) {
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
