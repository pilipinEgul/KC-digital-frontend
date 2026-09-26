import { Plus } from 'lucide-react';
import { PageHeader, StatusBadge } from '@/components/portal/widgets';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { demoBrandCampaigns } from '@/lib/portal';

export default function BrandCampaignsPage() {
  return (
    <>
      <div className="mb-8 flex items-end justify-between gap-4">
        <PageHeader title="Campaigns" description="Create and track your brand campaigns." />
        <Button className="mb-1">
          <Plus /> New campaign
        </Button>
      </div>

      <Card className="p-0">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-left text-muted-foreground">
                <th className="p-4 font-medium">Campaign</th>
                <th className="p-4 font-medium">Status</th>
                <th className="p-4 font-medium">Budget</th>
                <th className="p-4 font-medium">Creators</th>
                <th className="p-4 font-medium">Updated</th>
              </tr>
            </thead>
            <tbody>
              {demoBrandCampaigns.map((c) => (
                <tr
                  key={c.id}
                  className="border-b border-border/60 transition-colors last:border-0 hover:bg-muted/40"
                >
                  <td className="p-4 font-medium">{c.name}</td>
                  <td className="p-4">
                    <StatusBadge status={c.status} />
                  </td>
                  <td className="p-4 text-muted-foreground">{c.budget}</td>
                  <td className="p-4 text-muted-foreground">{c.creators}</td>
                  <td className="p-4 text-muted-foreground">{c.updatedAt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </>
  );
}
