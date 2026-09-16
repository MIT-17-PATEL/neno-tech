import { ContentManager } from '@/components/admin/ContentManager';
export const metadata = { title: 'Neno Admin | Case Studies' };
export default function CaseStudiesPage() { return <ContentManager collection="case-studies" singular="Case study" title="Case studies" subtitle="Show the outcomes and systems Neno has helped deliver."/>; }
