import type { Metadata } from 'next';
import { ShieldCheck } from 'lucide-react';
import { AuthShell } from '@/components/auth-shell';
import { AdminLoginForm } from '@/components/forms/admin-login-form';

// Hidden admin login. Not linked anywhere in the public site and never indexed.
export const metadata: Metadata = {
  title: 'Restricted Access',
  robots: { index: false, follow: false },
};

export default function AdminLoginPage() {
  return (
    <AuthShell
      title="Control Center"
      subtitle="Restricted area — authorized administrators only."
      footer={
        <span className="inline-flex items-center gap-1.5">
          <ShieldCheck className="size-3.5" /> Access is monitored and logged.
        </span>
      }
    >
      <AdminLoginForm />
    </AuthShell>
  );
}
