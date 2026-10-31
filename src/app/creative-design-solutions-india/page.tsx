import React from 'react';
import type { Metadata } from 'next';
import ServiceDetailView from '@/components/ServiceDetailView';
import { servicesData } from '@/data/mockData';
import { buildRouteMetadata } from '@/lib/seoEngine';
import { getServerCmsSnapshot } from '@/lib/cmsReader';

export async function generateMetadata(): Promise<Metadata> {
  return buildRouteMetadata('/creative-design-solutions-india', {
    title: 'Creative Design Company in India | Graphic Design & Branding Agency – LIMRA Digitech',
    description:
      'Creative Design Agency India For Modern Brands & Business Growth. Brand identity, Figma UI/UX, marketing collaterals and high-impact visual design.',
  });
}

export default async function CreativeDesignPage() {
  const cms = await getServerCmsSnapshot();
  const service =
    (cms.services || []).find((s: any) => s.slug === 'creative-design-solutions-india') ||
    servicesData[3];

  const benefits = [
    { title: 'Distinct Brand Identity', desc: 'Crafting memorable logo systems, typography, and cohesive color palettes that elevate brand perception.' },
    { title: 'Human-Centered UI/UX', desc: 'Wireframing, user flows, and interactive Figma prototypes tested for seamless customer journeys.' },
    { title: 'Social & Ad Creative Systems', desc: 'Scroll-stopping graphics, carousel packs, and presentation decks ready to deploy.' },
    { title: 'Vector Asset Libraries', desc: 'High-resolution scalable SVG assets, custom 3D elements, and micro-interaction animations.' },
  ];

  const faqs = [
    { q: 'What deliverables are included with brand identity design?', a: 'You receive primary & secondary logo files (SVG, PNG, EPS, AI), color palette guidelines, typography hierarchy, social media kit, and complete brand style guide PDF.' },
    { q: 'Do you design UI/UX for existing websites and mobile apps?', a: 'Yes! We conduct usability audits on existing products and design high-converting modern redesigns in Figma.' },
  ];

  return (
    <ServiceDetailView
      service={service}
      heroTagline="Creative Design Agency India For Modern Brands & Business Growth"
      benefits={benefits}
      faqs={faqs}
    />
  );
}
