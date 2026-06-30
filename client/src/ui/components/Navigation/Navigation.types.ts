import type { NavigationItem } from '../../../config';

export interface NavigationProps {
  items: NavigationItem[];

  direction?: 'vertical' | 'horizontal';

  activeItemId?: string;

  onItemClick?: (item: NavigationItem) => void;
}
