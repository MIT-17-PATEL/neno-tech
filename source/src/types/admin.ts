export type BlogStatus = 'Published' | 'Draft';

export type Blog = {
  id: string;
  title: string;
  slug: string;
  category: string;
  author: string;
  publishDate: string;
  readingTime: string;
  shortDescription: string;
  content: string;
  buttonText: string;
  buttonLink: string;
  status: BlogStatus;
  updatedAt: string;
};

export type BlogInput = Omit<Blog, 'id' | 'updatedAt'>;

export type ContentStatus = 'Published' | 'Draft';

export type ManagedContentStatus = 'Published' | 'Draft';

export type ManagedContent = {
  id: string;
  title: string;
  slug?: string;
  category: string;
  client: string;
  publishDate: string;
  shortDescription: string;
  content: string;
  link: string;
  status: ManagedContentStatus;
  updatedAt?: string;
};

export type ManagedContentInput = Omit<ManagedContent, 'id' | 'updatedAt'>;

export type MetricItem = {
  label: string;
  value: string;
};

export type Project = {
  id: string;
  title: string;
  slug: string;
  client: string;
  industry: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  metric1Value: string;
  metric1Label: string;
  metric2Value: string;
  metric2Label: string;
  metric3Value: string;
  metric3Label: string;
  tags: string[];
  relatedCaseStudy: string;
  status: ContentStatus;
  createdAt: string;
  updatedAt: string;
};

export type ProjectInput = Omit<Project, 'id' | 'createdAt' | 'updatedAt'>;

export type CaseStudy = {
  id: string;
  title: string;
  slug: string;
  client: string;
  industry: string;
  badge: string;
  heroImage: string;
  overview: string;
  challenge: string;
  solution: string;
  implementation: string;
  results: string;
  metric1Value: string;
  metric1Label: string;
  metric2Value: string;
  metric2Label: string;
  metric3Value: string;
  metric3Label: string;
  technologies: string[];
  status: ContentStatus;
  publishDate: string;
  createdAt: string;
  updatedAt: string;
};

export type CaseStudyInput = Omit<CaseStudy, 'id' | 'createdAt' | 'updatedAt'>;

export const NENO_INDUSTRIES = [
  'Financial Services',
  'Healthcare & Insurance',
  'Logistics & Supply Chain',
  'Enterprise SaaS',
  'Retail & E-Commerce',
  'Energy & Utilities',
  'Manufacturing & Robotics',
  'Other',
] as const;
