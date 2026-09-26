import { PageHeader, EmptySection } from '@/components/portal/widgets';

export default function AdminBrandsPage() {
  return (
    <>
      <PageHeader title="Brands" description="Review and manage brand accounts." />
      <EmptySection
        title="Brand management"
        hint="Backed by GET /api/v1/brands (Brand module). Approve, suspend, and inspect brand accounts here."
      />
    </>
  );
}
