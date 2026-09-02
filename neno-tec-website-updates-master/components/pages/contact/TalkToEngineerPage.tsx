import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../../shared/PageHero';
import SectionHeader from '../../shared/SectionHeader';
import CTASection from '../../shared/CTASection';
import { MessageSquare, FileText } from 'lucide-react';

const TalkToEngineerPage: React.FC = () => {
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <PageHero
        label="Contact"
        title="Talk to an Engineer"
        subtitle="Have a technical question or need guidance on your architecture? Our engineers are ready to help."
      />

      <section className="py-16 md:py-32 px-4 md:px-12 lg:px-24 bg-black">
        <div className="max-w-[1920px] mx-auto">
          <SectionHeader
            label="Technical Discussion"
            title="How It Works"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-zinc-950 rounded-3xl p-8 md:p-10 border border-white/5">
              <div className="w-12 h-12 rounded-2xl bg-zinc-800 flex items-center justify-center mb-6">
                <MessageSquare size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold tracking-tight mb-3">Share Your Challenge</h3>
              <p className="text-zinc-500 text-sm md:text-base leading-relaxed">
                Describe your technical requirements, architecture questions, or engineering challenges. Our team will review and connect you with the right specialist.
              </p>
            </div>

            <div className="bg-zinc-950 rounded-3xl p-8 md:p-10 border border-white/5">
              <div className="w-12 h-12 rounded-2xl bg-zinc-800 flex items-center justify-center mb-6">
                <FileText size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold tracking-tight mb-3">Get Expert Guidance</h3>
              <p className="text-zinc-500 text-sm md:text-base leading-relaxed">
                Receive practical, actionable guidance from engineers with real-world production experience. No generic advice — just solutions that work.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Start the Conversation"
        subtitle="Tell us about your technical challenge and we'll connect you with the right engineer."
        primaryLabel="Submit Your Inquiry"
        primaryHref="#"
        secondaryLabel="Other Contact Options"
        secondaryHref="/contact"
      />
    </div>
  );
};

export default TalkToEngineerPage;
