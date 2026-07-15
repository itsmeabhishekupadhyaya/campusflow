import type { MenuItemModel } from '../../../../config';

export interface MenuProps {
  items: MenuItemModel[];

  direction?: 'vertical' | 'horizontal';

  activeItemId?: string;

  onItemClick?: (item: MenuItemModel) => void;
}
