'use client';

import React from 'react';

export default function TechStackTicker() {
  const stack = [
    { name: 'Technical SEO #1', tag: 'Algorithm Immune' },
    { name: 'Next.js 15 App Router', tag: 'Serverless Edge' },
    { name: 'Supabase PostgreSQL', tag: 'Realtime Cloud' },
    { name: 'TypeScript Architecture', tag: 'Type-Safe' },
    { name: 'Core Web Vitals 100/100', tag: 'Sub-Second' },
    { name: 'Google Ads Premier', tag: 'High-Intent PPC' },
    { name: 'Meta Business Partner', tag: 'Hyper-Targeted' },
    { name: 'Tailwind CSS Modern', tag: 'Zero Bloat' },
    { name: 'GA4 & Semrush Analytics', tag: 'Data-Backed' },
    { name: 'React 19 Concurrent', tag: 'Smooth UX' },
  ];

  return (
    <div className="w-full bg-slate-50 border-y border-slate-200 py-2.5 sm:py-3 overflow-hidden select-none relative">
      {/* Left/Right generous gradient fade masks spanning smoothly to screen edges */}
      <div className="absolute left-0 top-0 bottom-0 w-28 sm:w-44 bg-gradient-to-r from-slate-50 via-slate-50/90 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-28 sm:w-44 bg-gradient-to-l from-slate-50 via-slate-50/90 to-transparent z-10 pointer-events-none" />

      <div className="flex animate-marquee whitespace-nowrap items-center">
        {[...stack, ...stack, ...stack].map((item, idx) => (
          <div
            key={idx}
            className="inline-flex items-center mx-4 sm:mx-5 px-4 py-1.5 rounded-xl bg-white border border-slate-200 hover:border-purple-300 text-xs sm:text-sm font-medium text-slate-700 hover:text-purple-700 shadow-sm transition-all duration-200 cursor-default group flex-shrink-0"
          >
            <span className="w-2 h-2 rounded-full bg-purple-600 mr-2.5 group-hover:scale-125 transition-transform flex-shrink-0" />
            <span className="font-medium text-slate-800 group-hover:text-purple-700 whitespace-nowrap">{item.name}</span>
            <span className="ml-2 text-[10px] font-mono uppercase bg-purple-50 text-purple-700 border border-purple-200/80 px-2 py-0.5 rounded-md whitespace-nowrap flex-shrink-0">
              {item.tag}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
