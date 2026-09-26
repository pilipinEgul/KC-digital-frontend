import { PageHeader, EmptySection } from '@/components/portal/widgets';

export default function AdminCampaignsPage() {
  return (
    <>
      <PageHeader title="Campaigns" description="Oversee every campaign across the platform." />
      <EmptySection
        title="Campaign management"
        hint="Global campaign pipeline — match creators, track status, and manage deliverables across all brands."
      />
    </>
  );
}
