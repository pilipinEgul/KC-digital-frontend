/**
 * Portal navigation + demo data.
 * Nav lives here so PortalShell stays generic across Brand / Creator / Admin.
 * The `demo*` exports stand in for API responses until Phase 2 backend wiring;
 * their shapes mirror the planned API Resources.
 */

export type PortalKind = 'brand' | 'creator' | 'admin';

export interface PortalNavItem {
  title: string;
  href: string;
  icon: string; // lucide-react icon name
}

export interface PortalConfig {
  kind: PortalKind;
  label: string;
  basePath: string;
  nav: PortalNavItem[];
}

export const portals: Record<PortalKind, PortalConfig> = {
  brand: {
    kind: 'brand',
    label: 'Brand Portal',
    basePath: '/portal/brand',
    nav: [
      { title: 'Dashboard', href: '/portal/brand', icon: 'LayoutDashboard' },
      { title: 'Campaigns', href: '/portal/brand/campaigns', icon: 'Megaphone' },
      { title: 'Proposals', href: '/portal/brand/proposals', icon: 'FileText' },
      { title: 'Documents', href: '/portal/brand/documents', icon: 'FolderClosed' },
      { title: 'Notifications', href: '/portal/brand/notifications', icon: 'Bell' },
      { title: 'Profile', href: '/portal/brand/profile', icon: 'Settings' },
    ],
  },
  creator: {
    kind: 'creator',
    label: 'Creator Portal',
    basePath: '/portal/creator',
    nav: [
      { title: 'Dashboard', href: '/portal/creator', icon: 'LayoutDashboard' },
      { title: 'Campaigns', href: '/portal/creator/campaigns', icon: 'Megaphone' },
      { title: 'Applications', href: '/portal/creator/applications', icon: 'Send' },
      { title: 'Deliverables', href: '/portal/creator/deliverables', icon: 'PackageCheck' },
      { title: 'Portfolio', href: '/portal/creator/portfolio', icon: 'Images' },
      { title: 'Profile', href: '/portal/creator/profile', icon: 'Settings' },
    ],
  },
  admin: {
    kind: 'admin',
    label: 'Control Center',
    basePath: '/control-center',
    nav: [
      { title: 'Overview', href: '/control-center', icon: 'LayoutDashboard' },
      { title: 'Users', href: '/control-center/users', icon: 'Users' },
      { title: 'Brands', href: '/control-center/brands', icon: 'Building2' },
      { title: 'Creators', href: '/control-center/creators', icon: 'Sparkles' },
      { title: 'Campaigns', href: '/control-center/campaigns', icon: 'Megaphone' },
      { title: 'Announcements', href: '/control-center/announcements', icon: 'Megaphone' },
      { title: 'Activity Logs', href: '/control-center/activity', icon: 'ScrollText' },
    ],
  },
};

// ── Demo data (API-shaped) ──────────────────────────────────────

export type CampaignStatus = 'draft' | 'in_review' | 'active' | 'completed';

export interface DemoCampaign {
  id: string;
  name: string;
  status: CampaignStatus;
  budget: string;
  creators: number;
  updatedAt: string;
}

export const demoBrandCampaigns: DemoCampaign[] = [
  { id: 'c_01', name: 'Summer Launch — Cleah Shop', status: 'active', budget: '₱450,000', creators: 12, updatedAt: '2h ago' },
  { id: 'c_02', name: 'Q3 Awareness Push', status: 'in_review', budget: '₱280,000', creators: 6, updatedAt: '1d ago' },
  { id: 'c_03', name: 'Holiday Teaser', status: 'draft', budget: '₱120,000', creators: 0, updatedAt: '3d ago' },
  { id: 'c_04', name: 'Brand Refresh Series', status: 'completed', budget: '₱610,000', creators: 18, updatedAt: '2w ago' },
];

export const demoBrandStats = [
  { label: 'Active campaigns', value: '3', delta: '+1 this month' },
  { label: 'Creators engaged', value: '36', delta: '+8 this month' },
  { label: 'Proposals pending', value: '2', delta: 'Awaiting review' },
  { label: 'Total reach', value: '4.2M', delta: '+320K this month' },
];

export interface DemoApplication {
  id: string;
  campaign: string;
  brand: string;
  status: 'submitted' | 'shortlisted' | 'accepted' | 'declined';
  appliedAt: string;
}

export const demoCreatorApplications: DemoApplication[] = [
  { id: 'a_01', campaign: 'Summer Launch', brand: 'Cleah Shop', status: 'shortlisted', appliedAt: '5h ago' },
  { id: 'a_02', campaign: 'Fitness Reels Series', brand: 'Vertex', status: 'accepted', appliedAt: '2d ago' },
  { id: 'a_03', campaign: 'Travel Vlog Collab', brand: 'KC Travel', status: 'submitted', appliedAt: '4d ago' },
];

export const demoCreatorStats = [
  { label: 'Open applications', value: '3', delta: '1 shortlisted' },
  { label: 'Active deliverables', value: '2', delta: 'Due this week' },
  { label: 'Profile views', value: '1,240', delta: '+15% this month' },
  { label: 'Match score', value: '92', delta: 'Top 10% of network' },
];

export const demoNotifications = [
  { id: 'n_01', title: 'Proposal approved', body: 'Your Q3 Awareness proposal was approved.', time: '1h ago', unread: true },
  { id: 'n_02', title: 'New creator match', body: '4 creators matched your Summer Launch brief.', time: '3h ago', unread: true },
  { id: 'n_03', title: 'Deliverable submitted', body: 'A creator submitted a deliverable for review.', time: '1d ago', unread: false },
];
