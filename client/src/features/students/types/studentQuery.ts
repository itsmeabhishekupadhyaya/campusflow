import type { SortDirection } from '../../../shared/enums/SortDirection';
export interface StudentQuery {
  page: number;
  pageSize: number;
  search?: string;
  sortBy?: string;
  sortDirection?: SortDirection;
}
