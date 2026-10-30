import React from 'react';
import Link from 'next/link';
import { Compass, Home, ArrowRight, Phone, Search, Sparkles } from 'lucide-react';
import { companyInfo, servicesData } from '@/data/mockData';
import TechStackTicker from '@/components/TechStackTicker';

export default function NotFound() {
  return (
    <div className="bg-[#f8fafc] text-slate-700 min-h-[80vh] flex flex-col justify-between">
      <TechStackTicker />

      <section className="py-20 lg:py-28 bg-white cyber-grid border-b border-slate-200 flex-grow flex items-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-xs font-mono font-bold uppercase">
            <Compass className="w-4 h-4 text-purple-600 animate-spin-slow" />
            <span>HTTP 404 • ROUTE NOT FOUND</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight font-mono">
            404
          </h1>

          <h2 className="text-xl sm:text-3xl font-bold text-slate-900">
            The Page You Are Looking For Has Moved Or Does Not Exist
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
            Explore our core digital marketing, web development, and software solutions below, or return directly to the LIMRA Digitech home page.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              href="/"
              className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2 shadow-md shadow-purple-200"
            >
              <Home className="w-4 h-4" />
              <span>Return to Home Page</span>
            </Link>
            <Link
              href="/contact-us"
              className="bg-white border border-slate-200 hover:border-purple-300 text-slate-800 px-6 py-3 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-purple-600" />
              <span>Get a Quote / Contact Us</span>
            </Link>
            <Link
              href="/sitemap-page"
              className="bg-slate-100 hover:bg-purple-50 text-purple-700 px-5 py-3 rounded-xl font-mono font-bold text-xs flex items-center gap-1.5"
            >
              <Search className="w-3.5 h-3.5" />
              <span>View Full Sitemap</span>
            </Link>
          </div>

          <div className="pt-8 border-t border-slate-200/80 text-left">
            <div className="text-xs font-mono font-bold text-slate-500 uppercase mb-4 text-center">
              Quick Access To Our Core Services
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {servicesData.map((svc) => (
                <Link
                  key={svc.id}
                  href={`/${svc.slug}`}
                  className="bg-slate-50 hover:bg-purple-50/60 border border-slate-200 hover:border-purple-300 p-3.5 rounded-xl flex items-center justify-between text-xs font-bold text-slate-800 hover:text-purple-700 transition-all"
                >
                  <span>{svc.title}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-purple-600" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

