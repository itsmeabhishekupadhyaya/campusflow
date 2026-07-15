import type { ReactNode } from 'react';

export interface ErrorStateProps {
  title: string;
  description?: string;
  action?: ReactNode;
}
