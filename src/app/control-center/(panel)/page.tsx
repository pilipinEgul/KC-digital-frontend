import { PageHeader, StatCard } from '@/components/portal/widgets';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';

const adminStats = [
  { label: 'Total users', value: '1,284', delta: '+42 this week' },
  { label: 'Active brands', value: '96', delta: '+5 this week' },
  { label: 'Creators', value: '512', delta: '3 pending approval' },
  { label: 'Live campaigns', value: '28', delta: '+4 this week' },
];

const activity = [
  { id: 'l1', who: 'admin@kc', what: 'approved creator "Alex Rivera"', when: '10m ago' },
  { id: 'l2', who: 'system', what: 'rejected signed request (nonce replay) from client kc_web', when: '32m ago' },
  { id: 'l3', who: 'brand:Cleah', what: 'submitted campaign "Summer Launch"', when: '1h ago' },
  { id: 'l4', who: 'admin@kc', what: 'published announcement "Q3 roadmap"', when: '3h ago' },
];

export default function AdminOverview() {
  return (
    <>
      <PageHeader title="Control Center" description="Platform-wide overview and operations." />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {adminStats.map((s) => (
          <StatCard key={s.label} {...s} />
        ))}
      </div>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Recent activity</CardTitle>
        </CardHeader>
        <ul className="divide-y divide-border/60 text-sm">
          {activity.map((a) => (
            <li key={a.id} className="flex items-center justify-between gap-4 py-3">
              <span>
                <span className="font-medium">{a.who}</span>{' '}
                <span className="text-muted-foreground">{a.what}</span>
              </span>
              <span className="shrink-0 text-xs text-muted-foreground">{a.when}</span>
            </li>
          ))}
        </ul>
      </Card>
    </>
  );
}
