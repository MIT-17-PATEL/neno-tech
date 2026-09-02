import React from 'react';
import { motion } from 'framer-motion';
import PageHero from '../../shared/PageHero';
import SectionHeader from '../../shared/SectionHeader';
import CTASection from '../../shared/CTASection';
import { Search, Compass, Palette, Rocket, TestTube, Rocket as RocketLaunch, TrendingUp } from 'lucide-react';

const OurApproachPage: React.FC = () => {
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const processSteps = [
    { icon: <Search size={24} className="text-white" />, title: 'Discover', description: 'Deep-dive into your business context, goals, and constraints to define the project scope.' },
    { icon: <Compass size={24} className="text-white" />, title: 'Strategy', description: 'Define the technical architecture, technology stack, and implementation roadmap.' },
    { icon: <Palette size={24} className="text-white" />, title: 'Design', description: 'Create user-centered designs and system architecture that align with your goals.' },
    { icon: <Rocket size={24} className="text-white" />, title: 'Build', description: 'Agile development with regular milestones, continuous integration, and quality assurance.' },
    { icon: <TestTube size={24} className="text-white" />, title: 'Test', description: 'Comprehensive testing — unit, integration, performance, and user acceptance.' },
    { icon: <RocketLaunch size={24} className="text-white" />, title: 'Deploy', description: 'Production deployment with zero-downtime strategy, monitoring, and rollback plans.' },
    { icon: <TrendingUp size={24} className="text-white" />, title: 'Scale', description: 'Continuous optimization, feature iteration, and infrastructure scaling as you grow.' },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <PageHero
        label="About Us"
        title="Our Approach"
        subtitle="A proven methodology designed for predictable delivery and measurable outcomes."
      />

      <section className="py-16 md:py-32 px-4 md:px-12 lg:px-24 bg-black">
        <div className="max-w-[1920px] mx-auto">
          <SectionHeader
            label="Process"
            title="How We Work"
            subtitle="A structured approach from discovery to scale — every step designed for quality and predictability."
          />

          <div className="flex flex-col">
            {processSteps.map((step, idx) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="group relative flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 py-8 md:py-12 px-4 md:px-12 border-t border-white/10 first:border-t-0"
              >
                <div className="flex items-center gap-6 md:gap-12">
                  <span className="text-zinc-800 text-3xl md:text-5xl font-black font-urbanist md:group-hover:text-white transition-colors duration-500 shrink-0">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <div className="w-12 h-12 rounded-2xl bg-zinc-800 flex items-center justify-center shrink-0">
                    {step.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl md:text-3xl font-bold tracking-tight mb-2">{step.title}</h3>
                  <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-2xl">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Start?"
        subtitle="Let's discuss your project and how our approach can help you succeed."
        primaryLabel="Get in Touch"
        primaryHref="/contact"
      />
    </div>
  );
};

export default OurApproachPage;
