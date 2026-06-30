import type { NavigationItem as NavigationItemModel } from '../../../../config';
export interface NavigationItemProps {
  item: NavigationItemModel;

  isActive?: boolean;

  onClick?: (item: NavigationItemModel) => void;
}
