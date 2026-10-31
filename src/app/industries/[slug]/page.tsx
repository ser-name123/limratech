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

  const seoTitle = (industry as any).seo_title || `${industry.title} | LIMRA Digitech`;
  const seoDesc = (industry as any).seo_description || industry.description || (industry as any).heroDescription;
  const canonicalUrl = (industry as any).canonical_url || `https://limradigitech.com/industries/${industry.slug}`;

  return {
    title: seoTitle,
    description: seoDesc,
    keywords: [
      (industry as any).focus_keyword || `${industry.shortTitle} Digital Solutions India`,
      ...((industry as any).secondary_keywords || []),
      ...(((industry as any).solutions || (industry as any).tailoredSolutions || []).map((s: any) => s.title)),
    ],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: seoTitle,
      description: seoDesc,
      url: canonicalUrl,
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

