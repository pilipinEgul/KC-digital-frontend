'use client';

import Link from 'next/link';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { HeroShowcase } from '@/components/sections/hero-showcase';

export function Hero() {
  const reduce = useReducedMotion();

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
  };
  const item: Variants = reduce
    ? { hidden: { opacity: 1 }, show: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: 24 },
        show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
      };

  return (
    <section className="relative min-h-[calc(100dvh-var(--header-h))] overflow-hidden bg-spotlight pt-28 pb-20 sm:pt-32">
      {/* Floating decorative orbs (creative theme) */}
      <div
        aria-hidden
        className="animate-float pointer-events-none absolute -left-20 top-24 -z-0 size-64 rounded-full bg-brand/20 blur-3xl"
      />
      <div
        aria-hidden
        className="animate-float-slow pointer-events-none absolute right-0 bottom-10 -z-0 size-72 rounded-full bg-brand-2/20 blur-3xl"
      />
      <div className="container relative grid items-center gap-14 lg:grid-cols-2">
        {/* Left — copy + CTAs */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="text-center lg:text-left"
        >
          <motion.span
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-1.5 text-sm font-medium shadow-sm backdrop-blur"
          >
            <span className="size-1.5 rounded-full bg-brand" />
            Full-service digital marketing agency
          </motion.span>

          <motion.h1
            variants={item}
            className="mt-5 font-display text-4xl font-bold leading-[1.05] text-balance sm:text-5xl lg:text-[3.4rem]"
          >
            Make your business grow with{' '}
            <span className="text-brand-gradient">Digital Marketing</span> that works.
          </motion.h1>

          <motion.p
            variants={item}
            className="mx-auto mt-5 max-w-xl text-base text-muted-foreground text-balance lg:mx-0"
          >
            We help brands grow through social media, ads, creators, and content — turning attention
            into real, measurable results.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start"
          >
            <Link href="/contact">
              <Button size="lg" className="h-14 px-10 text-lg [&_svg]:size-5">
                Get started
                <ArrowRight />
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Right — person image placeholder with floating badges */}
        <motion.div
          initial={reduce ? undefined : { opacity: 0, scale: 0.96 }}
          animate={reduce ? undefined : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="relative mx-auto w-full max-w-md"
        >
          {/* Advanced animated showcase (3D deck, ken-burns, progress). */}
          <HeroShowcase />
        </motion.div>
      </div>
    </section>
  );
}
