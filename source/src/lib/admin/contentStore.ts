import type { ManagedContent, ManagedContentInput } from '@/types/admin';

export type ContentCollection = 'case-studies' | 'projects';

const STORAGE_KEY_PREFIX = 'neno_admin_content_v2_';

const DUMMY_PROJECTS: ManagedContent[] = [
  {
    id: 'proj-1',
    title: 'AI-Native CRM System for Enterprise Bottleneck Resolution',
    slug: 'ai-native-crm-system',
    category: 'Financial Services',
    client: 'Enterprise FinTech',
    publishDate: '2026-01-15',
    shortDescription: 'Engineered an autonomous multi-agent CRM system that identifies deal pipeline bottlenecks, generates instant lead summaries, and automates high-touch follow-up workflows.',
    content: 'Designed and deployed a state-of-the-art AI-native CRM architecture that replaces manual SDR qualification and CRM data entry with autonomous event-driven agent swarms.',
    link: '/project-details',
    status: 'Published',
    updatedAt: '2026-03-10',
  },
  {
    id: 'proj-2',
    title: 'Smart Email Outreach & Personalized Content Platform',
    slug: 'smart-email-outreach-platform',
    category: 'Enterprise SaaS',
    client: 'Hyper-Growth SaaS',
    publishDate: '2026-02-01',
    shortDescription: 'Built a contextual generative AI engine that personalizes multi-channel outreach at scale, dynamically tailoring pitches based on prospect behavioral data.',
    content: 'Architected an automated content personalization and outreach orchestration engine analyzing prospect firmographic milestones and sales conversation transcripts.',
    link: '/project-details',
    status: 'Published',
    updatedAt: '2026-03-12',
  },
  {
    id: 'proj-3',
    title: 'Unified Enterprise Data Hub & Predictive Forecasting',
    slug: 'unified-enterprise-data-hub',
    category: 'Logistics & Supply Chain',
    client: 'Global Logistics Corp',
    publishDate: '2026-02-18',
    shortDescription: 'Architected a cloud-native real-time predictive analytics hub integrating fragmented data lakes into a centralized neural forecasting engine.',
    content: 'Modernized a fragmented enterprise logistics infrastructure by implementing real-time Apache Kafka streaming pipelines with 99.4% demand prediction accuracy.',
    link: '/project-details',
    status: 'Published',
    updatedAt: '2026-03-14',
  },
  {
    id: 'proj-4',
    title: 'Autonomous Voice Telephony & Multi-Channel Contact Mesh',
    slug: 'autonomous-voice-telephony-mesh',
    category: 'Enterprise SaaS',
    client: 'Global Telecom & Enterprise Support',
    publishDate: '2026-02-25',
    shortDescription: 'Deployed sub-200ms conversational audio pipelines integrated with WebRTC and carrier SIP trunks, automating Tier-1 customer resolution.',
    content: 'Architected low-latency full-duplex speech AI agents with dynamic interruption handling, caller intent classification, and real-time knowledge base retrieval.',
    link: '/project-details',
    status: 'Published',
    updatedAt: '2026-03-15',
  },
  {
    id: 'proj-5',
    title: 'Real-Time Fraud Detection & Autonomous Transaction Guard',
    slug: 'real-time-fraud-detection-engine',
    category: 'Financial Services',
    client: 'Tier-1 Digital Banking Group',
    publishDate: '2026-03-01',
    shortDescription: 'Engineered a streaming graph-neural network platform processing 45,000 tx/sec to detect synthetic identity theft and unauthorized transactions.',
    content: 'Designed and deployed an ultra-low latency risk assessment engine leveraging vectorized transaction embeddings, anomaly detection models, and automated compliance alerts.',
    link: '/project-details',
    status: 'Published',
    updatedAt: '2026-03-16',
  },
];

const DUMMY_CASE_STUDIES: ManagedContent[] = [
  {
    id: 'cs-1',
    title: 'Autonomous Voice AI Agents for Real-Time FinTech Underwriting',
    slug: 'autonomous-voice-ai-agents-fintech',
    category: 'Financial Services',
    client: 'Global FinTech & Lending Platform',
    publishDate: '2026-01-20',
    shortDescription: 'Deployed autonomous voice agents powered by <200ms streaming LLM pipelines to conduct borrower pre-qualifications and real-time document verification.',
    content: 'Built a customized voice pipeline with Neno Voice, carrier-grade SIP routing, and deterministic guardrails ensuring 100% regulatory compliance.',
    link: '/case-studies',
    status: 'Published',
    updatedAt: '2026-03-05',
  },
  {
    id: 'cs-2',
    title: 'Multi-Agent Swarms for Automated Healthcare Claims Adjudication',
    slug: 'multi-agent-swarms-healthcare-claims',
    category: 'Healthcare & Insurance',
    client: 'Tier-1 Healthcare Network',
    publishDate: '2026-02-05',
    shortDescription: 'Engineered multi-agent swarms that autonomously review medical claims, parse unstructured EHR notes, cross-reference policy guidelines, and flag fraud.',
    content: 'Implemented deterministic multi-agent architectures running inside HIPAA-compliant private cloud VPCs with continuous human-in-the-loop oversight.',
    link: '/case-studies',
    status: 'Published',
    updatedAt: '2026-03-08',
  },
  {
    id: 'cs-3',
    title: 'Forward-Deployed Squad: Modernizing Legacy Logistics ERP with AI',
    slug: 'forward-deployed-squad-logistics-erp',
    category: 'Logistics & Supply Chain',
    client: 'Global Freight & Supply Chain Operator',
    publishDate: '2026-02-22',
    shortDescription: 'Embedded a 5-engineer Neno squad to modernize a legacy on-premises ERP into a real-time, predictive dispatch and tracking platform.',
    content: 'Redesigned data pipelines with modern Next.js frontends, Kafka real-time event streaming, and predictive route optimization models.',
    link: '/case-studies',
    status: 'Published',
    updatedAt: '2026-03-11',
  },
  {
    id: 'cs-4',
    title: 'Autonomous Dialer & Unified CRM for Enterprise SaaS Sales',
    slug: 'autonomous-dialer-unified-crm-saas',
    category: 'Enterprise SaaS',
    client: 'High-Growth B2B Cloud Platform',
    publishDate: '2026-03-01',
    shortDescription: 'Deployed Neno Dialer with bidirectional CRM synchronization to automate outbound follow-ups, qualification notes, and calendar scheduling.',
    content: 'Integrated Neno Dialer directly with Salesforce and HubSpot, enabling automatic call transcription, sentiment analysis, and instant meeting booking.',
    link: '/case-studies',
    status: 'Published',
    updatedAt: '2026-03-15',
  },
  {
    id: 'cs-5',
    title: 'Autonomous IoT Predictive Maintenance & Edge AI for Smart Manufacturing',
    slug: 'predictive-maintenance-edge-ai-manufacturing',
    category: 'Manufacturing & Robotics',
    client: 'Global Industrial Automation Group',
    publishDate: '2026-03-08',
    shortDescription: 'Deployed containerized edge ML models and acoustic anomaly detectors across 1,200 CNC machines to eliminate unplanned factory downtime.',
    content: 'Architected lightweight on-premise edge inference agents connected to vibration sensors with automated maintenance work order dispatching.',
    link: '/case-studies',
    status: 'Published',
    updatedAt: '2026-03-16',
  },
];

const getInitialFor = (collection: ContentCollection): ManagedContent[] => {
  return collection === 'projects' ? DUMMY_PROJECTS : DUMMY_CASE_STUDIES;
};

const getStoredContent = (collection: ContentCollection): ManagedContent[] => {
  const initial = getInitialFor(collection);
  if (typeof window === 'undefined') return initial;
  try {
    const raw = localStorage.getItem(`${STORAGE_KEY_PREFIX}${collection}`);
    if (!raw) {
      localStorage.setItem(`${STORAGE_KEY_PREFIX}${collection}`, JSON.stringify(initial));
      return initial;
    }
    const parsed = JSON.parse(raw) as ManagedContent[];
    return Array.isArray(parsed) && parsed.length ? parsed : initial;
  } catch {
    return initial;
  }
};

const setStoredContent = (collection: ContentCollection, items: ManagedContent[]) => {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(`${STORAGE_KEY_PREFIX}${collection}`, JSON.stringify(items));
  } catch (error) {
    console.warn(`Unable to persist ${collection} to localStorage:`, error);
  }
};

const request = async <T>(url: string, options?: RequestInit): Promise<T> => {
  const response = await fetch(url, { ...options, headers: { 'Content-Type': 'application/json', ...options?.headers } });
  const raw = await response.text();
  let body: unknown = null;
  if (raw.trim()) {
    try { body = JSON.parse(raw) as unknown; } catch { body = null; }
  }
  if (!response.ok) {
    const message = body && typeof body === 'object' && 'error' in body && typeof body.error === 'string' ? body.error : `Admin request failed (${response.status}).`;
    throw new Error(message);
  }
  return body as T;
};

export const getManagedContent = async (collection: ContentCollection): Promise<ManagedContent[]> => {
  try {
    const data = await request<ManagedContent[]>(`/api/admin/content/${collection}`);
    if (Array.isArray(data) && data.length) {
      setStoredContent(collection, data);
      return data;
    }
    return getStoredContent(collection);
  } catch {
    return getStoredContent(collection);
  }
};

export const createManagedContent = async (collection: ContentCollection, input: ManagedContentInput): Promise<ManagedContent> => {
  const newItem: ManagedContent = {
    ...input,
    id: `${collection === 'projects' ? 'proj' : 'cs'}-${Date.now()}`,
    updatedAt: new Date().toISOString().split('T')[0],
  };

  try {
    const saved = await request<ManagedContent>(`/api/admin/content/${collection}`, { method: 'POST', body: JSON.stringify(input) });
    const current = getStoredContent(collection);
    setStoredContent(collection, [saved, ...current.filter((i) => i.id !== saved.id)]);
    return saved;
  } catch {
    const current = getStoredContent(collection);
    setStoredContent(collection, [newItem, ...current]);
    return newItem;
  }
};

export const updateManagedContent = async (collection: ContentCollection, id: string, input: ManagedContentInput): Promise<ManagedContent> => {
  const updatedItem: ManagedContent = {
    ...input,
    id,
    updatedAt: new Date().toISOString().split('T')[0],
  };

  try {
    const saved = await request<ManagedContent>(`/api/admin/content/${collection}/${id}`, { method: 'PUT', body: JSON.stringify(input) });
    const current = getStoredContent(collection);
    setStoredContent(collection, current.map((i) => (i.id === id ? saved : i)));
    return saved;
  } catch {
    const current = getStoredContent(collection);
    setStoredContent(collection, current.map((i) => (i.id === id ? updatedItem : i)));
    return updatedItem;
  }
};

export const deleteManagedContent = async (collection: ContentCollection, id: string) => {
  try {
    await request(`/api/admin/content/${collection}/${id}`, { method: 'DELETE' });
  } catch {
    // continue to local removal
  }
  const current = getStoredContent(collection);
  setStoredContent(collection, current.filter((i) => i.id !== id));
};
