import type { SortDirection } from '../../../shared/enums/SortDirection';

export type ClassSortField = 'name';
export interface ClassQuery {
  page: number;
  pageSize: number;
  search?: string;
  sortBy?: ClassSortField;
  sortDirection?: SortDirection;
}
