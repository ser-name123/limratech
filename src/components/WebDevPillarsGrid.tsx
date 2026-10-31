'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Code2,
  Layers,
  Smartphone,
  ShoppingBag,
  ShieldCheck,
  Zap,
  ArrowRight,
  Database
} from 'lucide-react';
import { defaultHomeSections } from '@/data/defaultCmsConfig';
import RichText from '@/components/RichText';

const devIcons = [Code2, Database, ShoppingBag, Layers, Smartphone, ShieldCheck];

export default function WebDevPillarsGrid() {
  const [cfg, setCfg] = useState(defaultHomeSections.webDevPillars);
  useEffect(() => {
    fetch('/api/admin')
      .then((r) => r.json())
      .then((d) => {
        if (d?.cms?.homeSections?.webDevPillars) setCfg(d.cms.homeSections.webDevPillars);
      })
      .catch(() => {});
  }, []);

  const devModules = cfg.items.map((it, i) => ({ icon: devIcons[i % devIcons.length], ...it }));

  return (
    <section className="py-24 bg-white relative border-b border-slate-200">
      <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs uppercase font-medium tracking-widest text-cyan-700 bg-cyan-50 border border-cyan-200 px-3.5 py-1 rounded-full inline-block">
              {cfg.eyebrow}
            </span>
            <h2 className="text-xl sm:text-3xl lg:text-[34px] font-medium text-slate-900 tracking-tight leading-snug">
              {cfg.heading}
            </h2>
            <RichText className="text-sm text-slate-600 font-normal leading-relaxed" html={cfg.description} />
          </div>

          <Link
            href="/website-development-services"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-700 hover:text-cyan-900 transition-colors"
          >
            <span>Explore Web Development</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {devModules.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="bg-slate-50/70 rounded-2xl p-6 border border-slate-200 hover:border-cyan-400 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 hover:shadow-lg shadow-sm hover:bg-white"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-cyan-50 border border-cyan-200 text-cyan-600 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono text-cyan-700 bg-cyan-50 px-2 py-0.5 rounded border border-cyan-200">
                      {item.tech}
                    </span>
                  </div>

                  <h3 className="text-base font-semibold text-slate-900 group-hover:text-cyan-700 transition-colors mb-2">
                    {item.title}
                  </h3>

                  <RichText className="text-xs text-slate-600 leading-relaxed font-normal" html={item.desc} />
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span className="flex items-center gap-1 text-[11px] text-cyan-600 font-medium">
                    <Zap className="w-3.5 h-3.5" /> Serverless Edge Ready
                  </span>
                  <span className="font-mono text-[10px] text-slate-400">0{i + 1}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
