import type { Metadata } from 'next';
import { buildRouteMetadata } from '@/lib/seoEngine';
import LegalPageView from '@/components/LegalPageView';

export async function generateMetadata(): Promise<Metadata> {
  return buildRouteMetadata('/acceptable-use-policy');
}

export default function Page() {
  return <LegalPageView pageKey="acceptable-use-policy" />;
}
