import type { HeaderUser } from '../../../../shared/models/HeaderUser';
import { mockCurrentUser } from '../../../../mock/auth/currentUser';

import styles from './AppLayout.module.css';
import { Header } from '../Header';
import { Sidebar } from '../Sidebar';
import { Outlet } from 'react-router-dom';

const AppLayout = () => {
  const currentUser: HeaderUser = mockCurrentUser;
  return (
    <div className={styles.layout}>
      <Header user={currentUser} />

      <div className={styles.body}>
        <Sidebar />

        <main className={styles.content}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
