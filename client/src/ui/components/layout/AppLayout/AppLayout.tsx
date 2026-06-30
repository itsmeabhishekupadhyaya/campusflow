import type { AppLayoutProps } from './AppLayout.types';

import styles from './AppLayout.module.css';

import { Header } from '../Header';
import { Sidebar } from '../Sidebar';

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div className={styles.layout}>
      <Header />

      <div className={styles.body}>
        <Sidebar />

        <main className={styles.content}>{children}</main>
      </div>
    </div>
  );
};

export default AppLayout;
