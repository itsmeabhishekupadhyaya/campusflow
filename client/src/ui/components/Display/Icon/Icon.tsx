import type { IconProps } from './Icon.types';
import styles from './Icon.module.css';
import { ICON_SIZE } from './Icon.constants';
const Icon = ({ icon: LucideIcon, size = 'md', title }: IconProps) => {
  const iconSize = {
    sm: ICON_SIZE.sm,
    md: ICON_SIZE.md,
    lg: ICON_SIZE.lg,
  };

  return (
    <span className={styles.icon}>
      <LucideIcon size={iconSize[size]} aria-label={title} />
    </span>
  );
};

export default Icon;
