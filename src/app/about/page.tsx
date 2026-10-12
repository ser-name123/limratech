import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, Target, Award, Users, ArrowRight, CheckCircle2, Sparkles, Terminal } from 'lucide-react';
import { companyInfo } from '@/data/mockData';
import Testimonials from '@/components/Testimonials';
import ContactCta from '@/components/ContactCta';
import TechStackTicker from '@/components/TechStackTicker';

export const metadata: Metadata = {
  title: 'About Us | LIMRA Digitech - Elite SEO & Web Engineering Agency',
  description: 'Empowering ambitious businesses through relentless technical SEO, next-gen Next.js web platforms, and predictable ROI across India.',
};

export default function AboutPage() {
  return (
    <div className="bg-[#f8fafc] text-slate-700 min-h-screen">
      {/* Header */}
      <section className="py-20 lg:py-24 bg-white cyber-grid relative overflow-hidden border-b border-slate-200">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-purple-200/50 via-indigo-100/40 to-transparent rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 text-center space-y-6 relative z-10">
          <span className="text-xs uppercase font-medium tracking-widest text-purple-700 bg-purple-50 border border-purple-200 px-4 py-1.5 rounded-full inline-block">
            WHO WE ARE
          </span>
          <h1 className="text-2xl sm:text-4xl lg:text-[42px] font-medium text-slate-900 tracking-tight max-w-5xl mx-auto leading-tight">
            Empowering Businesses Through Strategic Digital Architecture
          </h1>
          <p className="text-slate-600 text-sm sm:text-base max-w-4xl mx-auto leading-relaxed">
            At LIMRA Digitech, we combine modern software engineering with aggressive, performance-focused SEO to scale enterprise brands and high-velocity startups nationwide.
          </p>
        </div>
      </section>

      <TechStackTicker />

      {/* Mission & Vision */}
      <section className="py-24 bg-[#f8fafc] relative border-b border-slate-200">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6">
              <span className="text-xs uppercase font-mono font-medium text-purple-600 tracking-wider">
                // MISSION &amp; PHILOSOPHY
              </span>
              <h2 className="text-xl sm:text-3xl font-medium text-slate-900">
                Eliminating The Performance Divide Between Code &amp; Search Revenue
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Founded with a relentless commitment to technical excellence, LIMRA Digitech has emerged as the premier partner for Indian businesses that reject bloated WordPress templates, sluggish page speeds, and hollow vanity metrics.
              </p>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                We engineer bespoke, serverless web platforms backed by Supabase databases and executed with ruthless technical SEO that earns Page 1 Google dominance.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                {companyInfo.stats.map((s, i) => (
                  <div key={i} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                    <div className="text-2xl font-semibold text-purple-600 font-mono">{s.value}</div>
                    <div className="text-xs text-slate-500 font-medium mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white text-slate-900 p-8 sm:p-12 rounded-3xl border border-purple-200 shadow-xl shadow-purple-100/50 relative overflow-hidden space-y-6">
              <div className="w-14 h-14 rounded-2xl bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-600 shadow-sm">
                <Target className="w-7 h-7 text-purple-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-medium text-slate-900">Why Leading Brands Choose LIMRA</h3>
              <ul className="space-y-3.5 text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>100% Transparency with real-time performance analytics &amp; direct engineer access</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Modern serverless tech stack: Next.js 15, TypeScript &amp; Supabase cloud</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Search engine dominance targeting high-intent commercial keywords</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Pan-India client operations with rapid turnarounds</span>
                </li>
              </ul>
              <div className="pt-4">
                <Link 
                  href="/contact-us"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-[#911cf3] to-purple-600 hover:from-purple-600 hover:to-indigo-600 text-white px-6 py-3.5 rounded-xl font-bold text-sm shadow-xl shadow-purple-600/20 transition-all"
                >
                  <span>Connect With Our Technical Leadership</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Testimonials />
      <ContactCta />
    </div>
  );
}
