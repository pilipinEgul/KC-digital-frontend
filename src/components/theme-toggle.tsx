'use client';

import * as React from 'react';
import { flushSync } from 'react-dom';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const buttonRef = React.useRef<HTMLButtonElement>(null);

  const toggle = React.useCallback(async () => {
    const next = resolvedTheme === 'dark' ? 'light' : 'dark';

    const doc = document as Document & {
      startViewTransition?: (cb: () => void) => { ready: Promise<void> };
    };
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // No View Transitions support (or user prefers reduced motion) → plain swap.
    if (!doc.startViewTransition || prefersReduced) {
      setTheme(next);
      return;
    }

    // Reveal the new theme with a circle expanding from the toggle button.
    const rect = buttonRef.current?.getBoundingClientRect();
    const x = rect ? rect.left + rect.width / 2 : window.innerWidth / 2;
    const y = rect ? rect.top + rect.height / 2 : 0;
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y),
    );

    const transition = doc.startViewTransition(() => {
      // flushSync forces next-themes' class change to land inside the transition.
      flushSync(() => setTheme(next));
    });

    await transition.ready;

    document.documentElement.animate(
      {
        clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${endRadius}px at ${x}px ${y}px)`],
      },
      {
        duration: 500,
        easing: 'ease-in-out',
        pseudoElement: '::view-transition-new(root)',
      },
    );
  }, [resolvedTheme, setTheme]);

  return (
    <Button
      ref={buttonRef}
      variant="ghost"
      size="icon"
      aria-label="Toggle theme"
      onClick={toggle}
      className="relative overflow-hidden"
    >
      {/* Both icons are always rendered; the .dark class animates the swap. */}
      <Sun className="absolute inset-0 m-auto rotate-90 scale-0 transition-transform duration-500 ease-out dark:rotate-0 dark:scale-100" />
      <Moon className="absolute inset-0 m-auto rotate-0 scale-100 transition-transform duration-500 ease-out dark:-rotate-90 dark:scale-0" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
