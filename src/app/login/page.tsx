import type { Metadata } from 'next';
import Link from 'next/link';
import { AuthShell } from '@/components/auth-shell';
import { LoginForm } from '@/components/forms/login-form';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = { title: 'Log in' };

export default function LoginPage() {
  return (
    <AuthShell
      title="Welcome back"
      subtitle="Sign in to your Brand or Creator portal."
      footer={
        <>
          Don&apos;t have an account?{' '}
          <Link href="/register" className="font-medium text-brand hover:underline">
            Create one
          </Link>
        </>
      }
    >
      <LoginForm />

      {/* Demo portal entry points (auth wiring lands in Phase 2). */}
      <div className="mt-8">
        <div className="relative text-center">
          <span className="relative z-10 bg-card px-3 text-xs uppercase tracking-wider text-muted-foreground">
            Explore the demo portals
          </span>
          <span className="absolute inset-x-0 top-1/2 -z-0 h-px bg-border" aria-hidden />
        </div>
        <div className="mt-4 grid grid-cols-2 gap-3">
          <Link href="/portal/brand">
            <Button variant="outline" size="sm" className="w-full">
              Brand
            </Button>
          </Link>
          <Link href="/portal/creator">
            <Button variant="outline" size="sm" className="w-full">
              Creator
            </Button>
          </Link>
        </div>
      </div>
    </AuthShell>
  );
}
