import type { Student } from './student';

export interface StudentListResponse {
  items: Student[];

  page: number;

  pageSize: number;

  totalRecords: number;

  totalPages: number;
}
