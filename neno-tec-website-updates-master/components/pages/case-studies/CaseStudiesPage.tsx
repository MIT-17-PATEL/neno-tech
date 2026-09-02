import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../../shared/PageHero';
import SectionHeader from '../../shared/SectionHeader';
import ServiceCard from '../../shared/ServiceCard';
import CTASection from '../../shared/CTASection';
import { caseStudies } from '../../data/caseStudies';

const CaseStudiesPage: React.FC = () => {
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const links = [
    { title: 'Customer Success Stories', description: 'Verified outcomes and impact metrics from our engagements.', href: '/case-studies/customer-success' },
    { title: 'Customer Case Studies', description: 'Detailed case studies covering challenge, approach, and solution.', href: '/case-studies/customer-case-studies' },
    { title: 'Our Customers', description: 'Organizations we\'ve partnered with.', href: '/customers' },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <PageHero
        label="Case Studies"
        title="Case Studies"
        subtitle="Real-world AI deployments and technology solutions — and the impact they created."
      />

      <section className="pt-6 pb-16 md:pt-10 md:pb-24 px-4 md:px-12 lg:px-24 bg-black">
        <div className="max-w-[1920px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {links.map((link, idx) => (
              <Link
                key={link.title}
                to={link.href}
                className="group relative bg-zinc-950 rounded-3xl p-8 md:p-10 border border-white/5 hover:border-white/15 transition-all duration-500 block"
              >
                <div className="flex flex-col gap-4 h-full">
                  <h3 className="text-xl md:text-2xl font-bold tracking-tight group-hover:text-zinc-300 transition-colors">
                    {link.title}
                  </h3>
                  <p className="text-zinc-500 text-sm md:text-base leading-relaxed">
                    {link.description}
                  </p>
                  <div className="mt-auto pt-4">
                    <span className="text-white font-bold text-sm uppercase tracking-widest group-hover:underline underline-offset-4">
                      Explore →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-32 px-4 md:px-12 lg:px-24 bg-zinc-950/30">
        <div className="max-w-[1920px] mx-auto">
          <SectionHeader
            label="Selected Work"
            title="Featured Projects"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {caseStudies.map((cs, idx) => (
              <Link
                key={cs.slug}
                to={`/case-studies/${cs.slug}`}
                className="group relative bg-zinc-950 rounded-3xl overflow-hidden border border-white/5 hover:border-white/15 transition-all duration-500 block"
              >
                <div className="aspect-[16/9] bg-zinc-900 relative overflow-hidden">
                  <img
                    src={cs.image || 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1600'}
                    alt={cs.customer}
                    loading="lazy"
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1600';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                </div>
                <div className="p-6 md:p-8">
                  <span className="text-zinc-600 text-[10px] font-black uppercase tracking-widest">{cs.industry}</span>
                  <h3 className="text-xl font-bold tracking-tight mt-2 mb-3 group-hover:text-zinc-300 transition-colors">
                    {cs.customer}
                  </h3>
                  <p className="text-zinc-500 text-sm leading-relaxed line-clamp-3">
                    {cs.challenge}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Build Something Great?"
        subtitle="Share your challenge and let's create a solution together."
        primaryLabel="Start a Project"
        primaryHref="/contact/request-project"
      />
    </div>
  );
};

export default CaseStudiesPage;
