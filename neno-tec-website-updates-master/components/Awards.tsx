
import React from 'react';
import { motion } from 'framer-motion';

const awards = [
  { title: "I. Awwwards Jury", year: "2021-2024", img: "https://framerusercontent.com/images/MWOrEBX8mxzuPlxdjzV9syASMo.png" },
  { title: "II. Studio of the year", year: "2023", img: "https://framerusercontent.com/images/eXGAWDyMxaiDhWQkhPgYx6TA.png" },
  { title: "III. Cannes Lions", year: "2022", img: "https://framerusercontent.com/images/s5OrxTutPqW3JXht4IJVa0tJUo.png" },
  { title: "IV. Adobe Design Achievement", year: "2022-2023", img: "https://framerusercontent.com/images/er8c3uvPIXneIVOPOZmotMoOw.png" }
];

const Awards: React.FC = () => {
  return (
    <section className="py-32 bg-black overflow-hidden">
       <div className="px-6 md:px-12 lg:px-24 mb-16">
        <div className="flex items-center gap-3">
             <div className="w-10 h-6 bg-zinc-800 flex items-center justify-between px-1">
               {[1,2,3,4,5].map(i => <div key={i} className="w-[1px] h-full bg-white/50" />)}
            </div>
            <span className="text-sm font-bold tracking-widest uppercase text-zinc-500">Our Awards</span>
          </div>
       </div>

       <div className="flex flex-col">
          {awards.map((award) => (
            <div key={award.title} className="group relative flex flex-col md:flex-row items-start md:items-center justify-between py-12 px-6 md:px-12 lg:px-24 border-t border-white/10 hover:bg-white/5 transition-colors cursor-pointer">
              <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                <img src={award.img} alt="" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/60" />
              </div>

              <h3 className="relative z-10 text-4xl md:text-6xl lg:text-[80px] font-urbanist font-medium tracking-tighter group-hover:italic transition-all">
                {award.title}
              </h3>
              <span className="relative z-10 text-zinc-500 font-bold tracking-widest text-lg group-hover:text-white transition-colors">
                {award.year}
              </span>
            </div>
          ))}
       </div>
    </section>
  );
};

export default Awards;
