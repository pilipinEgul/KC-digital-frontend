import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export function PageHeader({ title, description }: { title: string; description?: string }) {
  return (
    <div className="mb-8">
      <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h1>
      {description && <p className="mt-2 text-muted-foreground">{description}</p>}
    </div>
  );
}

export function StatCard({
  label,
  value,
  delta,
}: {
  label: string;
  value: string;
  delta?: string;
}) {
  return (
    <Card className="p-5">
      <p className="text-sm text-muted-foreground">{label}</p>
      <p className="mt-2 font-display text-3xl font-semibold tracking-tightest">{value}</p>
      {delta && <p className="mt-1 text-xs text-muted-foreground">{delta}</p>}
    </Card>
  );
}

const statusTone: Record<string, 'neutral' | 'brand' | 'success' | 'warning' | 'danger'> = {
  draft: 'neutral',
  in_review: 'warning',
  active: 'success',
  completed: 'brand',
  submitted: 'neutral',
  shortlisted: 'warning',
  accepted: 'success',
  declined: 'danger',
};

export function StatusBadge({ status }: { status: string }) {
  return (
    <Badge tone={statusTone[status] ?? 'neutral'}>{status.replace('_', ' ')}</Badge>
  );
}

/** Consistent placeholder for portal sections not yet backed by the API. */
export function EmptySection({ title, hint }: { title: string; hint: string }) {
  return (
    <Card className="flex min-h-[240px] flex-col items-center justify-center text-center">
      <p className="font-medium">{title}</p>
      <p className="mt-1 max-w-sm text-sm text-muted-foreground">{hint}</p>
    </Card>
  );
}
