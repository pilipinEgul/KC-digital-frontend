import Link from 'next/link';
import { Check } from 'lucide-react';
import { Reveal } from '@/components/reveal';
import { SectionHeading } from '@/components/section-heading';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

// Mock pricing — the client sets real plans and prices.
const plans = [
  {
    name: 'Basic',
    price: '₱10k',
    period: '/month',
    description: 'For small brands getting started.',
    features: ['2 platforms managed', '8 posts / month', 'Monthly report', 'Email support'],
    popular: false,
  },
  {
    name: 'Standard',
    price: '₱20k',
    period: '/month',
    description: 'For growing brands that want momentum.',
    features: [
      'Everything in Basic',
      '4 platforms managed',
      'Ads management',
      'Creator collaborations',
      'Priority support',
    ],
    popular: true,
  },
  {
    name: 'Premium',
    price: '₱35k',
    period: '/month',
    description: 'For brands scaling aggressively.',
    features: [
      'Everything in Standard',
      'Full-funnel performance ads',
      'Video & content production',
      'Dedicated account manager',
    ],
    popular: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 sm:py-28">
      <div className="container">
        <SectionHeading
          eyebrow="Pricing plan"
          title="Simple plans that scale with you."
          description="Transparent packages with no surprises. Upgrade or cancel anytime."
        />

        <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 0.07} className="h-full">
              <div
                className={cn(
                  'flex h-full flex-col rounded-3xl border p-8 transition-all duration-300',
                  plan.popular
                    ? 'border-transparent bg-brand-gradient text-white shadow-glow lg:-translate-y-3'
                    : 'border-border bg-card hover:-translate-y-1 hover:shadow-glow',
                )}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">{plan.name}</h3>
                  {plan.popular && (
                    <Badge tone="neutral" className="bg-white/20 text-white">
                      Most popular
                    </Badge>
                  )}
                </div>

                <div className="mt-4 flex items-end gap-1">
                  <span className="font-display text-4xl font-bold">{plan.price}</span>
                  <span className={cn('pb-1 text-sm', plan.popular ? 'text-white/80' : 'text-muted-foreground')}>
                    {plan.period}
                  </span>
                </div>
                <p className={cn('mt-2 text-sm', plan.popular ? 'text-white/80' : 'text-muted-foreground')}>
                  {plan.description}
                </p>

                <ul className="mt-6 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <Check
                        className={cn(
                          'mt-0.5 size-4 shrink-0',
                          plan.popular ? 'text-white' : 'text-brand',
                        )}
                      />
                      <span className={plan.popular ? '' : 'text-muted-foreground'}>{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-2">
                  <Link href="/contact" className="block">
                    {plan.popular ? (
                      <Button className="w-full bg-white text-brand hover:bg-white/90">
                        Choose {plan.name}
                      </Button>
                    ) : (
                      <Button variant="outline" className="w-full">
                        Choose {plan.name}
                      </Button>
                    )}
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
