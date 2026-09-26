import { PageHeader, EmptySection } from '@/components/portal/widgets';

export default function CreatorDeliverablesPage() {
  return (
    <>
      <PageHeader title="Deliverables" description="Upload and track your campaign deliverables." />
      <EmptySection
        title="No active deliverables"
        hint="Once you're accepted into a campaign, your deliverables and their due dates will appear here for upload and review."
      />
    </>
  );
}
