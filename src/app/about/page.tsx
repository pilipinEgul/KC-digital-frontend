import type { Metadata } from 'next';
import { PageShell } from '@/components/page-shell';
import { Company } from '@/components/sections/company';
import { Team } from '@/components/sections/team';

export const metadata: Metadata = { title: 'About' };

export default function AboutPage() {
  return (
    <PageShell
      eyebrow="About"
      title="Building the digital foundation for the KC Group."
      description="Founded in 2024 by Cleah Araujo Belloga, KC Digital Marketing Services (Knowingly Creative Agency) is a DTI-registered agency based in Surallah, South Cotabato — connecting brands, creators, and partners on a platform engineered to scale."
    >
      <Company />
      <Team />
    </PageShell>
  );
}
