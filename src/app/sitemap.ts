import type { MetadataRoute } from 'next';
import { blogPostsData, caseStudiesData } from '@/data/mockData';
import { industriesPagesData, technologiesPagesData } from '@/data/megaMenuData';
import { getServerCmsSnapshot } from '@/lib/cmsReader';
import { defaultPageSeoRegistry } from '@/data/defaultCmsConfig';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const cms = await getServerCmsSnapshot();
  const baseUrl = (cms.seo?.canonicalDomain || 'https://limradigitech.com').replace(/\/$/, '');
  const registry = cms.pageSeoRegistry || defaultPageSeoRegistry;

  // Every page in the (admin-editable) SEO registry, excluding anything marked
  // noindex. This auto-includes new pages (e.g. legal pages) with no code change.
  const indexable = registry.filter((e) => !String(e.robots || '').includes('noindex'));
  const registryRoutes = new Set(indexable.map((e) => e.route));

  const staticEntries: MetadataRoute.Sitemap = indexable.map((e) => ({
    url: `${baseUrl}${e.route === '/' ? '' : e.route}`,
    lastModified: new Date(),
    changeFrequency: (e.changeFreq as any) || 'weekly',
    priority: typeof e.priority === 'number' ? e.priority : 0.7,
  }));

  // Any service pages created in the CMS that aren't already in the registry.
  const dynamicServiceEntries: MetadataRoute.Sitemap = (cms.services || [])
    .map((s: any) => `/${s.slug}`)
    .filter((r: string) => !registryRoutes.has(r))
    .map((route: string) => ({ url: `${baseUrl}${route}`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 }));

  const industries = cms.industries || industriesPagesData;
  const industryEntries: MetadataRoute.Sitemap = industries.map((ind: any) => ({
    url: `${baseUrl}/industries/${ind.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.85,
  }));

  const technologies = cms.technologies || technologiesPagesData;
  const technologyEntries: MetadataRoute.Sitemap = technologies.map((tech: any) => ({
    url: `${baseUrl}/technologies/${tech.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.85,
  }));

  const caseStudies = cms.caseStudies || caseStudiesData;
  const caseStudyEntries: MetadataRoute.Sitemap = caseStudies.map((cs: any) => ({
    url: `${baseUrl}/portfolio/${cs.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const blogs = cms.blogs || blogPostsData;
  const blogEntries: MetadataRoute.Sitemap = blogs.map((post: any) => ({
    url: `${baseUrl}/blogs/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.75,
  }));

  return [
    ...staticEntries,
    ...dynamicServiceEntries,
    ...industryEntries,
    ...technologyEntries,
    ...caseStudyEntries,
    ...blogEntries,
  ];
}
