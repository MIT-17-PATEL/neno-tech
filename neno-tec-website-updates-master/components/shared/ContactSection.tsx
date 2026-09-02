import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MessageSquare, FileText, Briefcase, ArrowRight } from 'lucide-react';

interface ContactSectionProps {
  readonly title?: string;
  readonly subtitle?: string;
  readonly className?: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({
  title = 'Ready to get started?',
  subtitle = 'Choose the best way to reach us and start building something extraordinary.',
  className = '',
}) => {
  const contactOptions = [
    {
      title: 'Talk to an Engineer',
      description: 'Technical discussion about your requirements, architecture, or technology decisions.',
      href: '/contact/talk-to-engineer',
      icon: <MessageSquare size={22} className="text-white" />,
    },
    {
      title: 'Request a Project',
      description: 'Submit your project brief and receive a proposal with timeline and pricing.',
      href: '/contact/request-project',
      icon: <FileText size={22} className="text-white" />,
    },
    {
      title: 'Business Inquiry',
      description: 'Partnerships, enterprise sales, or general business development.',
      href: '/contact/business-inquiry',
      icon: <Briefcase size={22} className="text-white" />,
    },
  ];

  return (
    <section className={`py-16 md:py-32 px-4 md:px-12 lg:px-24 bg-black ${className}`}>
      <div className="max-w-[1920px] mx-auto">
        {/* Section Header */}
        <div className="mb-12 md:mb-20">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 mb-4">Get In Touch</p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[0.95]">{title}</h2>
          <p className="text-zinc-500 text-lg mt-4 max-w-2xl">{subtitle}</p>
        </div>

        {/* Contact Options Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {contactOptions.map((option, index) => (
            <motion.div
              key={option.href}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                to={option.href}
                className="group block bg-zinc-950 rounded-3xl p-8 border border-white/5 hover:border-white/15 transition-all duration-300 h-full"
              >
                {/* Icon */}
                <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-zinc-900 mb-6 group-hover:bg-white group-hover:text-black transition-all duration-300">
                  {option.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold tracking-tight mb-3">{option.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed mb-6">{option.description}</p>

                {/* Link indicator */}
                <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-white group-hover:gap-3 transition-all">
                  Get Started
                  <ArrowRight size={14} />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Direct Contact */}
        <div className="mt-12 md:mt-16 pt-12 border-t border-white/5">
          <div className="flex flex-col sm:flex-row sm:items-center gap-6 text-sm text-zinc-500">
            <span className="text-zinc-600 text-xs font-bold uppercase tracking-widest">Or reach us directly</span>
            <a href="mailto:info@nenotechnology.com" className="hover:text-white transition-colors">
              info@nenotechnology.com
            </a>
            <a href="tel:+919429407706" className="hover:text-white transition-colors">
              +91 94294 07706
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
