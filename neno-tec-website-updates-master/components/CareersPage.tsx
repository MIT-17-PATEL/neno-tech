
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft, ArrowUpRight, ChevronDown, Send, CheckCircle2, Mail,
  Zap, Rocket, Globe, Users, Brain, Code, TrendingUp, Palette, Cloud, ShieldCheck
} from 'lucide-react';
import { useIsMobile } from './useIsMobile';
import FadeInView from './FadeInView';
import { sanitizePayload, checkRateLimit, getRemainingCooldown, isBot, isValidEmail, isValidPhone, isValidUrl } from './security';

/* ── Country Codes ─────────────────────────────────────────────── */
const countryCodes = [
  { code: '+91', label: '🇮🇳 +91' },
  { code: '+1', label: '🇺🇸 +1' },
  { code: '+44', label: '🇬🇧 +44' },
  { code: '+61', label: '🇦🇺 +61' },
  { code: '+971', label: '🇦🇪 +971' },
  { code: '+65', label: '🇸🇬 +65' },
  { code: '+49', label: '🇩🇪 +49' },
  { code: '+33', label: '🇫🇷 +33' },
  { code: '+81', label: '🇯🇵 +81' },
  { code: '+86', label: '🇨🇳 +86' },
  { code: '+82', label: '🇰🇷 +82' },
  { code: '+55', label: '🇧🇷 +55' },
  { code: '+52', label: '🇲🇽 +52' },
  { code: '+39', label: '🇮🇹 +39' },
  { code: '+34', label: '🇪🇸 +34' },
  { code: '+31', label: '🇳🇱 +31' },
  { code: '+46', label: '🇸🇪 +46' },
  { code: '+41', label: '🇨🇭 +41' },
  { code: '+64', label: '🇳🇿 +64' },
  { code: '+353', label: '🇮🇪 +353' },
  { code: '+972', label: '🇮🇱 +972' },
  { code: '+60', label: '🇲🇾 +60' },
  { code: '+63', label: '🇵🇭 +63' },
  { code: '+66', label: '🇹🇭 +66' },
  { code: '+84', label: '🇻🇳 +84' },
  { code: '+7', label: '🇷🇺 +7' },
  { code: '+234', label: '🇳🇬 +234' },
  { code: '+27', label: '🇿🇦 +27' },
  { code: '+62', label: '🇮🇩 +62' },
  { code: '+90', label: '🇹🇷 +90' },
  { code: '+966', label: '🇸🇦 +966' },
  { code: '+974', label: '🇶🇦 +974' },
];

/* ── Culture Pillars ───────────────────────────────────────────── */
const culturePillars = [
  {
    title: 'Innovation-First Culture',
    desc: 'Operate at the bleeding edge of artificial intelligence and emerging technology. Every project is an opportunity to pioneer solutions that reshape entire industries.',
    icon: Zap,
  },
  {
    title: 'Accelerated Growth Trajectories',
    desc: 'Structured mentorship, dedicated learning budgets, and a promotion framework designed to fast-track exceptional talent into leadership positions.',
    icon: Rocket,
  },
  {
    title: 'Impact at Enterprise Scale',
    desc: 'Your work directly powers intelligent systems deployed across global enterprises. Build solutions that transform how businesses operate and compete.',
    icon: Globe,
  },
  {
    title: 'Collaborative Autonomy',
    desc: 'Work alongside elite engineers in a high-trust environment. We champion ownership, creative freedom, and the autonomy to architect solutions your way.',
    icon: Users,
  },
];

/* ── Open Positions ────────────────────────────────────────────── */
const openPositions = [
  {
    title: 'AI / ML Engineer',
    department: 'AI Division',
    type: 'Full-Time',
    location: 'Remote / Hybrid',
    desc: 'Design, train, and deploy production-grade machine learning models. Work with LLMs, NLP pipelines, and computer vision systems for enterprise clients.',
    skills: ['Python', 'PyTorch / TensorFlow', 'LLM Fine-Tuning', 'MLOps', 'AWS SageMaker'],
    icon: Brain,
  },
  {
    title: 'Full Stack Developer',
    department: 'Engineering',
    type: 'Full-Time',
    location: 'Remote / Hybrid',
    desc: 'Architect and build scalable web applications powering AI-driven products. Own the full delivery lifecycle from system design through production deployment.',
    skills: ['React / Next.js', 'Node.js / Python', 'PostgreSQL', 'REST & GraphQL APIs', 'Cloud Infrastructure'],
    icon: Code,
  },
  {
    title: 'Business Development Manager',
    department: 'Growth',
    type: 'Full-Time',
    location: 'On-Site / Hybrid',
    desc: 'Identify and cultivate strategic partnerships with enterprise clients. Lead discovery calls, craft proposals, and close high-value AI implementation deals.',
    skills: ['Enterprise Sales', 'AI/Tech Domain Knowledge', 'CRM Management', 'Strategic Partnerships', 'Proposal Writing'],
    icon: TrendingUp,
  },
  {
    title: 'UI/UX Designer',
    department: 'Product',
    type: 'Full-Time',
    location: 'Remote',
    desc: 'Craft intuitive, research-driven interfaces for AI-powered products and dashboards. Translate complex data workflows into elegant user experiences.',
    skills: ['Figma', 'Design Systems', 'User Research', 'Prototyping', 'Data Visualization'],
    icon: Palette,
  },
  {
    title: 'DevOps / Cloud Engineer',
    department: 'Infrastructure',
    type: 'Full-Time',
    location: 'Remote',
    desc: 'Design and maintain cloud infrastructure supporting AI model training, serving, and auto-scaling. Ensure zero-downtime deployments and production reliability.',
    skills: ['AWS / GCP', 'Docker & Kubernetes', 'CI/CD Pipelines', 'Terraform', 'Monitoring & Alerting'],
    icon: Cloud,
  },
  {
    title: 'QA Automation Engineer',
    department: 'Quality',
    type: 'Full-Time',
    location: 'Remote',
    desc: 'Build and maintain automated test suites for AI-integrated applications. Ensure enterprise-grade reliability through performance, security, and regression testing.',
    skills: ['Selenium / Cypress', 'API Testing', 'CI/CD Integration', 'Performance Testing', 'Test Strategy'],
    icon: ShieldCheck,
  },
];

/* ── Form Types ────────────────────────────────────────────────── */
interface CareerFormData {
  fullName: string;
  email: string;
  countryCode: string;
  phone: string;
  location: string;
  linkedin: string;
  portfolio: string;
  position: string;
  experience: string;
  currentCTC: string;
  expectedCTC: string;
  noticePeriod: string;
  resumeLink: string;
  coverLetter: string;
}

const INITIAL_CAREER_FORM: CareerFormData = {
  fullName: '',
  email: '',
  countryCode: '+91',
  phone: '',
  location: '',
  linkedin: '',
  portfolio: '',
  position: '',
  experience: '',
  currentCTC: '',
  expectedCTC: '',
  noticePeriod: '',
  resumeLink: '',
  coverLetter: '',
};

const API_URL = '/api/submit-careers';

/* ── Component ─────────────────────────────────────────────────── */
const CareersPage: React.FC = () => {
  const [form, setForm] = useState<CareerFormData>(INITIAL_CAREER_FORM);
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [expandedPosition, setExpandedPosition] = useState<number | null>(null);
  const [honeypot, setHoneypot] = useState('');
  const isMobile = useIsMobile();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const FIELD_LIMITS: Record<string, number> = {
    fullName: 100, email: 254, phone: 20, location: 150,
    linkedin: 300, portfolio: 300, position: 100, experience: 50,
    currentCTC: 50, expectedCTC: 50, noticePeriod: 50,
    resumeLink: 500, coverLetter: 3000,
  };

  const updateField = (field: keyof CareerFormData, value: string) => {
    const limit = FIELD_LIMITS[field] || 1000;
    setForm((prev) => ({ ...prev, [field]: value.slice(0, limit) }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    setErrorMsg('');

    // Bot detection
    if (isBot(honeypot)) {
      await new Promise((r) => setTimeout(r, 1500));
      setFormState('success');
      return;
    }

    // Rate limiting
    if (!checkRateLimit('careers', 30000)) {
      const remaining = getRemainingCooldown('careers', 30000);
      setErrorMsg(`Please wait ${remaining} seconds before submitting again.`);
      setFormState('error');
      return;
    }

    // Validation
    if (!isValidEmail(form.email)) {
      setErrorMsg('Please enter a valid email address.');
      setFormState('error');
      return;
    }
    if (form.phone && !isValidPhone(form.phone)) {
      setErrorMsg('Please enter a valid phone number.');
      setFormState('error');
      return;
    }
    if (form.linkedin && !isValidUrl(form.linkedin)) {
      setErrorMsg('Please enter a valid LinkedIn URL.');
      setFormState('error');
      return;
    }
    if (form.portfolio && !isValidUrl(form.portfolio)) {
      setErrorMsg('Please enter a valid portfolio URL.');
      setFormState('error');
      return;
    }
    if (form.resumeLink && !isValidUrl(form.resumeLink)) {
      setErrorMsg('Please enter a valid resume URL.');
      setFormState('error');
      return;
    }

    const rawPayload: Record<string, string> = {
      fullName: form.fullName,
      email: form.email,
      phone: `${form.countryCode.replace('+', '')} ${form.phone}`,
      location: form.location,
      linkedin: form.linkedin,
      portfolio: form.portfolio,
      position: form.position,
      experience: form.experience,
      currentCTC: form.currentCTC,
      expectedCTC: form.expectedCTC,
      noticePeriod: form.noticePeriod,
      resumeLink: form.resumeLink,
      coverLetter: form.coverLetter,
      website_url: honeypot,
    };
    const payload = sanitizePayload(rawPayload, FIELD_LIMITS);

    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => ({}));

      if (res.ok && data.success) {
        setFormState('success');
        setForm(INITIAL_CAREER_FORM);
      } else if (res.status === 429) {
        setErrorMsg(data.error || 'Too many requests. Please wait before trying again.');
        setFormState('error');
      } else {
        setErrorMsg(data.error || 'Submission failed. Please try again.');
        setFormState('error');
      }
    } catch {
      setErrorMsg('Network error. Please check your connection and try again.');
      setFormState('error');
    }
  };

  const goHome = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.hash = '#hero';
  };

  const inputClasses =
    'w-full bg-zinc-900/40 border border-white/5 rounded-2xl px-6 py-4 focus:outline-none focus:border-white/20 focus:bg-zinc-900/60 transition-all duration-300 text-white placeholder:text-zinc-600 font-medium appearance-none';
  const labelClasses =
    'text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 mb-2 ml-1 block';

  return (
    <div className="bg-black text-white min-h-screen selection:bg-white selection:text-black">
      {/* ── Top Bar ──────────────────────────────────────────── */}
      <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4 md:px-12 lg:px-16 bg-black/95 md:bg-black/80 md:backdrop-blur-xl border-b border-white/5">
        <div className="max-w-[1920px] mx-auto flex items-center justify-between">
          <a
            href="#hero"
            onClick={goHome}
            className="text-2xl font-black tracking-tighter text-white hover:opacity-80 transition-opacity"
          >
            NENOTECHNOLOGY
          </a>
          <div className="flex items-center gap-6">
            <a
              href="#hero"
              onClick={goHome}
              className="group flex items-center gap-2 text-[11px] font-bold tracking-widest text-zinc-400 hover:text-white transition-colors"
            >
              <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
              BACK TO MAIN
            </a>
            <a
              href="mailto:careers@nenotechnology.com"
              className="hidden sm:flex p-2 rounded-full border border-white/20 hover:bg-white hover:text-black transition-all text-white"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </header>

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative pt-28 pb-20 md:pt-40 md:pb-32 px-4 md:px-12 lg:px-24 overflow-hidden">
        <div className="hidden md:block absolute top-0 right-1/4 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[160px] pointer-events-none" />

        <div className="relative z-10 max-w-[1920px] mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-10 h-6 bg-zinc-800 flex items-center justify-between px-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-[1px] h-full bg-white/50" />
              ))}
            </div>
            <span className="text-sm font-bold tracking-widest uppercase text-zinc-500">
              Careers at Nenotechnology
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">
            <div className="max-w-4xl">
              <motion.h1
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="text-3xl md:text-7xl lg:text-[110px] font-arapey italic leading-[0.9] tracking-tight"
              >
                Shape the Future{' '}
                <br />
                <span className="font-urbanist font-bold not-italic text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-zinc-600">
                  of Intelligence.
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-zinc-400 text-lg md:text-xl leading-relaxed max-w-2xl mt-10"
              >
                We don't just offer positions — we offer trajectories. Join a team of relentless
                innovators building intelligent systems that redefine how enterprises operate,
                compete, and scale across the globe.
              </motion.p>
            </div>

            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              onClick={() => {
                const el = document.getElementById('open-positions');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group relative shrink-0 px-10 py-5 rounded-full bg-zinc-900 border border-white/20 overflow-hidden"
            >
              <div className="absolute inset-0 bg-white translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500" />
              <span className="relative z-10 text-white group-hover:text-black font-bold uppercase tracking-widest text-sm flex items-center gap-2">
                View Open Roles
                <span className="text-xl rotate-90">→</span>
              </span>
            </motion.button>
          </div>
        </div>
      </section>

      {/* ── Why Join Us ──────────────────────────────────────── */}
      <section className="py-16 md:py-32 px-4 md:px-12 lg:px-24 bg-zinc-950/30">
        <div className="max-w-[1920px] mx-auto">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center mb-12 md:mb-20">
            <div className="flex items-center gap-3 w-64">
              <div className="w-10 h-6 bg-zinc-800 flex items-center justify-between px-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-[1px] h-full bg-white/50" />
                ))}
              </div>
              <span className="text-sm font-bold tracking-widest uppercase text-zinc-500">
                The Culture
              </span>
            </div>
            <h2 className="text-2xl md:text-6xl max-w-4xl font-urbanist leading-tight">
              Where Ambition Meets Architecture.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {culturePillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              const pillarInner = (
                <>
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-zinc-800 flex items-center justify-center mb-6 md:mb-8 group-hover:bg-white group-hover:text-black transition-all duration-500">
                    <Icon size={isMobile ? 22 : 26} />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-3 md:mb-4">{pillar.title}</h3>
                  <p className="text-zinc-400 text-sm md:text-base leading-relaxed">{pillar.desc}</p>
                </>
              );

              if (isMobile) {
                return (
                  <FadeInView
                    key={pillar.title}
                    delay={idx * 0.08}
                    className="group bg-zinc-900/50 rounded-3xl p-6 border border-white/5"
                  >
                    {pillarInner}
                  </FadeInView>
                );
              }

              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group bg-zinc-900/50 rounded-3xl p-10 border border-white/5 hover:border-white/15 transition-all duration-500"
                >
                  {pillarInner}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Open Positions ────────────────────────────────────── */}
      <section id="open-positions" className="py-16 md:py-32 bg-black overflow-hidden">
        <div className="px-4 md:px-12 lg:px-24 mb-10 md:mb-16">
          <div className="flex items-center gap-3">
            <div className="w-10 h-6 bg-zinc-800 flex items-center justify-between px-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-[1px] h-full bg-white/50" />
              ))}
            </div>
            <span className="text-sm font-bold tracking-widest uppercase text-zinc-500">
              Open Positions
            </span>
          </div>
          <h2 className="text-2xl md:text-7xl font-urbanist font-medium mt-4 tracking-tighter">
            Current Openings.
          </h2>
          <p className="text-zinc-500 text-lg mt-6 max-w-2xl">
            Each role is an invitation to build at the intersection of artificial intelligence and
            enterprise innovation. Find your trajectory below.
          </p>
        </div>

        <div className="flex flex-col">
          {openPositions.map((pos, idx) => {
            const Icon = pos.icon;
            const isExpanded = expandedPosition === idx;
            return (
              <div
                key={pos.title}
                onClick={() => setExpandedPosition(isExpanded ? null : idx)}
                className="group relative flex flex-col py-8 md:py-10 px-4 md:px-12 lg:px-24 border-t border-white/10 md:hover:bg-zinc-900/30 transition-all duration-500 cursor-pointer"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  <div className="flex items-center gap-4 md:gap-6">
                    <div className={`p-3 md:p-4 rounded-xl bg-zinc-800 transition-all duration-500 ${isExpanded ? 'bg-white text-black scale-110' : ''}`}>
                      <Icon size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg md:text-4xl font-bold tracking-tight">{pos.title}</h3>
                      <div className="flex flex-wrap items-center gap-3 mt-2">
                        <span className="text-zinc-500 text-xs font-bold uppercase tracking-widest">{pos.department}</span>
                        <span className="w-1 h-1 rounded-full bg-zinc-700" />
                        <span className="text-zinc-500 text-xs font-bold uppercase tracking-widest">{pos.type}</span>
                        <span className="w-1 h-1 rounded-full bg-zinc-700" />
                        <span className="text-zinc-500 text-xs font-bold uppercase tracking-widest">{pos.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 shrink-0">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        updateField('position', pos.title);
                        const el = document.getElementById('career-form');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="px-6 py-3 rounded-full border border-white/20 hover:bg-white hover:text-black transition-all text-sm font-bold uppercase tracking-widest"
                    >
                      Apply Now
                    </button>
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center"
                    >
                      <ChevronDown size={18} />
                    </motion.div>
                  </div>
                </div>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pt-8 pl-0 lg:pl-20 max-w-3xl space-y-6">
                        <p className="text-zinc-400 text-lg leading-relaxed">{pos.desc}</p>
                        <div>
                          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-600 block mb-3">
                            Key Competencies
                          </span>
                          <div className="flex flex-wrap gap-2">
                            {pos.skills.map((skill) => (
                              <span
                                key={skill}
                                className="px-4 py-2 rounded-full bg-zinc-900 border border-white/5 text-sm font-medium text-zinc-300"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
          <div className="border-t border-white/10" />
        </div>
      </section>

      {/* ── Application Form ──────────────────────────────────── */}
      <section id="career-form" className="py-16 md:py-32 px-4 md:px-12 lg:px-24 bg-black relative overflow-hidden">
        <div className="hidden md:block absolute top-0 left-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[160px] -translate-y-1/2 -translate-x-1/3 pointer-events-none" />

        <div className="max-w-[1920px] mx-auto relative z-10">
          <div className="max-w-3xl mb-20">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-6 bg-zinc-800 flex items-center justify-between px-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-[1px] h-full bg-white/50" />
                ))}
              </div>
              <span className="text-sm font-bold tracking-widest uppercase text-zinc-500">
                Apply Now
              </span>
            </div>
            <h2 className="text-3xl md:text-7xl font-arapey italic leading-[0.9] mb-6">
              Begin Your{' '}
              <span className="font-urbanist font-normal not-italic text-zinc-400">Trajectory.</span>
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed">
              Submit your application below. Our talent architects will review your profile and
              respond within 72 hours if there is a strong alignment.
            </p>
          </div>

          <AnimatePresence mode="wait">
            {formState !== 'success' ? (
              <motion.form
                key="career-form-el"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                onSubmit={handleSubmit}
                className="bg-zinc-950 md:bg-zinc-950/50 rounded-3xl md:rounded-[40px] p-6 md:p-14 border border-white/5 md:backdrop-blur-xl shadow-2xl space-y-8 md:space-y-12"
              >
                {/* Section 1: Personal Details */}
                <div>
                  <h3 className="text-xl font-bold tracking-tight mb-8 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-sm font-black">1</span>
                    Personal Details
                  </h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <label className={labelClasses}>Full Name</label>
                      <input
                        type="text"
                        placeholder="Your Full Name"
                        required
                        value={form.fullName}
                        onChange={(e) => updateField('fullName', e.target.value)}
                        className={inputClasses}
                      />
                    </div>
                    <div>
                      <label className={labelClasses}>Email Address</label>
                      <input
                        type="email"
                        placeholder="name@email.com"
                        required
                        value={form.email}
                        onChange={(e) => updateField('email', e.target.value)}
                        className={inputClasses}
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-8 mt-8">
                    <div>
                      <label className={labelClasses}>Phone Number</label>
                      <div className="flex gap-2">
                        <div className="relative shrink-0 w-[110px]">
                          <select
                            value={form.countryCode}
                            onChange={(e) => updateField('countryCode', e.target.value)}
                            className="w-full bg-zinc-900/40 border border-white/5 rounded-2xl pl-4 pr-8 py-4 focus:outline-none focus:border-white/20 focus:bg-zinc-900/60 transition-all duration-300 text-white font-medium appearance-none text-sm"
                          >
                            {countryCodes.map((cc) => (
                              <option key={cc.code} value={cc.code} className="bg-zinc-950">
                                {cc.label}
                              </option>
                            ))}
                          </select>
                          <ChevronDown
                            size={14}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-600 pointer-events-none"
                          />
                        </div>
                        <input
                          type="tel"
                          placeholder="91069 15561"
                          value={form.phone}
                          onChange={(e) => updateField('phone', e.target.value)}
                          className={inputClasses}
                        />
                      </div>
                    </div>
                    <div>
                      <label className={labelClasses}>Current Location / City</label>
                      <input
                        type="text"
                        placeholder="e.g. Mumbai, India"
                        value={form.location}
                        onChange={(e) => updateField('location', e.target.value)}
                        className={inputClasses}
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-8 mt-8">
                    <div>
                      <label className={labelClasses}>LinkedIn Profile</label>
                      <input
                        type="url"
                        placeholder="https://linkedin.com/in/yourprofile"
                        value={form.linkedin}
                        onChange={(e) => updateField('linkedin', e.target.value)}
                        className={inputClasses}
                      />
                    </div>
                    <div>
                      <label className={labelClasses}>Portfolio / GitHub</label>
                      <input
                        type="url"
                        placeholder="https://github.com/yourhandle"
                        value={form.portfolio}
                        onChange={(e) => updateField('portfolio', e.target.value)}
                        className={inputClasses}
                      />
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="w-full h-[1px] bg-white/5" />

                {/* Section 2: Professional Details */}
                <div>
                  <h3 className="text-xl font-bold tracking-tight mb-8 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-sm font-black">2</span>
                    Professional Details
                  </h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="relative">
                      <label className={labelClasses}>Position Applying For</label>
                      <select
                        value={form.position}
                        onChange={(e) => updateField('position', e.target.value)}
                        required
                        className={inputClasses}
                      >
                        <option value="" disabled className="bg-zinc-950">Select Position</option>
                        {openPositions.map((pos) => (
                          <option key={pos.title} value={pos.title} className="bg-zinc-950">
                            {pos.title}
                          </option>
                        ))}
                        <option className="bg-zinc-950" value="Other">Other</option>
                      </select>
                      <ChevronDown size={16} className="absolute right-6 bottom-5 text-zinc-600 pointer-events-none" />
                    </div>
                    <div className="relative">
                      <label className={labelClasses}>Years of Experience</label>
                      <select
                        value={form.experience}
                        onChange={(e) => updateField('experience', e.target.value)}
                        required
                        className={inputClasses}
                      >
                        <option value="" disabled className="bg-zinc-950">Select</option>
                        <option className="bg-zinc-950" value="0-1 Years">0–1 Years</option>
                        <option className="bg-zinc-950" value="1-3 Years">1–3 Years</option>
                        <option className="bg-zinc-950" value="3-5 Years">3–5 Years</option>
                        <option className="bg-zinc-950" value="5-8 Years">5–8 Years</option>
                        <option className="bg-zinc-950" value="8+ Years">8+ Years</option>
                      </select>
                      <ChevronDown size={16} className="absolute right-6 bottom-5 text-zinc-600 pointer-events-none" />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-3 gap-8 mt-8">
                    <div>
                      <label className={labelClasses}>Current CTC (Annual)</label>
                      <input
                        type="text"
                        placeholder="e.g. 8 LPA"
                        value={form.currentCTC}
                        onChange={(e) => updateField('currentCTC', e.target.value)}
                        className={inputClasses}
                      />
                    </div>
                    <div>
                      <label className={labelClasses}>Expected CTC (Annual)</label>
                      <input
                        type="text"
                        placeholder="e.g. 12 LPA"
                        value={form.expectedCTC}
                        onChange={(e) => updateField('expectedCTC', e.target.value)}
                        className={inputClasses}
                      />
                    </div>
                    <div>
                      <label className={labelClasses}>Notice Period</label>
                      <div className="grid grid-cols-2 gap-3">
                        {['Immediate', '15 Days', '30 Days', '60+ Days'].map((period) => (
                          <label key={period} className="cursor-pointer group">
                            <input
                              type="radio"
                              name="noticePeriod"
                              value={period}
                              checked={form.noticePeriod === period}
                              onChange={(e) => updateField('noticePeriod', e.target.value)}
                              className="hidden peer"
                            />
                            <div className="text-center py-3 rounded-xl border border-white/5 bg-zinc-900/40 peer-checked:bg-white peer-checked:text-black transition-all group-hover:border-white/20 text-xs font-bold tracking-tight">
                              {period}
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="w-full h-[1px] bg-white/5" />

                {/* Section 3: Resume & Cover Letter */}
                <div>
                  <h3 className="text-xl font-bold tracking-tight mb-8 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-sm font-black">3</span>
                    Resume & Motivation
                  </h3>
                  <div className="space-y-8">
                    <div>
                      <label className={labelClasses}>Resume / CV Link</label>
                      <input
                        type="url"
                        placeholder="Google Drive, Dropbox, or any public URL to your resume"
                        required
                        value={form.resumeLink}
                        onChange={(e) => updateField('resumeLink', e.target.value)}
                        className={inputClasses}
                      />
                      <p className="text-zinc-600 text-xs mt-2 ml-1">
                        Upload your resume to Google Drive or Dropbox and paste the shareable link here.
                      </p>
                    </div>
                    <div>
                      <label className={labelClasses}>Why Nenotechnology?</label>
                      <textarea
                        rows={5}
                        placeholder="Tell us what excites you about this role and why you'd be a great fit for our team..."
                        required
                        value={form.coverLetter}
                        onChange={(e) => updateField('coverLetter', e.target.value)}
                        className={inputClasses + ' resize-none'}
                      />
                    </div>
                  </div>
                </div>

                {/* Error */}
                {formState === 'error' && errorMsg && (
                  <div className="text-red-400 text-sm font-medium bg-red-500/10 border border-red-500/20 rounded-xl px-6 py-3">
                    {errorMsg}
                  </div>
                )}

                {/* Submit */}
                <button
                  disabled={formState === 'submitting'}
                  className="w-full group relative overflow-hidden bg-white text-black h-20 rounded-2xl font-black uppercase tracking-[0.3em] text-[12px] flex items-center justify-center transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-70"
                >
                  <AnimatePresence mode="wait">
                    {formState === 'submitting' ? (
                      <motion.div
                        key="loading"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        className="w-6 h-6 border-2 border-black border-t-transparent rounded-full"
                      />
                    ) : (
                      <motion.div key="text" className="flex items-center gap-3">
                        Submit Application <Send size={16} />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-[500px] bg-zinc-950/50 rounded-[40px] border border-white/5 flex flex-col items-center justify-center text-center p-12"
              >
                <div className="w-24 h-24 rounded-full bg-white/10 flex items-center justify-center mb-8">
                  <CheckCircle2 size={48} className="text-white" />
                </div>
                <h3 className="text-4xl font-arapey italic mb-4">Application Received</h3>
                <p className="text-zinc-400 max-w-md mx-auto leading-relaxed">
                  Your application has been transmitted to our talent architects. If your profile
                  aligns with our requirements, we will reach out within 72 hours to schedule the
                  next phase of our evaluation process.
                </p>
                <button
                  onClick={() => {
                    setFormState('idle');
                    setForm(INITIAL_CAREER_FORM);
                  }}
                  className="mt-12 text-white font-bold uppercase tracking-widest text-[10px] border-b border-white/20 pb-1 hover:border-white transition-all"
                >
                  Submit Another Application
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* ── Mini Footer ───────────────────────────────────────── */}
      <footer className="py-16 px-6 md:px-12 lg:px-24 border-t border-white/5">
        <div className="max-w-[1920px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <span className="text-2xl font-black tracking-tighter">NENOTECHNOLOGY</span>
            <span className="text-zinc-600 text-[10px] font-bold uppercase tracking-widest">
              People & Culture Division
            </span>
          </div>
          <div className="flex items-center gap-8">
            <a
              href="mailto:sales@nenotechnology.com"
              className="text-zinc-400 hover:text-white transition-colors text-sm font-medium"
            >
              sales@nenotechnology.com
            </a>
            <a
              href="tel:+919106915561"
              className="text-zinc-400 hover:text-white transition-colors text-sm font-medium"
            >
              +91 91069 15561
            </a>
          </div>
          <div className="text-zinc-600 text-[10px] font-bold uppercase tracking-widest">
            © 2026 NENOTECHNOLOGY
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CareersPage;
