'use client';

import React from 'react';
import { MessageSquareText } from 'lucide-react';
import { companyInfo } from '@/data/mockData';

export default function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/${companyInfo.phoneClean.replace('+', '')}?text=${encodeURIComponent(
    'Hello LIMRA Digitech! I would like to inquire about your SEO & Web Development solutions.'
  )}`;

  return (
    <aside aria-label="Technical Strategy Consultation">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white p-3.5 sm:p-4 rounded-full shadow-xl shadow-purple-500/30 hover:shadow-2xl hover:shadow-purple-500/50 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center group border border-purple-300/40"
        aria-label="Direct Consultation with Limra Digitech"
      >
        {/* Subtle breathing pulse ring */}
        <span className="absolute -inset-1 rounded-full bg-purple-500/20 animate-ping pointer-events-none" style={{ animationDuration: '3s' }} />

        {/* Brand Theme Icon */}
        <MessageSquareText className="w-5 h-5 sm:w-6 sm:h-6 text-white relative z-10" />
        
        {/* Expandable Label on Hover */}
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out font-semibold text-xs pl-0 group-hover:pl-2 text-white relative z-10">
          Chat With Lead Engineer
        </span>
      </a>
    </aside>
  );
}
