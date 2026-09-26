import Image from 'next/image';
import { team } from '@/lib/site';
import { Reveal } from '@/components/reveal';
import { SectionHeading } from '@/components/section-heading';
import { SectionOrbs } from '@/components/section-orbs';

interface TeamProps {
  /** Compact = avatars with name/role only (homepage). Full = detailed cards with bios. */
  variant?: 'full' | 'compact';
}

export function Team({ variant = 'full' }: TeamProps) {
  if (variant === 'compact') {
    return (
      <section id="team" className="section-screen relative isolate overflow-hidden py-24 sm:py-28">
        <SectionOrbs />
        <div className="container">
          <SectionHeading
            eyebrow="Our Team"
            title="The people behind KC Digital."
            description="A close-knit team of strategists, creatives, and technologists building the KC ecosystem."
          />

          <div className="mt-16 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
            {team.map((member, i) => (
              <Reveal key={member.name} delay={(i % 6) * 0.05} className="text-center">
                <div className="relative mx-auto size-24 overflow-hidden rounded-full ring-2 ring-border">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    sizes="96px"
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-4 text-sm font-semibold">{member.name}</h3>
                <p className="mt-1 text-xs text-muted-foreground text-balance">{member.role}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="team" className="section-screen relative isolate overflow-hidden py-24 sm:py-28">
      <SectionOrbs />
      <div className="container">
        <SectionHeading
          eyebrow="Our Team"
          title="The people behind KC Digital."
          description="A close-knit team of strategists, creatives, and technologists building the KC ecosystem."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member, i) => (
            <Reveal key={member.name} delay={(i % 3) * 0.06} className="h-full">
              <article className="group h-full rounded-4xl border border-border bg-card p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-[0_20px_60px_-24px_hsl(var(--brand)/0.35)]">
                <div className="relative mx-auto size-28 overflow-hidden rounded-full ring-2 ring-border transition-colors group-hover:ring-brand/40">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    sizes="112px"
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-6 text-lg font-semibold">{member.name}</h3>
                <p className="mt-1 text-sm font-medium text-brand">{member.role}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground text-balance">
                  {member.bio}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
