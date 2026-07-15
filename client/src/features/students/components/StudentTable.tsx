import { Pencil, Trash2 } from 'lucide-react';
import { Table, Badge, Button, ButtonGroup } from '../../../ui';
import type { StudentTableProps } from './StudentTable.types';
import { LoadingState, ErrorState, EmptyState } from '../../../ui';

const StudentTable = ({ students, loading, error }: StudentTableProps) => {
  if (loading) {
    return <LoadingState />;
  }
  if (error) {
    <ErrorState
      title="Unable to load students"
      description={error}
      action={<Button>Retry</Button>}
    />;
  }
  if (students.length === 0) {
    return (
      <EmptyState
        title="No students found"
        description="Try changing your search or add your first student."
        action={<Button>Add Student</Button>}
      />
    );
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
            <td>
              <Badge variant={student.isActive ? 'success' : 'danger'}>
                {student.isActive ? 'Active' : 'Inactive'}
              </Badge>
            </td>
            <td>
              <ButtonGroup gap="sm">
                <Button variant="secondary" size="sm" startIcon={Pencil}>
                  Edit
                </Button>

                <Button variant="danger" size="sm" startIcon={Trash2}>
                  Delete
                </Button>
              </ButtonGroup>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
export default StudentTable;
