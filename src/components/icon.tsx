import {
  LayoutDashboard,
  Megaphone,
  FileText,
  FolderClosed,
  Bell,
  Settings,
  Send,
  PackageCheck,
  Images,
  Users,
  Building2,
  Sparkles,
  ScrollText,
  type LucideIcon,
  Circle,
} from 'lucide-react';
import { cn } from '@/lib/utils';

const registry: Record<string, LucideIcon> = {
  LayoutDashboard,
  Megaphone,
  FileText,
  FolderClosed,
  Bell,
  Settings,
  Send,
  PackageCheck,
  Images,
  Users,
  Building2,
  Sparkles,
  ScrollText,
};

/** Render a lucide icon by its string name (used by data-driven nav). */
export function Icon({ name, className }: { name: string; className?: string }) {
  const Cmp = registry[name] ?? Circle;
  return <Cmp className={cn('size-5', className)} />;
}
