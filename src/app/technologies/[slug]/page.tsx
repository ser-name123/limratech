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

  return {
    title: `${technology.title} | LIMRA Digitech`,
    description: technology.description || (technology as any).heroDescription,
    alternates: {
      canonical: `/technologies/${technology.slug}`,
    },
    openGraph: {
      title: `${technology.title} | LIMRA Digitech`,
      description: technology.description || (technology as any).heroDescription,
      url: `https://limradigitech.com/technologies/${technology.slug}`,
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

