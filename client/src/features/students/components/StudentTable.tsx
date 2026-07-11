import { Table } from '../../../ui';
import type { StudentTableProps } from './StudentTable.types';

const StudentTable = ({ students, loading, error }: StudentTableProps) => {
  if (loading) {
    return <div>Loading Students ....</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }
  if (students.length == 0) {
    return <div>No Student Found</div>;
  }

  return (
    <Table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Mobile</th>
          <th>Gender</th>
          <th>Class</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student) => (
          <tr key={student.id}>
            <td>
              {student.firstName} {student.lastName}
            </td>
            <td>{student.email}</td>
            <td>{student.mobileNumber}</td>
            <td>{student.gender}</td>
            <td>{student.className}</td>
            <td> {student.isActive ? 'Active' : 'InActive'}</td>
            <td>
              <button type="submit">Edit</button>
              <button type="submit">Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
export default StudentTable;
