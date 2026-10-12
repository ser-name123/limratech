'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ExternalLink, TrendingUp } from 'lucide-react';
import { caseStudiesData } from '@/data/mockData';

export default function CaseStudies() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredItems = activeFilter === 'all'
    ? caseStudiesData
    : caseStudiesData.filter(item => item.category.toLowerCase().includes(activeFilter.toLowerCase()));

  return (
    <section className="py-24 bg-white relative overflow-hidden border-b border-slate-200">
      <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs uppercase font-medium tracking-widest text-purple-700 bg-purple-50 border border-purple-200 px-3.5 py-1 rounded-full inline-block">
              CASE HISTORIES &amp; PROOF
            </span>
            <h2 className="text-xl sm:text-3xl lg:text-[34px] font-medium text-slate-900 tracking-tight leading-snug">
              Real Performance. Measurable Revenue Growth.
            </h2>
            <p className="text-sm text-slate-600 font-normal leading-relaxed">
              Explore how our combination of technical SEO and Next.js engineering transforms underperforming brands into organic market leaders.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {['all', 'marketing', 'analysis'].map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setActiveFilter(f)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold uppercase transition-all border ${
                  activeFilter === f
                    ? 'bg-purple-600 border-purple-600 text-white shadow-md shadow-purple-200'
                    : 'bg-white border-slate-200 text-slate-600 hover:text-purple-700 hover:border-purple-300 shadow-sm'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* 3 Case Study Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {filteredItems.map((study) => (
            <Link
              key={study.id}
              href="/portfolio"
              className="bg-white rounded-3xl overflow-hidden border border-slate-200 hover:border-purple-300 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group hover:-translate-y-1.5"
            >
              {/* Graphic Banner - Clean, Crisp Image without text stamped over it */}
              <div className="relative h-56 sm:h-60 w-full overflow-hidden bg-slate-100">
                <img 
                  src={study.image_url} 
                  alt={study.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Floating Top Tag & Icon */}
                <div className="absolute top-4 inset-x-4 flex justify-between items-center pointer-events-none">
                  <span className="bg-white/95 backdrop-blur-md border border-slate-200/80 px-3 py-1 rounded-full text-[11px] font-mono text-purple-700 uppercase tracking-wider font-bold shadow-md">
                    {study.tag}
                  </span>
                  <span className="w-8 h-8 rounded-full bg-white/95 backdrop-blur-md flex items-center justify-center text-slate-700 group-hover:bg-purple-600 group-hover:text-white transition-colors shadow-md">
                    <ExternalLink className="w-4 h-4" />
                  </span>
                </div>
              </div>

              {/* Card Body - Crisp, high-contrast, structured layout */}
              <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow space-y-4">
                <div className="space-y-2">
                  <div className="text-xs font-mono font-semibold uppercase tracking-wider text-purple-700">
                    {study.client}
                  </div>
                  
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-purple-700 transition-colors leading-snug line-clamp-2">
                    {study.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed font-normal pt-1">
                    {study.description}
                  </p>
                </div>

                <div className="space-y-4 pt-2">
                  {study.results && (
                    <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold flex items-center gap-2.5 shadow-xs">
                      <TrendingUp className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>{study.results}</span>
                    </div>
                  )}

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-700 group-hover:text-purple-900 transition-colors">
                      <span>Read Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">Verified ROI</span>
                  </div>
                </div>

              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-slate-200 hover:border-purple-300 text-slate-800 font-semibold text-xs hover:bg-purple-50 shadow-sm transition-all"
          >
            <span>Explore All Client Blueprints</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </section>
  );
}
