import type { ComponentPropsWithoutRef } from 'react';

export interface ButtonGroupProps extends ComponentPropsWithoutRef<'div'> {
  gap?: 'sm' | 'md' | 'lg';
}
