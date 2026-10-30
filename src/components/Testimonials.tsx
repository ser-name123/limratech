'use client';

import React from 'react';
import Image from 'next/image';
import { Star, Quote } from 'lucide-react';
import { testimonialsData } from '@/data/mockData';

export default function Testimonials() {
  return (
    <section className="py-24 bg-slate-50 relative border-b border-slate-200 overflow-hidden">
      <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-semibold">
            <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
            <span>5.0 STAR VERIFIED CLIENT REPUTATION</span>
          </div>

          <h2 className="text-xl sm:text-3xl lg:text-[34px] font-medium text-slate-900 tracking-tight leading-snug">
            Trusted By Founders Across India
          </h2>

          <p className="text-sm text-slate-600 font-normal leading-relaxed">
            Real feedback from leaders whose businesses scale on our technical SEO and Next.js platforms.
          </p>
        </div>

        {/* 3 Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonialsData.map((t) => (
            <div
              key={t.id}
              className="bg-white border border-slate-200 hover:border-purple-300 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between relative group shadow-sm hover:shadow-lg"
            >
              <div className="absolute top-5 right-5 text-purple-100 group-hover:text-purple-200 transition-colors">
                <Quote className="w-6 h-6" />
              </div>

              <div>
                <div className="flex items-center gap-1 text-amber-500 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                  ))}
                  <span className="text-[11px] font-mono text-slate-500 ml-1.5 font-semibold">5.0</span>
                </div>

                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed italic mb-6 font-normal">
                  &ldquo;{t.review}&rdquo;
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center gap-3">
                <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-purple-200 shadow-sm flex-shrink-0 bg-slate-100">
                  {t.avatar ? (
                    <Image
                      src={t.avatar}
                      alt={`${t.client_name} - ${t.company_or_role} client review for LIMRA Digitech`}
                      fill
                      sizes="44px"
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-tr from-purple-600 to-indigo-600 text-white font-medium flex items-center justify-center text-xs">
                      {t.client_name.split(' ').map(n => n[0]).join('')}
                    </div>
                  )}
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 text-xs sm:text-sm">
                    {t.client_name}
                  </h4>
                  <p className="text-[11px] text-slate-500 mt-0.5 font-normal">
                    {t.company_or_role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
