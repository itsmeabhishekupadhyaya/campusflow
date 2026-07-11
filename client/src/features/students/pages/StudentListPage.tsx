import { useEffect } from 'react';
import { Button, PageContainer, PageHeader, SearchInput } from '../../../ui';
import StudentTable from '../components/StudentTable';
import { useStudents } from '../hooks/useStudents';
import { SortDirection } from '../../../shared/enums/SortDirection';

const StudentListPage = () => {
  const { students, loadStudents, loading, error } = useStudents();

  useEffect(() => {
    loadStudents({
      page: 1,
      pageSize: 10,
      sortBy: 'firstName',
      sortDirection: SortDirection.Ascending,
    });
  }, [loadStudents, loading, error]);

  return (
    <PageContainer>
      <PageHeader
        title="Student Management"
        description="Manage all students from one place."
        actions={<Button>Add Student</Button>}
      />
      <SearchInput placeholder="Search students..." />
      <StudentTable students={students} loading={loading} error={error} />
    </PageContainer>
  );
};

export default StudentListPage;
