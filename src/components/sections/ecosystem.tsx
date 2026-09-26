import { ArrowUpRight } from 'lucide-react';
import { ecosystem } from '@/lib/site';
import { Reveal } from '@/components/reveal';
import { SectionHeading } from '@/components/section-heading';
import { SectionOrbs } from '@/components/section-orbs';
import { cn } from '@/lib/utils';

const statusStyles: Record<string, string> = {
  Live: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
  Launching: 'bg-brand/10 text-brand',
  Roadmap: 'bg-muted text-muted-foreground',
};

export function Ecosystem() {
  return (
    <section
      id="ecosystem"
      className="section-screen relative isolate overflow-hidden border-y border-border bg-muted/20 py-28 sm:py-32"
    >
      <SectionOrbs />
      <div className="container">
        <SectionHeading
          eyebrow="The KC Ecosystem"
          title="One group. A growing family of companies."
          description="Every KC company runs on the same modular platform — so new ventures launch faster and share the same foundation."
        />

        <div className="mt-16 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-3">
          {ecosystem.map((company, i) => (
            <Reveal key={company.name} delay={(i % 3) * 0.06} className="h-full">
              <article className="group flex h-full flex-col rounded-4xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8">
                <div className="flex items-start justify-between">
                  <span
                    className={cn(
                      'rounded-full px-3 py-1 text-xs font-medium',
                      statusStyles[company.status] ?? statusStyles.Roadmap,
                    )}
                  >
                    {company.status}
                  </span>
                  <ArrowUpRight className="size-5 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
                <h3 className="mt-5 text-base font-semibold sm:mt-6 sm:text-xl">{company.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground sm:text-base">
                  {company.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
