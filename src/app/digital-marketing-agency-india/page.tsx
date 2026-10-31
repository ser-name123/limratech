import React from 'react';
import type { Metadata } from 'next';
import ServiceDetailView from '@/components/ServiceDetailView';
import { servicesData } from '@/data/mockData';
import { buildRouteMetadata } from '@/lib/seoEngine';
import { getServerCmsSnapshot } from '@/lib/cmsReader';

export async function generateMetadata(): Promise<Metadata> {
  return buildRouteMetadata('/digital-marketing-agency-india', {
    title: 'Best Digital Marketing Company in India | Digital Marketing Agency India – LIMRA Digitech',
    description:
      'Best Digital Marketing Company in India For Business Growth. Result-oriented Technical SEO, Local GMB 3-Pack, Google Ads PPC, and Social Media Marketing.',
  });
}

export default async function DigitalMarketingPage() {
  const cms = await getServerCmsSnapshot();
  const service =
    (cms.services || []).find((s: any) => s.slug === 'digital-marketing-agency-india') ||
    servicesData[1];

  const benefits = [
    { title: 'Predictable Customer Acquisition', desc: 'Eliminate guesswork with engineered funnels backed by deep demographic and competitor data.' },
    { title: 'Lower Cost Per Acquisition (CPA)', desc: 'Continuous multivariate ad copy and creative testing to maximize conversion efficiency.' },
    { title: 'Omnichannel Brand Dominance', desc: 'Retargeting across Google Search, YouTube, Instagram, Facebook, and LinkedIn networks.' },
    { title: 'Live Transparent Reporting', desc: 'Real-time dashboards showing exactly how many leads and revenue your marketing budget produces.' },
  ];

  const faqs = [
    { q: 'How quickly can we expect results from digital marketing?', a: 'PPC advertising (Google & Meta Ads) generates qualified leads within 48 to 72 hours of launch, while organic SEO delivers compounded returns over 60 to 90 days.' },
    { q: 'How do you measure marketing ROI?', a: 'We track every conversion using GA4, Meta Pixel, server-side Conversion API, and CRM pipeline attribution to show exact revenue generated per ad rupee.' },
  ];

  return (
    <ServiceDetailView
      service={service}
      heroTagline="Best Digital Marketing Company in India For Business Growth"
      benefits={benefits}
      faqs={faqs}
    />
  );
}
