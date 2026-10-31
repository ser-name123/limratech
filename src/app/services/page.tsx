import type { Metadata } from 'next';
import { buildRouteMetadata } from '@/lib/seoEngine';
import View from './View';

export async function generateMetadata(): Promise<Metadata> {
  return buildRouteMetadata('/services');
}

export default function Page() {
  return <View />;
}
