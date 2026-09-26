import {
  Megaphone,
  Users,
  TrendingUp,
  Clapperboard,
  MessageCircle,
  Code2,
  Sparkles,
  type LucideIcon,
} from 'lucide-react';
import { services } from '@/lib/site';
import { Reveal } from '@/components/reveal';
import { SectionHeading } from '@/components/section-heading';
import { SectionOrbs } from '@/components/section-orbs';

const icons: Record<string, LucideIcon> = {
  Megaphone,
  Users,
  TrendingUp,
  Clapperboard,
  MessageCircle,
  Code2,
  Sparkles,
};

export function Services() {
  return (
    <section id="services" className="section-screen relative isolate overflow-hidden py-28 sm:py-32">
      <SectionOrbs />
      <div className="container">
        <SectionHeading
          eyebrow="Services"
          title="Everything a modern brand needs, under one roof."
          description="A full-stack marketing partner — from strategy and creative to media and technology."
        />

        <div className="mt-16 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = icons[service.icon] ?? Megaphone;
            return (
              <Reveal key={service.title} delay={(i % 3) * 0.06} className="h-full">
                <article className="group h-full rounded-4xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-[0_20px_60px_-24px_hsl(var(--brand)/0.35)] sm:p-8">
                  <div className="grid size-11 place-items-center rounded-2xl bg-brand-gradient text-white shadow-glow transition-transform duration-300 group-hover:scale-110 sm:size-12">
                    <Icon className="size-5 sm:size-6" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold sm:mt-6 sm:text-xl">{service.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground sm:mt-3 sm:text-base">
                    {service.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
