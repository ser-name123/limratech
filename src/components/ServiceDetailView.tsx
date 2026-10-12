'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Zap, Sparkles, ShieldCheck } from 'lucide-react';
import { ServiceItem } from '@/types';
import ContactCta from '@/components/ContactCta';
import Testimonials from '@/components/Testimonials';
import TechStackTicker from '@/components/TechStackTicker';

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
  faqs,
}: ServiceDetailViewProps) {
  return (
    <div className="bg-[#f8fafc] min-h-screen text-slate-700">
      {/* Hero Banner */}
      <section className="py-20 lg:py-24 bg-white cyber-grid relative overflow-hidden border-b border-slate-200">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-purple-200/50 via-indigo-100/40 to-transparent rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-xs font-medium uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-purple-600" />
            <span>{service.title} • Technical Capability</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-[42px] font-medium text-slate-900 tracking-tight max-w-5xl mx-auto leading-tight">
            {heroTagline}
          </h1>

          <p className="text-slate-600 text-sm sm:text-base max-w-4xl mx-auto leading-relaxed font-normal">
            {service.full_description}
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact-us"
              className="bg-gradient-to-r from-[#911cf3] to-purple-600 hover:from-purple-600 hover:to-indigo-600 text-white px-8 py-4 rounded-xl font-medium text-sm shadow-xl shadow-purple-600/20 flex items-center gap-2 transition-all group"
            >
              <span>Request Custom Proposal For {service.title}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      <TechStackTicker />

      {/* Core Engineering Features */}
      <section className="py-24 bg-[#f8fafc] relative border-b border-slate-200">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase font-medium text-purple-600 font-mono tracking-wider">
                // ARCHITECTURAL SUPERIORITY
              </span>
              <h2 className="text-xl sm:text-3xl font-medium text-slate-900">
                How Our Engineering Eliminates Industry Bottlenecks
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                {service.short_description}
              </p>

              <div className="space-y-3 pt-2">
                {service.features.map((f, i) => (
                  <div key={i} className="flex items-start gap-3 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm hover:border-purple-300 transition-colors">
                    <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-slate-800">{f}</span>
                  </div>
                ))}
              </div>

              {/* Technologies */}
              <div className="pt-4">
                <span className="text-xs uppercase font-mono text-slate-500 block mb-2 font-medium">Tech Stack Deployed:</span>
                <div className="flex flex-wrap gap-2">
                  {service.tech_stack.map((tech, idx) => (
                    <span key={idx} className="bg-purple-50 text-purple-700 text-xs font-mono font-medium px-3 py-1.5 rounded-lg border border-purple-200">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Benefits Cards */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((b, bi) => (
                <div key={bi} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-purple-300 hover:shadow-md transition-all space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-200 text-purple-600 flex items-center justify-center mb-3">
                    <Zap className="w-5 h-5" />
                  </div>
                  <h3 className="font-medium text-slate-900 text-base">{b.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* FAQs */}
      {faqs && faqs.length > 0 && (
        <section className="py-20 bg-white border-b border-slate-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-8 lg:px-12">
            <div className="text-center mb-12">
              <span className="text-xs uppercase font-medium tracking-widest text-purple-700 bg-purple-50 border border-purple-200 px-3.5 py-1.5 rounded-full inline-block mb-3">
                FREQUENTLY ASKED QUESTIONS
              </span>
              <h2 className="text-xl sm:text-3xl font-medium text-slate-900">
                Technical Clarity &amp; Deliverables
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, fi) => (
                <div key={fi} className="bg-slate-50/80 p-6 rounded-2xl border border-slate-200 space-y-2">
                  <h3 className="font-medium text-base text-slate-900">{faq.q}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <Testimonials />
      <ContactCta />
    </div>
  );
}
