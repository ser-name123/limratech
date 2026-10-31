'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Zap, Search, Server, TrendingUp, Sparkles, CheckCircle2, ShieldCheck, Activity } from 'lucide-react';
import { defaultHomeSections } from '@/data/defaultCmsConfig';
import RichText from '@/components/RichText';

const pillarStyles = [
  { icon: Zap, color: 'text-amber-600', bg: 'bg-amber-50', border: 'border-amber-200' },
  { icon: Search, color: 'text-purple-600', bg: 'bg-purple-50', border: 'border-purple-200' },
  { icon: Server, color: 'text-cyan-600', bg: 'bg-cyan-50', border: 'border-cyan-200' },
  { icon: TrendingUp, color: 'text-emerald-600', bg: 'bg-emerald-50', border: 'border-emerald-200' },
];

export default function CorePillarsSection() {
  const [cfg, setCfg] = useState(defaultHomeSections.corePillars);
  useEffect(() => {
    fetch('/api/admin')
      .then((r) => r.json())
      .then((d) => {
        if (d?.cms?.homeSections?.corePillars) setCfg(d.cms.homeSections.corePillars);
      })
      .catch(() => {});
  }, []);

  const pillars = cfg.items.map((it, i) => ({ ...pillarStyles[i % pillarStyles.length], ...it }));

  return (
    <section className="py-20 bg-slate-50 relative border-b border-slate-200">
      <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12">
        
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-xs font-medium">
            <Sparkles className="w-3.5 h-3.5 text-purple-600" />
            <span>{cfg.eyebrow}</span>
          </div>
          <h2 className="text-xl sm:text-3xl lg:text-[34px] font-medium text-slate-900 tracking-tight leading-snug">
            {cfg.heading}
          </h2>
          <RichText className="text-sm text-slate-600 leading-relaxed font-normal" html={cfg.description} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div 
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-purple-300 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 hover:shadow-lg shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-11 h-11 rounded-xl ${p.bg} ${p.border} border flex items-center justify-center ${p.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-medium text-slate-600 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                      {p.tag}
                    </span>
                  </div>

                  <h3 className="text-base font-semibold text-slate-900 group-hover:text-purple-700 transition-colors mb-2">
                    {p.title}
                  </h3>

                  <RichText className="text-xs text-slate-600 leading-relaxed font-normal" html={p.desc} />
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 text-[11px] font-mono text-slate-400">
                  // Standard 0{idx + 1}
                </div>
              </div>
            );
          })}
        </div>

        {/* Visual Lab Showcase Feature Unit */}
        <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-slate-950 group">
          <div className="relative h-72 sm:h-96 w-full overflow-hidden">
            <Image
              src="/images/limra-tech-engineering-lab.jpg"
              alt="LIMRA Digitech Software Engineering and Technical SEO Laboratory - Real-time algorithmic performance analytics"
              fill
              sizes="(max-width: 1200px) 100vw, 1500px"
              className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/40 to-slate-950/20" />

            {/* Top Bar Badges */}
            <div className="absolute top-4 inset-x-4 sm:inset-x-6 flex items-center justify-between pointer-events-none">
              <span className="bg-purple-900/90 text-purple-200 border border-purple-500/50 px-3.5 py-1 rounded-full text-xs font-mono font-semibold backdrop-blur-md shadow-md flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5 text-purple-400 animate-pulse" />
                LIMRA ENGINEERING &amp; SEARCH INTELLIGENCE LAB
              </span>
              <span className="bg-emerald-500/90 text-white font-mono text-[11px] font-bold px-3 py-1 rounded-full shadow-md backdrop-blur-md hidden sm:inline-flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5" />
                Enterprise ISO-Compliant Engineering
              </span>
            </div>

            {/* Bottom Content Area */}
            <div className="absolute bottom-4 sm:bottom-6 inset-x-4 sm:inset-x-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="bg-slate-900/85 backdrop-blur-md border border-slate-700/60 rounded-xl p-3.5 text-white">
                <div className="text-slate-400 font-mono text-[10px] uppercase">Engineered Architecture</div>
                <div className="font-semibold text-slate-100 text-sm mt-0.5">Next.js 15 Serverless Edge</div>
                <div className="text-emerald-400 text-xs font-mono mt-1">0.24s Global TTFB</div>
              </div>

              <div className="bg-slate-900/85 backdrop-blur-md border border-slate-700/60 rounded-xl p-3.5 text-white">
                <div className="text-slate-400 font-mono text-[10px] uppercase">Database Clustering</div>
                <div className="font-semibold text-slate-100 text-sm mt-0.5">PostgreSQL via Supabase</div>
                <div className="text-purple-300 text-xs font-mono mt-1">Row-Level Security &amp; Realtime</div>
              </div>

              <div className="bg-slate-900/85 backdrop-blur-md border border-slate-700/60 rounded-xl p-3.5 text-white">
                <div className="text-slate-400 font-mono text-[10px] uppercase">Search Intelligence</div>
                <div className="font-semibold text-slate-100 text-sm mt-0.5">Semantic Entity Knowledge Graph</div>
                <div className="text-cyan-300 text-xs font-mono mt-1">Google AI Overviews Immune</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
