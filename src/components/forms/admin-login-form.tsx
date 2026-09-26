'use client';

import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema, type LoginInput } from '@/lib/validations';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Field } from '@/components/ui/field';

export function AdminLoginForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginInput>({ resolver: zodResolver(loginSchema) });

  const onSubmit = async (_data: LoginInput) => {
    // Phase 2: authenticate against Laravel Sanctum with an admin-role check +
    // MFA challenge, set the session cookie, then enter the panel.
    await new Promise((r) => setTimeout(r, 400));
    router.push('/control-center');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <Field label="Admin email" htmlFor="email" error={errors.email?.message}>
        <Input id="email" type="email" placeholder="admin@kc.example" {...register('email')} />
      </Field>
      <Field label="Password" htmlFor="password" error={errors.password?.message}>
        <Input id="password" type="password" placeholder="••••••••" {...register('password')} />
      </Field>
      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? 'Verifying…' : 'Enter Control Center'}
      </Button>
    </form>
  );
}
