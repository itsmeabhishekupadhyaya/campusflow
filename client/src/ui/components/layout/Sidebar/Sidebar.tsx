import { menuItems, type MenuItemModel } from '../../../../config';
import { useLocation, useNavigate } from 'react-router-dom';

import styles from './Sidebar.module.css';

import { Menu } from '../../Navigation/Menu';

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const activeItem = menuItems.find((item) => item.path === location.pathname);
  const handleNavigation = (item: MenuItemModel) => {
    navigate(item.path);
  };
  return (
    <aside className={styles.sidebar}>
      <Menu
        items={menuItems}
        direction="vertical"
        activeItemId={activeItem?.id}
        onItemClick={handleNavigation}
      />
    </aside>
  );
};

export default Sidebar;
