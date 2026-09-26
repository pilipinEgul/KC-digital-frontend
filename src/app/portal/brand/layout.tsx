import type { Metadata } from 'next';
import { PortalShell } from '@/components/portal/portal-shell';
import { portals } from '@/lib/portal';

export const metadata: Metadata = { title: 'Brand Portal' };

export default function BrandPortalLayout({ children }: { children: React.ReactNode }) {
  return <PortalShell config={portals.brand}>{children}</PortalShell>;
}
