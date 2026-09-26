import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PageHeader, StatCard, StatusBadge } from '@/components/portal/widgets';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { demoCreatorStats, demoCreatorApplications } from '@/lib/portal';

export default function CreatorDashboard() {
  return (
    <>
      <PageHeader
        title="Your creator hub"
        description="Track applications, deliverables, and how brands are discovering you."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {demoCreatorStats.map((s) => (
          <StatCard key={s.label} {...s} />
        ))}
      </div>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Recent applications</CardTitle>
          <Link href="/portal/creator/applications">
            <Button variant="ghost" size="sm">
              View all <ArrowRight />
            </Button>
          </Link>
        </CardHeader>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-left text-muted-foreground">
                <th className="pb-3 font-medium">Campaign</th>
                <th className="pb-3 font-medium">Brand</th>
                <th className="pb-3 font-medium">Status</th>
                <th className="pb-3 font-medium">Applied</th>
              </tr>
            </thead>
            <tbody>
              {demoCreatorApplications.map((a) => (
                <tr key={a.id} className="border-b border-border/60 last:border-0">
                  <td className="py-3 pr-4 font-medium">{a.campaign}</td>
                  <td className="py-3 pr-4 text-muted-foreground">{a.brand}</td>
                  <td className="py-3 pr-4">
                    <StatusBadge status={a.status} />
                  </td>
                  <td className="py-3 text-muted-foreground">{a.appliedAt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </>
  );
}
