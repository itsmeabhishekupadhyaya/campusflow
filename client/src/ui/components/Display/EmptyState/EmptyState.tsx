import type { EmptyStateProps } from './EmptyState.types';
import styles from './EmptyState.module.css';

const EmptyState = ({ title, description, action }: EmptyStateProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>📄</div>

      <h3 className={styles.title}>{title}</h3>

      {description && <p className={styles.description}>{description}</p>}

      {action && <div className={styles.action}>{action}</div>}
    </div>
  );
};

export default EmptyState;
