import { useEffect } from 'react';
import { Button, PageContainer, PageHeader, SearchInput } from '../../../ui';
import StudentTable from '../components/StudentTable';
import { useStudents } from '../hooks/useStudents';
import { SortDirection } from '../../../shared/enums/SortDirection';

const StudentListPage = () => {
  const { students, loadStudents } = useStudents();

  useEffect(() => {
    loadStudents({
      page: 1,
      pageSize: 10,
      sortBy: 'firstName',
      sortDirection: SortDirection.Ascending,
    });
  }, [loadStudents]);

  return (
    <PageContainer>
      <PageHeader
        title="Student Management"
        description="Manage all students from one place."
        actions={<Button>Add Student</Button>}
      />
      <SearchInput placeholder="Search students..." />
      <StudentTable students={students} />
    </PageContainer>
  );
};

export default StudentListPage;
