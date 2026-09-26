import { PageHeader, EmptySection } from '@/components/portal/widgets';

export default function AdminAnnouncementsPage() {
  return (
    <>
      <PageHeader title="Announcements" description="Publish updates to the public site and portals." />
      <EmptySection
        title="Announcement management"
        hint="Draft, schedule, and publish announcements that surface on the public site and inside portals."
      />
    </>
  );
}
