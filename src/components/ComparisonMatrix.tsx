'use client';

import React, { useState, useEffect } from 'react';
import { CheckCircle2, XCircle, Zap, Sparkles } from 'lucide-react';
import { defaultHomeSections } from '@/data/defaultCmsConfig';
import RichText from '@/components/RichText';

export default function ComparisonMatrix() {
  const [cfg, setCfg] = useState(defaultHomeSections.comparison);
  useEffect(() => {
    fetch('/api/admin')
      .then((r) => r.json())
      .then((d) => {
        if (d?.cms?.homeSections?.comparison) setCfg(d.cms.homeSections.comparison);
      })
      .catch(() => {});
  }, []);

  const rows = cfg.rows;

  return (
    <section className="py-24 bg-white relative border-b border-slate-200 overflow-hidden">
      <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-xs font-medium">
            <Sparkles className="w-3.5 h-3.5 text-purple-600" />
            <span>{cfg.eyebrow}</span>
          </div>
          <h2 className="text-xl sm:text-3xl lg:text-[34px] font-medium text-slate-900 tracking-tight leading-snug">
            {cfg.heading}
          </h2>
          <RichText className="text-sm text-slate-600 font-normal leading-relaxed" html={cfg.description} />
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xl shadow-slate-200/50">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50/90">
                  <th className="p-4 sm:p-5 text-xs font-semibold text-slate-600 uppercase tracking-wider">
                    Capability
                  </th>
                  <th className="p-4 sm:p-5 text-xs font-semibold text-rose-600 uppercase tracking-wider bg-rose-50/60">
                    Legacy Traditional Agencies
                  </th>
                  <th className="p-4 sm:p-5 text-xs font-semibold text-purple-700 uppercase tracking-wider bg-purple-50/80 border-l border-purple-200">
                    <span className="flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5 text-purple-600" /> LIMRA Digitech Standard
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                {rows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/60 transition-colors">
                    <td className="p-4 sm:p-5 font-semibold text-slate-900">
                      {row.feature}
                    </td>
                    <td className="p-4 sm:p-5 text-slate-600 bg-rose-50/15 font-normal">
                      <div className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-rose-500 flex-shrink-0 mt-0.5" />
                        <RichText as="span" html={row.traditional} />
                      </div>
                    </td>
                    <td className="p-4 sm:p-5 text-slate-800 bg-purple-50/25 border-l border-purple-100 font-medium">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <RichText as="span" html={row.limra} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
