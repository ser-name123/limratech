'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Search,
  MapPin,
  Link2,
  CheckCircle2,
  ArrowRight,
  Target,
  FileText,
  LineChart
} from 'lucide-react';
import { defaultHomeSections } from '@/data/defaultCmsConfig';
import RichText from '@/components/RichText';

const seoIcons = [Search, Target, Link2, MapPin, FileText, LineChart];

export default function SeoPillarsGrid() {
  const [cfg, setCfg] = useState(defaultHomeSections.seoPillars);
  useEffect(() => {
    fetch('/api/admin')
      .then((r) => r.json())
      .then((d) => {
        if (d?.cms?.homeSections?.seoPillars) setCfg(d.cms.homeSections.seoPillars);
      })
      .catch(() => {});
  }, []);

  const seoModules = cfg.items.map((it, i) => ({ icon: seoIcons[i % seoIcons.length], ...it }));

  return (
    <section className="py-24 bg-slate-50 relative border-b border-slate-200">
      <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs uppercase font-medium tracking-widest text-purple-700 bg-purple-50 border border-purple-200 px-3.5 py-1 rounded-full inline-block">
              {cfg.eyebrow}
            </span>
            <h2 className="text-xl sm:text-3xl lg:text-[34px] font-medium text-slate-900 tracking-tight leading-snug">
              {cfg.heading}
            </h2>
            <RichText className="text-sm text-slate-600 font-normal leading-relaxed" html={cfg.description} />
          </div>

          <Link
            href="/digital-marketing-agency-india"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-700 hover:text-purple-900 transition-colors"
          >
            <span>Explore Full SEO Service</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {seoModules.map((item, i) => {
            const Icon = item.icon;
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
                    <span className="text-[10px] font-mono text-purple-700 bg-purple-50 px-2 py-0.5 rounded border border-purple-200">
                      {item.metrics}
                    </span>
                  </div>

                  <h3 className="text-base font-semibold text-slate-900 group-hover:text-purple-700 transition-colors mb-2">
                    {item.title}
                  </h3>

                  <RichText className="text-xs text-slate-600 leading-relaxed font-normal" html={item.desc} />
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span className="flex items-center gap-1 text-[11px] text-emerald-600 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5" /> High-Impact Factor
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
