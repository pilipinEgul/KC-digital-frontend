import { PortalShell } from '@/components/portal/portal-shell';
import { portals } from '@/lib/portal';

// Authenticated admin panel. In Phase 2 this layout will verify an admin
// session server-side and redirect to /control-center/login when absent.
export default function AdminPanelLayout({ children }: { children: React.ReactNode }) {
  return <PortalShell config={portals.admin}>{children}</PortalShell>;
}
