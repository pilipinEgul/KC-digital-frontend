import { testimonials } from '@/lib/site';
import { Reveal } from '@/components/reveal';
import { SectionHeading } from '@/components/section-heading';
import { SectionOrbs } from '@/components/section-orbs';

export function Testimonials() {
  return (
    <section className="section-screen relative isolate overflow-hidden border-t border-border bg-muted/20 py-28 sm:py-32">
      <SectionOrbs />
      <div className="container">
        <SectionHeading eyebrow="Testimonials" title="Teams that trust KC Digital." />

        <div className="mt-16 grid gap-5 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.author} delay={i * 0.07} className="h-full">
              <figure className="flex h-full flex-col justify-between rounded-4xl border border-border bg-card p-8">
                <blockquote className="text-lg leading-relaxed text-balance">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-8 border-t border-border pt-6">
                  <div className="font-medium">{t.author}</div>
                  <div className="text-sm text-muted-foreground">{t.company}</div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
