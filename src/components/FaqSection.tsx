'use client';

import React, { useState } from 'react';
import { ChevronDown, Sparkles } from 'lucide-react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Why should we choose Next.js over traditional WordPress for SEO?',
      a: 'Traditional WordPress relies on heavy PHP processing, database queries on every page hit, and dozens of third-party plugins that drag Google Lighthouse scores down to 40-60/100. Next.js 15 prerenders pages at the edge, achieving 0.3s sub-second response times, perfect 100/100 Core Web Vitals, and flawless mobile indexing that Google algorithms strongly favor.'
    },
    {
      q: 'How quickly can our business achieve Page 1 Google rankings?',
      a: 'While organic SEO timelines depend on keyword difficulty and competition, our technical audit and Core Web Vitals overhaul typically yield dramatic rank improvements within 45 to 75 days. Transactional keywords and local 3-pack map rankings often move into top 3 positions even faster due to our structured schema markup.'
    },
    {
      q: 'How does Supabase integrate into our website architecture?',
      a: 'Supabase acts as an enterprise-grade cloud PostgreSQL database. It stores lead inquiries, customer contacts, blog articles, and dynamic catalogues securely with Row Level Security (RLS). When you are ready for dynamic features, Supabase scales effortlessly to millions of rows with zero server management.'
    },
    {
      q: 'Can our Next.js web application handle high-traffic advertising spikes?',
      a: 'Yes! Next.js serverless functions scale automatically from zero to tens of thousands of concurrent visitors during marketing campaigns or product launches. There are no server crashes or memory exhaustion issues common with traditional shared cPanel hosting.'
    },
    {
      q: 'Do we retain full ownership of our source code and assets?',
      a: '100% yes. You receive complete intellectual property rights, GitHub repository access, database credentials, and comprehensive architectural documentation. We never lock clients into proprietary software.'
    },
    {
      q: 'What is included in your ongoing SEO & technical maintenance?',
      a: 'Our ongoing packages include weekly rank tracking, new content optimization, technical health monitoring, backlink velocity management, Google Search Console error resolution, and monthly strategic review sessions.'
    },
  ];

  return (
    <section className="py-24 bg-white relative border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-8 lg:px-12">
        
        <div className="text-center mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-xs font-medium">
            <Sparkles className="w-3.5 h-3.5 text-purple-600" />
            <span>COMMON INQUIRIES</span>
          </div>
          <h2 className="text-xl sm:text-3xl lg:text-[34px] font-medium text-slate-900 tracking-tight leading-snug">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-slate-600 font-normal">
            Everything you need to know about our technical SEO, Next.js engineering, and working relationship.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-slate-50/80 border border-slate-200 hover:border-purple-300 rounded-2xl overflow-hidden transition-all shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 transition-colors hover:bg-purple-50/40"
                >
                  <span className="text-sm sm:text-base font-semibold text-slate-900">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-purple-600 transition-transform duration-200 flex-shrink-0 ${
                      isOpen ? 'rotate-180 text-purple-700' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal border-t border-slate-200 bg-white/70 animate-in fade-in duration-150">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
