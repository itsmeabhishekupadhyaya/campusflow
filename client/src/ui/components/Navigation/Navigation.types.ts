import type { MenuItem } from '../../../navigation';

export interface NavigationProps {
  items: MenuItem[];

  direction?: 'vertical' | 'horizontal';

  activeItemId?: string;

  onItemClick?: (item: MenuItem) => void;
}
