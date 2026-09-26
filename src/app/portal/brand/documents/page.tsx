import { PageHeader, EmptySection } from '@/components/portal/widgets';

export default function BrandDocumentsPage() {
  return (
    <>
      <PageHeader title="Documents" description="Contracts, briefs, and reports shared with you." />
      <EmptySection
        title="No documents yet"
        hint="Files uploaded to Cloudflare R2 by our team — contracts, campaign briefs, and reports — will be listed here."
      />
    </>
  );
}
