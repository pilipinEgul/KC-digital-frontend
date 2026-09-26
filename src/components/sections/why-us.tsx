import { Users, Headphones, Rocket, Wand2, type LucideIcon } from 'lucide-react';
import { Reveal } from '@/components/reveal';
import { SectionHeading } from '@/components/section-heading';
import { SectionOrbs } from '@/components/section-orbs';

const features: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: 'Expert Team',
    description: 'A senior team of strategists, creatives, and media buyers behind every campaign.',
    icon: Users,
  },
  {
    title: '24/7 Support',
    description: 'Always-on communication and reporting so you are never left in the dark.',
    icon: Headphones,
  },
  {
    title: 'Rapid Growth',
    description: 'Data-driven funnels and content built to compound your results month over month.',
    icon: Rocket,
  },
  {
    title: 'Easy Solutions',
    description: 'One partner for social, ads, content, web, and AI — simple and streamlined.',
    icon: Wand2,
  },
];

export function WhyUs() {
  return (
    <section className="section-screen relative isolate overflow-hidden py-24 sm:py-28">
      <SectionOrbs />
      <div className="container">
        <SectionHeading
          eyebrow="Why KC Digital"
          title="Grow with our digital marketing experts."
          description="Everything your brand needs to stand out and scale — under one roof."
        />

        <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={(i % 4) * 0.06} className="h-full">
              <article className="group h-full rounded-3xl border border-border bg-card p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-glow sm:p-7">
                <div className="mx-auto grid size-12 place-items-center rounded-2xl bg-brand-gradient text-white shadow-glow transition-transform duration-300 group-hover:scale-110 sm:size-14">
                  <f.icon className="size-6 sm:size-7" />
                </div>
                <h3 className="mt-4 text-base font-semibold sm:mt-5 sm:text-lg">{f.title}</h3>
                <p className="mt-2 text-xs text-muted-foreground sm:text-sm">{f.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
