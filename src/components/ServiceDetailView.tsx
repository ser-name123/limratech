'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  CheckCircle2, 
  Zap, 
  Sparkles, 
  ShieldCheck, 
  Cpu, 
  Layers, 
  Activity, 
  Target, 
  Award, 
  HelpCircle, 
  ChevronDown, 
  Clock, 
  TrendingUp, 
  Database,
  Terminal,
  ExternalLink
} from 'lucide-react';
import { ServiceItem } from '@/types';
import ContactCta from '@/components/ContactCta';
import Testimonials from '@/components/Testimonials';
import TechStackTicker from '@/components/TechStackTicker';
import CaseStudies from '@/components/CaseStudies';

interface ServiceDetailViewProps {
  service: ServiceItem;
  heroTagline: string;
  benefits: { title: string; desc: string }[];
  faqs?: { q: string; a: string }[];
}

export default function ServiceDetailView({
  service,
  heroTagline,
  benefits,
  faqs = [],
}: ServiceDetailViewProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Default deep FAQs if none provided
  const serviceFaqs = faqs.length > 0 ? faqs : [
    {
      q: `What is the delivery timeline for ${service.title}?`,
      a: 'Most sprint engagements are executed within 2 to 6 weeks, beginning with an in-depth architectural audit and ending with edge deployment and verified 100/100 Core Web Vitals.'
    },
    {
      q: 'How does your engineering approach differ from traditional digital agencies?',
      a: 'We build with modern serverless stacks (Next.js 15, TypeScript, Supabase) and code-first technical SEO. We eliminate bloated WordPress themes, slow plugins, and technical debt.'
    },
    {
      q: 'Do you offer post-launch maintenance, SLAs, and rank monitoring?',
      a: 'Yes. Every project includes 24/7 uptime monitoring, automated security patches, real-time SERP rank alerts, and dedicated monthly sprint retainers.'
    },
    {
      q: 'Can we integrate with our existing CRM, APIs, and analytics stack?',
      a: 'Absolutely. We specialize in custom headless integrations with Salesforce, HubSpot, GA4, Supabase, Stripe, and third-party REST/GraphQL endpoints.'
    }
  ];

  const deliverySteps = [
    {
      step: '01',
      title: 'Technical & Algorithmic Audit',
      desc: 'We map data flows, crawl bottlenecks, Core Web Vitals gaps, and commercial intent keywords.',
      tag: 'Day 1 - 3'
    },
    {
      step: '02',
      title: 'Full-Stack Architecture & Prototype',
      desc: 'Creating high-fidelity UI/UX, TypeScript schemas, edge caching rules, and database models.',
      tag: 'Week 1'
    },
    {
      step: '03',
      title: 'Production Build & Optimization',
      desc: 'Writing clean, zero-bloat code, sub-second hydration, JSON-LD schemas, and security hardening.',
      tag: 'Week 2 - 4'
    },
    {
      step: '04',
      title: 'Global Edge Deployment & Scale',
      desc: 'Continuous CI/CD pipeline push to serverless edge nodes, GA4 tracking verification, and rank indexing.',
      tag: 'Launch & Beyond'
    },
  ];

  return (
    <div className="bg-[#f8fafc] min-h-screen text-slate-700">
      
      {/* 1. Hero Banner */}
      <section className="py-20 lg:py-24 bg-white cyber-grid relative overflow-hidden border-b border-slate-200">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-purple-200/50 via-indigo-100/40 to-transparent rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-purple-600" />
            <span>{service.title} • Technical Capability</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-[44px] font-bold text-slate-900 tracking-tight max-w-5xl mx-auto leading-tight">
            {heroTagline}
          </h1>

          <p className="text-slate-600 text-sm sm:text-base max-w-4xl mx-auto leading-relaxed font-normal">
            {service.full_description}
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact-us"
              className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-8 py-4 rounded-xl font-bold text-sm shadow-xl shadow-purple-600/20 flex items-center gap-2 transition-all group"
            >
              <span>Request Custom Proposal For {service.title}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </Link>
            <a
              href="#delivery-process"
              className="px-6 py-4 rounded-xl bg-white border border-slate-200 text-slate-700 font-semibold text-sm hover:bg-slate-50 transition-colors shadow-sm"
            >
              <span>Review Delivery Process</span>
            </a>
          </div>
        </div>
      </section>

      {/* 2. Live Tech Ticker */}
      <TechStackTicker />

      {/* 3. Core Engineering & Architectural Features */}
      <section className="py-20 lg:py-24 bg-white relative border-b border-slate-200">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase font-bold text-purple-700 font-mono tracking-wider bg-purple-50 px-3 py-1 rounded-full border border-purple-200">
                ARCHITECTURAL SUPERIORITY
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-slate-900 tracking-tight">
                How Our Engineering Eliminates Industry Bottlenecks
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                {service.short_description}
              </p>

              <div className="space-y-3 pt-2">
                {service.features.map((f, i) => (
                  <div key={i} className="flex items-start gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-200 shadow-xs hover:border-purple-300 transition-colors">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-semibold text-slate-800">{f}</span>
                  </div>
                ))}
              </div>

              {/* Technologies */}
              <div className="pt-4">
                <span className="text-xs uppercase font-mono text-slate-500 block mb-2 font-bold">Tech Stack Deployed:</span>
                <div className="flex flex-wrap gap-2">
                  {service.tech_stack.map((tech, idx) => (
                    <span key={idx} className="bg-purple-50 text-purple-700 text-xs font-mono font-bold px-3 py-1.5 rounded-lg border border-purple-200">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Benefits Cards */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((b, bi) => (
                <div key={bi} className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-xs hover:border-purple-300 hover:shadow-md transition-all space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-purple-100/70 border border-purple-200 text-purple-700 flex items-center justify-center mb-3">
                    <Zap className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">{b.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">{b.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 4. Service Performance Telemetry & Benchmark Matrix */}
      <section className="py-20 bg-slate-50 relative border-b border-slate-200">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="text-xs uppercase font-mono font-bold text-purple-700 bg-purple-100/70 border border-purple-200 px-3 py-1 rounded-full">
              PERFORMANCE STANDARDS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Enterprise Grade Service Benchmarks
            </h2>
            <p className="text-sm text-slate-600">
              Every deliverable under our {service.title} suite is held to verifiable, SLA-backed performance criteria.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs text-center">
              <div className="text-xs font-mono text-slate-500 uppercase">Core Web Vitals</div>
              <div className="text-3xl font-extrabold text-emerald-600 mt-2">100 / 100</div>
              <p className="text-xs text-slate-500 mt-2">LCP under 0.35s guaranteed</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs text-center">
              <div className="text-xs font-mono text-slate-500 uppercase">Edge Latency</div>
              <div className="text-3xl font-extrabold text-purple-700 mt-2">&lt; 25ms</div>
              <p className="text-xs text-slate-500 mt-2">Global CDN cached responses</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs text-center">
              <div className="text-xs font-mono text-slate-500 uppercase">Organic ROI Lift</div>
              <div className="text-3xl font-extrabold text-indigo-700 mt-2">3.8x Avg</div>
              <p className="text-xs text-slate-500 mt-2">High-intent keyword acquisition</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs text-center">
              <div className="text-xs font-mono text-slate-500 uppercase">Security &amp; Uptime</div>
              <div className="text-3xl font-extrabold text-amber-600 mt-2">99.98%</div>
              <p className="text-xs text-slate-500 mt-2">Enterprise SLA backing</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. The Divide: Traditional Agency vs Limra Engineering */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="max-w-3xl mx-auto text-center mb-12 space-y-3">
            <span className="text-xs uppercase font-mono font-bold text-purple-700 bg-purple-50 border border-purple-200 px-3 py-1 rounded-full">
              THE PERFORMANCE DIVIDE
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Why Legacy Agencies Fall Behind On {service.title}
            </h2>
            <p className="text-sm text-slate-600">
              Compare standard market practices against Limra Digitech’s modern engineering standard.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Legacy Approach */}
            <div className="bg-rose-50/50 border border-rose-200 rounded-3xl p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-2 text-rose-700 font-bold text-sm uppercase font-mono">
                <span className="w-2 h-2 rounded-full bg-rose-500" />
                Traditional Agency Approach
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-600">
                <li className="flex items-start gap-2.5">
                  <span className="text-rose-500 font-bold">✕</span>
                  <span>Bloated templates with dozens of conflicting third-party plugins</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-rose-500 font-bold">✕</span>
                  <span>Sluggish 3-5 second page load times causing 60%+ bounce rates</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-rose-500 font-bold">✕</span>
                  <span>Superficial vanity metrics with zero transparent revenue attribution</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-rose-500 font-bold">✕</span>
                  <span>Vulnerable to Google Core &amp; Helpful Content algorithmic drops</span>
                </li>
              </ul>
            </div>

            {/* Limra Standard */}
            <div className="bg-purple-50/60 border-2 border-purple-400 rounded-3xl p-6 sm:p-8 space-y-4 shadow-lg shadow-purple-100">
              <div className="flex items-center gap-2 text-purple-800 font-bold text-sm uppercase font-mono">
                <span className="w-2 h-2 rounded-full bg-purple-600" />
                LIMRA Digitech Architecture
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-800 font-medium">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Custom Next.js 15, TypeScript &amp; Supabase serverless stack</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Sub-second &lt;0.3s edge delivery passing all Google Core Web Vitals</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Direct conversion tracking, GA4 attribution, and high-ticket pipeline</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>100% algorithm-immune entity graphs and white-hat digital PR moats</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6. 4-Stage Agile Sprint Delivery Process */}
      <section id="delivery-process" className="py-20 lg:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="max-w-3xl mx-auto text-center mb-14 space-y-3">
            <span className="text-xs uppercase font-mono font-bold text-purple-700 bg-purple-100/70 border border-purple-200 px-3 py-1 rounded-full">
              DELIVERY METHODOLOGY
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Our 4-Stage Sprint Execution Model
            </h2>
            <p className="text-sm text-slate-600">
              Predictable, transparent sprint cycles designed to eliminate project delays and launch with speed.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {deliverySteps.map((step, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-purple-300 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-purple-600 font-mono">{step.step}</span>
                    <span className="text-[10px] font-mono font-bold bg-purple-50 text-purple-700 border border-purple-200 px-2.5 py-0.5 rounded-full">
                      {step.tag}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Industry Security & Compliance Guardrails */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200 rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-purple-800 uppercase">
                <ShieldCheck className="w-4 h-4 text-purple-600" />
                <span>Enterprise Security &amp; Compliance Verified</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                Built For Enterprise Data Privacy &amp; Zero Downtime
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                All client deployments utilize strict SSL encryptions, sanitized PostgreSQL queries, automated GitHub CI/CD pipelines, and DDoS mitigation.
              </p>
            </div>
            <Link
              href="/contact-us"
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl font-bold text-xs flex items-center gap-2 transition-all shadow-md shadow-purple-200 flex-shrink-0"
            >
              <span>Download SLA Document</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 8. Proven Case Studies & Client Wins */}
      <CaseStudies />

      {/* 9. Verified Google 5.0 Testimonials */}
      <Testimonials />

      {/* 10. Frequently Asked Questions (Accordion) */}
      <section className="py-20 lg:py-24 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-12 space-y-3">
            <span className="text-xs uppercase font-mono font-bold text-purple-700 bg-purple-50 border border-purple-200 px-3 py-1 rounded-full">
              COMMON INQUIRIES
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Frequently Asked Questions About {service.title}
            </h2>
            <p className="text-sm text-slate-600">
              Clear answers to the most common questions regarding our technical engagements.
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

      {/* 11. High-Conversion Consultation Blueprint Lead Form */}
      <ContactCta />

    </div>
  );
}
