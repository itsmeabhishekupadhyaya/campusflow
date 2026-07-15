import type { LucideIcon } from 'lucide-react';

export type IconSize = 'sm' | 'md' | 'lg';

export type IconProps = {
  icon: LucideIcon;
  size?: IconSize;
  title?: string;
};
