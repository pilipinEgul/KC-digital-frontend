import type { Metadata } from 'next';
import { PageShell } from '@/components/page-shell';

export const metadata: Metadata = { title: 'Portfolio' };

export default function PortfolioPage() {
  return (
    <PageShell
      eyebrow="Portfolio"
      title="Work we&apos;re proud of."
      description="Selected campaigns and productions from across the KC ecosystem. Full case studies arrive in Phase 2."
    />
  );
}
