import type { Metadata } from 'next';
import { buildRouteMetadata } from '@/lib/seoEngine';
import View from './View';

export async function generateMetadata(): Promise<Metadata> {
  return buildRouteMetadata('/sitemap-page');
}

export default function Page() {
  return <View />;
}
