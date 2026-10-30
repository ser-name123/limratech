import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { technologiesPagesData } from '@/data/megaMenuData';
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
  const technology = technologiesPagesData.find((item) => item.slug === slug);

  if (!technology) {
    return {
      title: 'Technology Not Found',
    };
  }

  return {
    title: `${technology.title} | LIMRA Digitech`,
    description: technology.description,
    alternates: {
      canonical: `/technologies/${technology.slug}`,
    },
    openGraph: {
      title: `${technology.title} | LIMRA Digitech`,
      description: technology.description,
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
  const technology = technologiesPagesData.find((item) => item.slug === slug);

  if (!technology) {
    notFound();
  }

  return <TechnologyDetailView technology={technology} />;
}

