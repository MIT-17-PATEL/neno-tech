import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../../shared/PageHero';
import SectionHeader from '../../shared/SectionHeader';
import FeatureCard from '../../shared/FeatureCard';
import CTASection from '../../shared/CTASection';
import { Shield, Zap, Users, Code } from 'lucide-react';

const AboutUsPage: React.FC = () => {
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const aboutUsLinks = [
    { title: 'Technology', description: 'Our technical capabilities, stack, and engineering philosophy.', href: '/about-us/technology' },
    { title: 'Our Approach', description: 'The process we follow to deliver consistent, high-quality results.', href: '/about-us/our-approach' },
    { title: 'Leadership', description: 'The team guiding Neno Technology\'s vision and execution.', href: '/about-us/leadership' },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <PageHero
        label="About Us"
        title="About"
        accentWord="Us"
        subtitle="Engineering excellence, innovation-first culture, and a commitment to building the future."
      />

      <section className="pt-6 pb-16 md:pt-10 md:pb-24 px-4 md:px-12 lg:px-24 bg-black">
        <div className="max-w-[1920px] mx-auto">
          <SectionHeader
            label="Explore"
            title="Learn More About Us"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {aboutUsLinks.map((link, idx) => (
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
    </div>
  );
};

export default AboutUsPage;
