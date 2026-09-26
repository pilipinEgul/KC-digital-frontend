import Link from 'next/link';
import { Logo } from '@/components/logo';
import { site } from '@/lib/site';

const columns = [
  {
    heading: 'Company',
    links: [
      { title: 'About', href: '/about' },
      { title: 'Our Companies', href: '/companies' },
      { title: 'Strategic Partners', href: '/partners' },
    ],
  },
  {
    heading: 'Platform',
    links: [
      { title: 'Services', href: '/services' },
      { title: 'Portfolio', href: '/portfolio' },
      { title: 'KC Academy', href: '/academy' },
      { title: 'Announcements', href: '/announcements' },
    ],
  },
  {
    heading: 'Portals',
    links: [
      { title: 'Brand Portal', href: '/login' },
      { title: 'Creator Portal', href: '/register' },
      { title: 'Contact', href: '/contact' },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container pt-16 pb-28 md:pb-16">
        <div className="grid gap-12 md:grid-cols-[1.5fr_repeat(3,1fr)]">
          <div className="space-y-4">
            <Logo />
            <p className="max-w-xs text-sm text-muted-foreground">{site.description}</p>
          </div>
          {columns.map((col) => (
            <div key={col.heading} className="space-y-3">
              <h3 className="text-sm font-semibold">{col.heading}</h3>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground sm:flex-row sm:items-center">
          <p>
            © {2026} {site.legalName}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-foreground">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-foreground">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
