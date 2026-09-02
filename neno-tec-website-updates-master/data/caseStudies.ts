export interface CaseStudy {
  slug: string;
  customer: string;
  challenge: string;
  approach: string;
  solution: string;
  technology: string[];
  outcome: string;
  industry: string;
  status: string;
  image?: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'ai-crm-system',
    customer: 'Enterprise Client',
    challenge: 'Manual CRM processes were creating bottlenecks in lead management, proposal follow-ups, and customer communication — resulting in missed opportunities and inconsistent customer experience.',
    approach: 'We designed and built an AI-native CRM system with automated workflows, intelligent lead scoring, and a conversational AI agent for database queries and customer interactions.',
    solution: 'A custom CRM platform featuring automated proposal follow-ups, intelligent lead prioritization, and a conversational AI agent that enables natural language queries across the entire customer database.',
    technology: ['React', 'Node.js', 'Python', 'PostgreSQL', 'OpenAI API', 'LangChain'],
    outcome: 'Client engaged Neno Technology to design, build, and deploy a custom solution. Project completed in accordance with agreed timelines and technical specifications.',
    industry: 'Enterprise / Automation',
    status: 'Deployed',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1600',
  },
  {
    slug: 'smart-email-outreach',
    customer: 'Sales Tech Company',
    challenge: 'Generic outreach campaigns had low engagement rates and poor personalization at scale. The sales team needed a way to deliver individualized outreach efficiently.',
    approach: 'We built an intelligent outreach platform that researches prospects, generates personalized content, and optimizes send timing based on engagement data.',
    solution: 'A personalized outreach platform that generates customized content based on prospect research and intelligent timing optimization for maximum engagement.',
    technology: ['Python', 'React', 'OpenAI API', 'PostgreSQL', 'Celery', 'Redis'],
    outcome: 'Client engaged Neno Technology to design, build, and deploy a custom solution. Project completed in accordance with agreed timelines and technical specifications.',
    industry: 'Sales Tech',
    status: 'Active',
    image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=1600',
  },
  {
    slug: 'enterprise-data-hub',
    customer: 'Fortune 500 Company',
    challenge: 'Data was siloed across multiple systems, making unified analytics and predictive forecasting impossible. Teams spent hours consolidating data manually.',
    approach: 'We architected a unified data hub integrating multiple data sources into a single visualization platform with predictive forecasting capabilities.',
    solution: 'A comprehensive analytics platform integrating multiple data sources into a unified visualization layer with predictive forecasting and automated reporting.',
    technology: ['Python', 'Apache Spark', 'PostgreSQL', 'React', 'AWS', 'Apache Airflow'],
    outcome: 'Client engaged Neno Technology to design, build, and deploy a custom solution. Project completed in accordance with agreed timelines and technical specifications.',
    industry: 'Data Intelligence',
    status: 'Deployed',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1600',
  },
  {
    slug: 'ayugpt-health',
    customer: 'HealthTech Startup',
    challenge: 'Bridging ancient Ayurvedic wisdom with modern AI technology to provide personalized health guidance at scale.',
    approach: 'We developed a specialized conversational AI trained on Ayurvedic principles, capable of providing personalized health recommendations based on individual constitutions.',
    solution: 'AyuGPT — an AI-powered conversational platform providing personalized Ayurvedic health guidance, dosha analysis, and wellness recommendations.',
    technology: ['Python', 'LLM Fine-tuning', 'React', 'PostgreSQL', 'RAG Architecture'],
    outcome: 'Client engaged Neno Technology to design, build, and deploy a custom solution. Project completed in accordance with agreed timelines and technical specifications.',
    industry: 'Healthcare / Wellness',
    status: 'Active',
    image: '/Gemini_Generated_Image_wklwp8wklwp8wklw.png',
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}
