import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Code2, TrendingUp, Target, Palette, Smartphone, Layers, Search, Sparkles } from 'lucide-react';
import { servicesData } from '@/data/mockData';
import ContactCta from '@/components/ContactCta';
import TechStackTicker from '@/components/TechStackTicker';
import ComparisonMatrix from '@/components/ComparisonMatrix';

export const metadata: Metadata = {
  title: 'All Solutions & Architecture | LIMRA Digitech',
  description: 'Explore our full suite of technical SEO, Next.js web development, high-ROI lead funnels, and enterprise cloud applications.',
};

export default function ServicesPage() {
  const iconMap: Record<string, any> = {
    Code2,
    TrendingUp,
    Target,
    Palette,
    Smartphone,
    Layers,
  };

  return (
    <div className="bg-[#f8fafc] text-slate-700 min-h-screen">
      {/* Header */}
      <section className="py-20 lg:py-24 bg-white cyber-grid relative overflow-hidden border-b border-slate-200">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-purple-200/50 via-indigo-100/40 to-transparent rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 text-center space-y-4 relative z-10">
          <span className="text-xs uppercase font-medium tracking-widest text-purple-700 bg-purple-50 border border-purple-200 px-4 py-1.5 rounded-full inline-block">
            CAPABILITY CATALOGUE
          </span>
          <h1 className="text-2xl sm:text-4xl lg:text-[42px] font-medium text-slate-900 tracking-tight max-w-5xl mx-auto leading-tight">
            End-To-End Tech &amp; Search Engine Solutions
          </h1>
          <p className="text-slate-600 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
            From modern Next.js serverless web platforms to aggressive page-1 SEO dominance, we provide the full stack needed to scale in today’s digital economy.
          </p>
        </div>
      </section>

      <TechStackTicker />

      {/* Services Grid */}
      <section className="py-24 bg-[#f8fafc] border-b border-slate-200">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((svc) => {
              const Icon = iconMap[svc.icon] || Code2;
              return (
                <div 
                  key={svc.id}
                  className="bg-white rounded-3xl p-8 border border-slate-200 hover:border-purple-300 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5"
                >
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-purple-50 border border-purple-200 text-purple-600 group-hover:bg-[#911cf3] group-hover:text-white flex items-center justify-center transition-colors duration-300 mb-6 shadow-sm">
                      <Icon className="w-7 h-7" />
                    </div>

                    <h2 className="text-lg sm:text-xl font-medium text-slate-900 group-hover:text-purple-700 transition-colors mb-3">
                      {svc.title}
                    </h2>

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

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-6 pt-4 border-t border-slate-100">
                      {svc.tech_stack.map((t, ti) => (
                        <span key={ti} className="text-[11px] font-mono bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md border border-slate-200">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100">
                    <Link 
                      href={`/${svc.slug}`}
                      className="inline-flex items-center gap-2 text-xs font-bold text-purple-700 hover:text-purple-900 transition-colors"
                    >
                      <span>Explore Technical Architecture</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <ComparisonMatrix />
      <ContactCta />
    </div>
  );
}
