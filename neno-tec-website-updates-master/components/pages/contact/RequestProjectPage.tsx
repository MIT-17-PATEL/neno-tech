import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../../shared/PageHero';
import SectionHeader from '../../shared/SectionHeader';
import CTASection from '../../shared/CTASection';
import { FileText, Rocket } from 'lucide-react';

const RequestProjectPage: React.FC = () => {
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <PageHero
        label="Contact"
        title="Request a Project"
        subtitle="Submit your project requirements and receive a tailored proposal with timeline and pricing."
      />

      <section className="py-16 md:py-32 px-4 md:px-12 lg:px-24 bg-black">
        <div className="max-w-[1920px] mx-auto">
          <SectionHeader
            label="Project Submission"
            title="What to Include"
            subtitle="The more detail you provide, the more accurate our proposal will be."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-zinc-950 rounded-3xl p-8 md:p-10 border border-white/5">
              <div className="w-12 h-12 rounded-2xl bg-zinc-800 flex items-center justify-center mb-6">
                <FileText size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold tracking-tight mb-3">Project Overview</h3>
              <ul className="space-y-2 text-zinc-400 text-sm">
                <li>• Project objectives and goals</li>
                <li>• Target audience or users</li>
                <li>• Key features and functionality</li>
                <li>• Timeline expectations</li>
                <li>• Budget range</li>
              </ul>
            </div>

            <div className="bg-zinc-950 rounded-3xl p-8 md:p-10 border border-white/5">
              <div className="w-12 h-12 rounded-2xl bg-zinc-800 flex items-center justify-center mb-6">
                <Rocket size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold tracking-tight mb-3">What Happens Next</h3>
              <ul className="space-y-2 text-zinc-400 text-sm">
                <li>• We review your requirements within 24 hours</li>
                <li>• Our team schedules a discovery call</li>
                <li>• You receive a detailed proposal</li>
                <li>• We align on timeline and milestones</li>
                <li>• Project kicks off</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Start?"
        subtitle="Fill out the contact form and we'll get back to you within 24 hours."
        primaryLabel="Go to Contact Form"
        primaryHref="/contact"
      />
    </div>
  );
};

export default RequestProjectPage;
