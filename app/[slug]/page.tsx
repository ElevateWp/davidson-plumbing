import type { Metadata } from 'next';
import ServiceLandingPage, { getServiceMetadata } from '@/components/sections/services/ServiceLandingPage';
import { SERVICES } from '@/lib/avs-data';

export function generateStaticParams() {
  return SERVICES.map(({ slug }) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  return getServiceMetadata(params.slug);
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  return <ServiceLandingPage slug={params.slug} />;
}

