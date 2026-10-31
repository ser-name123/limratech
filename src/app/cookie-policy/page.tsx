import type { Metadata } from 'next';
import { buildRouteMetadata } from '@/lib/seoEngine';
import LegalPageView from '@/components/LegalPageView';

export async function generateMetadata(): Promise<Metadata> {
  return buildRouteMetadata('/cookie-policy');
}

export default function Page() {
  return <LegalPageView pageKey="cookie-policy" />;
}
