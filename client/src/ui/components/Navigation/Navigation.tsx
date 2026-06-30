import { classNames } from '../../../utils/classNames';
import styles from './Navigation.module.css';

import type { NavigationProps } from './Navigation.types';

const Navigation = ({
  items,
  direction = 'vertical',
  activeItemId,
  onItemClick,
}: NavigationProps) => {
  return (
    <nav>
      <ul
        className={classNames(
          styles.menu,
          direction === 'horizontal' ? styles.horizontal : styles.vertical
        )}
      >
        {items.map((item) => (
          <li
            key={item.id}
            className={`${styles.menuItem} ${activeItemId === item.id ? styles.active : ''}`}
            onClick={() => onItemClick?.(item)}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
