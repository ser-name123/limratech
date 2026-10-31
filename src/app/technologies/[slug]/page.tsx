import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { technologiesPagesData } from '@/data/megaMenuData';
import { getServerCmsSnapshot } from '@/lib/cmsReader';
import TechnologyDetailView from '@/components/TechnologyDetailView';

export async function generateStaticParams() {
  return technologiesPagesData.map((item) => ({
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
  const list = cms.technologies || technologiesPagesData;
  const technology = list.find((item: any) => item.slug === slug) || technologiesPagesData.find((item) => item.slug === slug);

  if (!technology) {
    return {
      title: 'Technology Not Found',
    };
  }

  const seoTitle = (technology as any).seo_title || `${technology.title} | LIMRA Digitech`;
  const seoDesc = (technology as any).seo_description || technology.description || (technology as any).heroDescription;
  const canonicalUrl = (technology as any).canonical_url || `https://limradigitech.com/technologies/${technology.slug}`;

  return {
    title: seoTitle,
    description: seoDesc,
    keywords: [
      (technology as any).focus_keyword || `${technology.shortTitle} Development Company India`,
      ...((technology as any).secondary_keywords || []),
      ...((technology.capabilities || []).map((c: any) => c.title)),
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

export default async function TechnologySlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cms = await getServerCmsSnapshot();
  const list = cms.technologies || technologiesPagesData;
  const base = technologiesPagesData.find((item) => item.slug === slug);
  const custom = list.find((item: any) => item.slug === slug);
  const technology = base && custom ? { ...base, ...custom } : custom || base;

  if (!technology) {
    notFound();
  }

  return <TechnologyDetailView technology={technology as any} />;
}

