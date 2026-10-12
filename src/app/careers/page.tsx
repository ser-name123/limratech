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

export default function CareersPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const perks = [
    { icon: Laptop, title: 'Remote-First Flexibility', desc: 'Work from anywhere in India with flexible working hours and modern hardware stipends.' },
    { icon: Zap, title: 'Bleeding-Edge Tech Stack', desc: 'Build with Next.js 15, React 19, TypeScript, Supabase, Tailwind, and Vercel Serverless Edge.' },
    { icon: TrendingUp, title: 'Competitive Compensation', desc: 'Above-market base salary, biannual performance bonuses, and direct equity options for key contributors.' },
    { icon: GraduationCap, title: 'Annual Learning Budget', desc: '₹50,000 yearly stipend for technical courses, O’Reilly books, and developer conferences.' },
    { icon: Heart, title: 'Comprehensive Health Cover', desc: 'Complete medical and health insurance coverage for you and your direct dependents.' },
    { icon: Coffee, title: 'Zero Micro-Management', desc: 'Autonomous sprint ownership. We evaluate results, clean code, and impact — not keystrokes.' },
  ];

  const openings = [
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
  ];

  const careerFaqs = [
    {
      q: 'What is the interview process like at LIMRA Digitech?',
      a: 'We respect your time. Our hiring process is streamlined into 3 steps: 1) Initial 30-minute culture and background chat, 2) Technical deep-dive / code teardown (no leetcode brainteasers), and 3) Final offer discussion with our leadership.'
    },
    {
      q: 'Do you offer fully remote work?',
      a: 'Yes! Most engineering and marketing roles are 100% remote across India, with optional coworking access in New Delhi.'
    },
    {
      q: 'What equipment and development tools are provided?',
      a: 'Full-time team members receive modern laptop allowances, second-monitor stipends, and subscriptions to GitHub Copilot, Figma, and development cloud tools.'
    },
    {
      q: 'I don’t see an exact role matching my profile. Can I still apply?',
      a: 'Absolutely. We always welcome exceptional software engineers, designers, and growth marketers. Send your portfolio and GitHub profile to limradigitech@gmail.com.'
    }
  ];

  return (
    <div className="bg-[#f8fafc] text-slate-700 min-h-screen">
      
      {/* 1. Header Hero */}
      <section className="py-20 lg:py-24 bg-white cyber-grid relative overflow-hidden border-b border-slate-200">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-purple-200/50 via-indigo-100/40 to-transparent rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 text-center space-y-4 relative z-10">
          <span className="text-xs uppercase font-bold tracking-widest text-purple-700 bg-purple-50 border border-purple-200 px-4 py-1.5 rounded-full inline-block">
            JOIN OUR TEAM
          </span>
          <h1 className="text-2xl sm:text-4xl lg:text-[44px] font-bold text-slate-900 tracking-tight max-w-5xl mx-auto leading-tight">
            Build The Future Of Web Engineering &amp; Search Dominance
          </h1>
          <p className="text-slate-600 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed font-normal">
            We are always seeking exceptional engineers, creative thinkers, and relentless problem-solvers to craft cutting-edge digital experiences.
          </p>
        </div>
      </section>

      {/* 2. Live Tech Ticker */}
      <TechStackTicker />

      {/* 3. Perks & Benefits Overview */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs uppercase font-mono font-bold text-purple-700 bg-purple-50 border border-purple-200 px-3 py-1 rounded-full">
              BENEFITS &amp; CULTURE
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Why Engineers &amp; Marketers Thrive At LIMRA
            </h2>
            <p className="text-sm text-slate-600">
              We provide the autonomy, tools, and compensation needed to do your life’s best work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {perks.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div key={idx} className="bg-slate-50 p-7 rounded-2xl border border-slate-200 hover:border-purple-300 transition-all shadow-xs space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">{p.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">{p.desc}</p>
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
              CURRENT OPENINGS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Explore Available Positions
            </h2>
            <p className="text-sm text-slate-600">
              Join our fast-growing engineering laboratory and work on high-impact client systems.
            </p>
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
              INTERVIEW WORKFLOW
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Simple, Respectful &amp; Transparent Hiring
            </h2>
            <p className="text-sm text-slate-600">
              We hate 7-round interview loops as much as you do. Our process takes under 10 days.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-xs space-y-2">
              <span className="text-2xl font-black text-purple-700 font-mono">01</span>
              <h3 className="text-base font-bold text-slate-900">Culture &amp; Trajectory Chat</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">A casual 30-minute intro conversation to discuss mutual goals, past projects, and culture fit.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-xs space-y-2">
              <span className="text-2xl font-black text-purple-700 font-mono">02</span>
              <h3 className="text-base font-bold text-slate-900">Technical Architecture Review</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">Walk us through a real project you built. We talk system design, trade-offs, and performance.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-xs space-y-2">
              <span className="text-2xl font-black text-purple-700 font-mono">03</span>
              <h3 className="text-base font-bold text-slate-900">Offer &amp; Seamless Onboarding</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">Transparent compensation package, equity breakdown, and laptop setup on Day 1.</p>
            </div>
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
                <span>Modern Developer Experience</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
                Work With High Agency &amp; Top 1% Peers
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                At Limra, you won’t be maintaining 10-year-old PHP code. You’ll be designing serverless architectures, deploying AI-immune schema graphs, and solving tough performance challenges every week.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>100% TypeScript Strict Mode</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Automated PR Testing on Vercel</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Zero Bureaucracy Decision Making</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Diversity & Equal Opportunity Statement */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center space-y-3">
          <ShieldCheck className="w-8 h-8 text-purple-600 mx-auto" />
          <h3 className="text-xl font-bold text-slate-900">An Equal Opportunity Engineering Lab</h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            LIMRA Digitech is committed to fostering a diverse, inclusive, and psychologically safe workplace. We evaluate all applicants solely on technical ability, problem-solving craft, and cultural contribution.
          </p>
        </div>
      </section>

      {/* 8. FAQs */}
      <section className="py-20 lg:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-12 space-y-3">
            <span className="text-xs uppercase font-mono font-bold text-purple-700 bg-purple-100 px-3 py-1 rounded-full border border-purple-200">
              RECRUITMENT FAQ
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Frequently Asked Questions About Careers
            </h2>
            <p className="text-sm text-slate-600">
              Clear answers regarding remote work, interviews, and compensation.
            </p>
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
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 animate-in fade-in duration-200">
                    {faq.a}
                  </div>
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
            GENERAL INQUIRY
          </span>
          <h3 className="text-2xl font-bold text-slate-900">
            Don’t See Your Exact Role?
          </h3>
          <p className="text-sm text-slate-600 max-w-xl mx-auto">
            Email your GitHub, LinkedIn, or portfolio directly to <strong className="text-purple-700">limradigitech@gmail.com</strong> with a note on what you’d like to build with us.
          </p>
        </div>
      </section>

      {/* 10. Contact Consultation Lead Form */}
      <ContactCta />

    </div>
  );
}
