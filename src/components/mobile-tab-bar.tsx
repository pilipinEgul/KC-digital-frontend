'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, LayoutGrid, Images, Info, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';

const tabs = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/services', label: 'Services', icon: LayoutGrid },
  { href: '/portfolio', label: 'Work', icon: Images },
  { href: '/about', label: 'About', icon: Info },
] as const;

/**
 * App-style bottom navigation for mobile (à la Maya / GCash). Fixed to the
 * bottom on phones only (`md:hidden`), with a raised center "Book" action.
 * Hidden inside the portals/admin, which have their own shell.
 */
export function MobileTabBar() {
  const pathname = usePathname();

  if (pathname.startsWith('/portal') || pathname.startsWith('/control-center')) {
    return null;
  }

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <nav
      aria-label="Primary"
      className="glass fixed inset-x-0 bottom-0 z-50 border-t border-border pb-[env(safe-area-inset-bottom)] md:hidden"
    >
      <div className="relative grid grid-cols-5 items-end px-2 py-2">
        {tabs.slice(0, 2).map((t) => (
          <TabLink key={t.href} {...t} active={isActive(t.href)} />
        ))}

        {/* Raised center action */}
        <div className="flex justify-center">
          <Link
            href="/contact"
            aria-label="Book a call"
            className="-mt-8 flex size-14 flex-col items-center justify-center rounded-full bg-brand-gradient text-white shadow-glow ring-4 ring-background"
          >
            <Phone className="size-5" />
          </Link>
        </div>

        {tabs.slice(2).map((t) => (
          <TabLink key={t.href} {...t} active={isActive(t.href)} />
        ))}
      </div>
    </nav>
  );
}

function TabLink({
  href,
  label,
  icon: Icon,
  active,
}: {
  href: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      aria-current={active ? 'page' : undefined}
      className={cn(
        'flex flex-col items-center gap-1 rounded-xl py-1.5 text-[0.65rem] font-medium transition-colors',
        active ? 'text-brand' : 'text-muted-foreground',
      )}
    >
      <Icon className="size-5" />
      {label}
    </Link>
  );
}
