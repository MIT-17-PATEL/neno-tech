import React from 'react';
import PageHero from '../../shared/PageHero';
import SectionHeader from '../../shared/SectionHeader';
import CTASection from '../../shared/CTASection';
import { motion } from 'framer-motion';
import { Eye, Heart, Sparkles, ArrowRight } from 'lucide-react';

const VisionMissionPage: React.FC = () => {
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const values = [
    {
      icon: <Eye size={24} className="text-white" />,
      title: 'Vision',
      description: 'To be the global leader in intelligent automation — building systems that think, adapt, and elevate every business we touch.',
    },
    {
      icon: <Heart size={24} className="text-white" />,
      title: 'Mission',
      description: 'To bridge the gap between traditional enterprise systems and the next era of artificial intelligence, delivering scalable solutions that transform how businesses operate.',
    },
    {
      icon: <Sparkles size={24} className="text-white" />,
      title: 'Values',
      description: 'Engineering excellence, transparency in delivery, continuous innovation, and genuine partnership — we succeed when our clients succeed.',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <PageHero
        label="About"
        title="Vision & Mission"
        subtitle="Our guiding principles and what we aim to build for the future."
      />

      <section className="py-16 md:py-32 px-4 md:px-12 lg:px-24 bg-black">
        <div className="max-w-[1920px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            {values.map((value, idx) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="bg-zinc-950 rounded-3xl p-8 md:p-10 border border-white/5 flex flex-col gap-6"
              >
                <div className="w-12 h-12 rounded-2xl bg-zinc-800 flex items-center justify-center">
                  {value.icon}
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-3">{value.title}</h3>
                  <p className="text-zinc-400 text-sm md:text-base leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-32 px-4 md:px-12 lg:px-24 bg-zinc-950/30">
        <div className="max-w-[1920px] mx-auto">
          <SectionHeader
            label="Forward Look"
            title="Our Technology Approach"
            subtitle="Building intelligent systems that evolve with your business."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {[
              { title: 'AI-First Architecture', desc: 'Every solution is designed with intelligence embedded at its core — not as an afterthought.' },
              { title: 'Scalable by Design', desc: 'Systems that grow with your business, from prototype to enterprise-scale production.' },
              { title: 'Open Standards', desc: 'We leverage open, proven technologies rather than locking you into proprietary ecosystems.' },
              { title: 'Continuous Evolution', desc: 'Our solutions are built to improve — with monitoring, feedback loops, and iterative enhancement.' },
            ].map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-zinc-900/50 rounded-3xl p-8 border border-white/5"
              >
                <h3 className="text-xl font-bold tracking-tight mb-3">{item.title}</h3>
                <p className="text-zinc-400 text-sm md:text-base leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Share the Vision"
        subtitle="Let's discuss how we can help you achieve yours."
        primaryLabel="Get in Touch"
        primaryHref="/contact"
      />
    </div>
  );
};

export default VisionMissionPage;
