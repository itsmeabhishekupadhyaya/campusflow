import type { PageContainerProps } from './PageContainer.types';
import styles from './PageContainer.module.css';

const PageContainer = ({ children }: PageContainerProps) => {
  return <main className={styles.container}>{children}</main>;
};

export default PageContainer;
