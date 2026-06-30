import { menuItems } from '../../../../navigation';
import styles from './Sidebar.module.css';
import { Navigation } from '../../Navigation';
const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <Navigation items={menuItems} direction="vertical" activeItemId="students" />
    </aside>
  );
};

export default Sidebar;
