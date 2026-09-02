import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../../shared/PageHero';
import SectionHeader from '../../shared/SectionHeader';
import ServiceCard from '../../shared/ServiceCard';
import { Brain, Code, Rocket, Cpu, Briefcase, MessageSquare } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  'Custom AI Solutions': <Brain size={24} className="text-white" />,
  'AI Products': <Rocket size={24} className="text-white" />,
  'AI Calling Agents': <MessageSquare size={24} className="text-white" />,
  'Custom CRM/ERP': <Cpu size={24} className="text-white" />,
  'Business Consultation': <Briefcase size={24} className="text-white" />,
  'Software Development': <Code size={24} className="text-white" />,
};

const AboutPage: React.FC = () => {
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const aboutLinks = [
    { title: 'Company', description: 'Our story, capabilities, and what drives us forward.', href: '/about/company' },
    { title: 'Vision & Mission', description: 'Our guiding principles and what we aim to build.', href: '/about/vision-mission' },
    { title: 'Leadership', description: 'The team behind Neno Technology.', href: '/about/leadership' },
    { title: 'Why Neno Technology', description: 'What makes us different from other technology partners.', href: '/about/why-neno' },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <PageHero
        label="About"
        title="About"
        accentWord="Neno Technology"
        subtitle="Building the neural architecture of modern business through intelligent automation and engineering excellence."
      />

      <section className="py-16 md:py-32 px-4 md:px-12 lg:px-24 bg-black">
        <div className="max-w-[1920px] mx-auto">
          <SectionHeader
            label="Explore"
            title="Learn More About Us"
            subtitle="From our story to our approach — everything you need to know."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {aboutLinks.map((link, idx) => (
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

export default AboutPage;
