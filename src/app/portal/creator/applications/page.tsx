import { PageHeader, StatusBadge } from '@/components/portal/widgets';
import { Card } from '@/components/ui/card';
import { demoCreatorApplications } from '@/lib/portal';

export default function CreatorApplicationsPage() {
  return (
    <>
      <PageHeader title="Applications" description="Every campaign you've applied to." />
      <Card className="p-0">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-left text-muted-foreground">
                <th className="p-4 font-medium">Campaign</th>
                <th className="p-4 font-medium">Brand</th>
                <th className="p-4 font-medium">Status</th>
                <th className="p-4 font-medium">Applied</th>
              </tr>
            </thead>
            <tbody>
              {demoCreatorApplications.map((a) => (
                <tr
                  key={a.id}
                  className="border-b border-border/60 transition-colors last:border-0 hover:bg-muted/40"
                >
                  <td className="p-4 font-medium">{a.campaign}</td>
                  <td className="p-4 text-muted-foreground">{a.brand}</td>
                  <td className="p-4">
                    <StatusBadge status={a.status} />
                  </td>
                  <td className="p-4 text-muted-foreground">{a.appliedAt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </>
  );
}
