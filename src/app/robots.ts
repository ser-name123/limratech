import type { MetadataRoute } from 'next';
import { getServerCmsSnapshot } from '@/lib/cmsReader';

const AI_CRAWLERS = ['GPTBot', 'OAI-SearchBot', 'ClaudeBot', 'PerplexityBot', 'Google-Extended', 'CCBot', 'Bytespider'];

export default async function robots(): Promise<MetadataRoute.Robots> {
  const cms = await getServerCmsSnapshot();
  const baseUrl = (cms.seo?.canonicalDomain || 'https://limradigitech.com').replace(/\/$/, '');
  const crawl = cms.seo?.crawl || {
    allowIndexing: true,
    disallowPaths: ['/api/', '/admin', '/admin/editor'],
    blockAiCrawlers: false,
    additionalSitemaps: [],
  };

  // Master switch: ask everyone to stay out.
  if (crawl.allowIndexing === false) {
    return {
      rules: [{ userAgent: '*', disallow: '/' }],
      sitemap: `${baseUrl}/sitemap.xml`,
      host: baseUrl,
    };
  }

  const disallow = crawl.disallowPaths && crawl.disallowPaths.length ? crawl.disallowPaths : ['/api/', '/admin'];

  const rules: MetadataRoute.Robots['rules'] = [
    {
      userAgent: '*',
      allow: '/',
      disallow,
      ...(crawl.crawlDelay ? { crawlDelay: crawl.crawlDelay } : {}),
    },
  ];

  // AI crawlers: either fully blocked, or allowed with the same disallow list.
  rules.push(
    crawl.blockAiCrawlers
      ? { userAgent: AI_CRAWLERS, disallow: '/' }
      : { userAgent: AI_CRAWLERS, allow: '/', disallow }
  );

  const sitemaps = [`${baseUrl}/sitemap.xml`, ...((crawl.additionalSitemaps as string[]) || [])];

  return {
    rules,
    sitemap: sitemaps,
    host: baseUrl,
  };
}
