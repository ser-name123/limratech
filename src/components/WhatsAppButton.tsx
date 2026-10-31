'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { MessageSquareText } from 'lucide-react';
import { companyInfo } from '@/data/mockData';

export default function WhatsAppButton() {
  const pathname = usePathname();
  const [cfg, setCfg] = React.useState({
    show: true,
    phoneClean: companyInfo.phoneClean,
    greeting: 'Hello LIMRA Digitech! I would like to inquire about your SEO & Web Development solutions.',
  });

  React.useEffect(() => {
    if (pathname?.startsWith('/admin')) return;
    fetch('/api/admin')
      .then((res) => res.json())
      .then((data) => {
        if (data?.cms?.footer) {
          setCfg({
            show: data.cms.footer.showWhatsAppWidget !== false,
            phoneClean: data.cms.footer.phoneClean || companyInfo.phoneClean,
            greeting:
              data.cms.footer.whatsAppGreeting ||
              'Hello LIMRA Digitech! I would like to inquire about your SEO & Web Development solutions.',
          });
        }
      })
      .catch(() => {});
  }, [pathname]);

  if (pathname?.startsWith('/admin') || !cfg.show) {
    return null;
  }
  const whatsappUrl = `https://wa.me/${cfg.phoneClean.replace('+', '')}?text=${encodeURIComponent(
    cfg.greeting
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      title="Chat with LIMRA Digitech on WhatsApp"
      aria-label="Direct Consultation with LIMRA Digitech on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-xl shadow-purple-500/30 border border-purple-300/40 transition-transform duration-300 hover:scale-105 active:scale-95 hover:shadow-2xl hover:shadow-purple-500/50"
    >
      {/* Breathing pulse ring (contained to the circle) */}
      <span className="absolute inset-0 rounded-full bg-purple-500/20 animate-ping pointer-events-none" style={{ animationDuration: '3s' }} />
      <MessageSquareText className="relative z-10 h-6 w-6 text-white" />
    </a>
  );
}
