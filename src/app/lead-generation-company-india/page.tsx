import React from 'react';
import type { Metadata } from 'next';
import ServiceDetailView from '@/components/ServiceDetailView';
import { servicesData } from '@/data/mockData';

export const metadata: Metadata = {
  title: 'Lead Generation Company in India | Best Lead Generation Services India',
  description: 'Best Lead Generation Company in India for Business Growth. Targeted B2B & B2C customer acquisition pipelines delivering qualified sales appointments.',
};

export default function LeadGenPage() {
  const service = servicesData[2];

  const benefits = [
    { title: 'Pre-Qualified Prospects Only', desc: 'Custom qualification filters eliminate tire-kickers and focus your sales team on ready-to-buy decision makers.' },
    { title: 'Automated Instant CRM Sync', desc: 'Leads are pushed instantly to your CRM, WhatsApp, or email with immediate SMS/WhatsApp autoresponders.' },
    { title: 'Bespoke High-Converting Landing Funnels', desc: 'Engineered for psychological persuasion and frictionless lead capture.' },
    { title: 'Scalable Volume On-Demand', desc: 'Scale lead volume up or down based on your sales team’s closing capacity.' },
  ];

  const faqs = [
    { q: 'How are leads verified before delivery?', a: 'Our multi-step funnels require phone number validation, OTP verification (optional), and specific qualification questionnaire answering before inquiry submission.' },
    { q: 'Do you work for B2B or B2C businesses?', a: 'Both! We architect specialized LinkedIn & Google Search funnels for B2B enterprises, and high-volume Meta/Instagram funnels for B2C consumer products and services.' },
  ];

  return (
    <ServiceDetailView
      service={service}
      heroTagline="Best Lead Generation Company in India for Business Growth"
      benefits={benefits}
      faqs={faqs}
    />
  );
}
