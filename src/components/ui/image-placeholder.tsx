import { ImageIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

const ratios: Record<string, string> = {
  video: 'aspect-video', // 16:9
  wide: 'aspect-[21/9]',
  square: 'aspect-square',
  portrait: 'aspect-[4/5]',
  photo: 'aspect-[3/4]',
};

/**
 * Template image slot — a clearly-marked placeholder the client replaces with a
 * real photo/graphic. Deliberately looks unfinished (dashed border + label) so
 * it reads as "drop your image here", not final art.
 */
export function ImagePlaceholder({
  label = 'Image placeholder',
  hint = 'Replace with your photo',
  ratio = 'video',
  className,
}: {
  label?: string;
  hint?: string;
  ratio?: keyof typeof ratios | 'video' | 'wide' | 'square' | 'portrait' | 'photo';
  className?: string;
}) {
  return (
    <div
      className={cn(
        'relative flex items-center justify-center overflow-hidden rounded-2xl border border-dashed border-brand/30 bg-gradient-to-br from-brand/10 to-brand-2/10',
        ratios[ratio] ?? ratios.video,
        className,
      )}
    >
      {/* faint diagonal hatch so it's obviously a placeholder */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:repeating-linear-gradient(45deg,currentColor_0,currentColor_1px,transparent_0,transparent_10px)] text-brand"
      />
      <div className="relative flex flex-col items-center gap-2 px-4 text-center">
        <div className="grid size-11 place-items-center rounded-xl bg-brand-gradient text-white shadow-glow">
          <ImageIcon className="size-5" />
        </div>
        <span className="text-sm font-semibold text-foreground/80">{label}</span>
        <span className="text-xs text-muted-foreground">{hint}</span>
      </div>
    </div>
  );
}
