import type { ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;

  variant?: 'primary' | 'secondary' | 'success' | 'danger';

  size?: 'sm' | 'md' | 'lg';
}
