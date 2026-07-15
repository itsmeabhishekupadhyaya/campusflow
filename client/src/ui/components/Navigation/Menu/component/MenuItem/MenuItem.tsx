import { icon } from '../../../../../theme';

import styles from './MenuItem.module.css';

import type { MenuItemProps } from './MenuItem.types';

const MenuItem = ({ item, isActive = false, onClick }: MenuItemProps) => {
  const Icon = item.icon;

  return (
    <li
      className={`
        ${styles.item}
        ${isActive ? styles.active : ''}
        ${item.isDisabled ? styles.disabled : ''}
      `}
      onClick={() => !item.isDisabled && onClick?.(item)}
    >
      <div className={styles.icon}>
        <Icon size={icon.size.md} strokeWidth={icon.strokeWidth.regular} />
      </div>
      <span className={styles.label}>{item.label}</span>

      {item.badge && <span className={styles.badge}>{item.badge}</span>}
    </li>
  );
};

export default MenuItem;
