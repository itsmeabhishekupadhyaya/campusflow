import styles from './AppLogo.module.css';

import type { AppLogoProps } from './AppLogo.types';

const AppLogo = ({ title = 'CampusFlow', variant = 'full', size = 'md' }: AppLogoProps) => {
  return (
    <div className={`${styles.logo} ${styles[size]}`}>
      <span className={styles.icon}>🎓</span>

      {variant === 'full' && <span className={styles.name}>{title}</span>}
    </div>
  );
};

export default AppLogo;
