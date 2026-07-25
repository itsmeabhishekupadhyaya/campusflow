import type { SortDirection } from '../../../shared/enums/SortDirection';

export type StudentSortField = 'firstName' | 'email' | 'mobile' | 'gender' | 'class' | 'status';
export interface StudentQuery {
  page: number;
  pageSize: number;
  search?: string;
  sortBy?: StudentSortField;
  sortDirection?: SortDirection;
}
