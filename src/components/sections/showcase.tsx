import { Reveal } from '@/components/reveal';
import { SectionHeading } from '@/components/section-heading';
import { SectionOrbs } from '@/components/section-orbs';
import { ImagePlaceholder } from '@/components/ui/image-placeholder';
import { Badge } from '@/components/ui/badge';

// Mock featured work — replace each placeholder with a real campaign image.
const work = [
  { brand: 'Cleah Shop', title: 'Summer Launch campaign', tag: 'Social + Ads' },
  { brand: 'KC Travel', title: 'Destination vlog series', tag: 'Content' },
  { brand: 'Vertex', title: 'Fitness transformation', tag: 'Creators' },
  { brand: 'Monarch', title: 'Brand refresh & reels', tag: 'Production' },
  { brand: 'Lumen', title: 'Product launch funnel', tag: 'Performance' },
  { brand: 'Aster', title: 'Always-on social', tag: 'Management' },
];

export function Showcase() {
  return (
    <section className="section-screen relative isolate overflow-hidden py-24 sm:py-28">
      <SectionOrbs />
      <div className="container">
        <SectionHeading
          eyebrow="Featured work"
          title="Campaigns people remember."
          description="A snapshot of the brands and creators we've helped grow. Swap these placeholders for your real campaign visuals."
        />

        <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-3">
          {work.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 0.06} className="h-full">
              <article className="group h-full overflow-hidden rounded-3xl border border-border bg-card p-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow">
                <ImagePlaceholder
                  ratio="portrait"
                  label={`${item.brand} creative`}
                  hint="Replace with campaign image"
                  className="border-solid border-transparent transition-transform duration-300 group-hover:scale-[1.01]"
                />
                <div className="flex items-center justify-between gap-3 p-3">
                  <div>
                    <p className="text-xs text-muted-foreground">{item.brand}</p>
                    <h3 className="mt-0.5 font-semibold">{item.title}</h3>
                  </div>
                  <Badge tone="brand">{item.tag}</Badge>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
