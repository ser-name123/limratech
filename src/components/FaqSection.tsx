'use client';

import React, { useState, useEffect } from 'react';
import { ChevronDown, Sparkles } from 'lucide-react';
import { defaultFaqsData } from '@/data/defaultCmsConfig';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [faqs, setFaqs] = useState(
    defaultFaqsData.map((f) => ({ q: f.question, a: f.answer }))
  );

  useEffect(() => {
    fetch('/api/admin')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data?.cms?.faqs) && data.cms.faqs.length > 0) {
          setFaqs(data.cms.faqs.map((f: any) => ({ q: f.question || f.q, a: f.answer || f.a })));
        }
      })
      .catch(() => { });
  }, []);

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
                    className={`w-4 h-4 text-purple-600 transition-transform duration-200 flex-shrink-0 ${isOpen ? 'rotate-180 text-purple-700' : ''
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
