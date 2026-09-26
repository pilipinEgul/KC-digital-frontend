'use client';

import { PageHeader } from '@/components/portal/widgets';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Field } from '@/components/ui/field';

export default function BrandProfilePage() {
  return (
    <>
      <PageHeader title="Profile" description="Manage your brand account details." />
      <Card className="max-w-2xl">
        <CardHeader>
          <CardTitle>Brand details</CardTitle>
        </CardHeader>
        <form
          className="grid gap-5 sm:grid-cols-2"
          onSubmit={(e) => e.preventDefault() /* Phase 2: PATCH /api/v1/brands/{id} */}
        >
          <Field label="Company name" htmlFor="company">
            <Input id="company" defaultValue="Cleah Shop" />
          </Field>
          <Field label="Website" htmlFor="website">
            <Input id="website" type="url" defaultValue="https://cleah.example" />
          </Field>
          <Field label="Industry" htmlFor="industry">
            <Input id="industry" defaultValue="Retail" />
          </Field>
          <Field label="Contact email" htmlFor="email">
            <Input id="email" type="email" defaultValue="team@cleah.example" />
          </Field>
          <div className="sm:col-span-2">
            <Button type="submit">Save changes</Button>
          </div>
        </form>
      </Card>
    </>
  );
}
