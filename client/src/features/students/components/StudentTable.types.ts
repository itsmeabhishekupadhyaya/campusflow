import type { Student } from '../types/student';
import type { StudentQuery, StudentSortField } from '../types/studentQuery';

export type StudentTableProps = {
  students: Student[];
  loading: boolean;
  error: string | null;
  query: StudentQuery;
  onSort: (sortBy: StudentSortField) => void;
};
