import React from 'react';
import type { Metadata } from 'next';
import ServiceDetailView from '@/components/ServiceDetailView';
import { servicesData } from '@/data/mockData';

export const metadata: Metadata = {
  title: 'Best Website Development Company in India | Web Development Company India – LIMRA Digitech',
  description: 'Best Website Development Company in India for Modern Business Websites. High-speed Next.js, React, Node, WordPress, and custom e-commerce stores.',
};

export default function WebDevPage() {
  const service = servicesData[0];

  const benefits = [
    { title: 'Sub-Second Page Loads', desc: 'Engineered with Next.js App Router and serverless edge caching for blistering responsiveness.' },
    { title: 'SEO Architecture Built-In', desc: 'Semantic HTML5, automated schema markup, and Core Web Vitals optimization from day one.' },
    { title: 'Conversion-Focused UX', desc: 'Crafted with intuitive conversion paths, frictionless checkout flows, and mobile perfection.' },
    { title: 'Rock-Solid Security', desc: 'Modern cloud infrastructure with SSL, DDOS protection, and Supabase encrypted databases.' },
  ];

  const faqs = [
    { q: 'Which tech stacks do you build websites with?', a: 'We specialize in Next.js, React, TypeScript, Node.js, Supabase, Tailwind CSS, as well as Shopify and headless WordPress.' },
    { q: 'How long does a custom web development project take?', a: 'Standard business websites typically launch in 2 to 3 weeks, while complex full-stack web applications take 4 to 8 weeks.' },
    { q: 'Will my website be mobile friendly and SEO optimized?', a: 'Absolutely. Every single website we develop is 100% responsive across all smartphones, tablets, and desktops, with strict adherence to Google Core Web Vitals.' },
  ];

  return (
    <ServiceDetailView
      service={service}
      heroTagline="Best Website Development Company in India For Modern Business Websites"
      benefits={benefits}
      faqs={faqs}
    />
  );
}
