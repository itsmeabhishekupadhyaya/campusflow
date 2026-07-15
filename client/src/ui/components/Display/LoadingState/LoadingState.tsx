import styles from './LoadingState.module.css';

const LoadingState = () => {
  return (
    <div className={styles.container}>
      <div className={styles.spinner}></div>

      <p className={styles.text}>Loading...</p>
    </div>
  );
};

export default LoadingState;
