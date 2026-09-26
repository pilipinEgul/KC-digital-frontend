import Image from 'next/image';
import { company } from '@/lib/site';
import { Reveal } from '@/components/reveal';

export function Company() {
  return (
    <section id="company" className="py-24 sm:py-28">
      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Story */}
          <div>
            <Reveal>
              <p className="text-sm font-medium uppercase tracking-[0.16em] text-brand">
                Background of the company
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="text-headline mt-3 font-display font-semibold text-balance">
                About {company.aka}.
              </h2>
            </Reveal>
            <div className="mt-6 space-y-4">
              {company.story.map((paragraph, i) => (
                <Reveal key={i} delay={0.1 + i * 0.05}>
                  <p className="text-muted-foreground text-balance">{paragraph}</p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.3}>
              <dl className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {company.facts.map((fact) => (
                  <div key={fact.label} className="rounded-2xl border border-border bg-card p-4">
                    <dt className="text-xs uppercase tracking-wider text-muted-foreground">
                      {fact.label}
                    </dt>
                    <dd className="mt-1 text-sm font-semibold">{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          {/* Office photo */}
          <Reveal delay={0.1}>
            <figure className="overflow-hidden rounded-4xl border border-border">
              <div className="relative aspect-[4/5]">
                <Image
                  src={company.photo}
                  alt={company.photoCaption}
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="border-t border-border bg-card px-5 py-3 text-center text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
                {company.photoCaption}
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
