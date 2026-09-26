import { Plus } from 'lucide-react';
import { PageHeader } from '@/components/portal/widgets';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const items = [
  { id: 'p1', title: 'Brand campaign — reel', meta: '1.2M views' },
  { id: 'p2', title: 'Product review', meta: '480K views' },
  { id: 'p3', title: 'Travel vlog', meta: '2.4M views' },
  { id: 'p4', title: 'Lifestyle photo set', meta: '96K likes' },
];

export default function CreatorPortfolioPage() {
  return (
    <>
      <div className="mb-8 flex items-end justify-between gap-4">
        <PageHeader title="Portfolio" description="Showcase your best work to brands." />
        <Button className="mb-1">
          <Plus /> Add work
        </Button>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <Card key={item.id} className="p-0 overflow-hidden">
            <div
              className="aspect-video bg-gradient-to-br from-brand/20 to-muted"
              aria-hidden
            />
            <div className="p-5">
              <p className="font-medium">{item.title}</p>
              <p className="text-sm text-muted-foreground">{item.meta}</p>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
}
