import { PageHeader, EmptySection } from '@/components/portal/widgets';

export default function AdminCreatorsPage() {
  return (
    <>
      <PageHeader title="Creators" description="Approve and manage creators in the network." />
      <EmptySection
        title="Creator approvals"
        hint="Pending creator registrations will queue here for review and approval before they appear to brands."
      />
    </>
  );
}
