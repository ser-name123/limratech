'use client';

import React, { useState } from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  ArrowRight, 
  Briefcase, 
  Zap, 
  Heart, 
  Coffee, 
  Laptop, 
  TrendingUp, 
  GraduationCap, 
  Sparkles, 
  CheckCircle2, 
  ChevronDown,
  ShieldCheck,
  Award
} from 'lucide-react';
import ContactCta from '@/components/ContactCta';
import TechStackTicker from '@/components/TechStackTicker';
import RichText from '@/components/RichText';
import { useSiteInfo } from '@/lib/useSiteInfo';
import { content as careersContent } from '@/data/pages/careers';

const perkIcons = [Laptop, Zap, TrendingUp, GraduationCap, Heart, Coffee];

export default function CareersPage() {
  const site = useSiteInfo();
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [pc, setPc] = useState(careersContent);

  const [openings, setOpenings] = useState([
    {
      role: 'Senior Next.js & React Developer',
      department: 'Engineering',
      type: 'Full-Time (Remote / Hybrid)',
      desc: 'Architect high-speed, scalable web applications with Next.js App Router, TypeScript, and Supabase.',
      tags: ['Next.js 15', 'TypeScript', 'Supabase', 'Serverless']
    },
    {
      role: 'Performance Marketing Strategist (Meta & Google Ads)',
      department: 'Growth Marketing',
      type: 'Full-Time (India)',
      desc: 'Lead multi-channel lead acquisition funnels with aggressive ROI optimization and daily analytics.',
      tags: ['Google Ads', 'Meta Ads', 'GA4', 'Conversion Rate']
    },
    {
      role: 'UI/UX & Brand Identity Designer',
      department: 'Design',
      type: 'Full-Time / Contract',
      desc: 'Craft intuitive Figma product designs, landing pages, and cohesive brand design systems.',
      tags: ['Figma', 'Design Systems', 'Micro-Animations']
    },
    {
      role: 'Technical SEO & Algorithmic Specialist',
      department: 'Organic Growth',
      type: 'Full-Time (India)',
      desc: 'Drive programmatic and editorial SEO, technical site audits, and high-authority entity schema graphs.',
      tags: ['Core Web Vitals', 'Schema.org', 'Log Analysis']
    },
  ]);

  React.useEffect(() => {
    fetch('/api/admin')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data?.cms?.careers) && data.cms.careers.length > 0) {
          const activeJobs = data.cms.careers
            .filter((j: any) => j.status !== 'Closed')
            .map((j: any) => ({
              role: j.role,
              department: j.department,
              type: j.location ? `${j.type} (${j.location})` : j.type,
              desc: j.desc,
              tags: Array.isArray(j.tags) ? j.tags : [],
            }));
          if (activeJobs.length > 0) {
            setOpenings(activeJobs);
          }
        }
        if (data?.cms?.pageSections?.careers) {
          setPc(data.cms.pageSections.careers);
        }
      })
      .catch(() => {});
  }, []);

  const careerFaqs = (pc.faq.items || []).map((f: any) => ({
    q: f.q,
    a: (f.a || '').replace('{email}', site.email),
  }));

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
          <RichText className="text-slate-600 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed font-normal" html={pc.hero.description} />
        </div>
      </section>

      {/* 2. Live Tech Ticker */}
      <TechStackTicker />

      {/* 3. Perks & Benefits Overview */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs uppercase font-mono font-bold text-purple-700 bg-purple-50 border border-purple-200 px-3 py-1 rounded-full">
              {pc.perks.eyebrow}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              {pc.perks.heading}
            </h2>
            <RichText className="text-sm text-slate-600" html={pc.perks.description} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(pc.perks.items || []).map((p: any, idx: number) => {
              const Icon = perkIcons[idx % perkIcons.length];
              return (
                <div key={idx} className="bg-slate-50 p-7 rounded-2xl border border-slate-200 hover:border-purple-300 transition-all shadow-xs space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">{p.title}</h3>
                  <RichText className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal" html={p.desc} />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Open Roles & Position Listings */}
      <section className="py-20 lg:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs uppercase font-mono font-bold text-purple-700 bg-purple-100 px-3 py-1 rounded-full border border-purple-200">
              {pc.openingsHeader.eyebrow}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              {pc.openingsHeader.heading}
            </h2>
            <RichText className="text-sm text-slate-600" html={pc.openingsHeader.description} />
          </div>

          <div className="space-y-4 max-w-4xl mx-auto">
            {openings.map((job, idx) => (
              <div 
                key={idx}
                className="bg-white p-6 sm:p-7 rounded-3xl border border-slate-200 hover:border-purple-300 shadow-xs hover:shadow-md transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-6"
              >
                <div className="space-y-2 max-w-xl">
                  <div className="flex items-center gap-2 text-xs font-mono text-purple-700 font-bold">
                    <span>{job.department}</span>
                    <span>•</span>
                    <span className="text-slate-500 font-medium">{job.type}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{job.role}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">{job.desc}</p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {job.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="bg-slate-100 text-slate-700 text-[10px] font-mono px-2.5 py-0.5 rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <Link 
                  href="/contact-us"
                  className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-colors flex-shrink-0 shadow-sm shadow-purple-200"
                >
                  <span>Apply Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Our 3-Step Streamlined Hiring Process */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs uppercase font-mono font-bold text-purple-700 bg-purple-50 border border-purple-200 px-3 py-1 rounded-full">
              {pc.hiringProcess.eyebrow}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              {pc.hiringProcess.heading}
            </h2>
            <RichText className="text-sm text-slate-600" html={pc.hiringProcess.description} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {(pc.hiringProcess.items || []).map((step: any, idx: number) => (
              <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-xs space-y-2">
                <span className="text-2xl font-black text-purple-700 font-mono">{step.num}</span>
                <h3 className="text-base font-bold text-slate-900">{step.title}</h3>
                <RichText className="text-xs text-slate-600 leading-relaxed font-normal" html={step.desc} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Life At Limra: Inside Our Labs */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="bg-white border border-purple-200 rounded-3xl p-8 sm:p-12 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-purple-700 uppercase">
                <Sparkles className="w-4 h-4 text-purple-600" />
                <span>{pc.lifeAtLimra.eyebrow}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
                {pc.lifeAtLimra.heading}
              </h3>
              <RichText className="text-sm text-slate-600 leading-relaxed" html={pc.lifeAtLimra.description} />
            </div>
            <div className="flex flex-col gap-2">
              {(pc.lifeAtLimra.items || []).map((item: any, idx: number) => (
                <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <RichText as="span" html={item.text} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. Diversity & Equal Opportunity Statement */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center space-y-3">
          <ShieldCheck className="w-8 h-8 text-purple-600 mx-auto" />
          <h3 className="text-xl font-bold text-slate-900">{pc.diversity.heading}</h3>
          <RichText className="text-xs sm:text-sm text-slate-600 leading-relaxed" html={pc.diversity.description} />
        </div>
      </section>

      {/* 8. FAQs */}
      <section className="py-20 lg:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-12 space-y-3">
            <span className="text-xs uppercase font-mono font-bold text-purple-700 bg-purple-100 px-3 py-1 rounded-full border border-purple-200">
              {pc.faq.eyebrow}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              {pc.faq.heading}
            </h2>
            <RichText className="text-sm text-slate-600" html={pc.faq.description} />
          </div>

          <div className="space-y-3.5">
            {careerFaqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all shadow-xs"
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

      {/* 9. Direct Resume Dispatch Callout */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 text-center space-y-4">
          <span className="text-xs font-mono font-bold text-purple-700 bg-purple-50 border border-purple-200 px-3 py-1 rounded-full uppercase">
            {pc.resumeCallout.eyebrow}
          </span>
          <h3 className="text-2xl font-bold text-slate-900">
            {pc.resumeCallout.heading}
          </h3>
          <RichText
            className="text-sm text-slate-600 max-w-xl mx-auto"
            html={(pc.resumeCallout.description || '').split('{email}').join(`<strong class="text-purple-700">${site.email}</strong>`)}
          />
        </div>
      </section>

      {/* 10. Contact Consultation Lead Form */}
      <ContactCta />

    </div>
  );
}
