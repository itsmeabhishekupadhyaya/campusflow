import type { AvatarProps } from './Avatar.type';
import styles from './Avatar.module.css';

const Avatar = ({ initials = 'AU', shape = 'circle', size = 'sm' }: AvatarProps) => {
  return (
    <div className={`${styles.avatar} ${styles[size]} ${styles[shape]}`}>
      <span className={styles.initials}>{initials}</span>
    </div>
  );
};

export default Avatar;
