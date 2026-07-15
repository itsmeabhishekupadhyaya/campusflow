import type { ErrorStateProps } from './ErrorState.types';
import styles from './ErrorState.module.css';

const ErrorState = ({ title, description, action }: ErrorStateProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>⚠️</div>

      <h3 className={styles.title}>{title}</h3>

      {description && <p className={styles.description}>{description}</p>}

      {action && <div className={styles.action}>{action}</div>}
    </div>
  );
};

export default ErrorState;
