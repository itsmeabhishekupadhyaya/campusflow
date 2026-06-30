import type { LucideIcon } from 'lucide-react';

export type NavigationIcon = LucideIcon;

export interface NavigationItem {
  id: string;
  label: string;
  icon: NavigationIcon;
  path: string;

  children?: NavigationItem[];

  badge?: string;

  isVisible?: boolean;

  isDisabled?: boolean;
}
