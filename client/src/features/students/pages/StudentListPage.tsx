import { useEffect } from 'react';
import { Button, PageContainer, PageHeader, PageToolBar, SearchInput } from '../../../ui';
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
      <PageHeader title="Student Management" description="Manage all students from one place." />
      <PageToolBar
        left={<SearchInput placeholder="Search students..." />}
        right={<Button>Add Student</Button>}
      />

      <StudentTable students={students} loading={loading} error={error} />
    </PageContainer>
  );
};

export default StudentListPage;
