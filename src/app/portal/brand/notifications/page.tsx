import { PageHeader } from '@/components/portal/widgets';
import { Card } from '@/components/ui/card';
import { demoNotifications } from '@/lib/portal';

export default function BrandNotificationsPage() {
  return (
    <>
      <PageHeader title="Notifications" description="Everything that needs your attention." />
      <Card className="p-0">
        <ul>
          {demoNotifications.map((n) => (
            <li
              key={n.id}
              className="flex gap-3 border-b border-border/60 p-5 last:border-0"
            >
              <span
                className={`mt-1.5 size-2 shrink-0 rounded-full ${n.unread ? 'bg-brand' : 'bg-border'}`}
                aria-hidden
              />
              <div>
                <p className="font-medium">{n.title}</p>
                <p className="text-sm text-muted-foreground">{n.body}</p>
                <p className="mt-0.5 text-xs text-muted-foreground">{n.time}</p>
              </div>
            </li>
          ))}
        </ul>
      </Card>
    </>
  );
}
