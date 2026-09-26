import type { Metadata } from 'next';
import { PageShell } from '@/components/page-shell';

export const metadata: Metadata = { title: 'Strategic Partners' };

export default function PartnersPage() {
  return (
    <PageShell
      eyebrow="Strategic Partners"
      title="Growing better, together."
      description="We partner with platforms, agencies, and brands that share our standard of quality. A dedicated partner dashboard is on the roadmap."
    />
  );
}
