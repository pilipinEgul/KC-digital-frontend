import { PageHeader } from '@/components/portal/widgets';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const logs = [
  { id: 'g1', actor: 'admin@kc', event: 'user.role.updated', target: 'jordan@creator', tone: 'brand', when: '2026-08-06 09:12' },
  { id: 'g2', actor: 'system', event: 'signature.rejected', target: 'nonce replay (kc_web)', tone: 'danger', when: '2026-08-06 08:40' },
  { id: 'g3', actor: 'brand:Cleah', event: 'campaign.created', target: 'Summer Launch', tone: 'success', when: '2026-08-06 08:05' },
  { id: 'g4', actor: 'admin@kc', event: 'login.success', target: '203.0.113.24', tone: 'neutral', when: '2026-08-06 07:58' },
] as const;

export default function AdminActivityPage() {
  return (
    <>
      <PageHeader title="Activity Logs" description="Security and audit trail across the platform." />
      <Card className="p-0">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-left text-muted-foreground">
                <th className="p-4 font-medium">Actor</th>
                <th className="p-4 font-medium">Event</th>
                <th className="p-4 font-medium">Target</th>
                <th className="p-4 font-medium">Time</th>
              </tr>
            </thead>
            <tbody>
              {logs.map((l) => (
                <tr key={l.id} className="border-b border-border/60 last:border-0">
                  <td className="p-4 font-medium">{l.actor}</td>
                  <td className="p-4">
                    <Badge tone={l.tone}>{l.event}</Badge>
                  </td>
                  <td className="p-4 text-muted-foreground">{l.target}</td>
                  <td className="p-4 font-mono text-xs text-muted-foreground">{l.when}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </>
  );
}
