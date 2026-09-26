'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, LogOut } from 'lucide-react';
import type { PortalConfig } from '@/lib/portal';
import { cn } from '@/lib/utils';
import { Logo } from '@/components/logo';
import { Icon } from '@/components/icon';
import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';

export function PortalShell({
  config,
  children,
}: {
  config: PortalConfig;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  const isActive = (href: string) =>
    href === config.basePath ? pathname === href : pathname.startsWith(href);

  // Admins return to their hidden login on sign-out; others to the public site.
  const signOutHref = config.kind === 'admin' ? `${config.basePath}/login` : '/';

  const NavLinks = () => (
    <nav className="flex flex-col gap-1">
      {config.nav.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          onClick={() => setOpen(false)}
          aria-current={isActive(item.href) ? 'page' : undefined}
          className={cn(
            'flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors',
            isActive(item.href)
              ? 'bg-brand/10 text-brand'
              : 'text-muted-foreground hover:bg-muted hover:text-foreground',
          )}
        >
          <Icon name={item.icon} className="size-[18px]" />
          {item.title}
        </Link>
      ))}
    </nav>
  );

  return (
    <div className="min-h-dvh bg-muted/20">
      {/* Sidebar (desktop) */}
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-64 flex-col border-r border-border bg-card lg:flex">
        <div className="flex h-16 items-center border-b border-border px-6">
          <Link href="/">
            <Logo />
          </Link>
        </div>
        <div className="flex-1 overflow-y-auto p-4">
          <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            {config.label}
          </p>
          <NavLinks />
        </div>
        <div className="border-t border-border p-4">
          <Link href={signOutHref}>
            <Button variant="ghost" size="sm" className="w-full justify-start">
              <LogOut className="size-[18px]" /> Sign out
            </Button>
          </Link>
        </div>
      </aside>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            aria-label="Close menu"
            className="absolute inset-0 bg-black/40"
            onClick={() => setOpen(false)}
          />
          <aside className="absolute inset-y-0 left-0 flex w-72 flex-col bg-card p-4">
            <div className="mb-4 flex items-center justify-between">
              <Logo />
              <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
                <X />
              </Button>
            </div>
            <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              {config.label}
            </p>
            <NavLinks />
          </aside>
        </div>
      )}

      {/* Main column */}
      <div className="lg:pl-64">
        <header className="glass sticky top-0 z-30 flex h-16 items-center justify-between border-b border-border px-4 sm:px-6">
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              aria-label="Open menu"
              onClick={() => setOpen(true)}
            >
              <Menu />
            </Button>
            <span className="font-medium">{config.label}</span>
          </div>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <div
              className="grid size-9 place-items-center rounded-full bg-brand-gradient font-display text-sm font-semibold text-white"
              aria-hidden
            >
              KC
            </div>
          </div>
        </header>

        <main className="mx-auto max-w-6xl p-4 sm:p-6 lg:p-8">{children}</main>
      </div>
    </div>
  );
}
