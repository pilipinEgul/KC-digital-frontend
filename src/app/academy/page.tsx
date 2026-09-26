import type { Metadata } from 'next';
import { PageShell } from '@/components/page-shell';

export const metadata: Metadata = { title: 'KC Academy' };

export default function AcademyPage() {
  return (
    <PageShell
      eyebrow="KC Academy"
      title="Learn the craft of modern marketing."
      description="Courses, certifications, coaching, and corporate programs — a full LMS launching as part of the KC ecosystem."
    />
  );
}
