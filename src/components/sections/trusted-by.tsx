import { Hexagon } from 'lucide-react';
import { Reveal } from '@/components/reveal';
import { SectionOrbs } from '@/components/section-orbs';

const brands = ['Northwind', 'Lumen', 'Cleah', 'Vertex', 'Aster', 'Monarch', 'Halo', 'Cascade'];

/** Temporary placeholder logo — swap for real brand SVGs later. */
function BrandLogo({ name }: { name: string }) {
  return (
    <div className="flex shrink-0 items-center gap-3 text-2xl font-bold text-muted-foreground/80 transition-colors hover:text-foreground">
      <Hexagon className="size-8 text-brand" />
      {name}
    </div>
  );
}

export function TrustedBy() {
  return (
    <section className="relative isolate overflow-hidden border-y border-border bg-muted/20 py-12">
      <SectionOrbs />
      <div className="container">
        <Reveal>
          <p className="text-center text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Trusted by ambitious brands
          </p>
        </Reveal>
      </div>

      {/* Edge-faded, auto-scrolling marquee. */}
      <div
        className="group/marquee relative mt-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
      >
        <div className="animate-marquee flex w-max gap-14 pr-14">
          {/* Two copies so the -50% translate loops seamlessly. */}
          {[...brands, ...brands].map((brand, i) => (
            <BrandLogo key={`${brand}-${i}`} name={brand} />
          ))}
        </div>
      </div>
    </section>
  );
}
