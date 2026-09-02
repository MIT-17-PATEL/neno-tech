
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';

const faqs = [
  {
    question: "What industries do you work with?",
    answer: "We serve clients across healthcare, fintech, e-commerce, logistics, manufacturing, and enterprise SaaS. Our AI solutions are domain-agnostic and built to adapt to any industry's unique challenges and data requirements."
  },
  {
    question: "How long does a typical AI project take?",
    answer: "Timelines vary by scope. Strategy consultations take 1–2 weeks, MVP development runs 4–8 weeks, and full-scale enterprise deployments typically span 8–16 weeks from discovery to production."
  },
  {
    question: "Do you provide ongoing support after deployment?",
    answer: "Absolutely. We offer continuous monitoring, model retraining, performance optimization, and dedicated support packages to ensure your AI systems keep evolving and improving over time."
  },
  {
    question: "Can your solutions integrate with existing systems?",
    answer: "Yes. Our solutions are built with an integration-first philosophy, supporting REST APIs, webhooks, and native connectors for platforms like Salesforce, HubSpot, SAP, Zoho, and custom enterprise stacks."
  },
  {
    question: "What makes Nenotechnology different?",
    answer: "We combine deep technical expertise in LLMs and agentic workflows with a business-outcomes-first approach. We don't just build AI — we engineer solutions that deliver measurable ROI and operational efficiency."
  },
  {
    question: "How do you handle data privacy and security?",
    answer: "We follow enterprise-grade security protocols including end-to-end encryption, role-based access controls, and compliance-ready architecture. We can operate within your existing security framework and data governance policies."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-32 px-6 md:px-12 lg:px-24 bg-black">
      <div className="max-w-[1920px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">
          {/* Left Side */}
          <div className="lg:w-1/3 space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-6 bg-zinc-800 flex items-center justify-between px-1">
                {[1,2,3,4,5].map(i => <div key={i} className="w-[1px] h-full bg-white/50" />)}
              </div>
              <span className="text-sm font-bold tracking-widest uppercase text-zinc-500">FAQ</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-arapey italic leading-[1.05] pb-2">
              Common <br />
              <span className="font-urbanist font-normal not-italic text-zinc-400">Questions</span>
            </h2>
            <p className="text-zinc-500 text-lg leading-relaxed">
              Everything you need to know about working with us. Can't find your answer? Reach out directly.
            </p>
          </div>

          {/* Right Side - Accordion */}
          <div className="lg:w-2/3 flex flex-col border-t border-white/10">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="border-b border-white/10"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full flex items-center justify-between py-8 text-left group"
                >
                  <span className="text-xl md:text-2xl font-bold tracking-tight pr-8 group-hover:text-zinc-300 transition-colors">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === idx ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="shrink-0 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all"
                  >
                    <Plus size={18} />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openIndex === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="text-zinc-400 text-lg leading-relaxed pb-8 max-w-2xl">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
