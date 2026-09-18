import { ContentManager } from '@/components/admin/ContentManager';
export const metadata = { title: 'Neno Admin | Projects' };
export default function ProjectsPage() { return <ContentManager collection="projects" singular="Project" title="Projects" subtitle="Maintain the products and delivery work in Neno’s portfolio."/>; }
