import type { MetadataRoute } from 'next';
import { blogPostsData, caseStudiesData } from '@/data/mockData';
import { industriesPagesData, technologiesPagesData } from '@/data/megaMenuData';
import { getServerCmsSnapshot } from '@/lib/cmsReader';
import { defaultPageSeoRegistry } from '@/data/defaultCmsConfig';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const cms = await getServerCmsSnapshot();
  const baseUrl = (cms.seo?.canonicalDomain || 'https://limradigitech.com').replace(/\/$/, '');
  const registry = cms.pageSeoRegistry || defaultPageSeoRegistry;

  const staticRoutes = [
    '',
    '/about',
    '/services',
    '/website-development-services',
    '/digital-marketing-agency-india',
    '/lead-generation-company-india',
    '/creative-design-solutions-india',
    '/mobile-app-developer-india',
    '/software-developers-india',
    '/industries',
    '/technologies',
    '/portfolio',
    '/clients',
    '/blogs',
    '/careers',
    '/contact-us',
    '/privacy-policy',
    '/terms-and-conditions',
    '/sitemap-page',
  ];

  //Also include any newly created services in cms.services
  const dynamicServices = (cms.services || [])
    .map((s: any) => `/${s.slug}`)
    .filter((r: string) => !staticRoutes.includes(r));

  const allCoreRoutes = [...staticRoutes, ...dynamicServices];

  const staticEntries: MetadataRoute.Sitemap = allCoreRoutes.map((route) => {
    const routeKey = route === '' ? '/' : route;
    const regEntry = registry.find((e) => e.route === routeKey);
    return {
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: regEntry?.changeFreq || (route === '' ? 'daily' : 'weekly'),
      priority:
        regEntry?.priority ||
        (route === '' ? 1.0 : route.includes('services') || route.includes('india') ? 0.9 : 0.8),
    };
  });

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
    ...industryEntries,
    ...technologyEntries,
    ...caseStudyEntries,
    ...blogEntries,
  ];
}
