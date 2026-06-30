import type { AppLayoutProps } from './AppLayout.types';
import type { HeaderUser } from '../../../../shared/models/HeaderUser';
import { mockCurrentUser } from '../../../../mock/auth/currentUser';

import styles from './AppLayout.module.css';
import { Header } from '../Header';
import { Sidebar } from '../Sidebar';

const AppLayout = ({ children }: AppLayoutProps) => {
  const currentUser: HeaderUser = mockCurrentUser;
  return (
    <div className={styles.layout}>
      <Header user={currentUser} />

      <div className={styles.body}>
        <Sidebar />

        <main className={styles.content}>{children}</main>
      </div>
    </div>
  );
};

export default AppLayout;
