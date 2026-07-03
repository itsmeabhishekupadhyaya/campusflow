import { navigationItems, type NavigationItem } from '../../../../config';
import { useLocation, useNavigate } from 'react-router-dom';

import styles from './Sidebar.module.css';

import { Navigation } from '../../Navigation';

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const activeItem = navigationItems.find((item) => item.path === location.pathname);
  const handleNavigation = (item: NavigationItem) => {
    navigate(item.path);
  };
  return (
    <aside className={styles.sidebar}>
      <Navigation
        items={navigationItems}
        direction="vertical"
        activeItemId={activeItem?.id}
        onItemClick={handleNavigation}
      />
    </aside>
  );
};

export default Sidebar;
