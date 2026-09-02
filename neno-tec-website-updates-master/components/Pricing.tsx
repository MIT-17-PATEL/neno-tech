
import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import SpotlightCard from './shared/SpotlightCard';

const Pricing: React.FC = () => {
  const plans = [
    {
      name: "Strategic Consultation",
      desc: "For businesses identifying AI opportunities and building a custom implementation roadmap.",
      price: "Custom Quote",
      features: ["AI Readiness Assessment", "Process Optimization Audit", "Resource Planning", "Architecture Design"]
    },
    {
      name: "Product Implementation",
      desc: "End-to-end development of custom AI agents, CRM/ERP systems, and proprietary tools.",
      price: "Project Based",
      features: ["Custom Model Development", "Full Stack Engineering", "API & Cloud Setup", "Dedicated Support"]
    }
  ];

  return (
    <section id="pricing" className="py-32 px-6 md:px-12 lg:px-24 bg-black relative">
      <div className="max-w-[1920px] mx-auto flex flex-col items-center gap-20">
        <div className="text-center space-y-6">
          <div className="flex items-center justify-center gap-3">
             <div className="w-10 h-6 bg-zinc-800 flex items-center justify-between px-1">
               {[1,2,3,4,5].map(i => <div key={i} className="w-[1px] h-full bg-white/50" />)}
            </div>
            <span className="text-sm font-bold tracking-widest uppercase text-zinc-500">Work With Us</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-arapey italic">Tailored <span className="font-urbanist font-normal not-italic text-shimmer">Collaborations</span></h2>
          <p className="text-zinc-500 max-w-xl mx-auto">Pricing varies based on project complexity and requirements. Contact our team for a tailored discovery call.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 w-full max-w-6xl">
          {plans.map((plan) => (
            <SpotlightCard key={plan.name} className="bg-zinc-950/90 rounded-[40px] p-10 h-full border border-white/10 hover:border-white/25 transition-all duration-500 flex flex-col justify-between shadow-2xl">
              <div>
                <p className="text-white italic font-medium mb-8 text-2xl">{plan.name}</p>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-4xl md:text-5xl font-arapey italic font-medium text-shimmer">{plan.price}</span>
                </div>
                <p className="text-zinc-400 text-sm italic mb-10 leading-relaxed">{plan.desc}</p>
                <div className="space-y-4">
                  {plan.features.map(f => (
                    <div key={f} className="flex items-center gap-3">
                      <div className="p-1.5 rounded-full bg-zinc-900 border border-white/10"><Check size={14} className="text-white" /></div>
                      <span className="text-white/80 font-medium text-sm">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
              <button
                onClick={() => {
                  const el = document.getElementById('contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="mt-12 w-full py-5 rounded-full border border-white/20 bg-zinc-900/60 hover:bg-white hover:text-black transition-all font-bold uppercase text-xs tracking-widest"
              >
                Inquire Now
              </button>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
