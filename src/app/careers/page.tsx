import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Briefcase, Zap, Heart, Coffee } from 'lucide-react';
import ContactCta from '@/components/ContactCta';

export const metadata: Metadata = {
  title: 'Careers at LIMRA Digitech | Join Our Team',
  description: 'Join our dynamic team of amazing innovators. Explore open positions in web development, performance marketing, and creative UI/UX.',
};

export default function CareersPage() {
  const openings = [
    {
      role: 'Senior Next.js & React Developer',
      department: 'Engineering',
      type: 'Full-Time (Remote / Hybrid)',
      desc: 'Architect high-speed, scalable web applications with Next.js App Router, TypeScript, and Supabase.',
    },
    {
      role: 'Performance Marketing Strategist (Meta & Google Ads)',
      department: 'Growth Marketing',
      type: 'Full-Time (India)',
      desc: 'Lead multi-channel lead acquisition funnels with aggressive ROI optimization and daily analytics.',
    },
    {
      role: 'UI/UX & Brand Identity Designer',
      department: 'Design',
      type: 'Full-Time / Contract',
      desc: 'Craft intuitive Figma product designs, landing pages, and cohesive brand design systems.',
    },
    {
      role: 'SEO & Content Growth Specialist',
      department: 'Organic Growth',
      type: 'Full-Time (India)',
      desc: 'Drive programmatic and editorial SEO, technical site audits, and high-authority link acquisitions.',
    },
  ];

  return (
    <div className="bg-[#f8fafc] text-slate-700 min-h-screen">
      {/* Header */}
      <section className="py-20 lg:py-24 bg-white cyber-grid relative overflow-hidden border-b border-slate-200">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-purple-200/50 via-indigo-100/40 to-transparent rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 text-center space-y-4 relative z-10">
          <span className="text-xs uppercase font-medium tracking-widest text-purple-700 bg-purple-50 border border-purple-200 px-4 py-1.5 rounded-full inline-block">
            JOIN OUR TEAM
          </span>
          <h1 className="text-2xl sm:text-4xl lg:text-[42px] font-medium text-slate-900 tracking-tight max-w-5xl mx-auto leading-tight">
            Join Our Dynamic Team Of Amazing Innovators
          </h1>
          <p className="text-slate-600 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
            We are always seeking exceptional engineers, creative thinkers, and relentless problem-solvers to build the future of digital solutions.
          </p>
        </div>
      </section>

      {/* Perks */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#f8fafc] p-6 rounded-2xl border border-slate-200 space-y-2">
              <Zap className="w-6 h-6 text-purple-600" />
              <h3 className="font-medium text-slate-900 text-base">Modern Tech Stacks</h3>
              <p className="text-xs text-slate-600">Work with the newest TypeScript, Next.js, and AI automation tools.</p>
            </div>
            <div className="bg-[#f8fafc] p-6 rounded-2xl border border-slate-200 space-y-2">
              <Heart className="w-6 h-6 text-purple-600" />
              <h3 className="font-medium text-slate-900 text-base">Health &amp; Wellness</h3>
              <p className="text-xs text-slate-600">Comprehensive health coverage and balanced work environments.</p>
            </div>
            <div className="bg-[#f8fafc] p-6 rounded-2xl border border-slate-200 space-y-2">
              <Coffee className="w-6 h-6 text-purple-600" />
              <h3 className="font-medium text-slate-900 text-base">Flexible Culture</h3>
              <p className="text-xs text-slate-600">Hybrid &amp; remote flexibility with results-oriented autonomy.</p>
            </div>
            <div className="bg-[#f8fafc] p-6 rounded-2xl border border-slate-200 space-y-2">
              <Briefcase className="w-6 h-6 text-purple-600" />
              <h3 className="font-medium text-slate-900 text-base">Growth &amp; Learning</h3>
              <p className="text-xs text-slate-600">Stipends for courses, certifications, and industry conferences.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Openings */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-xl sm:text-3xl font-medium text-slate-900">Open Positions</h2>
            <p className="text-sm text-slate-600 mt-2">Ready to level up your career? Apply to our active openings below.</p>
          </div>

          <div className="space-y-4">
            {openings.map((job, idx) => (
              <div 
                key={idx}
                className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[11px] font-medium uppercase tracking-wider text-purple-700 bg-purple-50 border border-purple-200 px-2.5 py-0.5 rounded-md">
                      {job.department}
                    </span>
                    <span className="text-xs text-slate-400">• {job.type}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-medium text-slate-900">{job.role}</h3>
                  <p className="text-sm text-slate-600 max-w-xl">{job.desc}</p>
                </div>

                <Link
                  href="/contact-us"
                  className="bg-slate-900 hover:bg-purple-600 text-white px-6 py-3 rounded-xl font-medium text-xs shadow-md transition-colors flex items-center gap-1.5 flex-shrink-0"
                >
                  <span>Apply Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactCta />
    </div>
  );
}
