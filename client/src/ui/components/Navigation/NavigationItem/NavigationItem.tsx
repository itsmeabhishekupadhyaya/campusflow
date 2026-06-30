import { icon } from '../../../theme';

import styles from './NavigationItem.module.css';

import type { NavigationItemProps } from './NavigationItem.types';

const NavigationItem = ({ item, isActive = false, onClick }: NavigationItemProps) => {
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

export default NavigationItem;
