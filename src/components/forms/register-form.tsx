'use client';

import * as React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerSchema, type RegisterInput } from '@/lib/validations';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Field } from '@/components/ui/field';
import { cn } from '@/lib/utils';

export function RegisterForm() {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<RegisterInput>({
    resolver: zodResolver(registerSchema),
    defaultValues: { role: 'brand' },
  });

  const role = watch('role');

  const onSubmit = async (_data: RegisterInput) => {
    // Phase 2: create the account via Laravel Sanctum + role assignment.
    await new Promise((r) => setTimeout(r, 500));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div className="grid grid-cols-2 gap-3">
        {(['brand', 'creator'] as const).map((r) => (
          <button
            key={r}
            type="button"
            onClick={() => setValue('role', r, { shouldValidate: true })}
            className={cn(
              'rounded-xl border p-4 text-left transition-colors',
              role === r ? 'border-brand bg-brand/5' : 'border-border hover:bg-muted',
            )}
          >
            <span className="block text-sm font-semibold capitalize">{r}</span>
            <span className="mt-1 block text-xs text-muted-foreground">
              {r === 'brand' ? 'Run campaigns' : 'Get discovered'}
            </span>
          </button>
        ))}
      </div>

      <Field label="Name" htmlFor="name" error={errors.name?.message}>
        <Input id="name" placeholder="Your name" {...register('name')} />
      </Field>
      <Field label="Email" htmlFor="email" error={errors.email?.message}>
        <Input id="email" type="email" placeholder="you@company.com" {...register('email')} />
      </Field>
      <Field label="Password" htmlFor="password" error={errors.password?.message}>
        <Input id="password" type="password" placeholder="••••••••" {...register('password')} />
      </Field>
      <Field
        label="Confirm password"
        htmlFor="confirmPassword"
        error={errors.confirmPassword?.message}
      >
        <Input
          id="confirmPassword"
          type="password"
          placeholder="••••••••"
          {...register('confirmPassword')}
        />
      </Field>
      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? 'Creating account…' : 'Create account'}
      </Button>
    </form>
  );
}
