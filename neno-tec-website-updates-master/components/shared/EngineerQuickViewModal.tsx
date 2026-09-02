import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { X, CheckCircle2, ArrowRight, Shield, Zap, Monitor, Server, Users, Cloud, ExternalLink } from 'lucide-react';
import { ServiceChild } from '../../data/services';

const iconMap: Record<string, React.ReactNode> = {
  'fda-engineer': <Shield size={24} className="text-white" />,
  'ai-engineer': <Zap size={24} className="text-white" />,
  'full-stack-engineer': <Monitor size={24} className="text-white" />,
  'backend-engineer': <Server size={24} className="text-white" />,
  'ui-ux': <Users size={24} className="text-white" />,
  'ui-ux-designer': <Users size={24} className="text-white" />,
  'cloud-engineer': <Cloud size={24} className="text-white" />,
};

interface EngineerQuickViewModalProps {
  isOpen: boolean;
  onClose: () => void;
  roleData: ServiceChild | null;
}

const EngineerQuickViewModal: React.FC<EngineerQuickViewModalProps> = ({
  isOpen,
  onClose,
  roleData,
}) => {
  const navigate = useNavigate();

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!roleData) return null;

  const icon = iconMap[roleData.slug] || <Monitor size={24} className="text-white" />;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{ willChange: 'opacity, transform' }}
            className="relative w-full max-w-lg bg-zinc-950 border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl text-white my-auto z-10 overflow-hidden"
          >
            {/* Ambient background glow */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-white/5 rounded-full blur-3xl pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-white/30 hover:bg-zinc-800 transition-all cursor-pointer z-20"
              aria-label="Close detail modal"
            >
              <X size={18} />
            </button>

            {/* Header */}
            <div className="flex items-center gap-4 mb-4 pr-8">
              <div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center shrink-0">
                {icon}
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 block mb-0.5">
                  Engineer Specialization
                </span>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                  {roleData.title}
                </h3>
              </div>
            </div>

            {/* Description */}
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-6">
              {roleData.overview || roleData.description}
            </p>

            {/* Key Capabilities */}
            {roleData.capabilities && roleData.capabilities.length > 0 && (
              <div className="mb-6">
                <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-3">
                  Core Capabilities
                </h4>
                <ul className="space-y-2">
                  {roleData.capabilities.slice(0, 4).map((cap, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                      <CheckCircle2 size={15} className="text-white shrink-0 mt-0.5" />
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tech Stack Pills */}
            {roleData.technologies && roleData.technologies.length > 0 && (
              <div className="mb-8">
                <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-3">
                  Technologies & Skills
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {roleData.technologies.slice(0, 6).map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] font-medium text-zinc-300 bg-zinc-900 border border-white/10 px-2.5 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2 border-t border-white/10">
              <button
                onClick={() => {
                  onClose();
                  navigate('/contact/talk-to-engineer');
                }}
                className="w-full sm:flex-1 py-3 px-5 rounded-full bg-white text-black font-bold text-xs uppercase tracking-wider hover:bg-zinc-200 transition-all text-center cursor-pointer flex items-center justify-center gap-2"
              >
                Hire {roleData.title}
                <ArrowRight size={14} />
              </button>

              <Link
                to={roleData.href}
                onClick={onClose}
                className="w-full sm:w-auto py-3 px-5 rounded-full bg-zinc-900 border border-white/10 text-zinc-300 font-semibold text-xs uppercase tracking-wider hover:text-white hover:border-white/30 hover:bg-zinc-800 transition-all text-center flex items-center justify-center gap-2"
              >
                Full Profile
                <ExternalLink size={13} />
              </Link>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default EngineerQuickViewModal;
