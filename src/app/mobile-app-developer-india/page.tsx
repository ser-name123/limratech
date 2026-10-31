import React from 'react';
import type { Metadata } from 'next';
import ServiceDetailView from '@/components/ServiceDetailView';
import { servicesData } from '@/data/mockData';
import { buildRouteMetadata } from '@/lib/seoEngine';
import { getServerCmsSnapshot } from '@/lib/cmsReader';

export async function generateMetadata(): Promise<Metadata> {
  return buildRouteMetadata('/mobile-app-developer-india', {
    title: 'Best App Development Company in India | Mobile App Development Company India – LIMRA Digitech',
    description:
      'Best App Development Company in India Delivering Custom Mobile Solutions. Native and cross-platform iOS & Android mobile apps with Flutter and React Native.',
  });
}

export default async function MobileAppPage() {
  const cms = await getServerCmsSnapshot();
  const service =
    (cms.services || []).find((s: any) => s.slug === 'mobile-app-developer-india') ||
    servicesData[4];

  const benefits = [
    { title: 'Cross-Platform Cost Efficiency', desc: 'Single codebase deployment across iOS and Android with React Native and Flutter without compromising native performance.' },
    { title: 'Offline-First Architectures', desc: 'Local caching and seamless cloud synchronization when internet connection is restored.' },
    { title: 'Frictionless In-App Payments', desc: 'Razorpay, Stripe, Apple Pay, and Google Pay integrations with end-to-end encryption.' },
    { title: 'App Store Launch & ASO', desc: 'Guaranteed submission approval assistance, App Store Optimization, and proactive crash monitoring.' },
  ];

  const faqs = [
    { q: 'Should I choose React Native, Flutter, or Native?', a: 'For 90% of business applications, React Native or Flutter delivers identical 60fps performance at nearly half the development budget and launch time. We advise based on your specific feature needs.' },
    { q: 'Do you provide backend server development for the mobile app?', a: 'Yes! We engineer cloud-native backends with Node.js, Supabase, and PostgreSQL with robust REST / GraphQL APIs.' },
  ];

  return (
    <ServiceDetailView
      service={service}
      heroTagline="Best App Development Company in India Delivering Custom Mobile Solutions"
      benefits={benefits}
      faqs={faqs}
    />
  );
}
