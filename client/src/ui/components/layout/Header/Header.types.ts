import type { ReactNode } from 'react';
import type { HeaderUser } from '../../../../shared/models/HeaderUser';

export interface HeaderProps {
  user: HeaderUser;

  leftContent?: ReactNode;

  rightContent?: ReactNode;
}
