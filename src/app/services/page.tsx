'use client';

import React, { useState } from 'react';
import Link from 'next/link';
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
import ContactCta from '@/components/ContactCta';
import TechStackTicker from '@/components/TechStackTicker';
import ComparisonMatrix from '@/components/ComparisonMatrix';
import Testimonials from '@/components/Testimonials';
import CaseStudies from '@/components/CaseStudies';

export default function ServicesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const iconMap: Record<string, any> = {
    Code2,
    TrendingUp,
    Target,
    Palette,
    Smartphone,
    Layers,
    Search
  };

  const serviceFaqs = [
    {
      q: 'Can we hire Limra Digitech for both Web Development and ongoing SEO?',
      a: 'Yes, this is our most effective model. When our team builds your Next.js web application from scratch with code-first technical SEO, your rankings and page speeds compound significantly faster than attempting to optimize legacy sites.'
    },
    {
      q: 'What is the average timeline for enterprise web development projects?',
      a: 'Standard enterprise builds are delivered in agile 2 to 6 week sprints. We provide staging preview links after every sprint so your team has complete visibility.'
    },
    {
      q: 'Do you work with startups, D2C brands, or only large enterprises?',
      a: 'We partner with ambitious organizations across all stages — from funded seed startups needing scalable tech foundations to high-ticket B2B enterprises.'
    },
    {
      q: 'What technologies are included in your core stack?',
      a: 'We specialize in Next.js 15 (App Router), React 19, TypeScript, TailwindCSS, Supabase (PostgreSQL), Node.js, Vercel Serverless Edge, and GA4 tracking pipelines.'
    },
  ];

  return (
    <div className="bg-[#f8fafc] text-slate-700 min-h-screen">
      
      {/* 1. Header Hero */}
      <section className="py-20 lg:py-24 bg-white cyber-grid relative overflow-hidden border-b border-slate-200">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-purple-200/50 via-indigo-100/40 to-transparent rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 text-center space-y-4 relative z-10">
          <span className="text-xs uppercase font-bold tracking-widest text-purple-700 bg-purple-50 border border-purple-200 px-4 py-1.5 rounded-full inline-block">
            CAPABILITY CATALOGUE
          </span>
          <h1 className="text-2xl sm:text-4xl lg:text-[44px] font-bold text-slate-900 tracking-tight max-w-5xl mx-auto leading-tight">
            End-To-End Tech &amp; Search Engine Solutions
          </h1>
          <p className="text-slate-600 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
            From modern Next.js serverless web platforms to aggressive page-1 SEO dominance, we provide the full stack needed to scale in today’s digital economy.
          </p>
        </div>
      </section>

      {/* 2. Ticker */}
      <TechStackTicker />

      {/* 3. Services Grid Catalog */}
      <section className="py-20 lg:py-24 bg-[#f8fafc] border-b border-slate-200">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase font-mono font-bold text-purple-700 bg-purple-50 border border-purple-200 px-3 py-1 rounded-full">
              CORE SPECIALIZATIONS
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-slate-900 tracking-tight">
              Six Pillars Of High-Performance Engineering
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Explore our core capabilities architected to dominate search rankings and deliver sub-second user experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((svc) => {
              const Icon = iconMap[svc.icon] || Code2;
              return (
                <div 
                  key={svc.id}
                  className="bg-white rounded-3xl p-8 border border-slate-200 hover:border-purple-300 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5"
                >
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-purple-50 border border-purple-200 text-purple-600 group-hover:bg-purple-600 group-hover:text-white flex items-center justify-center transition-colors duration-300 mb-6 shadow-xs">
                      <Icon className="w-7 h-7" />
                    </div>

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
              SLA GUARANTEES
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Enterprise Engineering Performance Benchmarks
            </h2>
            <p className="text-slate-600 text-sm">
              We eliminate ambiguity with strict, measurable engineering benchmarks.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 text-center">
              <Zap className="w-6 h-6 text-amber-500 mx-auto mb-2" />
              <div className="text-xs font-mono text-slate-500 uppercase font-semibold">Core Web Vitals</div>
              <div className="text-3xl font-black text-emerald-600 mt-1">100 / 100</div>
              <p className="text-xs text-slate-500 mt-2">Zero layout shift &amp; instant edge hydration</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 text-center">
              <Clock className="w-6 h-6 text-purple-600 mx-auto mb-2" />
              <div className="text-xs font-mono text-slate-500 uppercase font-semibold">Edge TTFB</div>
              <div className="text-3xl font-black text-purple-700 mt-1">&lt; 0.3s</div>
              <p className="text-xs text-slate-500 mt-2">Global edge routing via serverless nodes</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 text-center">
              <TrendingUp className="w-6 h-6 text-emerald-600 mx-auto mb-2" />
              <div className="text-xs font-mono text-slate-500 uppercase font-semibold">SERP Index Velocity</div>
              <div className="text-3xl font-black text-indigo-700 mt-1">&lt; 4 Mins</div>
              <p className="text-xs text-slate-500 mt-2">Googlebot instant crawl via dynamic sitemaps</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 text-center">
              <ShieldCheck className="w-6 h-6 text-cyan-600 mx-auto mb-2" />
              <div className="text-xs font-mono text-slate-500 uppercase font-semibold">Security &amp; Uptime</div>
              <div className="text-3xl font-black text-slate-900 mt-1">99.98%</div>
              <p className="text-xs text-slate-500 mt-2">Sanitized PostgreSQL queries &amp; DDoS shielding</p>
            </div>
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
              HOW WE WORK
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              4-Step Agile Delivery Sprint Model
            </h2>
            <p className="text-slate-600 text-sm">
              From audit to production launch, our process guarantees momentum without bureaucratic lag.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: '01', title: 'Technical Audit & Blueprint', desc: 'Mapping keyword intent gaps, Core Web Vitals bottlenecks, and data flows.', time: 'Day 1-3' },
              { num: '02', title: 'Full-Stack Architecture', desc: 'Designing high-converting Figma flows, TypeScript models, and Supabase tables.', time: 'Week 1' },
              { num: '03', title: 'Sprint Build & SEO Graphs', desc: 'Writing clean Next.js code, structuring JSON-LD schema, and edge-caching rules.', time: 'Week 2-4' },
              { num: '04', title: 'Production Edge Launch', desc: 'Deploying to serverless edge nodes, verifying GA4 goals, and tracking SERP rank.', time: 'Launch' },
            ].map((step, idx) => (
              <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-200 hover:border-purple-300 transition-all flex flex-col justify-between shadow-xs">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-purple-600 font-mono">{step.num}</span>
                    <span className="text-[10px] font-mono font-bold text-purple-700 bg-purple-100 px-2.5 py-0.5 rounded-full border border-purple-200">{step.time}</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">{step.desc}</p>
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
                <span>Zero Technical Debt Guarantee</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                Every Line Of Code Is Built For Scale &amp; Speed
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We write modular, type-safe TypeScript, sanitized Supabase PostgreSQL endpoints, and automated CI/CD builds so your company never has to rewrite its software in 2 years.
              </p>
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
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Common Questions About Our Services
            </h2>
            <p className="text-sm text-slate-600">
              Everything you need to know about partnering with LIMRA Digitech.
            </p>
          </div>

          <div className="space-y-3.5">
            {serviceFaqs.map((faq, index) => (
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
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 animate-in fade-in duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Contact Consultation CTA */}
      <ContactCta />

    </div>
  );
}
