import type { Student } from '../types/student';

export type StudentTableProps = {
  students: Student[];
  loading: boolean;
  error: string | null;
};
