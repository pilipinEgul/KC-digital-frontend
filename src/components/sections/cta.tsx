import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/reveal';
import { SectionOrbs } from '@/components/section-orbs';
import { Button } from '@/components/ui/button';

export function CTA() {
  return (
    <section className="section-screen relative isolate overflow-hidden py-28 sm:py-32">
      <SectionOrbs />
      <div className="container">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] border border-border bg-spotlight px-8 py-20 text-center sm:px-16">
            <h2 className="text-headline mx-auto max-w-3xl font-display font-semibold text-balance">
              Ready to build something premium?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground text-balance">
              Book a discovery call and we&apos;ll map out a plan tailored to your brand — no
              obligations.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/contact">
                <Button size="lg">
                  Book a discovery call
                  <ArrowRight />
                </Button>
              </Link>
              <Link href="/register">
                <Button size="lg" variant="outline">
                  Join as a creator
                </Button>
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
