import styles from './Menu.module.css';

import MenuItem from './component/MenuItem/MenuItem';

import type { MenuProps } from './Menu.types';

const Menu = ({ items, direction = 'vertical', activeItemId, onItemClick }: MenuProps) => {
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
            <MenuItem
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

export default Menu;
