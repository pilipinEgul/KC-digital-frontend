import type { Metadata } from 'next';
import { PortalShell } from '@/components/portal/portal-shell';
import { portals } from '@/lib/portal';

export const metadata: Metadata = { title: 'Creator Portal' };

export default function CreatorPortalLayout({ children }: { children: React.ReactNode }) {
  return <PortalShell config={portals.creator}>{children}</PortalShell>;
}
