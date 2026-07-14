import { useEffect } from 'react';
import { Button, PageContainer, PageHeader, PageToolBar, SearchInput } from '../../../ui';
import StudentTable from '../components/StudentTable';
import { useStudents } from '../hooks/useStudents';

import { Plus } from 'lucide-react';

const StudentListPage = () => {
  const { students, loadStudents, loading, error, query, updateSearch } = useStudents();

  useEffect(() => {
    loadStudents(query);
  }, [query, loadStudents]);

  return (
    <PageContainer>
      <PageHeader title="Student Management" description="Manage all students from one place." />
      <PageToolBar
        left={
          <SearchInput
            placeholder="Search students..."
            value={query.search}
            onChange={(event) => updateSearch(event.target.value)}
          />
        }
        right={<Button startIcon={Plus}>Add Student</Button>}
      />

      <StudentTable students={students} loading={loading} error={error} />
    </PageContainer>
  );
};

export default StudentListPage;
