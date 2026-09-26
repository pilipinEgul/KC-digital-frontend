'use client';

import * as React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Check } from 'lucide-react';
import { contactSchema, type ContactInput } from '@/lib/validations';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Field } from '@/components/ui/field';

export function ContactForm() {
  const [sent, setSent] = React.useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactInput>({ resolver: zodResolver(contactSchema) });

  const onSubmit = async (_data: ContactInput) => {
    // Phase 2: POST to /api/v1/contact via the signed API client.
    await new Promise((r) => setTimeout(r, 600));
    setSent(true);
  };

  if (sent) {
    return (
      <div className="rounded-4xl border border-border bg-card p-10 text-center">
        <div className="mx-auto grid size-12 place-items-center rounded-full bg-brand/10 text-brand">
          <Check />
        </div>
        <h3 className="mt-5 text-xl font-semibold">Thanks — we&apos;ll be in touch.</h3>
        <p className="mt-2 text-muted-foreground">
          Your message is on its way. Expect a reply within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <Field label="Name" htmlFor="name" error={errors.name?.message}>
        <Input id="name" placeholder="Your name" {...register('name')} />
      </Field>
      <Field label="Email" htmlFor="email" error={errors.email?.message}>
        <Input id="email" type="email" placeholder="you@company.com" {...register('email')} />
      </Field>
      <Field label="Company (optional)" htmlFor="company" error={errors.company?.message}>
        <Input id="company" placeholder="Company name" {...register('company')} />
      </Field>
      <Field label="Message" htmlFor="message" error={errors.message?.message}>
        <textarea
          id="message"
          rows={5}
          placeholder="Tell us about your brand and goals…"
          className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-brand focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
          {...register('message')}
        />
      </Field>
      <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? 'Sending…' : 'Send message'}
      </Button>
    </form>
  );
}
