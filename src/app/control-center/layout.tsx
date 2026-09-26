import type { Metadata } from 'next';

// The entire admin area lives at a non-guessable path and must never be indexed.
// The shell (sidebar) is applied by the (panel) route group so the login screen
// can render without it.
export const metadata: Metadata = {
  title: 'Control Center',
  robots: { index: false, follow: false },
};

export default function AdminAreaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
