'use client';

import React, { useState } from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  Building2, 
  TrendingUp, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  ChevronDown, 
  Award, 
  Star,
  Users,
  Zap,
  Globe
} from 'lucide-react';
import Testimonials from '@/components/Testimonials';
import TechStackTicker from '@/components/TechStackTicker';
import ContactCta from '@/components/ContactCta';
import CaseStudies from '@/components/CaseStudies';

export default function ClientsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const clientMetrics = [
    { value: '350+', label: 'Enterprise & High-Growth Clients', sub: 'Pan-India & Global Delivery' },
    { value: '98.4%', label: 'Annual Client Retention Rate', sub: 'Compounding SEO & Tech Retainers' },
    { value: '4.9/5.0', label: 'Verified Google Review Score', sub: 'Based on 120+ Public Reviews' },
    { value: '₹50Cr+', label: 'Client Organic Pipeline Generated', sub: 'Measurable Inbound Revenue' },
  ];

  const clientFaqs = [
    {
      q: 'How does onboarding work once we sign a client agreement?',
      a: 'Onboarding is completed within 48 hours. You are assigned a dedicated technical lead, invited to a shared Slack/WhatsApp channel, and given access to our live sprint dashboard.'
    },
    {
      q: 'Do you work with non-disclosure agreements (NDAs)?',
      a: 'Yes, 100% of our enterprise client partnerships operate under strict bilateral NDAs and IP protection agreements.'
    },
    {
      q: 'Can we retain Limra Digitech on an ongoing monthly basis?',
      a: 'Yes. Most clients maintain monthly sprint retainers for continuous keyword rank expansion, Core Web Vitals maintenance, and new full-stack feature releases.'
    },
    {
      q: 'What reporting and communication cadence do you provide?',
      a: 'Clients receive weekly video sprint teardowns, bi-weekly strategy calls, and 24/7 access to live Google Looker Studio analytics.'
    }
  ];

  return (
    <div className="bg-[#f8fafc] text-slate-700 min-h-screen">
      
      {/* 1. Header Hero */}
      <section className="py-20 lg:py-24 bg-white cyber-grid relative overflow-hidden border-b border-slate-200">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-purple-200/50 via-indigo-100/40 to-transparent rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 text-center space-y-4 relative z-10">
          <span className="text-xs uppercase font-bold tracking-widest text-purple-700 bg-purple-50 border border-purple-200 px-4 py-1.5 rounded-full inline-block">
            OUR CLIENT NETWORK
          </span>
          <h1 className="text-2xl sm:text-4xl lg:text-[44px] font-bold text-slate-900 tracking-tight max-w-5xl mx-auto leading-tight">
            We Build Partnerships That Drive Real Revenue Growth
          </h1>
          <p className="text-slate-600 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed font-normal">
            From funded startups to market-leading enterprises across India, see why 350+ organizations trust LIMRA Digitech for technical SEO and web engineering.
          </p>
        </div>
      </section>

      {/* 2. Live Tech Ticker */}
      <TechStackTicker />

      {/* 3. Cumulative Client Metrics */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {clientMetrics.map((m, idx) => (
              <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-xs text-center">
                <div className="text-3xl sm:text-4xl font-black text-purple-700 font-mono">{m.value}</div>
                <div className="text-xs font-bold text-slate-900 mt-2">{m.label}</div>
                <p className="text-[11px] text-slate-500 mt-1 font-mono">{m.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Client Industry Verticals */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs uppercase font-mono font-bold text-purple-700 bg-purple-100 px-3 py-1 rounded-full border border-purple-200">
              CROSS-INDUSTRY DOMINANCE
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Sectors We Power Nationwide
            </h2>
            <p className="text-sm text-slate-600">
              Our code-first search methodologies adapt seamlessly to high-ticket B2B, consumer e-commerce, and SaaS.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Building2, title: 'Enterprise B2B & Manufacturing', desc: 'Capturing procurement-level buyer intent and driving high-value quote requests.' },
              { icon: Zap, title: 'FinTech & Wealth Advisory', desc: 'Secure cloud portals, zero-downtime APIs, and high-trust organic search authority.' },
              { icon: Globe, title: 'D2C Brands & E-Commerce', desc: 'Sub-second catalog rendering, merchant rich schema, and multi-channel ad scaling.' },
              { icon: ShieldCheck, title: 'Healthcare & Clinical Services', desc: 'Medical E-E-A-T compliance, patient inquiry funnels, and localized 3-pack maps.' },
              { icon: TrendingUp, title: 'B2B SaaS & Tech Startups', desc: 'Feature comparison matrices, documentation search hubs, and free trial signups.' },
              { icon: Award, title: 'Real Estate & Hospitality', desc: 'Interactive property listings, location landing pages, and verified lead capture.' },
            ].map((sec, idx) => {
              const Icon = sec.icon;
              return (
                <div key={idx} className="bg-white p-7 rounded-2xl border border-slate-200 shadow-xs hover:border-purple-300 transition-all space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">{sec.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">{sec.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Client Case Studies */}
      <CaseStudies />

      {/* 6. Why Enterprise Partners Choose Limra */}
      <section className="py-20 lg:py-24 bg-white border-b border-slate-200">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="max-w-3xl mx-auto text-center mb-14 space-y-3">
            <span className="text-xs uppercase font-mono font-bold text-purple-700 bg-purple-50 border border-purple-200 px-3 py-1 rounded-full">
              THE LIMRA ADVANTAGE
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Why Brands Fire Their Old Agency For LIMRA
            </h2>
            <p className="text-sm text-slate-600">
              Clear commitments that define our client relationships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-xs space-y-2">
              <CheckCircle2 className="w-6 h-6 text-emerald-600 mb-2" />
              <h3 className="text-base font-bold text-slate-900">Direct Senior Architect Access</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">You work directly with lead engineers and technical SEO directors, not inexperienced junior account managers.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-xs space-y-2">
              <CheckCircle2 className="w-6 h-6 text-emerald-600 mb-2" />
              <h3 className="text-base font-bold text-slate-900">100% Code Ownership</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">All GitHub repositories, Supabase databases, and domain assets belong entirely to your company from Day 1.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-xs space-y-2">
              <CheckCircle2 className="w-6 h-6 text-emerald-600 mb-2" />
              <h3 className="text-base font-bold text-slate-900">SLA-Backed Performance</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">Strict 100/100 Core Web Vitals guarantees and real-time SERP tracking ensure measurable ROI.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Engagement Models */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs uppercase font-mono font-bold text-purple-700 bg-purple-100 px-3 py-1 rounded-full border border-purple-200">
              FLEXIBLE COLLABORATION
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Tailored Partnership Models
            </h2>
            <p className="text-sm text-slate-600">
              Choose the structure that matches your current business stage and growth velocity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-xs space-y-3">
              <span className="text-xs font-mono font-bold text-purple-700 uppercase">MODEL A</span>
              <h3 className="text-lg font-bold text-slate-900">Fixed-Scope Sprint Build</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">Complete architecture, UI/UX, and production launch of your Next.js web application within 2-6 weeks.</p>
            </div>
            <div className="bg-white p-7 rounded-2xl border-2 border-purple-400 shadow-md shadow-purple-100 space-y-3 relative">
              <span className="absolute top-4 right-4 bg-purple-600 text-white text-[10px] font-mono font-bold px-2 py-0.5 rounded">MOST POPULAR</span>
              <span className="text-xs font-mono font-bold text-purple-700 uppercase">MODEL B</span>
              <h3 className="text-lg font-bold text-slate-900">Full Organic Growth Engine</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">Full-stack Next.js web build paired with aggressive monthly technical SEO, entity graphs, and digital PR retainers.</p>
            </div>
            <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-xs space-y-3">
              <span className="text-xs font-mono font-bold text-purple-700 uppercase">MODEL C</span>
              <h3 className="text-lg font-bold text-slate-900">Dedicated Technical Advisory</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">Code audits, architectural consulting, and algorithm penalty recovery for enterprise internal engineering teams.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Testimonials */}
      <Testimonials />

      {/* 9. Client FAQs */}
      <section className="py-20 lg:py-24 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-12 space-y-3">
            <span className="text-xs uppercase font-mono font-bold text-purple-700 bg-purple-50 border border-purple-200 px-3 py-1 rounded-full">
              PARTNERSHIP FAQS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Frequently Asked Questions By Prospective Clients
            </h2>
            <p className="text-sm text-slate-600">
              Clear answers to how we kick off, bill, and scale client accounts.
            </p>
          </div>

          <div className="space-y-3.5">
            {clientFaqs.map((faq, index) => (
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

      {/* 10. Contact Consultation Lead Form */}
      <ContactCta />

    </div>
  );
}
