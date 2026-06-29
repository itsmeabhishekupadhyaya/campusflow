import type { PageHeaderProps } from './PageHeader.types';
import styles from './PageHeader.module.css';

const PageHeader = ({ title, description, actions }: PageHeaderProps) => {
  return (
    <header className={styles.header}>
      <div>
        <h1 className={styles.title}>{title}</h1>

        {description && <p className={styles.description}>{description}</p>}
      </div>

      {actions && <div className={styles.actions}>{actions}</div>}
    </header>
  );
};

export default PageHeader;
