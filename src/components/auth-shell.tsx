import Link from 'next/link';
import { Logo } from '@/components/logo';

/** Centered, minimal shell for auth screens (login / register). */
export function AuthShell({
  title,
  subtitle,
  children,
  footer,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  footer: React.ReactNode;
}) {
  return (
    <div className="grid min-h-dvh place-items-center bg-spotlight px-5 py-16">
      <div className="w-full max-w-md">
        <Link href="/" className="mx-auto mb-10 flex w-fit">
          <Logo />
        </Link>
        <div className="rounded-4xl border border-border bg-card p-8 shadow-sm sm:p-10">
          <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
          <p className="mt-2 text-sm text-muted-foreground">{subtitle}</p>
          <div className="mt-8">{children}</div>
        </div>
        <p className="mt-6 text-center text-sm text-muted-foreground">{footer}</p>
      </div>
    </div>
  );
}
