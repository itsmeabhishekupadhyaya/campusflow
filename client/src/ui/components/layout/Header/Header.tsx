import styles from './Header.module.css';

import type { HeaderProps } from './Header.types';

const Header = ({ appName, user, leftContent, rightContent }: HeaderProps) => {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <span className={styles.logo}>🎓</span>

        <span className={styles.appName}>{appName}</span>

        {leftContent}
      </div>

      <div className={styles.right}>
        {rightContent}

        <div className={styles.userInfo}>
          <span className={styles.avatar}>👤</span>

          <div>
            <div className={styles.userName}>{user.fullName}</div>

            <div className={styles.userRole}>{user.role}</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
