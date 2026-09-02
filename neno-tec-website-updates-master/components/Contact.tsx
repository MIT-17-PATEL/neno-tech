
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, Send, CheckCircle2, ChevronDown } from 'lucide-react';
import { sanitizePayload, checkRateLimit, getRemainingCooldown, isBot, isValidEmail, isValidPhone } from './security';

const countryCodes = [
  { code: '+91', country: 'IN', label: '🇮🇳 +91' },
  { code: '+1', country: 'US', label: '🇺🇸 +1' },
  { code: '+44', country: 'GB', label: '🇬🇧 +44' },
  { code: '+61', country: 'AU', label: '🇦🇺 +61' },
  { code: '+971', country: 'AE', label: '🇦🇪 +971' },
  { code: '+65', country: 'SG', label: '🇸🇬 +65' },
  { code: '+49', country: 'DE', label: '🇩🇪 +49' },
  { code: '+33', country: 'FR', label: '🇫🇷 +33' },
  { code: '+81', country: 'JP', label: '🇯🇵 +81' },
  { code: '+86', country: 'CN', label: '🇨🇳 +86' },
  { code: '+82', country: 'KR', label: '🇰🇷 +82' },
  { code: '+55', country: 'BR', label: '🇧🇷 +55' },
  { code: '+52', country: 'MX', label: '🇲🇽 +52' },
  { code: '+39', country: 'IT', label: '🇮🇹 +39' },
  { code: '+34', country: 'ES', label: '🇪🇸 +34' },
  { code: '+31', country: 'NL', label: '🇳🇱 +31' },
  { code: '+46', country: 'SE', label: '🇸🇪 +46' },
  { code: '+41', country: 'CH', label: '🇨🇭 +41' },
  { code: '+64', country: 'NZ', label: '🇳🇿 +64' },
  { code: '+353', country: 'IE', label: '🇮🇪 +353' },
  { code: '+972', country: 'IL', label: '🇮🇱 +972' },
  { code: '+60', country: 'MY', label: '🇲🇾 +60' },
  { code: '+63', country: 'PH', label: '🇵🇭 +63' },
  { code: '+66', country: 'TH', label: '🇹🇭 +66' },
  { code: '+84', country: 'VN', label: '🇻🇳 +84' },
  { code: '+7', country: 'RU', label: '🇷🇺 +7' },
  { code: '+234', country: 'NG', label: '🇳🇬 +234' },
  { code: '+27', country: 'ZA', label: '🇿🇦 +27' },
  { code: '+254', country: 'KE', label: '🇰🇪 +254' },
  { code: '+20', country: 'EG', label: '🇪🇬 +20' },
  { code: '+62', country: 'ID', label: '🇮🇩 +62' },
  { code: '+48', country: 'PL', label: '🇵🇱 +48' },
  { code: '+90', country: 'TR', label: '🇹🇷 +90' },
  { code: '+966', country: 'SA', label: '🇸🇦 +966' },
  { code: '+974', country: 'QA', label: '🇶🇦 +974' },
];

interface FormData {
  name: string;
  email: string;
  company: string;
  countryCode: string;
  phone: string;
  service: string;
  budget: string;
  timeline: string;
  message: string;
}

const INITIAL_FORM: FormData = {
  name: '',
  email: '',
  company: '',
  countryCode: '+91',
  phone: '',
  service: '',
  budget: '',
  timeline: '',
  message: '',
};

const API_URL = '/api/submit-contact';

const FORM_ID = 'contact';
const COOLDOWN_MS = 30000; // 30 seconds between submissions
const FIELD_LIMITS: Record<string, number> = {
  name: 100, email: 254, company: 150, phone: 20,
  service: 100, budget: 50, timeline: 50, message: 2000,
};

const Contact: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [form, setForm] = useState<FormData>(INITIAL_FORM);
  const [errorMsg, setErrorMsg] = useState('');
  const [honeypot, setHoneypot] = useState('');

  const updateField = (field: keyof FormData, value: string) => {
    const limit = FIELD_LIMITS[field] || 1000;
    setForm(prev => ({ ...prev, [field]: value.slice(0, limit) }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    setErrorMsg('');

    // ── Bot detection (honeypot) ──
    if (isBot(honeypot)) {
      // Silently "succeed" to not tip off the bot
      await new Promise(resolve => setTimeout(resolve, 1500));
      setFormState('success');
      return;
    }

    // ── Rate limiting ──
    if (!checkRateLimit(FORM_ID, COOLDOWN_MS)) {
      const remaining = getRemainingCooldown(FORM_ID, COOLDOWN_MS);
      setErrorMsg(`Please wait ${remaining} seconds before submitting again.`);
      setFormState('error');
      return;
    }

    // ── Validation ──
    if (!isValidEmail(form.email)) {
      setErrorMsg('Please enter a valid email address.');
      setFormState('error');
      return;
    }
    if (form.phone && !isValidPhone(form.phone)) {
      setErrorMsg('Please enter a valid phone number (digits only, 6-20 characters).');
      setFormState('error');
      return;
    }

    // ── Sanitize all fields ──
    const rawPayload: Record<string, string> = {
      name: form.name,
      email: form.email,
      company: form.company,
      phone: `${form.countryCode.replace('+', '')} ${form.phone}`,
      service: form.service,
      budget: form.budget,
      timeline: form.timeline,
      message: form.message,
      website_url: honeypot, // honeypot — server rejects if filled
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
        setForm(INITIAL_FORM);
      } else if (res.status === 429) {
        setErrorMsg(data.error || 'Too many requests. Please wait before trying again.');
        setFormState('error');
      } else {
        setErrorMsg(data.error || 'Something went wrong. Please try again.');
        setFormState('error');
      }
    } catch {
      setErrorMsg('Network error. Please check your connection and try again.');
      setFormState('error');
    }
  };

  const inputClasses = "w-full bg-zinc-900/40 border border-white/5 rounded-2xl px-6 py-4 focus:outline-none focus:border-white/20 focus:bg-zinc-900/60 transition-all duration-300 text-white placeholder:text-zinc-600 font-medium appearance-none";
  const labelClasses = "text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 mb-2 ml-1 block";

  return (
    <section id="contact" className="py-32 px-6 md:px-12 lg:px-24 bg-black relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="hidden md:block absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      <div className="hidden md:block absolute bottom-0 left-0 w-[500px] h-[500px] bg-zinc-500/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-[1920px] mx-auto grid lg:grid-cols-5 gap-24 relative z-10">
        
        {/* Left Side: Brand & Info */}
        <div className="lg:col-span-2 space-y-16">
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-6 bg-zinc-800 flex items-center justify-between px-1">
                {[1,2,3,4,5].map(i => <div key={i} className="w-[1px] h-full bg-white/50" />)}
              </div>
              <span className="text-sm font-bold tracking-widest uppercase text-zinc-500">Inquiry Hub</span>
            </div>
            <h2 className="text-4xl md:text-8xl lg:text-[100px] font-arapey italic leading-[1.05] pb-2 tracking-tight">
              Initiate your <br />
              <span className="font-urbanist font-normal not-italic text-zinc-500">Project.</span>
            </h2>
            <p className="text-zinc-400 text-lg md:text-xl leading-relaxed max-w-md">
              Ready to automate your excellence? Complete the brief below, and our innovation architects will curate a tailored proposal within 24 hours.
            </p>
          </div>

          <div className="space-y-8 pt-8 border-t border-white/5">
            <a href="mailto:sales@nenotechnology.com" className="flex items-center gap-6 group cursor-pointer">
              <div className="w-14 h-14 rounded-full bg-zinc-900 flex items-center justify-center border border-white/5 group-hover:border-white/20 transition-all">
                <Mail size={20} className="text-zinc-400 group-hover:text-white transition-colors" />
              </div>
              <div>
                <p className="text-zinc-500 text-[10px] font-black uppercase tracking-widest">General Enquiries</p>
                <p className="text-white font-bold text-lg">sales@nenotechnology.com</p>
              </div>
            </a>

            <a href="tel:+919106915561" className="flex items-center gap-6 group cursor-pointer">
              <div className="w-14 h-14 rounded-full bg-zinc-900 flex items-center justify-center border border-white/5 group-hover:border-white/20 transition-all">
                <Phone size={20} className="text-zinc-400 group-hover:text-white transition-colors" />
              </div>
              <div>
                <p className="text-zinc-500 text-[10px] font-black uppercase tracking-widest">Innovation Lab</p>
                <p className="text-white font-bold text-lg">+91 91069 15561</p>
              </div>
            </a>
          </div>
        </div>

        {/* Right Side: Detailed Form */}
        <div className="lg:col-span-3">
          <AnimatePresence mode="wait">
            {formState !== 'success' ? (
              <motion.form 
                key="contact-form"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                onSubmit={handleSubmit}
                className="bg-zinc-950 md:bg-zinc-950/50 rounded-3xl md:rounded-[40px] p-6 md:p-12 border border-white/5 md:backdrop-blur-xl space-y-6 md:space-y-8 shadow-2xl"
              >
                {/* Honeypot — invisible to humans, bots fill it */}
                <div className="absolute -left-[9999px]" aria-hidden="true">
                  <input
                    type="text"
                    name="website_url"
                    tabIndex={-1}
                    autoComplete="off"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label className={labelClasses}>Full Name</label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      required
                      maxLength={100}
                      value={form.name}
                      onChange={(e) => updateField('name', e.target.value)}
                      className={inputClasses}
                    />
                  </div>
                  <div>
                    <label className={labelClasses}>Email Address</label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      required
                      maxLength={254}
                      value={form.email}
                      onChange={(e) => updateField('email', e.target.value)}
                      className={inputClasses}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label className={labelClasses}>Company Name</label>
                    <input
                      type="text"
                      placeholder="Acme Corp"
                      maxLength={150}
                      value={form.company}
                      onChange={(e) => updateField('company', e.target.value)}
                      className={inputClasses}
                    />
                  </div>
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
                            <option key={cc.code + cc.country} value={cc.code} className="bg-zinc-950">
                              {cc.label}
                            </option>
                          ))}
                        </select>
                        <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-600 pointer-events-none" />
                      </div>
                      <input
                        type="tel"
                        placeholder="91069 15561"
                        maxLength={20}
                        value={form.phone}
                        onChange={(e) => updateField('phone', e.target.value)}
                        className={inputClasses}
                      />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="relative">
                    <label className={labelClasses}>Interested In</label>
                    <select
                      value={form.service}
                      onChange={(e) => updateField('service', e.target.value)}
                      required
                      className={inputClasses}
                    >
                      <option value="" disabled className="bg-zinc-950">Select Service</option>
                      <option className="bg-zinc-950" value="AI Strategy & Consultation">AI Strategy & Consultation</option>
                      <option className="bg-zinc-950" value="Custom LLM Development">Custom LLM Development</option>
                      <option className="bg-zinc-950" value="Autonomous Agent Workflows">Autonomous Agent Workflows</option>
                      <option className="bg-zinc-950" value="Enterprise SaaS / ERP">Enterprise SaaS / ERP</option>
                      <option className="bg-zinc-950" value="Web & Mobile Engineering">Web & Mobile Engineering</option>
                      <option className="bg-zinc-950" value="Managed AI Services">Managed AI Services</option>
                    </select>
                    <ChevronDown size={16} className="absolute right-6 bottom-5 text-zinc-600 pointer-events-none" />
                  </div>
                  <div className="relative">
                    <label className={labelClasses}>Project Budget (USD)</label>
                    <select
                      value={form.budget}
                      onChange={(e) => updateField('budget', e.target.value)}
                      className={inputClasses}
                    >
                      <option value="" disabled className="bg-zinc-950">Select Budget</option>
                      <option className="bg-zinc-950" value="$2k - $10k">$2k - $10k</option>
                      <option className="bg-zinc-950" value="$10k - $25k">$10k - $25k</option>
                      <option className="bg-zinc-950" value="$25k - $50k">$25k - $50k</option>
                      <option className="bg-zinc-950" value="$50k+">$50k+</option>
                    </select>
                    <ChevronDown size={16} className="absolute right-6 bottom-5 text-zinc-600 pointer-events-none" />
                  </div>
                </div>

                <div>
                  <label className={labelClasses}>Project Timeline</label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {['Immediate', '1 Month', '3 Months', 'Exploring'].map((time) => (
                      <label key={time} className="cursor-pointer group">
                        <input
                          type="radio"
                          name="timeline"
                          value={time}
                          checked={form.timeline === time}
                          onChange={(e) => updateField('timeline', e.target.value)}
                          className="hidden peer"
                        />
                        <div className="text-center py-3 rounded-xl border border-white/5 bg-zinc-900/40 peer-checked:bg-white peer-checked:text-black transition-all group-hover:border-white/20 text-sm font-bold tracking-tight">
                          {time}
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className={labelClasses}>How can we assist you?</label>
                  <textarea 
                    rows={4} 
                    placeholder="Tell us about your project goals and requirements..." 
                    required
                    maxLength={2000}
                    value={form.message}
                    onChange={(e) => updateField('message', e.target.value)}
                    className={inputClasses + " resize-none"}
                  />
                </div>

                {formState === 'error' && errorMsg && (
                  <div className="text-red-400 text-sm font-medium bg-red-500/10 border border-red-500/20 rounded-xl px-6 py-3">
                    {errorMsg}
                  </div>
                )}

                <button 
                  disabled={formState === 'submitting'}
                  className="w-full group relative overflow-hidden bg-white text-black h-20 rounded-2xl font-black uppercase tracking-[0.3em] text-[12px] flex items-center justify-center transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-70"
                >
                  <AnimatePresence mode="wait">
                    {formState === 'submitting' ? (
                      <motion.div 
                        key="loading" 
                        animate={{ rotate: 360 }} 
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-6 h-6 border-2 border-black border-t-transparent rounded-full"
                      />
                    ) : (
                      <motion.div key="text" className="flex items-center gap-3">
                        Deploy Inquiry <Send size={16} />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </motion.form>
            ) : (
              <motion.div
                key="success-message"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-[600px] bg-zinc-950/50 rounded-[40px] border border-white/5 flex flex-col items-center justify-center text-center p-12"
              >
                <div className="w-24 h-24 rounded-full bg-white/10 flex items-center justify-center mb-8">
                  <CheckCircle2 size={48} className="text-white" />
                </div>
                <h3 className="text-4xl font-arapey italic mb-4">Transmission Successful</h3>
                <p className="text-zinc-400 max-w-xs mx-auto leading-relaxed">
                  Your project blueprint has been received. One of our lead architects will contact you shortly to schedule a deep-dive session.
                </p>
                <button 
                  onClick={() => { setFormState('idle'); setForm(INITIAL_FORM); }}
                  className="mt-12 text-white font-bold uppercase tracking-widest text-[10px] border-b border-white/20 pb-1 hover:border-white transition-all"
                >
                  Return to Form
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Contact;
