import React from 'react';
import PageHero from '../../shared/PageHero';
import SectionHeader from '../../shared/SectionHeader';
import CTASection from '../../shared/CTASection';
import { motion } from 'framer-motion';
import { Zap, Code, Shield, Users } from 'lucide-react';

const TechnologyPage: React.FC = () => {
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const techAreas = [
    {
      icon: <Zap size={24} className="text-white" />,
      title: 'Artificial Intelligence',
      capabilities: ['Large Language Models', 'Natural Language Processing', 'Computer Vision', 'AI Agent Workflows', 'MLOps & Model Deployment'],
    },
    {
      icon: <Code size={24} className="text-white" />,
      title: 'Software Engineering',
      capabilities: ['Full-Stack Web Applications', 'Mobile Development', 'API Architecture', 'Database Design', 'Microservices'],
    },
    {
      icon: <Shield size={24} className="text-white" />,
      title: 'Cloud & Infrastructure',
      capabilities: ['Cloud Architecture', 'Container Orchestration', 'CI/CD Pipelines', 'Infrastructure as Code', 'Monitoring & Observability'],
    },
    {
      icon: <Users size={24} className="text-white" />,
      title: 'Product & Design',
      capabilities: ['UX Research', 'Interface Design', 'Design Systems', 'Prototyping', 'Accessibility'],
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <PageHero
        label="About Us"
        title="Technology"
        subtitle="The technologies and capabilities that power everything we build."
      />

      <section className="py-16 md:py-32 px-4 md:px-12 lg:px-24 bg-black">
        <div className="max-w-[1920px] mx-auto">
          <SectionHeader
            label="Capabilities"
            title="Our Technical Expertise"
            subtitle="Deep, practical expertise across the full technology stack — from AI to cloud infrastructure."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {techAreas.map((area, idx) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-zinc-950 rounded-3xl p-8 md:p-10 border border-white/5"
              >
                <div className="w-12 h-12 rounded-2xl bg-zinc-800 flex items-center justify-center mb-6">
                  {area.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-4">{area.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {area.capabilities.map((cap) => (
                    <span
                      key={cap}
                      className="text-xs text-zinc-400 bg-zinc-900 px-3 py-1.5 rounded-full border border-white/5"
                    >
                      {cap}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Let's Discuss Technology"
        subtitle="Tell us about your technical challenges and we'll show you how we can help."
        primaryLabel="Talk to an Engineer"
        primaryHref="/contact/talk-to-engineer"
      />
    </div>
  );
};

export default TechnologyPage;
