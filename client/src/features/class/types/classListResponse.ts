import type { Class } from './class';

export interface ClassListResponse {
  items: Class[];

  page: number;

  pageSize: number;

  totalRecords: number;

  totalPages: number;
}
