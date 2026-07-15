import { Button } from '../../../../ui';
import type { PaginationProps } from './Pagination.types';
import styles from './Pagination.module.css';

const Pagination = ({ page, pageSize, totalRecords, onPageChange }: PaginationProps) => {
  const totalPages = Math.ceil(totalRecords / pageSize);
  const startRecord = totalRecords === 0 ? 0 : (page - 1) * pageSize + 1;

  const endRecord = Math.min(page * pageSize, totalRecords);
  return (
    <div className={styles.container}>
      <div className={styles.summary}>
        Showing {startRecord} - {endRecord} of {totalRecords} records
      </div>

      <div className={styles.actions}>
        <Button
          variant="secondary"
          size="sm"
          disabled={page === 1}
          onClick={() => onPageChange(page - 1)}
        >
          Previous
        </Button>

        <span className={styles.pageInfo}>
          Page {page} of {totalPages}
        </span>

        <Button
          variant="secondary"
          size="sm"
          disabled={page === totalPages || totalPages === 0}
          onClick={() => onPageChange(page + 1)}
        >
          Next
        </Button>
      </div>
    </div>
  );
};
export default Pagination;
