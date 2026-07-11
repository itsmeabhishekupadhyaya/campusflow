import type { PageToolbarProps } from './PageToolbar.types';

import styles from './PageToolbar.module.css';

const PageToolbar = ({ left, right }: PageToolbarProps) => {
  return (
    <div className={styles.toolbar}>
      <div className={styles.left}>{left}</div>
      <div className={styles.right}>{right}</div>
    </div>
  );
};

export default PageToolbar;
