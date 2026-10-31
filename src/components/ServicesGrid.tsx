'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Search, 
  Code2, 
  TrendingUp, 
  Layers, 
  Smartphone, 
  Palette, 
  ArrowRight, 
  CheckCircle2, 
  Zap,
  Sparkles
} from 'lucide-react';
import { servicesData } from '@/data/mockData';

export default function ServicesGrid() {
  const [services, setServices] = React.useState(servicesData);

  React.useEffect(() => {
    fetch('/api/admin')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data?.cms?.services) && data.cms.services.length > 0) {
          setServices(data.cms.services);
        }
      })
      .catch(() => {});
  }, []);

  const iconList = [
    { icon: Search, color: 'text-purple-600', bg: 'bg-purple-50', border: 'border-purple-200' },
    { icon: Code2, color: 'text-cyan-600', bg: 'bg-cyan-50', border: 'border-cyan-200' },
    { icon: TrendingUp, color: 'text-pink-600', bg: 'bg-pink-50', border: 'border-pink-200' },
    { icon: Layers, color: 'text-emerald-600', bg: 'bg-emerald-50', border: 'border-emerald-200' },
    { icon: Smartphone, color: 'text-amber-600', bg: 'bg-amber-50', border: 'border-amber-200' },
    { icon: Palette, color: 'text-indigo-600', bg: 'bg-indigo-50', border: 'border-indigo-200' },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden border-b border-slate-200">
      {/* Background subtle glow effects */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-purple-100/60 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-cyan-100/60 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-xs font-medium uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-purple-600" />
            <span>CORE ARCHITECTURAL SUITE</span>
          </div>

          <h2 className="text-xl sm:text-3xl lg:text-[34px] font-medium text-slate-900 tracking-tight leading-snug">
            Engineered For Market Dominance &amp; Peak Performance
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            We don’t build generic template websites or run blind ad campaigns. Every solution is custom-architected with precision code, technical SEO, and conversion science.
          </p>
        </div>

        {/* 6 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((svc, i) => {
            const style = iconList[i] || iconList[0];
            const Icon = style.icon;

            return (
              <div
                key={svc.id}
                className="group relative bg-[#f8fafc] border border-slate-200 hover:border-purple-300 hover:bg-white rounded-3xl p-8 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 hover:shadow-xl hover:shadow-slate-200/80"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-14 h-14 rounded-2xl ${style.bg} ${style.border} border flex items-center justify-center ${style.color} group-hover:scale-110 transition-transform shadow-sm`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-xs font-mono text-slate-400 font-medium group-hover:text-purple-600 transition-colors">
                      // 0{i + 1}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-medium text-slate-900 group-hover:text-purple-700 transition-colors mb-3">
                    {svc.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {svc.short_description}
                  </p>

                  <div className="space-y-2.5 mb-6">
                    {svc.features.map((feat, fi) => (
                      <div key={fi} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-6 pt-4 border-t border-slate-200">
                    {svc.tech_stack.map((t, ti) => (
                      <span key={ti} className="text-[11px] font-mono text-slate-700 bg-white border border-slate-200 px-2.5 py-1 rounded-md">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200">
                  <Link
                    href={`/${svc.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-bold text-purple-700 hover:text-purple-900 transition-colors"
                  >
                    <span>Inspect Technical Architecture</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-14">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-bold text-purple-700 hover:text-purple-900 transition-colors"
          >
            <span>Explore All 12+ Specialized Services &amp; Capabilities</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
