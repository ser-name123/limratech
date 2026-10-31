import type { MetadataRoute } from 'next';
import { getServerCmsSnapshot } from '@/lib/cmsReader';

export default async function manifest(): Promise<MetadataRoute.Manifest> {
  const cms = await getServerCmsSnapshot();
  const m = cms.seo?.manifest || {
    name: 'LIMRA Digitech',
    shortName: 'LIMRA',
    themeColor: '#7e22ce',
    backgroundColor: '#f8fafc',
  };

  return {
    name: m.name,
    short_name: m.shortName,
    description: cms.seo?.metaDescription || 'LIMRA Digitech — Smart Digital Solutions',
    start_url: '/',
    display: 'standalone',
    background_color: m.backgroundColor,
    theme_color: m.themeColor,
    icons: [
      { src: '/favicon.png', sizes: '512x512', type: 'image/png' },
      { src: '/limra-logo.png', sizes: '192x192', type: 'image/png' },
    ],
  };
}
