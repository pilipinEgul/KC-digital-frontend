import Image from 'next/image';
import { cn } from '@/lib/utils';

/**
 * KC brand logo — the official KC mark (public/kc-logo.png) in a clean white
 * badge, beside the wordmark. Swap the PNG anytime; a transparent version will
 * drop the white chip nicely.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn('flex items-center gap-2.5 font-display', className)}>
      <span className="grid size-8 place-items-center overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-black/5 md:size-9">
        <Image
          src="/kc-logo.png"
          alt="KC Digital Marketing Services logo"
          width={1080}
          height={1080}
          priority
          className="size-full object-contain"
        />
      </span>
      <span className="flex flex-col leading-none">
        <span className="text-sm font-bold tracking-tight md:text-base">KC Digital</span>
        <span className="mt-0.5 hidden text-[0.6rem] font-medium uppercase tracking-[0.2em] text-muted-foreground sm:block">
          Marketing Services
        </span>
      </span>
    </span>
  );
}
