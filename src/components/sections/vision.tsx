import { Reveal } from '@/components/reveal';

export function Vision() {
  return (
    <section className="section-screen py-28 sm:py-36">
      <div className="container max-w-4xl text-center">
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-brand">Our vision</p>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="mt-6 font-display text-3xl font-medium leading-tight text-balance sm:text-4xl md:text-5xl">
            To become the digital headquarters of the KC ecosystem — centralizing{' '}
            <span className="text-muted-foreground">
              brands, creators, partners, and investors
            </span>{' '}
            on one scalable platform built to grow for decades.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
