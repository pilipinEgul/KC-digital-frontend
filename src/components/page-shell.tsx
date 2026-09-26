import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Reveal } from '@/components/reveal';

interface PageShellProps {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
}

/**
 * Standard wrapper for interior marketing pages: fixed nav, a spacious hero
 * header, optional body content, and the shared footer. Keeps every route
 * visually consistent with the homepage while Phase 2 fills in real content.
 */
export function PageShell({ eyebrow, title, description, children }: PageShellProps) {
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-spotlight">
          <div className="container flex min-h-[48vh] flex-col justify-center pt-24 pb-16">
            {eyebrow && (
              <Reveal>
                <p className="text-sm font-medium uppercase tracking-[0.16em] text-brand">
                  {eyebrow}
                </p>
              </Reveal>
            )}
            <Reveal delay={0.05}>
              <h1 className="text-display mt-3 max-w-4xl font-display font-semibold text-balance">
                {title}
              </h1>
            </Reveal>
            {description && (
              <Reveal delay={0.1}>
                <p className="mt-6 max-w-2xl text-lg text-muted-foreground text-balance">
                  {description}
                </p>
              </Reveal>
            )}
          </div>
        </section>
        {children && <div className="container py-16">{children}</div>}
      </main>
      <Footer />
    </>
  );
}
