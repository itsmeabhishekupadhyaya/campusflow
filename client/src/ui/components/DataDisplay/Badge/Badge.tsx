import type { BadgeProps } from './Badge.types';

import styles from './Badge.module.css';

const Badge = ({ children, variant }: BadgeProps) => {
  return <span className={`${styles.badge} ${styles[variant]}`}>{children}</span>;
};
export default Badge;
