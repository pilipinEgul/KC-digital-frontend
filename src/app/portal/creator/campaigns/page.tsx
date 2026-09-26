import { PageHeader } from '@/components/portal/widgets';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const openCampaigns = [
  { id: 'oc_1', brand: 'Cleah Shop', title: 'Summer Launch reels', budget: '₱15,000 / deliverable', tags: ['Fashion', 'Reels'] },
  { id: 'oc_2', brand: 'KC Travel', title: 'Destination vlog series', budget: '₱40,000 / vlog', tags: ['Travel', 'YouTube'] },
  { id: 'oc_3', brand: 'Vertex', title: 'Fitness transformation', budget: '₱12,000 / post', tags: ['Fitness', 'IG'] },
];

export default function CreatorCampaignsPage() {
  return (
    <>
      <PageHeader title="Open campaigns" description="Campaigns matched to your profile and niche." />
      <div className="grid gap-4 sm:grid-cols-2">
        {openCampaigns.map((c) => (
          <Card key={c.id}>
            <CardHeader>
              <div>
                <p className="text-sm text-muted-foreground">{c.brand}</p>
                <CardTitle className="mt-1">{c.title}</CardTitle>
              </div>
            </CardHeader>
            <div className="flex flex-wrap gap-2">
              {c.tags.map((t) => (
                <Badge key={t} tone="brand">
                  {t}
                </Badge>
              ))}
            </div>
            <div className="mt-6 flex items-center justify-between">
              <span className="text-sm font-medium">{c.budget}</span>
              <Button size="sm">Apply</Button>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
}
