import type { ReactNode } from 'react';

export type BadgeVariant = 'primary' | 'success' | 'warning' | 'danger';

export type BadgeProps = {
  children: ReactNode;
  variant: BadgeVariant;
};
