import { PageHeader } from '@/components/portal/widgets';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const users = [
  { id: 'u1', name: 'Alex Rivera', email: 'alex@creator.example', role: 'creator', status: 'active' },
  { id: 'u2', name: 'Cleah Shop Team', email: 'team@cleah.example', role: 'brand', status: 'active' },
  { id: 'u3', name: 'Jordan Cruz', email: 'jordan@creator.example', role: 'creator', status: 'pending' },
  { id: 'u4', name: 'Maria Santos', email: 'maria@kc.example', role: 'admin', status: 'active' },
];

const roleTone = { admin: 'brand', brand: 'neutral', creator: 'success' } as const;

export default function AdminUsersPage() {
  return (
    <>
      <PageHeader title="Users" description="Manage accounts, roles, and access." />
      <Card className="p-0">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-left text-muted-foreground">
                <th className="p-4 font-medium">Name</th>
                <th className="p-4 font-medium">Email</th>
                <th className="p-4 font-medium">Role</th>
                <th className="p-4 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u) => (
                <tr
                  key={u.id}
                  className="border-b border-border/60 transition-colors last:border-0 hover:bg-muted/40"
                >
                  <td className="p-4 font-medium">{u.name}</td>
                  <td className="p-4 text-muted-foreground">{u.email}</td>
                  <td className="p-4">
                    <Badge tone={roleTone[u.role as keyof typeof roleTone]}>{u.role}</Badge>
                  </td>
                  <td className="p-4">
                    <Badge tone={u.status === 'active' ? 'success' : 'warning'}>{u.status}</Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </>
  );
}
