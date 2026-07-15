import type { TableProps } from './Table.types';
import styles from './Table.module.css';

const Table = ({ children }: TableProps) => {
  return (
    <div className={styles.container}>
      <table className={`table ${styles.table}`}>{children}</table>
    </div>
  );
};

export default Table;
