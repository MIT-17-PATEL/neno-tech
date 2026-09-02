import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../../shared/PageHero';
import SectionHeader from '../../shared/SectionHeader';
import ServiceCard from '../../shared/ServiceCard';
import CTASection from '../../shared/CTASection';
import { MessageSquare, FileText, Briefcase } from 'lucide-react';

const ContactPage: React.FC = () => {
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const contactOptions = [
    {
      title: 'Talk to an Engineer',
      description: 'Technical discussion about your requirements, architecture, or technology decisions.',
      href: '/contact/talk-to-engineer',
      icon: <MessageSquare size={24} className="text-white" />,
    },
    {
      title: 'Request a Project',
      description: 'Submit your project brief and receive a proposal with timeline and pricing.',
      href: '/contact/request-project',
      icon: <FileText size={24} className="text-white" />,
    },
    {
      title: 'Business Inquiry',
      description: 'Partnerships, enterprise sales, or general business development.',
      href: '/contact/business-inquiry',
      icon: <Briefcase size={24} className="text-white" />,
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <PageHero
        label="Contact"
        title="Contact"
        subtitle="Let's start a conversation about your technology needs."
      />

      <section className="pt-6 pb-16 md:pt-10 md:pb-24 px-4 md:px-12 lg:px-24 bg-black">
        <div className="max-w-[1920px] mx-auto">
          <SectionHeader
            label="Get In Touch"
            title="How Can We Help?"
            subtitle="Choose the right channel for your needs — or reach out directly."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {contactOptions.map((option, idx) => (
              <Link
                key={option.title}
                to={option.href}
                className="group relative bg-zinc-950 rounded-3xl p-8 md:p-10 border border-white/5 hover:border-white/15 transition-all duration-500 block"
              >
                <div className="flex flex-col gap-6 h-full">
                  <div className="w-12 h-12 rounded-2xl bg-zinc-900 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
                    {option.icon}
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-3 group-hover:text-zinc-300 transition-colors">
                      {option.title}
                    </h3>
                    <p className="text-zinc-500 text-sm md:text-base leading-relaxed">
                      {option.description}
                    </p>
                  </div>
                  <div className="mt-auto pt-4">
                    <span className="text-white font-bold text-sm uppercase tracking-widest group-hover:underline underline-offset-4">
                      Get Started →
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
            label="Direct"
            title="Or Reach Us Directly"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <a href="mailto:sales@nenotechnology.com" className="group bg-zinc-950 rounded-3xl p-8 md:p-10 border border-white/5 hover:border-white/15 transition-all duration-500 block">
              <p className="text-zinc-600 text-[10px] font-black uppercase tracking-widest mb-2">Email</p>
              <p className="text-white font-bold text-xl md:text-2xl tracking-tight group-hover:text-zinc-300 transition-colors">
                sales@nenotechnology.com
              </p>
            </a>
            <a href="tel:+919106915561" className="group bg-zinc-950 rounded-3xl p-8 md:p-10 border border-white/5 hover:border-white/15 transition-all duration-500 block">
              <p className="text-zinc-600 text-[10px] font-black uppercase tracking-widest mb-2">Phone</p>
              <p className="text-white font-bold text-xl md:text-2xl tracking-tight group-hover:text-zinc-300 transition-colors">
                +91 91069 15561
              </p>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
