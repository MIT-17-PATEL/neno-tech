
import React from 'react';
import { motion } from 'framer-motion';

const reviews = [
  { text: "Their AI document processing system cut our invoice processing time from 3 days to 3 hours. The accuracy is incredible - it extracts data from any format and learns from corrections. Best ROI we've seen in years.", author: "Operations Director", company: "Logistics Hub" },
  { text: "We implemented their predictive analytics AI for inventory forecasting, and it's been a revelation. The system predicted demand patterns we never saw coming, reducing our overstock by 60%.", author: "Tech Lead", company: "Retail Enterprise" },
  { text: "The conversational AI agent they built for our customer service understands context better than solutions costing 10x more. It handles complex queries in multiple languages and genuinely feels human.", author: "Customer Success VP", company: "Global SaaS" },
  { text: "Their AI-powered lead scoring system transformed our sales process. It analyzes buyer behavior and scores leads with 92% accuracy. Our sales team now focuses only on high-intent prospects.", author: "Head of Sales", company: "Fintech Startup" },
  { text: "We needed AI to analyze thousands of customer reviews and extract actionable insights. Their sentiment analysis system not only categorizes feedback but identifies emerging trends before they become problems.", author: "Brand Strategist", company: "E-commerce Agency" },
  { text: "The computer vision solution they developed for our quality control line detects defects our human inspectors were missing. It's running 24/7 with 98% accuracy and has reduced returns significantly.", author: "Manufacturing Manager", company: "Industrial Group" },
  { text: "Their custom AI assistant integrates with all our internal tools and answers employee questions instantly. It's like having an expert on every department available at all times. Productivity has soared.", author: "HR Director", company: "Corporate Solutions" }
];

const Reviews: React.FC = () => {
  return (
    <section className="py-32 bg-black overflow-hidden">
      <div className="px-6 md:px-12 lg:px-24 mb-16">
        <div className="flex items-center gap-3">
             <div className="w-10 h-6 bg-zinc-800 flex items-center justify-between px-1">
               {[1,2,3,4,5].map(i => <div key={i} className="w-[1px] h-full bg-white/50" />)}
            </div>
            <span className="text-sm font-bold tracking-widest uppercase text-zinc-500">Client Feedback</span>
          </div>
       </div>

      <div className="flex gap-8 px-6 overflow-hidden relative">
        <motion.div 
          animate={{ x: [0, -2000] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="flex gap-8 shrink-0"
        >
          {[...reviews, ...reviews].map((review, i) => (
            <div key={i} className="w-[450px] shrink-0 bg-zinc-900/50 p-10 rounded-3xl border border-white/5 space-y-8">
              <div className="flex gap-1">
                {[1,2,3,4,5].map(s => <span key={s} className="text-zinc-600">★</span>)}
              </div>
              <h5 className="text-xl font-medium leading-relaxed italic">“ {review.text} ”</h5>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center font-bold text-zinc-500">N</div>
                <div>
                  <p className="font-bold text-white text-sm">{review.author}</p>
                  <p className="text-zinc-500 text-xs">{review.company}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
        
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent pointer-events-none" />
      </div>
    </section>
  );
};

export default Reviews;
