import type { LucideIcon } from 'lucide-react';

export type NavigationIcon = LucideIcon;

export interface MenuItemModel {
  id: string;
  label: string;
  icon: NavigationIcon;
  path: string;

  children?: MenuItemModel[];

  badge?: string;

  isVisible?: boolean;

  isDisabled?: boolean;
}
