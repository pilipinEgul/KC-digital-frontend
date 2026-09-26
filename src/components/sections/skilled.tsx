import Link from 'next/link';
import { Check } from 'lucide-react';
import { Reveal } from '@/components/reveal';
import { SectionOrbs } from '@/components/section-orbs';
import { Button } from '@/components/ui/button';

const points = [
  'Dedicated strategy for every brand',
  'Transparent reporting and results',
  'Creative that stops the scroll',
];

export function Skilled() {
  return (
    <section
      id="video"
      className="section-screen relative isolate scroll-mt-20 overflow-hidden border-y border-border bg-muted/30 py-24 sm:py-28"
    >
      <SectionOrbs />
      <div className="container grid items-center gap-14 lg:grid-cols-2">
        {/* Brand video */}
        <Reveal>
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="pointer-events-none aspect-video w-full rounded-3xl object-cover shadow-glow ring-1 ring-black/5"
          >
            <source src="/kc-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Reveal>

        {/* Copy */}
        <div>
          <Reveal>
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-brand">
              About the agency
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="text-headline mt-3 font-display font-bold text-balance">
              We&apos;re skilled to provide <span className="text-brand-gradient">better service.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-lg text-muted-foreground text-balance">
              From strategy to execution, KC Digital blends creativity and data to help brands and
              creators grow with confidence.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <ul className="mt-6 space-y-3">
              {points.map((p) => (
                <li key={p} className="flex items-center gap-3">
                  <span className="grid size-6 shrink-0 place-items-center rounded-full bg-brand/10 text-brand">
                    <Check className="size-4" />
                  </span>
                  <span className="text-sm">{p}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact">
                <Button size="lg" className="h-14 px-10 text-lg">
                  Get started
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="h-14 px-10 text-lg">
                  Contact us
                </Button>
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
