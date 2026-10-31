import type { MetadataRoute } from 'next';
import { getServerCmsSnapshot } from '@/lib/cmsReader';

export default async function robots(): Promise<MetadataRoute.Robots> {
  const cms = await getServerCmsSnapshot();
  const baseUrl = (cms.seo?.canonicalDomain || 'https://limradigitech.com').replace(/\/$/, '');

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin', '/admin/editor'],
      },
      {
        userAgent: ['GPTBot', 'OAI-SearchBot', 'ClaudeBot', 'PerplexityBot', 'Google-Extended'],
        allow: '/',
        disallow: ['/api/', '/admin', '/admin/editor'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
