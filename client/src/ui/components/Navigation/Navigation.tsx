import styles from './Navigation.module.css';

import NavigationItem from './NavigationItem';

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
        className={`
          ${styles.menu}
          ${direction === 'horizontal' ? styles.horizontal : styles.vertical}
        `}
      >
        {items
          .filter((item) => item.isVisible !== false)
          .map((item) => (
            <NavigationItem
              key={item.id}
              item={item}
              isActive={activeItemId === item.id}
              onClick={onItemClick}
            />
          ))}
      </ul>
    </nav>
  );
};

export default Navigation;
