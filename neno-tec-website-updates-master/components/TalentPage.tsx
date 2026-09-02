
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Brain, Code, Smartphone, Link2, BarChart3, Cloud, Palette, ShieldCheck,
  ArrowLeft, ArrowUpRight, ChevronDown, Send, CheckCircle2, Phone, Mail, Users
} from 'lucide-react';
import { useIsMobile } from './useIsMobile';
import FadeInView from './FadeInView';
import { sanitizePayload, checkRateLimit, getRemainingCooldown, isBot, isValidEmail, isValidPhone } from './security';

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

/* ── Specializations ───────────────────────────────────────────── */
const specializations = [
  {
    title: 'AI / ML Engineers',
    desc: 'Deep learning, NLP, computer vision, and large language model specialists who architect intelligent systems at scale.',
    icon: Brain,
  },
  {
    title: 'Software Developers',
    desc: 'Full-stack architects engineering scalable, enterprise-grade applications with modern frameworks and clean architecture.',
    icon: Code,
  },
  {
    title: 'App Developers',
    desc: 'Native and cross-platform mobile engineers delivering pixel-perfect iOS and Android experiences.',
    icon: Smartphone,
  },
  {
    title: 'Blockchain Developers',
    desc: 'Smart contract, DeFi protocol, and Web3 infrastructure specialists building decentralized solutions.',
    icon: Link2,
  },
  {
    title: 'Data Scientists',
    desc: 'Statistical modeling, predictive analytics, and data pipeline architects transforming raw data into strategic insight.',
    icon: BarChart3,
  },
  {
    title: 'Cloud & DevOps',
    desc: 'AWS, GCP, and Azure infrastructure engineers with CI/CD automation, Kubernetes orchestration, and zero-downtime deployment expertise.',
    icon: Cloud,
  },
  {
    title: 'UI/UX Designers',
    desc: 'Human-centered design architects crafting intuitive digital experiences grounded in research and interaction science.',
    icon: Palette,
  },
  {
    title: 'QA Engineers',
    desc: 'Automated testing, performance benchmarking, and security assurance specialists ensuring production-grade reliability.',
    icon: ShieldCheck,
  },
];

/* ── Engagement Process ────────────────────────────────────────── */
const processSteps = [
  {
    id: '01',
    title: 'Submit Your Brief',
    desc: 'Define your technical requirements, team composition, engagement model, and timeline through our comprehensive specification form.',
  },
  {
    id: '02',
    title: 'Talent Matching',
    desc: 'Our matching engine cross-references your brief against our pre-vetted talent network to identify precision-fit professionals within 48 hours.',
  },
  {
    id: '03',
    title: 'Interview & Select',
    desc: 'Engage with curated candidates through structured technical assessments, portfolio reviews, and culture-alignment interviews.',
  },
  {
    id: '04',
    title: 'Deploy & Scale',
    desc: 'Onboard your selected talent with dedicated integration support, performance monitoring, and the flexibility to scale your team on demand.',
  },
];

/* ── Competitive Advantages ────────────────────────────────────── */
const advantages = [
  {
    title: 'Pre-Vetted Excellence',
    desc: 'Every professional in our network undergoes rigorous multi-stage technical assessment, domain validation, and soft-skill evaluation before being eligible for deployment.',
    stat: '< 4%',
    statLabel: 'Acceptance Rate',
  },
  {
    title: 'Rapid Deployment',
    desc: 'From requirement brief to candidate shortlist within 48 hours. Our systematic matching methodology eliminates traditional hiring friction and accelerates time-to-productivity.',
    stat: '48h',
    statLabel: 'Avg. Shortlist Time',
  },
  {
    title: 'Seamless Integration',
    desc: 'Dedicated onboarding architects ensure your new talent integrates flawlessly with existing teams, workflows, and tech stacks — minimizing ramp-up and maximizing output.',
    stat: '95%',
    statLabel: 'Client Retention',
  },
];

/* ── Form Types ────────────────────────────────────────────────── */
interface TalentFormData {
  contactPerson: string;
  email: string;
  countryCode: string;
  phone: string;
  companyName: string;
  companyWebsite: string;
  role: string;
  seniority: string;
  resourceCount: string;
  engagement: string;
  duration: string;
  skills: string;
  requirements: string;
  budget: string;
  urgency: string;
}

const INITIAL_TALENT_FORM: TalentFormData = {
  contactPerson: '',
  email: '',
  countryCode: '+91',
  phone: '',
  companyName: '',
  companyWebsite: '',
  role: '',
  seniority: '',
  resourceCount: '',
  engagement: '',
  duration: '',
  skills: '',
  requirements: '',
  budget: '',
  urgency: '',
};

const API_URL = '/api/submit-talent';

/* ── Component ─────────────────────────────────────────────────── */
const TalentPage: React.FC = () => {
  const [form, setForm] = useState<TalentFormData>(INITIAL_TALENT_FORM);
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const isMobile = useIsMobile();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const FIELD_LIMITS: Record<string, number> = {
    contactPerson: 100, email: 254, phone: 20, companyName: 150,
    companyWebsite: 300, role: 100, seniority: 50, resourceCount: 10,
    engagement: 50, duration: 50, skills: 500, requirements: 2000,
    budget: 50, urgency: 50,
  };

  const updateField = (field: keyof TalentFormData, value: string) => {
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
    if (!checkRateLimit('talent', 30000)) {
      const remaining = getRemainingCooldown('talent', 30000);
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

    const rawPayload: Record<string, string> = {
      contactPerson: form.contactPerson,
      email: form.email,
      phone: `${form.countryCode.replace('+', '')} ${form.phone}`,
      companyName: form.companyName,
      companyWebsite: form.companyWebsite,
      role: form.role,
      seniority: form.seniority,
      resourceCount: form.resourceCount,
      engagement: form.engagement,
      duration: form.duration,
      skills: form.skills,
      requirements: form.requirements,
      budget: form.budget,
      urgency: form.urgency,
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
        setForm(INITIAL_TALENT_FORM);
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
              href="mailto:sales@nenotechnology.com"
              className="hidden sm:flex p-2 rounded-full border border-white/20 hover:bg-white hover:text-black transition-all text-white"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </header>

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative pt-28 pb-20 md:pt-40 md:pb-32 px-4 md:px-12 lg:px-24 overflow-hidden">
        {/* Background glow */}
        <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-blue-500/5 rounded-full blur-[160px] pointer-events-none" />

        <div className="relative z-10 max-w-[1920px] mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-10 h-6 bg-zinc-800 flex items-center justify-between px-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-[1px] h-full bg-white/50" />
              ))}
            </div>
            <span className="text-sm font-bold tracking-widest uppercase text-zinc-500">
              Talent Architecture
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
                Elite Engineering{' '}
                <span className="font-urbanist font-bold not-italic text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-zinc-600">
                  Talent,
                </span>
                <br />
                <span className="font-urbanist font-bold not-italic">On Demand.</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-zinc-400 text-lg md:text-xl leading-relaxed max-w-2xl mt-10"
              >
                Access our curated network of world-class AI, software, and blockchain
                professionals. Deploy precision-matched engineers who integrate seamlessly into
                your existing workflows and accelerate your innovation velocity.
              </motion.p>
            </div>

            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              onClick={() => {
                const el = document.getElementById('talent-form');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group relative shrink-0 px-10 py-5 rounded-full bg-zinc-900 border border-white/20 overflow-hidden"
            >
              <div className="absolute inset-0 bg-white translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500" />
              <span className="relative z-10 text-white group-hover:text-black font-bold uppercase tracking-widest text-sm flex items-center gap-2">
                Submit Your Brief
                <span className="text-xl rotate-90">→</span>
              </span>
            </motion.button>
          </div>
        </div>
      </section>

      {/* ── Specializations Grid ─────────────────────────────── */}
      <section className="py-16 md:py-32 px-4 md:px-12 lg:px-24">
        <div className="max-w-[1920px] mx-auto">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center mb-12 md:mb-20">
            <div className="flex items-center gap-3 w-64">
              <div className="w-10 h-6 bg-zinc-800 flex items-center justify-between px-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-[1px] h-full bg-white/50" />
                ))}
              </div>
              <span className="text-sm font-bold tracking-widest uppercase text-zinc-500">
                Talent Verticals
              </span>
            </div>
            <h2 className="text-2xl md:text-6xl max-w-4xl font-urbanist leading-tight">
              Precision-Matched Specialists Across Every Domain.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {specializations.map((spec, idx) => {
              const Icon = spec.icon;
              const cardInner = (
                <div className="flex flex-col gap-4 md:gap-6 h-full">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-zinc-900 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
                    <Icon size={isMobile ? 22 : 26} />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold tracking-tight mb-2 md:mb-3">{spec.title}</h3>
                    <p className="text-zinc-500 text-xs md:text-sm leading-relaxed">{spec.desc}</p>
                  </div>
                  <div className="mt-auto pt-3 md:pt-4">
                    <ArrowUpRight size={20} className="text-zinc-700 group-hover:text-white transition-all" />
                  </div>
                </div>
              );

              if (isMobile) {
                return (
                  <FadeInView
                    key={spec.title}
                    delay={idx * 0.06}
                    className="group relative bg-zinc-950 rounded-3xl p-6 border border-white/5 cursor-default"
                  >
                    {cardInner}
                  </FadeInView>
                );
              }

              return (
                <motion.div
                  key={spec.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  className="group relative bg-zinc-950 rounded-3xl p-8 border border-white/5 hover:border-white/15 transition-all duration-500 cursor-default"
                >
                  {cardInner}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Engagement Protocol ───────────────────────────────── */}
      <section className="py-16 md:py-32 bg-black overflow-hidden">
        <div className="px-4 md:px-12 lg:px-24 mb-10 md:mb-16">
          <div className="flex items-center gap-3">
            <div className="w-10 h-6 bg-zinc-800 flex items-center justify-between px-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-[1px] h-full bg-white/50" />
              ))}
            </div>
            <span className="text-sm font-bold tracking-widest uppercase text-zinc-500">
              Engagement Protocol
            </span>
          </div>
          <h2 className="text-2xl md:text-7xl font-urbanist font-medium mt-4 tracking-tighter">
            From Brief to Deployment in Days.
          </h2>
        </div>

        <div className="flex flex-col">
          {processSteps.map((step) => (
            <div
              key={step.id}
              className="group relative flex flex-col md:flex-row items-start md:items-center justify-between py-8 md:py-16 px-4 md:px-12 lg:px-24 border-t border-white/10 md:hover:bg-zinc-900/40 transition-all duration-700 cursor-default overflow-hidden"
            >
              <div className="relative z-10 flex flex-col md:flex-row items-baseline gap-4 md:gap-24">
                <span className="text-zinc-800 text-3xl md:text-5xl font-black font-urbanist md:group-hover:text-white transition-colors duration-500">
                  {step.id}
                </span>
                <div className="space-y-3 md:space-y-6 max-w-2xl">
                  <h3 className="text-2xl md:text-6xl lg:text-[80px] font-urbanist font-medium tracking-tighter transition-all md:group-hover:pl-4">
                    {step.title}
                  </h3>
                  <p className="text-zinc-500 text-sm md:text-xl opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-700 md:transform md:translate-y-6 md:group-hover:translate-y-0 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
              <div className="relative z-10 hidden lg:block">
                <div className="w-20 h-20 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all rotate-45 group-hover:rotate-0 duration-500">
                  <span className="text-3xl font-light">→</span>
                </div>
              </div>
            </div>
          ))}
          <div className="border-t border-white/10" />
        </div>
      </section>

      {/* ── The Advantage ─────────────────────────────────────── */}
      <section className="py-16 md:py-32 px-4 md:px-12 lg:px-24 bg-zinc-950/30">
        <div className="max-w-[1920px] mx-auto">
          <div className="flex items-center gap-3 mb-20">
            <div className="w-10 h-6 bg-zinc-800 flex items-center justify-between px-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-[1px] h-full bg-white/50" />
              ))}
            </div>
            <span className="text-sm font-bold tracking-widest uppercase text-zinc-500">
              The Advantage
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            {advantages.map((adv, idx) => {
              const advInner = (
                <>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-3 md:mb-4">{adv.title}</h3>
                    <p className="text-zinc-400 text-sm md:text-base leading-relaxed">{adv.desc}</p>
                  </div>
                  <div className="mt-6 md:mt-10 pt-6 md:pt-8 border-t border-white/5 flex items-baseline gap-3">
                    <span className="text-4xl md:text-5xl font-urbanist font-bold tracking-tighter">{adv.stat}</span>
                    <span className="text-zinc-500 text-xs md:text-sm font-bold uppercase tracking-widest">
                      {adv.statLabel}
                    </span>
                  </div>
                </>
              );

              if (isMobile) {
                return (
                  <FadeInView
                    key={adv.title}
                    delay={idx * 0.1}
                    className="group bg-zinc-900/50 rounded-3xl p-6 md:p-10 border border-white/5 flex flex-col justify-between"
                  >
                    {advInner}
                  </FadeInView>
                );
              }

              return (
                <motion.div
                  key={adv.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.12 }}
                  className="group bg-zinc-900/50 rounded-3xl p-10 border border-white/5 hover:border-white/15 transition-all duration-500 flex flex-col justify-between"
                >
                  {advInner}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Requirement Form ──────────────────────────────────── */}
      <section id="talent-form" className="py-16 md:py-32 px-4 md:px-12 lg:px-24 bg-black relative overflow-hidden">
        <div className="hidden md:block absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[160px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="hidden md:block absolute bottom-0 left-0 w-[500px] h-[500px] bg-zinc-500/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

        <div className="max-w-[1920px] mx-auto relative z-10">
          <div className="max-w-3xl mb-20">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-6 bg-zinc-800 flex items-center justify-between px-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-[1px] h-full bg-white/50" />
                ))}
              </div>
              <span className="text-sm font-bold tracking-widest uppercase text-zinc-500">
                Deploy Your Brief
              </span>
            </div>
            <h2 className="text-3xl md:text-7xl font-arapey italic leading-[0.9] mb-6">
              Architect Your{' '}
              <span className="font-urbanist font-normal not-italic text-zinc-400">Dream Team.</span>
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed">
              Provide a comprehensive specification of your talent requirements. Our matching
              architects will curate a shortlist of precision-fit professionals within 48 hours.
            </p>
          </div>

          <AnimatePresence mode="wait">
            {formState !== 'success' ? (
              <motion.form
                key="talent-form-el"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                onSubmit={handleSubmit}
                className="bg-zinc-950 md:bg-zinc-950/50 rounded-3xl md:rounded-[40px] p-6 md:p-14 border border-white/5 md:backdrop-blur-xl shadow-2xl space-y-8 md:space-y-12"
              >
                {/* Section 1: Your Details */}
                <div>
                  <h3 className="text-xl font-bold tracking-tight mb-8 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-sm font-black">1</span>
                    Your Details
                  </h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <label className={labelClasses}>Contact Person</label>
                      <input
                        type="text"
                        placeholder="Full Name"
                        required
                        value={form.contactPerson}
                        onChange={(e) => updateField('contactPerson', e.target.value)}
                        className={inputClasses}
                      />
                    </div>
                    <div>
                      <label className={labelClasses}>Business Email</label>
                      <input
                        type="email"
                        placeholder="name@company.com"
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
                      <label className={labelClasses}>Company Name</label>
                      <input
                        type="text"
                        placeholder="Your Organization"
                        required
                        value={form.companyName}
                        onChange={(e) => updateField('companyName', e.target.value)}
                        className={inputClasses}
                      />
                    </div>
                  </div>
                  <div className="mt-8">
                    <label className={labelClasses}>Company Website</label>
                    <input
                      type="url"
                      placeholder="https://yourcompany.com"
                      value={form.companyWebsite}
                      onChange={(e) => updateField('companyWebsite', e.target.value)}
                      className={inputClasses}
                    />
                  </div>
                </div>

                {/* Divider */}
                <div className="w-full h-[1px] bg-white/5" />

                {/* Section 2: Resource Specification */}
                <div>
                  <h3 className="text-xl font-bold tracking-tight mb-8 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-sm font-black">2</span>
                    Resource Specification
                  </h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="relative">
                      <label className={labelClasses}>Role Required</label>
                      <select
                        value={form.role}
                        onChange={(e) => updateField('role', e.target.value)}
                        required
                        className={inputClasses}
                      >
                        <option value="" disabled className="bg-zinc-950">Select Specialization</option>
                        <option className="bg-zinc-950" value="AI / ML Engineer">AI / ML Engineer</option>
                        <option className="bg-zinc-950" value="Software Developer">Software Developer</option>
                        <option className="bg-zinc-950" value="Full Stack Engineer">Full Stack Engineer</option>
                        <option className="bg-zinc-950" value="Frontend Developer">Frontend Developer</option>
                        <option className="bg-zinc-950" value="Backend Developer">Backend Developer</option>
                        <option className="bg-zinc-950" value="App Developer (iOS/Android)">App Developer (iOS/Android)</option>
                        <option className="bg-zinc-950" value="Blockchain Developer">Blockchain Developer</option>
                        <option className="bg-zinc-950" value="Data Scientist">Data Scientist</option>
                        <option className="bg-zinc-950" value="Data Engineer">Data Engineer</option>
                        <option className="bg-zinc-950" value="Cloud / DevOps Engineer">Cloud / DevOps Engineer</option>
                        <option className="bg-zinc-950" value="UI/UX Designer">UI/UX Designer</option>
                        <option className="bg-zinc-950" value="QA Engineer">QA Engineer</option>
                        <option className="bg-zinc-950" value="Project Manager">Project Manager</option>
                        <option className="bg-zinc-950" value="Other">Other</option>
                      </select>
                      <ChevronDown size={16} className="absolute right-6 bottom-5 text-zinc-600 pointer-events-none" />
                    </div>
                    <div className="relative">
                      <label className={labelClasses}>Seniority Level</label>
                      <select
                        value={form.seniority}
                        onChange={(e) => updateField('seniority', e.target.value)}
                        required
                        className={inputClasses}
                      >
                        <option value="" disabled className="bg-zinc-950">Select Level</option>
                        <option className="bg-zinc-950" value="Junior (0-2 yrs)">Junior (0–2 yrs)</option>
                        <option className="bg-zinc-950" value="Mid-Level (2-5 yrs)">Mid-Level (2–5 yrs)</option>
                        <option className="bg-zinc-950" value="Senior (5-8 yrs)">Senior (5–8 yrs)</option>
                        <option className="bg-zinc-950" value="Lead / Principal (8+ yrs)">Lead / Principal (8+ yrs)</option>
                        <option className="bg-zinc-950" value="Staff / Architect">Staff / Architect</option>
                      </select>
                      <ChevronDown size={16} className="absolute right-6 bottom-5 text-zinc-600 pointer-events-none" />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-3 gap-8 mt-8">
                    <div className="relative">
                      <label className={labelClasses}>Number of Resources</label>
                      <select
                        value={form.resourceCount}
                        onChange={(e) => updateField('resourceCount', e.target.value)}
                        required
                        className={inputClasses}
                      >
                        <option value="" disabled className="bg-zinc-950">Select</option>
                        <option className="bg-zinc-950" value="1">1</option>
                        <option className="bg-zinc-950" value="2-3">2–3</option>
                        <option className="bg-zinc-950" value="4-6">4–6</option>
                        <option className="bg-zinc-950" value="7-10">7–10</option>
                        <option className="bg-zinc-950" value="10+">10+</option>
                      </select>
                      <ChevronDown size={16} className="absolute right-6 bottom-5 text-zinc-600 pointer-events-none" />
                    </div>
                    <div className="relative">
                      <label className={labelClasses}>Duration</label>
                      <select
                        value={form.duration}
                        onChange={(e) => updateField('duration', e.target.value)}
                        className={inputClasses}
                      >
                        <option value="" disabled className="bg-zinc-950">Select</option>
                        <option className="bg-zinc-950" value="1-3 Months">1–3 Months</option>
                        <option className="bg-zinc-950" value="3-6 Months">3–6 Months</option>
                        <option className="bg-zinc-950" value="6-12 Months">6–12 Months</option>
                        <option className="bg-zinc-950" value="12+ Months">12+ Months</option>
                        <option className="bg-zinc-950" value="Permanent">Permanent</option>
                      </select>
                      <ChevronDown size={16} className="absolute right-6 bottom-5 text-zinc-600 pointer-events-none" />
                    </div>
                    <div className="relative">
                      <label className={labelClasses}>Monthly Budget / Resource (USD)</label>
                      <select
                        value={form.budget}
                        onChange={(e) => updateField('budget', e.target.value)}
                        className={inputClasses}
                      >
                        <option value="" disabled className="bg-zinc-950">Select</option>
                        <option className="bg-zinc-950" value="$2k - $5k">$2k – $5k</option>
                        <option className="bg-zinc-950" value="$5k - $8k">$5k – $8k</option>
                        <option className="bg-zinc-950" value="$8k - $12k">$8k – $12k</option>
                        <option className="bg-zinc-950" value="$12k - $20k">$12k – $20k</option>
                        <option className="bg-zinc-950" value="$20k+">$20k+</option>
                        <option className="bg-zinc-950" value="Flexible">Flexible</option>
                      </select>
                      <ChevronDown size={16} className="absolute right-6 bottom-5 text-zinc-600 pointer-events-none" />
                    </div>
                  </div>

                  <div className="mt-8">
                    <label className={labelClasses}>Engagement Model</label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {['Full-Time', 'Part-Time', 'Contract', 'Project-Based'].map((model) => (
                        <label key={model} className="cursor-pointer group">
                          <input
                            type="radio"
                            name="engagement"
                            value={model}
                            checked={form.engagement === model}
                            onChange={(e) => updateField('engagement', e.target.value)}
                            className="hidden peer"
                          />
                          <div className="text-center py-3 rounded-xl border border-white/5 bg-zinc-900/40 peer-checked:bg-white peer-checked:text-black transition-all group-hover:border-white/20 text-sm font-bold tracking-tight">
                            {model}
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8">
                    <label className={labelClasses}>How Soon Do You Need Them?</label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {['Immediately', '2 Weeks', '1 Month', 'Flexible'].map((time) => (
                        <label key={time} className="cursor-pointer group">
                          <input
                            type="radio"
                            name="urgency"
                            value={time}
                            checked={form.urgency === time}
                            onChange={(e) => updateField('urgency', e.target.value)}
                            className="hidden peer"
                          />
                          <div className="text-center py-3 rounded-xl border border-white/5 bg-zinc-900/40 peer-checked:bg-white peer-checked:text-black transition-all group-hover:border-white/20 text-sm font-bold tracking-tight">
                            {time}
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="w-full h-[1px] bg-white/5" />

                {/* Section 3: Technical Requirements */}
                <div>
                  <h3 className="text-xl font-bold tracking-tight mb-8 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-sm font-black">3</span>
                    Technical Requirements
                  </h3>
                  <div className="space-y-8">
                    <div>
                      <label className={labelClasses}>Key Skills / Tech Stack Required</label>
                      <textarea
                        rows={3}
                        placeholder="e.g. Python, TensorFlow, PyTorch, AWS SageMaker, Docker, Kubernetes..."
                        value={form.skills}
                        onChange={(e) => updateField('skills', e.target.value)}
                        className={inputClasses + ' resize-none'}
                      />
                    </div>
                    <div>
                      <label className={labelClasses}>Detailed Requirements & Scope</label>
                      <textarea
                        rows={5}
                        placeholder="Describe the project context, day-to-day responsibilities, team structure, and any specific domain expertise required..."
                        required
                        value={form.requirements}
                        onChange={(e) => updateField('requirements', e.target.value)}
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
                        Deploy Requirements <Send size={16} />
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
                <h3 className="text-4xl font-arapey italic mb-4">Brief Received</h3>
                <p className="text-zinc-400 max-w-md mx-auto leading-relaxed">
                  Your talent specification has been transmitted to our matching architects. Expect a
                  curated shortlist of precision-fit candidates within 48 hours.
                </p>
                <button
                  onClick={() => {
                    setFormState('idle');
                    setForm(INITIAL_TALENT_FORM);
                  }}
                  className="mt-12 text-white font-bold uppercase tracking-widest text-[10px] border-b border-white/20 pb-1 hover:border-white transition-all"
                >
                  Submit Another Brief
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
              Talent Architecture Division
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

export default TalentPage;
