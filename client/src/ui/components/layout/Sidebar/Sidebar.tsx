import { navigationItems } from '../../../../config';

import styles from './Sidebar.module.css';

import { Navigation } from '../../Navigation';

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <Navigation items={navigationItems} direction="vertical" activeItemId="students" />
    </aside>
  );
};

export default Sidebar;
