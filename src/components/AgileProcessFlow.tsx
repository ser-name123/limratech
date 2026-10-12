'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Compass, Cpu, Rocket, LineChart, Sparkles } from 'lucide-react';

export default function AgileProcessFlow() {
  const steps = [
    {
      num: '01',
      icon: Compass,
      title: 'Discovery & Algorithmic Audit',
      desc: 'We analyze your search competitors, backlink gaps, and technical bottlenecks to engineer a data-backed roadmap.',
      points: ['Core Web Vitals scan', 'Topical keyword mapping', 'Competitor backlink audit'],
      color: 'text-purple-400',
      bg: 'bg-purple-950/60',
      border: 'border-purple-500/30'
    },
    {
      num: '02',
      icon: Cpu,
      title: 'Architecture & UI/UX Design',
      desc: 'Our engineers design pixel-perfect Figma UI/UX prototypes and model your Supabase database schema for high scalability.',
      points: ['Figma design system', 'Database schema modeling', 'Conversion journey mapping'],
      color: 'text-cyan-400',
      bg: 'bg-cyan-950/60',
      border: 'border-cyan-500/30'
    },
    {
      num: '03',
      icon: Rocket,
      title: 'Next.js Sprint & Schema Coding',
      desc: 'Building with clean TypeScript, implementing structured JSON-LD schema graphs, and integrating serverless API endpoints.',
      points: ['Sub-second page speed', 'Schema entity integration', 'Strict TypeScript code'],
      color: 'text-pink-400',
      bg: 'bg-pink-950/60',
      border: 'border-pink-500/30'
    },
    {
      num: '04',
      icon: LineChart,
      title: 'Edge Deployment & Continuous SEO',
      desc: 'We deploy to global edge CDN, trigger instant Google indexing, and optimize search rankings and lead conversion weekly.',
      points: ['Zero-downtime launch', 'Instant Google indexing', 'Weekly rank tracking & CRO'],
      color: 'text-emerald-400',
      bg: 'bg-emerald-950/60',
      border: 'border-emerald-500/30'
    },
  ];

  return (
    <section className="py-24 bg-slate-50 relative border-b border-slate-200">
      <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-xs font-medium">
            <Sparkles className="w-3.5 h-3.5 text-purple-600" />
            <span>STRUCTURED METHODOLOGY</span>
          </div>
          <h2 className="text-xl sm:text-3xl lg:text-[34px] font-medium text-slate-900 tracking-tight leading-snug">
            Our 4-Step Agile Delivery Engine
          </h2>
          <p className="text-sm text-slate-600 font-normal leading-relaxed">
            From technical audit to sub-second production launch, our process ensures every milestone is engineered for maximum search visibility and ROI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((st, i) => {
            const Icon = st.icon;
            return (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-purple-300 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 hover:shadow-lg shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-200 text-purple-600 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xl font-bold font-mono text-slate-300 group-hover:text-purple-600 transition-colors">
                      {st.num}
                    </span>
                  </div>

                  <h3 className="text-base font-semibold text-slate-900 group-hover:text-purple-700 transition-colors mb-2">
                    {st.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed font-normal mb-4">
                    {st.desc}
                  </p>

                  <ul className="space-y-1.5 pt-2 border-t border-slate-100">
                    {st.points.map((pt, pi) => (
                      <li key={pi} className="text-[11px] text-slate-600 flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-purple-600" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 text-[11px] font-mono text-slate-400">
                  Sprint Milestone // 0{i + 1}
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/contact-us"
            className="inline-flex items-center gap-2 text-xs font-semibold text-purple-700 hover:text-purple-900 transition-colors"
          >
            <span>Learn More About Our Sprint Cycles</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </section>
  );
}
