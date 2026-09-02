import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageHero from '../../shared/PageHero';
import SectionHeader from '../../shared/SectionHeader';
import FeatureCard from '../../shared/FeatureCard';
import CTASection from '../../shared/CTASection';
import { getCaseStudyBySlug } from '../../data/caseStudies';

interface CaseStudyDetailProps {
  caseStudySlug: string;
}

const CaseStudyDetailPage: React.FC<CaseStudyDetailProps> = ({ caseStudySlug }) => {
  const caseStudy = getCaseStudyBySlug(caseStudySlug);

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-arapey italic mb-4">Case Study Not Found</h1>
          <Link to="/case-studies" className="text-white underline underline-offset-8">
            Back to Case Studies
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <PageHero
        label="Case Study"
        title={caseStudy.customer}
        subtitle={caseStudy.industry}
      />

      <section className="py-16 md:py-32 px-4 md:px-12 lg:px-24 bg-black">
        <div className="max-w-[1920px] mx-auto">
          <div className="grid lg:grid-cols-3 gap-12 md:gap-24">
            <div className="lg:col-span-2 space-y-12">
              <SectionHeader label="Challenge" title="The Challenge" />
              <p className="text-zinc-400 text-lg leading-relaxed">{caseStudy.challenge}</p>

              <SectionHeader label="Approach" title="Our Approach" />
              <p className="text-zinc-400 text-lg leading-relaxed">{caseStudy.approach}</p>

              <SectionHeader label="Solution" title="The Solution" />
              <p className="text-zinc-400 text-lg leading-relaxed">{caseStudy.solution}</p>
            </div>

            <div className="space-y-8">
              <div className="bg-zinc-950 rounded-3xl p-8 border border-white/5">
                <h4 className="text-xs font-black uppercase tracking-widest text-zinc-500 mb-4">Technology Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {caseStudy.technology.map((tech) => (
                    <span key={tech} className="text-xs text-zinc-400 bg-zinc-900 px-3 py-1.5 rounded-full border border-white/5">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-zinc-950 rounded-3xl p-8 border border-white/5">
                <h4 className="text-xs font-black uppercase tracking-widest text-zinc-500 mb-4">Outcome</h4>
                <p className="text-zinc-400 text-sm leading-relaxed">{caseStudy.outcome}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Build Something Great?"
        subtitle="Share your challenge and we'll design a solution."
        primaryLabel="Start a Project"
        primaryHref="/contact/request-project"
        secondaryLabel="More Case Studies"
        secondaryHref="/case-studies"
      />
    </div>
  );
};

export default CaseStudyDetailPage;
