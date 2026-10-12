import React from 'react';
import type { Metadata } from 'next';
import Testimonials from '@/components/Testimonials';
import TechStackTicker from '@/components/TechStackTicker';
import ContactCta from '@/components/ContactCta';

export const metadata: Metadata = {
  title: 'Clients & Partnerships | LIMRA Digitech',
  description: 'We build relationships that drive digital innovation. See why 500+ businesses across India partner with LIMRA Digitech.',
};

export default function ClientsPage() {
  return (
    <div className="bg-[#f8fafc] text-slate-700 min-h-screen">
      <section className="py-20 lg:py-24 bg-white cyber-grid relative overflow-hidden border-b border-slate-200">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-purple-200/50 via-indigo-100/40 to-transparent rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 text-center space-y-4 relative z-10">
          <span className="text-xs uppercase font-medium tracking-widest text-purple-700 bg-purple-50 border border-purple-200 px-4 py-1.5 rounded-full inline-block">
            OUR CLIENTS
          </span>
          <h1 className="text-2xl sm:text-4xl lg:text-[42px] font-medium text-slate-900 tracking-tight max-w-5xl mx-auto leading-tight">
            We Build Relationships That Drive Digital Innovation
          </h1>
          <p className="text-slate-600 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
            From high-growth direct-to-consumer brands to enterprise B2B institutions, we engineer digital solutions that unlock massive scale.
          </p>
        </div>
      </section>

      <TechStackTicker />
      <Testimonials />
      <ContactCta />
    </div>
  );
}
