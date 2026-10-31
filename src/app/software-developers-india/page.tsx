import React from 'react';
import type { Metadata } from 'next';
import ServiceDetailView from '@/components/ServiceDetailView';
import { servicesData } from '@/data/mockData';
import { buildRouteMetadata } from '@/lib/seoEngine';
import { getServerCmsSnapshot } from '@/lib/cmsReader';

export async function generateMetadata(): Promise<Metadata> {
  return buildRouteMetadata('/software-developers-india', {
    title: 'Software Development Company in India | Custom Software Development Services – LIMRA Digitech',
    description:
      'Trusted Software Development Company in India. Custom SaaS applications, enterprise ERP/CRM software architectures, microservices, and database systems.',
  });
}

export default async function SoftwareDevPage() {
  const cms = await getServerCmsSnapshot();
  const service =
    (cms.services || []).find((s: any) => s.slug === 'software-developers-india') ||
    servicesData[5];

  const benefits = [
    { title: 'Custom Cloud Architecture', desc: 'Bespoke microservices, serverless functions, and containerized Docker deployments engineered for zero downtime.' },
    { title: 'Scalable PostgreSQL & Supabase', desc: 'Normalized relational schemas with Row Level Security (RLS) and sub-millisecond query performance.' },
    { title: 'Automated CI/CD & Testing', desc: 'Robust unit, integration, and end-to-end automated pipelines that catch defects prior to production.' },
    { title: 'Full IP & Source Code Ownership', desc: 'You retain 100% intellectual property, repository access, and comprehensive architectural documentation.' },
  ];

  const faqs = [
    { q: 'How do you ensure data security in custom software?', a: 'We apply industry-standard OAuth 2.0 / JWT authentication, role-based access control (RBAC), TLS 1.3 data encryption in transit, and AES-256 database encryption at rest.' },
    { q: 'Can you migrate legacy software to modern cloud infrastructure?', a: 'Yes! We frequently migrate monolithic and legacy PHP/ASP systems to modern Next.js + TypeScript + Supabase architectures.' },
  ];

  return (
    <ServiceDetailView
      service={service}
      heroTagline="Trusted Software Development Company in India"
      benefits={benefits}
      faqs={faqs}
    />
  );
}
