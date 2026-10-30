'use client';

import React, { useState } from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ShieldCheck, 
  Target, 
  Award, 
  Users, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Terminal, 
  Zap, 
  Cpu, 
  Layers, 
  TrendingUp, 
  HeartHandshake, 
  Code2, 
  Clock, 
  ChevronDown,
  Activity
} from 'lucide-react';
import { companyInfo } from '@/data/mockData';
import Testimonials from '@/components/Testimonials';
import ContactCta from '@/components/ContactCta';
import TechStackTicker from '@/components/TechStackTicker';

export default function AboutPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const coreValues = [
    {
      icon: Code2,
      title: 'Code-First Engineering',
      desc: 'We refuse to deliver bloated templates. Every application is hand-crafted with clean TypeScript and modern React.'
    },
    {
      icon: Zap,
      title: 'Sub-Second Performance',
      desc: 'Load speed is the #1 ranking and conversion factor. We benchmark every project against strict 100/100 Core Web Vitals.'
    },
    {
      icon: Target,
      title: 'Commercial Intent SEO',
      desc: 'Traffic without revenue is vanity. We target high-value commercial keywords that translate directly into qualified sales leads.'
    },
    {
      icon: ShieldCheck,
      title: 'Radical Transparency',
      desc: 'Zero hidden retainers or confusing agency jargon. Clients get real-time telemetry, GitHub commits, and direct engineer access.'
    },
    {
      icon: Cpu,
      title: 'Serverless Edge Architecture',
      desc: 'We build with Next.js 15 App Router and Supabase cloud clusters, eliminating slow legacy server bottlenecks.'
    },
    {
      icon: HeartHandshake,
      title: 'Long-Term Partnership',
      desc: 'We treat your business like our own. Our engineers provide proactive monitoring, algorithm updates, and continuous optimization.'
    },
  ];

  const milestones = [
    { year: '2020', title: 'Founding & Vision', desc: 'Started with a mission to bridge the divide between slow web platforms and aggressive SEO rankings.' },
    { year: '2022', title: 'Full Serverless Pivot', desc: 'Migrated 100% of client architectures to modern Next.js and Supabase cloud infrastructure.' },
    { year: '2024', title: 'Pan-India Milestone', desc: 'Crossed 350+ enterprise clients and generated over ₹50Cr+ in client organic search pipeline value.' },
    { year: '2026', title: 'Next-Gen Algorithmic Lab', desc: 'Pioneered AI-Immune entity schema and sub-second React 19 rendering standards.' },
  ];

  const team = [
    { name: 'Arif Khan', role: 'Founder & Principal Cloud Architect', exp: '10+ Yrs In Full-Stack & Serverless', avatar: '/images/client-rahul-sharma.jpg' },
    { name: 'Farhan Siddiqui', role: 'Head of Technical SEO & Algorithms', exp: '8+ Yrs In Search Architecture', avatar: '/images/client-priya-mehta.jpg' },
    { name: 'Ayesha Patel', role: 'Lead UI/UX & Design Systems Architect', exp: 'Figma & Design Systems Specialist', avatar: '/images/client-neha-kapoor.jpg' },
    { name: 'Sameer Sheikh', role: 'Senior Database & Supabase Engineer', exp: 'PostgreSQL & Realtime Cluster Lead', avatar: '/images/client-rahul-sharma.jpg' },
  ];

  const aboutFaqs = [
    {
      q: 'Where is LIMRA Digitech located?',
      a: 'LIMRA Digitech is headquartered in New Delhi, India, with remote engineering hubs delivering high-speed solutions for clients across India, UAE, and North America.'
    },
    {
      q: 'How does your engineering approach differ from traditional digital agencies?',
      a: 'Most digital marketing agencies use outsourced WordPress templates and cheap link packages. We are a technical engineering lab: we code bespoke serverless web applications with Next.js 15, build entity schema graphs, and guarantee sub-second load speeds.'
    },
    {
      q: 'Can we hire LIMRA Digitech on a monthly sprint retainer?',
      a: 'Yes. We offer agile monthly engineering and SEO growth retainers that include dedicated developer hours, weekly sprint reviews, and live SERP rank monitoring.'
    },
    {
      q: 'What is your typical client engagement size?',
      a: 'We partner with ambitious startups, growing mid-market brands, and enterprise institutions seeking predictable, data-backed digital growth.'
    }
  ];

  return (
    <div className="bg-[#f8fafc] text-slate-700 min-h-screen">
      
      {/* 1. Hero Header Banner */}
      <section className="py-20 lg:py-24 bg-white cyber-grid relative overflow-hidden border-b border-slate-200">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-purple-200/50 via-indigo-100/40 to-transparent rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 text-center space-y-6 relative z-10">
          <span className="text-xs uppercase font-bold tracking-widest text-purple-700 bg-purple-50 border border-purple-200 px-4 py-1.5 rounded-full inline-block">
            WHO WE ARE
          </span>
          <h1 className="text-2xl sm:text-4xl lg:text-[44px] font-bold text-slate-900 tracking-tight max-w-5xl mx-auto leading-tight">
            Empowering Businesses Through Strategic Digital Architecture
          </h1>
          <p className="text-slate-600 text-sm sm:text-base max-w-4xl mx-auto leading-relaxed font-normal">
            At LIMRA Digitech, we combine modern software engineering with aggressive, performance-focused SEO to scale enterprise brands and high-velocity startups nationwide.
          </p>
        </div>
      </section>

      {/* 2. Live Tech Ticker */}
      <TechStackTicker />

      {/* 3. Mission & Vision */}
      <section className="py-20 lg:py-24 bg-[#f8fafc] relative border-b border-slate-200">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6">
              <span className="text-xs uppercase font-mono font-bold text-purple-700 tracking-wider bg-purple-50 border border-purple-200 px-3 py-1 rounded-full">
                MISSION &amp; PHILOSOPHY
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-slate-900 tracking-tight">
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
                  <div key={i} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
                    <div className="text-2xl sm:text-3xl font-bold text-purple-700 font-mono">{s.value}</div>
                    <div className="text-xs text-slate-500 font-medium mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white text-slate-900 p-8 sm:p-12 rounded-3xl border border-purple-200 shadow-xl shadow-purple-100/50 relative overflow-hidden space-y-6">
              <div className="w-14 h-14 rounded-2xl bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-600 shadow-xs">
                <Target className="w-7 h-7 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Why Leading Brands Choose LIMRA</h3>
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
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-6 py-3.5 rounded-xl font-bold text-sm shadow-md shadow-purple-200 transition-all"
                >
                  <span>Connect With Our Technical Leadership</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3.5 Dedicated Innovation & Technical SEO Lab Showcase */}
      <section className="py-20 bg-white border-b border-slate-200 overflow-hidden">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="text-xs uppercase font-mono font-bold text-purple-700 bg-purple-50 border border-purple-200 px-3.5 py-1 rounded-full">
              OUR COLLABORATIVE LAB
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-slate-900 tracking-tight">
              Inside The LIMRA Tech &amp; Search Engine Hub
            </h2>
            <p className="text-sm text-slate-600">
              Where cloud engineers, UI/UX researchers, and algorithmic SEO specialists analyze real-time telemetry to engineer organic market leadership.
            </p>
          </div>

          <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-2xl bg-slate-950 group">
            <div className="relative h-80 sm:h-[450px] w-full overflow-hidden">
              <Image
                src="/images/limra-tech-engineering-lab.jpg"
                alt="LIMRA Digitech Software Engineering and Technical SEO Laboratory Gurgaon India"
                fill
                sizes="(max-width: 1200px) 100vw, 1520px"
                className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-black/20" />

              {/* Floating Header Tag */}
              <div className="absolute top-4 inset-x-4 sm:inset-x-6 flex items-center justify-between pointer-events-none">
                <span className="bg-purple-900/90 text-purple-200 border border-purple-400/40 px-3.5 py-1 rounded-full text-xs font-mono font-semibold backdrop-blur-md shadow-md flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-purple-400 animate-pulse" />
                  HEADQUARTERS &amp; PRODUCTION ENVIRONMENT
                </span>
                <span className="bg-emerald-500/90 text-white font-mono text-[11px] font-bold px-3 py-1 rounded-full shadow-md backdrop-blur-md hidden sm:inline-flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Live Code Review &amp; SERP Telemetry
                </span>
              </div>

              {/* Bottom Feature Badges */}
              <div className="absolute bottom-4 sm:bottom-6 inset-x-4 sm:inset-x-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="bg-slate-900/90 backdrop-blur-md border border-slate-700/60 rounded-xl p-3.5 text-white">
                  <div className="text-slate-400 font-mono text-[10px] uppercase">Engineered Stack</div>
                  <div className="font-semibold text-slate-100 text-sm mt-0.5">Next.js 15 &amp; Supabase DB</div>
                  <div className="text-emerald-400 text-xs font-mono mt-1">100/100 Core Web Vitals Guaranteed</div>
                </div>

                <div className="bg-slate-900/90 backdrop-blur-md border border-slate-700/60 rounded-xl p-3.5 text-white">
                  <div className="text-slate-400 font-mono text-[10px] uppercase">Client Footprint</div>
                  <div className="font-semibold text-slate-100 text-sm mt-0.5">350+ Enterprise Brands</div>
                  <div className="text-purple-300 text-xs font-mono mt-1">Pan-India &amp; Global Deployments</div>
                </div>

                <div className="bg-slate-900/90 backdrop-blur-md border border-slate-700/60 rounded-xl p-3.5 text-white">
                  <div className="text-slate-400 font-mono text-[10px] uppercase">Search Dominance</div>
                  <div className="font-semibold text-slate-100 text-sm mt-0.5">Top-3 Commercial SERP Ranks</div>
                  <div className="text-cyan-300 text-xs font-mono mt-1">High-Intent Buyer Traffic</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Core Values & Cultural Manifesto */}
      <section className="py-20 lg:py-24 bg-white border-b border-slate-200">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase font-mono font-bold text-purple-700 bg-purple-50 border border-purple-200 px-3 py-1 rounded-full">
              OUR VALUES
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-slate-900 tracking-tight">
              The Engineering Principles That Guide Every Sprint
            </h2>
            <p className="text-sm text-slate-600">
              We operate under strict engineering standards that prioritize client revenue, site durability, and algorithmic resilience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div key={idx} className="bg-slate-50 p-7 rounded-2xl border border-slate-200 hover:border-purple-300 transition-all shadow-xs space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{val.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">{val.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Technical Leadership */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs uppercase font-mono font-bold text-purple-700 bg-purple-100 px-3 py-1 rounded-full border border-purple-200">
              TECHNICAL LEADERSHIP
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Led By Full-Stack Engineers &amp; Search Architects
            </h2>
            <p className="text-sm text-slate-600">
              Direct access to senior practitioners — no middlemen or non-technical account reps.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md hover:border-purple-300 transition-all text-center space-y-3 group">
                <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-purple-200 mx-auto shadow-sm bg-purple-50">
                  {member.avatar ? (
                    <Image
                      src={member.avatar}
                      alt={`${member.name} - ${member.role} at LIMRA Digitech India`}
                      fill
                      sizes="80px"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-tr from-purple-600 to-indigo-600 text-white font-bold text-xl flex items-center justify-center">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  )}
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900 group-hover:text-purple-700 transition-colors">{member.name}</h4>
                  <div className="text-xs font-semibold text-purple-700 mt-0.5">{member.role}</div>
                  <p className="text-[11px] text-slate-500 font-mono mt-1">{member.exp}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Company Evolution & Milestones */}
      <section className="py-20 lg:py-24 bg-white border-b border-slate-200">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs uppercase font-mono font-bold text-purple-700 bg-purple-50 border border-purple-200 px-3 py-1 rounded-full">
              OUR JOURNEY
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Milestones On Our Path To Search Engine Dominance
            </h2>
            <p className="text-sm text-slate-600">
              A track record of constant adaptation and pioneering modern web frameworks.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((m, idx) => (
              <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-200 relative overflow-hidden shadow-xs">
                <span className="text-3xl font-black text-purple-700 font-mono block mb-2">{m.year}</span>
                <h3 className="text-base font-bold text-slate-900 mb-1">{m.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Infrastructure Moats */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="bg-white border border-purple-200 rounded-3xl p-8 sm:p-12 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <span className="text-xs font-mono font-bold text-purple-700 uppercase">
                INFRASTRUCTURE MOAT
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
                100% Serverless. Zero Monolithic Debt.
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                By pairing Next.js with Supabase PostgreSQL and Vercel edge caching, our clients enjoy 99.98% uptime, instant global elasticity, and total immunity from database connection pooling choke points.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <span className="bg-purple-50 text-purple-800 border border-purple-200 text-xs font-mono font-bold px-4 py-2 rounded-xl">Next.js 15 Edge</span>
              <span className="bg-purple-50 text-purple-800 border border-purple-200 text-xs font-mono font-bold px-4 py-2 rounded-xl">Supabase Cloud</span>
              <span className="bg-purple-50 text-purple-800 border border-purple-200 text-xs font-mono font-bold px-4 py-2 rounded-xl">TypeScript Strict</span>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Testimonials */}
      <Testimonials />

      {/* 9. Frequently Asked Questions */}
      <section className="py-20 lg:py-24 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-12 space-y-3">
            <span className="text-xs uppercase font-mono font-bold text-purple-700 bg-purple-50 border border-purple-200 px-3 py-1 rounded-full">
              COMMON INQUIRIES
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Frequently Asked Questions About LIMRA Digitech
            </h2>
            <p className="text-sm text-slate-600">
              Clear answers to how we structure engagements, teams, and technical delivery.
            </p>
          </div>

          <div className="space-y-3.5">
            {aboutFaqs.map((faq, index) => (
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
