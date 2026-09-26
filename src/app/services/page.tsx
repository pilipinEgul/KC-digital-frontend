import type { Metadata } from 'next';
import { PageShell } from '@/components/page-shell';
import { Services } from '@/components/sections/services';

export const metadata: Metadata = { title: 'Services' };

export default function ServicesPage() {
  return (
    <PageShell
      eyebrow="Services"
      title="A full-stack marketing partner."
      description="From strategy and creative to media and technology — everything a modern brand needs to grow."
    >
      <Services />
    </PageShell>
  );
}
