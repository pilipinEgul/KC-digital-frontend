import type { Metadata } from 'next';
import { PageShell } from '@/components/page-shell';
import { Ecosystem } from '@/components/sections/ecosystem';

export const metadata: Metadata = { title: 'Our Companies' };

export default function CompaniesPage() {
  return (
    <PageShell
      eyebrow="The KC Ecosystem"
      title="One group. A growing family of companies."
      description="Every KC company runs on the same modular platform, so new ventures launch faster on a shared foundation."
    >
      <Ecosystem />
    </PageShell>
  );
}
