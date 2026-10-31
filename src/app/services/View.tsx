'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowRight, 
  CheckCircle2, 
  Code2, 
  TrendingUp, 
  Target, 
  Palette, 
  Smartphone, 
  Layers, 
  Search, 
  Sparkles,
  ShieldCheck,
  Zap,
  ChevronDown,
  Clock
} from 'lucide-react';
import { servicesData } from '@/data/mockData';
import { content as servicesContent } from '@/data/pages/services';
import ContactCta from '@/components/ContactCta';
import TechStackTicker from '@/components/TechStackTicker';
import ComparisonMatrix from '@/components/ComparisonMatrix';
import Testimonials from '@/components/Testimonials';
import CaseStudies from '@/components/CaseStudies';
import SeoAuthoritySection from '@/components/SeoAuthoritySection';
import RichText from '@/components/RichText';

const slaIcons = [Zap, Clock, TrendingUp, ShieldCheck];
const slaValueColors = ['text-emerald-600', 'text-purple-700', 'text-indigo-700', 'text-slate-900'];
const slaIconColors = ['text-amber-500', 'text-purple-600', 'text-emerald-600', 'text-cyan-600'];

export default function ServicesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [pc, setPc] = useState(servicesContent);

  const iconMap: Record<string, any> = {
    Code2,
    TrendingUp,
    Target,
    Palette,
    Smartphone,
    Layers,
    Search
  };

  React.useEffect(() => {
    fetch('/api/admin')
      .then((res) => res.json())
      .then((data) => {
        if (data?.cms?.pageSections?.services) {
          setPc(data.cms.pageSections.services);
        }
      })
      .catch(() => {});
  }, []);

  const serviceFaqs = pc.faq.items || [];

  return (
    <div className="bg-[#f8fafc] text-slate-700 min-h-screen">
      
      {/* 1. Header Hero */}
      <section className="py-20 lg:py-24 bg-white cyber-grid relative overflow-hidden border-b border-slate-200">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-purple-200/50 via-indigo-100/40 to-transparent rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 text-center space-y-4 relative z-10">
          <span className="text-xs uppercase font-bold tracking-widest text-purple-700 bg-purple-50 border border-purple-200 px-4 py-1.5 rounded-full inline-block">
            {pc.hero.eyebrow}
          </span>
          <h1 className="text-2xl sm:text-4xl lg:text-[44px] font-bold text-slate-900 tracking-tight max-w-5xl mx-auto leading-tight">
            {pc.hero.heading}
          </h1>
          <RichText className="text-slate-600 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed" html={pc.hero.description} />
        </div>
      </section>

      {/* 2. Ticker */}
      <TechStackTicker />

      {/* 3. Services Grid Catalog */}
      <section className="py-20 lg:py-24 bg-[#f8fafc] border-b border-slate-200">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase font-mono font-bold text-purple-700 bg-purple-50 border border-purple-200 px-3 py-1 rounded-full">
              {pc.grid.eyebrow}
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-slate-900 tracking-tight">
              {pc.grid.heading}
            </h2>
            <RichText className="text-slate-600 text-sm sm:text-base" html={pc.grid.description} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((svc) => {
              const Icon = iconMap[svc.icon] || Code2;
              return (
                <div 
                  key={svc.id}
                  className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 hover:border-purple-300 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5"
                >
                  <div>
                    {/* Service Feature Image */}
                    {svc.image && (
                      <div className="relative h-48 sm:h-52 w-full rounded-2xl overflow-hidden mb-6 bg-slate-900 border border-slate-100 shadow-sm">
                        <Image
                          src={svc.image}
                          alt={svc.imageAlt || `${svc.title} - LIMRA Digitech India`}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 420px"
                          className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                        <div className="absolute top-3 left-3 w-10 h-10 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 text-purple-700 flex items-center justify-center shadow-md">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-white">
                          <span className="bg-purple-900/90 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-purple-400/40 font-semibold">
                            {svc.tech_stack[0]}
                          </span>
                          <span className="text-emerald-400 font-bold bg-slate-900/80 px-2 py-0.5 rounded backdrop-blur-md">
                            100% SLA
                          </span>
                        </div>
                      </div>
                    )}

                    {!svc.image && (
                      <div className="w-14 h-14 rounded-2xl bg-purple-50 border border-purple-200 text-purple-600 group-hover:bg-purple-600 group-hover:text-white flex items-center justify-center transition-colors duration-300 mb-6 shadow-xs">
                        <Icon className="w-7 h-7" />
                      </div>
                    )}

                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-purple-700 transition-colors">
                      {svc.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6 font-normal">
                      {svc.short_description}
                    </p>

                    <div className="space-y-2 mb-6">
                      {svc.features.slice(0, 3).map((f, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                    <Link 
                      href={`/${svc.slug}`}
                      className="inline-flex items-center gap-2 text-xs font-bold text-purple-700 hover:text-purple-900 group-hover:translate-x-1 transition-all"
                    >
                      <span>Explore Technical Specs</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Service SLA & Performance Matrix */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs uppercase font-mono font-bold text-purple-700 bg-purple-50 border border-purple-200 px-3 py-1 rounded-full">
              {pc.sla.eyebrow}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              {pc.sla.heading}
            </h2>
            <RichText className="text-slate-600 text-sm" html={pc.sla.description} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {(pc.sla.items || []).map((card: any, idx: number) => {
              const Icon = slaIcons[idx % slaIcons.length];
              return (
                <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-200 text-center">
                  <Icon className={`w-6 h-6 ${slaIconColors[idx % slaIconColors.length]} mx-auto mb-2`} />
                  <div className="text-xs font-mono text-slate-500 uppercase font-semibold">{card.title}</div>
                  <div className={`text-3xl font-black ${slaValueColors[idx % slaValueColors.length]} mt-1`}>{card.value}</div>
                  <RichText className="text-xs text-slate-500 mt-2" html={card.sub} />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Comparison Matrix */}
      <ComparisonMatrix />

      {/* 6. Agile Sprint Process */}
      <section className="py-20 lg:py-24 bg-white border-b border-slate-200">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs uppercase font-mono font-bold text-purple-700 bg-purple-50 border border-purple-200 px-3 py-1 rounded-full">
              {pc.process.eyebrow}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              {pc.process.heading}
            </h2>
            <RichText className="text-slate-600 text-sm" html={pc.process.description} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {(pc.process.items || []).map((step: any, idx: number) => (
              <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-200 hover:border-purple-300 transition-all flex flex-col justify-between shadow-xs">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-purple-600 font-mono">{step.num}</span>
                    <span className="text-[10px] font-mono font-bold text-purple-700 bg-purple-100 px-2.5 py-0.5 rounded-full border border-purple-200">{step.time}</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">{step.title}</h3>
                  <RichText className="text-xs text-slate-600 leading-relaxed font-normal" html={step.desc} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Industry Security & Compliance Banner */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="bg-white border border-purple-200 rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-purple-700 uppercase">
                <ShieldCheck className="w-4 h-4 text-purple-600" />
                <span>{pc.securityBanner.eyebrow}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                {pc.securityBanner.heading}
              </h3>
              <RichText className="text-xs sm:text-sm text-slate-600 leading-relaxed" html={pc.securityBanner.description} />
            </div>
            <Link
              href="/contact-us"
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl font-bold text-xs flex items-center gap-2 transition-all shadow-md shadow-purple-200 flex-shrink-0"
            >
              <span>Speak With Our Lead Architect</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 8. Case Studies */}
      <CaseStudies />

      {/* 9. Testimonials */}
      <Testimonials />

      {/* 10. Interactive FAQ Accordion */}
      <section className="py-20 lg:py-24 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-12 space-y-3">
            <span className="text-xs uppercase font-mono font-bold text-purple-700 bg-purple-50 border border-purple-200 px-3 py-1 rounded-full">
              {pc.faq.eyebrow}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              {pc.faq.heading}
            </h2>
            <p className="text-sm text-slate-600">
              {pc.faq.description}
            </p>
          </div>

          <div className="space-y-3.5">
            {serviceFaqs.map((faq: any, index: number) => (
              <div
                key={index}
                className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden transition-all shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 text-sm sm:text-base hover:text-purple-700 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-purple-600 flex-shrink-0 transition-transform duration-300 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <RichText className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 animate-in fade-in duration-200" html={faq.a} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Advanced SEO, JSON-LD Schema.org & Keyword Clusters */}
      <SeoAuthoritySection
        pageTitle="All Digital, Web, SEO, Mobile App & Software Services"
        pageSlug="/services"
        pageType="Hub"
        parentLabel="Home"
        parentHref="/"
        description="Explore all 6 core service pillars and 36+ specialized digital solutions offered by LIMRA Digitech across India and global markets."
        focusKeyword="Digital Marketing and Website Development Services India"
        subOfferings={servicesData.map((s) => s.title)}
        faqs={serviceFaqs as { q: string; a: string }[]}
      />

      {/* 12. Contact Consultation CTA */}
      <ContactCta />

    </div>
  );
}
