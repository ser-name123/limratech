'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Compass, Cpu, Rocket, LineChart, Sparkles } from 'lucide-react';
import { defaultHomeSections } from '@/data/defaultCmsConfig';
import RichText from '@/components/RichText';

const stepStyles = [
  { icon: Compass, color: 'text-purple-400', bg: 'bg-purple-950/60', border: 'border-purple-500/30' },
  { icon: Cpu, color: 'text-cyan-400', bg: 'bg-cyan-950/60', border: 'border-cyan-500/30' },
  { icon: Rocket, color: 'text-pink-400', bg: 'bg-pink-950/60', border: 'border-pink-500/30' },
  { icon: LineChart, color: 'text-emerald-400', bg: 'bg-emerald-950/60', border: 'border-emerald-500/30' },
];

export default function AgileProcessFlow() {
  const [cfg, setCfg] = useState(defaultHomeSections.process);
  useEffect(() => {
    fetch('/api/admin')
      .then((r) => r.json())
      .then((d) => {
        if (d?.cms?.homeSections?.process) setCfg(d.cms.homeSections.process);
      })
      .catch(() => {});
  }, []);

  const steps = cfg.steps.map((st, i) => ({
    ...stepStyles[i % stepStyles.length],
    num: `0${i + 1}`,
    ...st,
  }));

  return (
    <section className="py-24 bg-slate-50 relative border-b border-slate-200">
      <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-xs font-medium">
            <Sparkles className="w-3.5 h-3.5 text-purple-600" />
            <span>{cfg.eyebrow}</span>
          </div>
          <h2 className="text-xl sm:text-3xl lg:text-[34px] font-medium text-slate-900 tracking-tight leading-snug">
            {cfg.heading}
          </h2>
          <RichText className="text-sm text-slate-600 font-normal leading-relaxed" html={cfg.description} />
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

                  <RichText className="text-xs text-slate-600 leading-relaxed font-normal mb-4" html={st.desc} />

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
