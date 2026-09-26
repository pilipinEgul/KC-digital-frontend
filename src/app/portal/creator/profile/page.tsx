'use client';

import { PageHeader } from '@/components/portal/widgets';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Field } from '@/components/ui/field';

export default function CreatorProfilePage() {
  return (
    <>
      <PageHeader title="Profile" description="This is what brands see when they discover you." />
      <Card className="max-w-2xl">
        <CardHeader>
          <CardTitle>Creator details</CardTitle>
        </CardHeader>
        <form
          className="grid gap-5 sm:grid-cols-2"
          onSubmit={(e) => e.preventDefault() /* Phase 2: PATCH creator profile */}
        >
          <Field label="Display name" htmlFor="name">
            <Input id="name" defaultValue="Alex Rivera" />
          </Field>
          <Field label="Niche" htmlFor="niche">
            <Input id="niche" defaultValue="Lifestyle & Travel" />
          </Field>
          <Field label="Instagram" htmlFor="ig">
            <Input id="ig" defaultValue="@alexrivera" />
          </Field>
          <Field label="TikTok" htmlFor="tt">
            <Input id="tt" defaultValue="@alexrivera" />
          </Field>
          <div className="sm:col-span-2">
            <Field label="Bio" htmlFor="bio">
              <textarea
                id="bio"
                rows={4}
                defaultValue="Lifestyle and travel creator focused on premium brand storytelling."
                className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-brand focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
              />
            </Field>
          </div>
          <div className="sm:col-span-2">
            <Button type="submit">Save profile</Button>
          </div>
        </form>
      </Card>
    </>
  );
}
