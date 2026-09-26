import type { Metadata } from 'next';
import { PageShell } from '@/components/page-shell';

export const metadata: Metadata = { title: 'Announcements' };

export default function AnnouncementsPage() {
  return (
    <PageShell
      eyebrow="Announcements"
      title="News from across the ecosystem."
      description="Product updates, launches, and stories from the KC Group. Backed by the Announcement module in Phase 2."
    />
  );
}
