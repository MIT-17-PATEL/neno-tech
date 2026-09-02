import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageHero from '../../shared/PageHero';
import Breadcrumb from '../../shared/Breadcrumb';
import SectionHeader from '../../shared/SectionHeader';
import FeatureCard from '../../shared/FeatureCard';
import ContactSection from '../../shared/ContactSection';
import CTASection from '../../shared/CTASection';
import { Users, BookOpen } from 'lucide-react';
import { getChildBySlug } from '../../data/services';

interface TrainingDetailProps {
  programSlug: string;
}

const TrainingDetailPage: React.FC<TrainingDetailProps> = ({ programSlug }) => {
  const program = getChildBySlug('training', programSlug);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!program) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-arapey italic mb-4">Program Not Found</h1>
          <Link to="/services/training" className="text-white underline underline-offset-8">
            Back to Training
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Breadcrumb />
      <PageHero
        label={program.title}
        title={program.title}
        subtitle={program.overview || program.description}
      />

      <section className="py-16 md:py-32 px-4 md:px-12 lg:px-24 bg-black">
        <div className="max-w-[1920px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-24">
            <SectionHeader
              label="Audience"
              title="Who It's For"
            />

            <div className="space-y-4">
              {(program.audience || []).map((aud, idx) => (
                <motion.div
                  key={aud}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  className="flex items-start gap-4 bg-zinc-950 rounded-2xl p-6 border border-white/5"
                >
                  <Users size={20} className="text-white mt-0.5 shrink-0" />
                  <span className="text-zinc-300 text-lg">{aud}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {(program.areas && program.areas.length > 0) && (
        <section className="py-16 md:py-32 px-4 md:px-12 lg:px-24 bg-zinc-950/30">
          <div className="max-w-[1920px] mx-auto">
            <SectionHeader
              label="Areas"
              title="Training Areas"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {program.areas.map((area, idx) => (
                <motion.div
                  key={area}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  className="flex items-start gap-4 bg-zinc-900/50 rounded-2xl p-6 border border-white/5"
                >
                  <BookOpen size={20} className="text-white mt-0.5 shrink-0" />
                  <span className="text-zinc-300 text-lg">{area}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {(program.engagementOptions && program.engagementOptions.length > 0) && (
        <section className="py-16 md:py-32 px-4 md:px-12 lg:px-24 bg-black">
          <div className="max-w-[1920px] mx-auto">
            <SectionHeader
              label="Engagement"
              title="How We Deliver"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {program.engagementOptions.map((option, idx) => (
                <motion.div
                  key={option}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-zinc-950 rounded-3xl p-8 border border-white/5 text-center"
                >
                  <p className="text-white font-bold text-lg">{option}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection
        title="Let's Discuss Training"
        subtitle="Share your team's learning objectives and we'll design a tailored program."
        primaryLabel="Get in Touch"
        primaryHref="/contact/talk-to-engineer"
        secondaryLabel="Back to Training"
        secondaryHref="/services/training"
      />
    </div>
  );
};

export default TrainingDetailPage;
