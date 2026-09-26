import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PageHeader, StatCard, StatusBadge } from '@/components/portal/widgets';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { demoBrandStats, demoBrandCampaigns, demoNotifications } from '@/lib/portal';

export default function BrandDashboard() {
  return (
    <>
      <PageHeader
        title="Welcome back 👋"
        description="Here's what's happening across your campaigns today."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {demoBrandStats.map((s) => (
          <StatCard key={s.label} {...s} />
        ))}
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Recent campaigns</CardTitle>
            <Link href="/portal/brand/campaigns">
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
                  <th className="pb-3 font-medium">Status</th>
                  <th className="pb-3 font-medium">Budget</th>
                  <th className="pb-3 font-medium">Creators</th>
                </tr>
              </thead>
              <tbody>
                {demoBrandCampaigns.map((c) => (
                  <tr key={c.id} className="border-b border-border/60 last:border-0">
                    <td className="py-3 pr-4 font-medium">{c.name}</td>
                    <td className="py-3 pr-4">
                      <StatusBadge status={c.status} />
                    </td>
                    <td className="py-3 pr-4 text-muted-foreground">{c.budget}</td>
                    <td className="py-3 text-muted-foreground">{c.creators}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Notifications</CardTitle>
          </CardHeader>
          <ul className="space-y-4">
            {demoNotifications.map((n) => (
              <li key={n.id} className="flex gap-3">
                <span
                  className={`mt-1.5 size-2 shrink-0 rounded-full ${n.unread ? 'bg-brand' : 'bg-border'}`}
                  aria-hidden
                />
                <div>
                  <p className="text-sm font-medium">{n.title}</p>
                  <p className="text-sm text-muted-foreground">{n.body}</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">{n.time}</p>
                </div>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </>
  );
}
