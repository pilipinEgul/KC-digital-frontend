import type { Metadata } from 'next';
import Link from 'next/link';
import { AuthShell } from '@/components/auth-shell';
import { RegisterForm } from '@/components/forms/register-form';

export const metadata: Metadata = { title: 'Create account' };

export default function RegisterPage() {
  return (
    <AuthShell
      title="Join KC Digital"
      subtitle="Create your account as a brand or a creator."
      footer={
        <>
          Already have an account?{' '}
          <Link href="/login" className="font-medium text-brand hover:underline">
            Sign in
          </Link>
        </>
      }
    >
      <RegisterForm />
    </AuthShell>
  );
}
