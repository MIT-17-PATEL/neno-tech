import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageHero from '../../shared/PageHero';
import Breadcrumb from '../../shared/Breadcrumb';
import SectionHeader from '../../shared/SectionHeader';
import FeatureCard from '../../shared/FeatureCard';
import ContactSection from '../../shared/ContactSection';
import { CheckCircle2, ArrowLeft } from 'lucide-react';
import { getChildBySlug } from '../../data/services';

interface EngineerDetailProps {
  engineerSlug: string;
}

const EngineerDetailPage: React.FC<EngineerDetailProps> = ({ engineerSlug }) => {
  const engineer = getChildBySlug('engineer-on-demand', engineerSlug);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!engineer) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-arapey italic mb-4">Engineer Profile Not Found</h1>
          <Link to="/services/engineer-on-demand" className="text-white underline underline-offset-8">
            Back to Engineer on Demand
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Breadcrumb />
      <PageHero
        label={engineer.title}
        title={engineer.title}
        subtitle={engineer.overview || engineer.description}
      />

      <section className="py-16 md:py-32 px-4 md:px-12 lg:px-24 bg-black">
        <div className="max-w-[1920px] mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Overview */}
            <div className="lg:col-span-2">
              <SectionHeader
                label="Capabilities"
                title="What This Role Delivers"
              />
              <ul className="space-y-4">
                {(engineer.capabilities || []).map((cap, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="flex items-start gap-4 text-zinc-300 text-lg leading-relaxed"
                  >
                    <span className="w-2 h-2 rounded-full bg-white mt-2 shrink-0" />
                    {cap}
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <div className="bg-zinc-950 rounded-3xl p-8 border border-white/5">
                <div className="w-16 h-16 rounded-2xl bg-zinc-900 mb-6 overflow-hidden">
                  <img src={engineer.image} alt="" className="w-full h-full object-cover opacity-70" />
                </div>
                <h3 className="text-xl font-bold tracking-tight mb-2">{engineer.title}</h3>
                <p className="text-zinc-500 text-sm">Specialized engineering expertise available on demand.</p>
              </div>

              <div className="bg-zinc-950 rounded-3xl p-8 border border-white/5">
                <h4 className="text-sm font-bold uppercase tracking-widest text-zinc-500 mb-4">Typical Use Cases</h4>
                <ul className="space-y-3">
                  {(engineer.useCases || []).map((useCase, idx) => (
                    <li key={idx} className="text-zinc-400 text-sm flex items-start gap-2">
                      <span className="text-white mt-0.5">+</span>
                      {useCase}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-32 px-4 md:px-12 lg:px-24 bg-zinc-950/30">
        <div className="max-w-[1920px] mx-auto">
          <SectionHeader
            label="Engagement"
            title="Engagement Options"
            subtitle="Flexible models designed around your needs."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {['Full-time dedicated resource', 'Part-time advisory role', 'Project-based engagement', 'Team augmentation'].map((option, idx) => (
              <motion.div
                key={option}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-zinc-900/50 rounded-3xl p-8 border border-white/5 text-center"
              >
                <p className="text-white font-bold text-lg">{option}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-32 px-4 md:px-12 lg:px-24 bg-black">
        <div className="max-w-[1920px] mx-auto">
          <SectionHeader
            label="Technology"
            title="Technologies & Tools"
          />

          <div className="flex flex-wrap gap-3">
            {(engineer.technologies || []).map((tech, idx) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.03 }}
                className="px-5 py-3 rounded-full bg-zinc-900 border border-white/5 text-sm font-medium text-zinc-300 hover:border-white/15 hover:text-white transition-all"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      <ContactSection
        title="Ready to get started?"
        subtitle={`Submit your requirements for ${engineer.title} and receive a curated shortlist of qualified candidates.`}
      />
    </div>
  );
};

export default EngineerDetailPage;
