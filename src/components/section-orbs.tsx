import { cn } from '@/lib/utils';

/**
 * Subtle floating gradient orbs used as a shared decorative backdrop across
 * sections (creative theme). Sits behind content via `-z-10`; the parent section
 * must be `relative isolate overflow-hidden` so the orbs are contained and
 * painted above the section background but below the content.
 */
export function SectionOrbs({ className }: { className?: string }) {
  return (
    <div aria-hidden className={cn('pointer-events-none absolute inset-0 -z-10 overflow-hidden', className)}>
      <div className="animate-float absolute -left-24 top-6 size-56 rounded-full bg-brand/10 blur-3xl" />
      <div className="animate-float-slow absolute -right-20 bottom-4 size-64 rounded-full bg-brand-2/10 blur-3xl" />
    </div>
  );
}
