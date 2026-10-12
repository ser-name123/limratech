'use client';

import React from 'react';
import { CheckCircle2, XCircle, Zap, Sparkles } from 'lucide-react';

export default function ComparisonMatrix() {
  const rows = [
    {
      feature: 'PageSpeed & Core Web Vitals',
      traditional: '3 to 6+ seconds, bloated PHP plugins & slow mobile scores (40-60/100)',
      limra: '0.3s sub-second paint, perfect 100/100 Google Lighthouse score on edge CDN',
    },
    {
      feature: 'SEO Engineering Methodology',
      traditional: 'Basic meta tags, keyword stuffing & generic articles that never rank',
      limra: 'Semantic topical clustering, Schema JSON-LD graphs & algorithmic SEO immunity',
    },
    {
      feature: 'Tech Stack & Architecture',
      traditional: 'Monolithic legacy WordPress on slow shared cPanel hosting',
      limra: 'Next.js 15, TypeScript & serverless Supabase PostgreSQL edge cloud',
    },
    {
      feature: 'Conversion & Lead Capture',
      traditional: 'Boring static forms with 80% abandonment rate and no CRM connection',
      limra: 'Multi-step psychological funnels with instant WhatsApp/CRM sync',
    },
    {
      feature: 'Client Communication & Reporting',
      traditional: 'Bi-monthly confusing PDFs with vanity impressions and zero ROI visibility',
      limra: 'Real-time live attribution dashboard + Direct technical Slack/WhatsApp channel',
    },
  ];

  return (
    <section className="py-24 bg-white relative border-b border-slate-200 overflow-hidden">
      <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-xs font-medium">
            <Sparkles className="w-3.5 h-3.5 text-purple-600" />
            <span>THE PERFORMANCE DIVIDE</span>
          </div>
          <h2 className="text-xl sm:text-3xl lg:text-[34px] font-medium text-slate-900 tracking-tight leading-snug">
            Legacy Agencies vs. LIMRA Digitech Engine
          </h2>
          <p className="text-sm text-slate-600 font-normal leading-relaxed">
            See why ambitious founders and enterprises switch their web and SEO infrastructure to our engineering.
          </p>
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
                        <span>{row.traditional}</span>
                      </div>
                    </td>
                    <td className="p-4 sm:p-5 text-slate-800 bg-purple-50/25 border-l border-purple-100 font-medium">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{row.limra}</span>
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
