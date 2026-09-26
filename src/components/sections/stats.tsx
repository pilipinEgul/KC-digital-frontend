import { stats } from '@/lib/site';
import { Reveal } from '@/components/reveal';
import { SectionOrbs } from '@/components/section-orbs';

export function Stats() {
  return (
    <section className="section-screen relative isolate overflow-hidden py-16 sm:py-24">
      <SectionOrbs />
      <div className="container">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-brand-gradient px-6 py-14 text-white shadow-glow sm:px-12">
            {/* Subtle texture orbs */}
            <div
              aria-hidden
              className="pointer-events-none absolute -right-16 -top-16 size-56 rounded-full bg-white/10 blur-2xl"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-20 -left-10 size-56 rounded-full bg-white/10 blur-2xl"
            />
            <div className="relative grid gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat, i) => (
                <Reveal key={stat.label} delay={i * 0.08}>
                  <div className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
                    {stat.value}
                  </div>
                  <p className="mt-2 text-sm text-white/80">{stat.label}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
