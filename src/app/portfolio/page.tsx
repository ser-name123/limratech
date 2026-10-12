import React from 'react';
import type { Metadata } from 'next';
import CaseStudies from '@/components/CaseStudies';
import Testimonials from '@/components/Testimonials';
import ContactCta from '@/components/ContactCta';
import TechStackTicker from '@/components/TechStackTicker';

export const metadata: Metadata = {
  title: 'Portfolio & Case Studies | LIMRA Digitech',
  description: 'Explore verified client case studies in technical SEO, high-velocity Next.js web applications, and B2B lead generation.',
};

export default function PortfolioPage() {
  return (
    <div className="bg-[#f8fafc] text-slate-700 min-h-screen">
      <section className="py-20 lg:py-24 bg-white cyber-grid relative overflow-hidden border-b border-slate-200">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-purple-200/50 via-indigo-100/40 to-transparent rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 text-center space-y-4 relative z-10">
          <span className="text-xs uppercase font-medium tracking-widest text-purple-700 bg-purple-50 border border-purple-200 px-4 py-1.5 rounded-full inline-block">
            VERIFIED PROOF
          </span>
          <h1 className="text-2xl sm:text-4xl lg:text-[42px] font-medium text-slate-900 tracking-tight max-w-5xl mx-auto leading-tight">
            Client Case Studies &amp; Revenue Engine
          </h1>
          <p className="text-slate-600 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
            Real data. Real organic dominance. Real bottom-line growth. Discover how our Next.js and SEO architecture turns underperforming domains into market leaders.
          </p>
        </div>
      </section>

      <TechStackTicker />
      <CaseStudies />
      <Testimonials />
      <ContactCta />
    </div>
  );
}
