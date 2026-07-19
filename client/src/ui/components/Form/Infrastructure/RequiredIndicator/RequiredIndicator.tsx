import styles from './RequiredIndicator.module.css';

const RequiredIndicator = () => {
  return (
    <span className={styles.required} aria-hidden="true">
      *
    </span>
  );
};

export default RequiredIndicator;
