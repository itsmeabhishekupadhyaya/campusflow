import type { StudentTableProps } from './StudentTable.types';

const StudentTable = ({ students }: StudentTableProps) => {
  return <div>Total Students: {students.length}</div>;
};
export default StudentTable;
