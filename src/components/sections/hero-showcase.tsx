'use client';

import * as React from 'react';
import Image from 'next/image';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';

// KC campaign posts cycled in the hero. Manage files in /public/hero.
const slides = [
  '/hero/kc-1.jpg',
  '/hero/kc-2.jpg',
  '/hero/kc-3.png',
  '/hero/kc-4.jpg',
  '/hero/kc-5.jpg',
];

const INTERVAL = 4200;

export function HeroShowcase() {
  const reduce = useReducedMotion();
  const [index, setIndex] = React.useState(0);

  // Continuous, always-on loop through the slides.
  React.useEffect(() => {
    const t = setTimeout(() => setIndex((i) => (i + 1) % slides.length), INTERVAL);
    return () => clearTimeout(t);
  }, [index]);

  return (
    <div className="relative [perspective:1200px]">
      {/* Rotating conic gradient glow */}
      <motion.div
        aria-hidden
        className="absolute -inset-6 -z-10 rounded-[2.75rem] opacity-60 blur-2xl"
        style={{
          background:
            'conic-gradient(from 0deg, hsl(var(--brand) / 0.55), hsl(var(--brand-2) / 0.55), hsl(var(--brand) / 0.55))',
        }}
        animate={reduce ? undefined : { rotate: 360 }}
        transition={{ duration: 18, ease: 'linear', repeat: Infinity }}
      />

      {/* Deck cards behind for depth */}
      <div
        aria-hidden
        className="absolute inset-0 translate-x-3 translate-y-4 rotate-3 rounded-3xl border border-border bg-card/60 shadow-lg backdrop-blur"
      />
      <div
        aria-hidden
        className="absolute inset-0 -translate-x-3 translate-y-2 -rotate-3 rounded-3xl border border-border bg-card/60 shadow-lg backdrop-blur"
      />

      {/* Active slide */}
      <div className="relative aspect-square w-full overflow-hidden rounded-3xl bg-muted shadow-glow ring-1 ring-black/5 [transform-style:preserve-3d]">
        <AnimatePresence initial={false}>
          <motion.div
            key={index}
            className="absolute inset-0"
            initial={{ opacity: 0, rotateY: reduce ? 0 : -14, scale: 0.9, filter: 'blur(8px)' }}
            animate={{ opacity: 1, rotateY: 0, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, rotateY: reduce ? 0 : 14, scale: 0.92, filter: 'blur(8px)' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Ken-Burns zoom */}
            <motion.div
              className="absolute inset-0"
              initial={{ scale: 1 }}
              animate={reduce ? undefined : { scale: 1.09 }}
              transition={{ duration: INTERVAL / 1000 + 0.7, ease: 'linear' }}
            >
              <Image
                src={slides[index]!}
                alt="KC Digital campaign"
                fill
                priority={index === 0}
                sizes="(max-width: 1024px) 90vw, 40vw"
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Sheen */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-white/5"
        />

        {/* Progress bar */}
        <div className="absolute inset-x-0 bottom-0 z-10 h-1 bg-white/20">
          <motion.div
            key={`${index}-bar`}
            className="h-full bg-brand-gradient"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: INTERVAL / 1000, ease: 'linear' }}
          />
        </div>
      </div>

      {/* Dots */}
      <div className="relative z-10 mt-4 flex justify-center gap-1.5">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Show slide ${i + 1}`}
            aria-current={i === index}
            onClick={() => setIndex(i)}
            className={cn(
              'h-2 rounded-full transition-all',
              i === index ? 'w-6 bg-brand' : 'w-2 bg-border hover:bg-brand/50',
            )}
          />
        ))}
      </div>
    </div>
  );
}
