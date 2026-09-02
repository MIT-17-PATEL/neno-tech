export interface CaseStudy {
  slug: string;
  customer: string;
  industry: string;
  status: string;
  challenge: string;
  approach: string;
  solution: string;
  outcome: string;
  technology: string[];
  image?: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'enterprise-ai-dashboard',
    customer: 'Global Logistics Provider',
    industry: 'Logistics',
    challenge:
      'A leading logistics provider needed to consolidate data from 15+ systems into a single, real-time dashboard to support operations across 30+ countries.',
    solution:
      'We designed and built a centralized AI-powered dashboard with predictive analytics for shipment delays, automated anomaly detection, and custom role-based views.',
    outcome:
      'Reduced decision-making time by 60%, improved on-time delivery rates by 18%, and unified data access for 1,500+ daily users.',
    approach:
      'We conducted deep stakeholder interviews across 8 regional hubs, built a unified data layer with real-time streaming, and designed an AI-enhanced analytics layer with predictive models for delay forecasting.',
    technology: ['React', 'Python', 'Apache Kafka', 'TensorFlow', 'AWS', 'PostgreSQL', 'Grafana'],
    status: 'Completed',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1600',
  },
  {
    slug: 'fintech-voice-agent',
    customer: 'Leading Regional Bank',
    industry: 'Banking',
    challenge:
      'A regional bank was struggling to scale customer support for loan inquiries and account services, with average wait times exceeding 12 minutes.',
    solution:
      'We deployed a multilingual voice AI agent capable of handling tier-1 customer inquiries, integrated with their core banking systems for secure, context-aware responses.',
    outcome:
      'Resolved 70% of tier-1 inquiries without human intervention, cut average wait times to under 30 seconds, and saved over $2M annually in support costs.',
    approach:
      'We audited the existing telephony stack, designed a voice AI pipeline with banking-grade security, integrated with core banking systems via APIs, and deployed with phased rollout across 12 call centers.',
    technology: ['Python', 'Twilio', 'OpenAI GPT-4', 'AWS Lex', 'Node.js', 'PostgreSQL', 'Docker'],
    status: 'Completed',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1600',
  },
  {
    slug: 'medtech-compliance-modernization',
    customer: 'Medical Device Manufacturer',
    industry: 'Healthcare',
    challenge:
      'A medical device company needed to modernize their legacy quality management system to meet new FDA 21 CFR Part 11 requirements while maintaining operational continuity.',
    solution:
      'We rebuilt the QMS platform as a compliant, cloud-native solution with full audit trails, electronic signatures, and automated validation testing.',
    outcome:
      'Achieved FDA certification on first audit, reduced compliance documentation time by 70%, and enabled faster feature releases with automated validation.',
    approach:
      'We performed a gap analysis against 21 CFR Part 11 and IEC 62304, architected a cloud-native QMS with built-in compliance controls, implemented automated validation testing, and trained the team on ongoing maintenance practices.',
    technology: ['C#/.NET', 'Azure', 'PostgreSQL', 'Docker', 'Terraform', 'PowerShell', 'Azure DevOps'],
    status: 'Completed',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1600',
  },
  {
    slug: 'ecommerce-recommendation-engine',
    customer: 'Premium E-commerce Brand',
    industry: 'E-commerce',
    challenge:
      'A premium e-commerce brand wanted to deliver personalized product recommendations to increase average order value and improve customer retention.',
    solution:
      'We built a real-time ML-powered recommendation engine that analyzes browsing behavior, purchase history, and contextual signals to serve hyper-relevant suggestions.',
    outcome:
      'Increased average order value by 28%, improved repeat purchase rate by 35%, and added $8M in incremental revenue in the first 6 months.',
    approach:
      'We built a real-time feature pipeline processing clickstream and purchase data, trained collaborative filtering and deep learning models, and deployed a low-latency recommendation API integrated with the e-commerce platform.',
    technology: ['Python', 'TensorFlow', 'Redis', 'Apache Spark', 'AWS', 'PostgreSQL', 'FastAPI'],
    status: 'Completed',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=1600',
  },
  {
    slug: 'manufacturing-iot-platform',
    customer: 'Industrial Manufacturing Group',
    industry: 'Manufacturing',
    challenge:
      'A manufacturing conglomerate needed to capture, analyze, and visualize IoT sensor data from 8 factories to optimize production and reduce downtime.',
    solution:
      'We built a custom IoT platform with edge ingestion, predictive maintenance ML models, and real-time production dashboards for plant managers.',
    outcome:
      'Reduced unplanned downtime by 42%, improved overall equipment effectiveness (OEE) by 15%, and enabled data-driven decisions across all plants.',
    approach:
      'We deployed edge gateways at each factory to ingest sensor data, built predictive maintenance models to forecast equipment failures, and created a centralized dashboard for plant-level and executive views.',
    technology: ['Node.js', 'Python', 'Kubernetes', 'MQTT', 'InfluxDB', 'Grafana', 'Azure IoT'],
    status: 'Completed',
    image: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&q=80&w=1600',
  },
  {
    slug: 'education-lms-platform',
    customer: 'National Education Network',
    industry: 'Education',
    challenge:
      'A national education network required a modern learning management system to support 500,000+ students and 20,000+ educators across diverse device types.',
    solution:
      'We delivered a scalable, accessible LMS with adaptive learning paths, AI-powered tutoring, multilingual support, and offline capabilities for low-bandwidth regions.',
    outcome:
      'Served 500,000+ active learners with 99.95% uptime, improved learning outcomes by 22%, and enabled teachers to identify at-risk students 3 weeks earlier.',
    approach:
      'We designed a modular LMS architecture with offline-first capabilities, integrated AI tutoring for personalized learning paths, and built a teacher dashboard with real-time analytics and early warning indicators.',
    technology: ['React', 'Node.js', 'Python', 'TensorFlow', 'MongoDB', 'AWS', 'PWA'],
    status: 'Completed',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=1600',
  },
];

export const getCaseStudyBySlug = (slug: string): CaseStudy | undefined => {
  return caseStudies.find((cs) => cs.slug === slug);
};
