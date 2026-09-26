import { PageHeader, EmptySection } from '@/components/portal/widgets';

export default function BrandProposalsPage() {
  return (
    <>
      <PageHeader title="Proposals" description="Track proposals from KC Digital and approve them." />
      <EmptySection
        title="No proposals awaiting action"
        hint="When our team sends you a campaign proposal, it will appear here for review, comments, and approval."
      />
    </>
  );
}
