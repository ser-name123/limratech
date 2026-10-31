import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { industriesPagesData } from '@/data/megaMenuData';
import { getServerCmsSnapshot } from '@/lib/cmsReader';
import IndustryDetailView from '@/components/IndustryDetailView';

export async function generateStaticParams() {
  return industriesPagesData.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cms = await getServerCmsSnapshot();
  const list = cms.industries || industriesPagesData;
  const industry = list.find((item: any) => item.slug === slug) || industriesPagesData.find((item) => item.slug === slug);

  if (!industry) {
    return {
      title: 'Industry Not Found',
    };
  }

  return {
    title: `${industry.title} | LIMRA Digitech`,
    description: industry.description || (industry as any).heroDescription,
    alternates: {
      canonical: `/industries/${industry.slug}`,
    },
    openGraph: {
      title: `${industry.title} | LIMRA Digitech`,
      description: industry.description || (industry as any).heroDescription,
      url: `https://limradigitech.com/industries/${industry.slug}`,
      type: 'website',
    },
  };
}

export default async function IndustrySlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cms = await getServerCmsSnapshot();
  const list = cms.industries || industriesPagesData;
  const base = industriesPagesData.find((item) => item.slug === slug);
  const custom = list.find((item: any) => item.slug === slug);
  const industry = base && custom ? { ...base, ...custom } : custom || base;

  if (!industry) {
    notFound();
  }

  return <IndustryDetailView industry={industry as any} />;
}

