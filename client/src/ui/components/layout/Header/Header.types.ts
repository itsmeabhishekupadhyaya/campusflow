import type { ReactNode } from 'react';
import type { HeaderUser } from '../../../../shared/models/HeaderUser';

export interface HeaderProps {
  appName: string;

  user: HeaderUser;

  leftContent?: ReactNode;

  rightContent?: ReactNode;
}
