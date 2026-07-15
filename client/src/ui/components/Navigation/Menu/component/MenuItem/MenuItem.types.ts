import type { MenuItemModel as MenuItemModel } from '../../../../../../config';
export interface MenuItemProps {
  item: MenuItemModel;

  isActive?: boolean;

  onClick?: (item: MenuItemModel) => void;
}
