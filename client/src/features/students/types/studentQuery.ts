import type { SortDirection } from '../../../shared/enums/SortDirection';
export interface StudentQuery {
  page: number;
  pageSize: number;
  serach?: string;
  sortBy?: string;
  sortDirection?: SortDirection;
}
