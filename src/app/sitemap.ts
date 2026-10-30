import type { MetadataRoute } from 'next';
import { blogPostsData, caseStudiesData } from '@/data/mockData';
import { industriesPagesData, technologiesPagesData } from '@/data/megaMenuData';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://limradigitech.com';

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

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : route.includes('services') || route.includes('india') ? 0.9 : 0.8,
  }));

  const industryEntries: MetadataRoute.Sitemap = industriesPagesData.map((ind) => ({
    url: `${baseUrl}/industries/${ind.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.85,
  }));

  const technologyEntries: MetadataRoute.Sitemap = technologiesPagesData.map((tech) => ({
    url: `${baseUrl}/technologies/${tech.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.85,
  }));

  const caseStudyEntries: MetadataRoute.Sitemap = caseStudiesData.map((cs) => ({
    url: `${baseUrl}/portfolio/${cs.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const blogEntries: MetadataRoute.Sitemap = blogPostsData.map((post) => ({
    url: `${baseUrl}/blogs/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [
    ...staticEntries,
    ...industryEntries,
    ...technologyEntries,
    ...caseStudyEntries,
    ...blogEntries,
  ];
}
