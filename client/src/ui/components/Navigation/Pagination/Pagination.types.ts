export interface PaginationProps {
  page: number;

  pageSize: number;

  totalRecords: number;

  onPageChange: (page: number) => void;
}
