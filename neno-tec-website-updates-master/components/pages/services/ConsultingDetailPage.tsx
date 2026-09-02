import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageHero from '../../shared/PageHero';
import Breadcrumb from '../../shared/Breadcrumb';
import SectionHeader from '../../shared/SectionHeader';
import FeatureCard from '../../shared/FeatureCard';
import ContactSection from '../../shared/ContactSection';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { getChildBySlug } from '../../data/services';

interface ConsultingDetailProps {
  consultingSlug: string;
}

const ConsultingDetailPage: React.FC<ConsultingDetailProps> = ({ consultingSlug }) => {
  const consulting = getChildBySlug('consulting', consultingSlug);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!consulting) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-arapey italic mb-4">Consulting Service Not Found</h1>
          <Link to="/services/consulting" className="text-white underline underline-offset-8">
            Back to Consulting
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Breadcrumb />
      <PageHero
        label={consulting.title}
        title={consulting.title}
        subtitle={consulting.description}
      />

      <section className="py-16 md:py-32 px-4 md:px-12 lg:px-24 bg-black">
        <div className="max-w-[1920px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-24">
            <SectionHeader
              label="The Challenge"
              title="What We Address"
            />

            <div className="space-y-6">
              {consulting.problem && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-zinc-950 rounded-3xl p-8 border border-white/5"
                >
                  <p className="text-zinc-400 text-lg leading-relaxed">{consulting.problem}</p>
                </motion.div>
              )}

              {consulting.howWeHelp && consulting.howWeHelp.length > 0 && (
                <>
                  <SectionHeader
                    label="How We Help"
                    title="Our Approach"
                  />

                  <div className="space-y-4">
                    {consulting.howWeHelp.map((help, idx) => (
                      <motion.div
                        key={help}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-start gap-4 bg-zinc-950 rounded-2xl p-6 border border-white/5"
                      >
                        <CheckCircle2 size={20} className="text-white mt-0.5 shrink-0" />
                        <span className="text-zinc-300 text-lg">{help}</span>
                      </motion.div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {consulting.approach && consulting.approach.length > 0 && (
        <section className="py-16 md:py-32 px-4 md:px-12 lg:px-24 bg-zinc-950/30">
          <div className="max-w-[1920px] mx-auto">
            <SectionHeader
              label="Engagement"
              title="How We Work Together"
              subtitle={consulting.engagementFormat}
            />

            <div className="grid grid-cols-1 gap-4">
              {consulting.approach.map((step, idx) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  className="group relative flex items-start gap-6 py-6 px-8 border-t border-white/10 first:border-t-0"
                >
                  <span className="text-zinc-800 text-2xl md:text-4xl font-black font-urbanist md:group-hover:text-white transition-colors duration-500 shrink-0">
                    {String(idx + 1).padStart(2, '00')}
                  </span>
                  <span className="text-zinc-300 text-lg pt-1">{step}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      <ContactSection
        title="Start the Conversation"
        subtitle="Schedule a consultation to discuss your specific needs."
      />
    </div>
  );
};

export default ConsultingDetailPage;
