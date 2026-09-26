import type { Metadata } from 'next';
import { PageShell } from '@/components/page-shell';
import { ContactForm } from '@/components/forms/contact-form';

export const metadata: Metadata = { title: 'Contact' };

export default function ContactPage() {
  return (
    <PageShell
      eyebrow="Contact"
      title="Book a discovery call."
      description="Tell us about your brand and goals. We&apos;ll get back within one business day."
    >
      <div className="mx-auto max-w-xl">
        <ContactForm />
      </div>
    </PageShell>
  );
}
