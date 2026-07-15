import {
  Button,
  PageContainer,
  PageHeader,
  PageToolBar,
  Pagination,
  SearchInput,
} from '../../../ui';
import StudentTable from '../components/StudentTable';
import { useStudents } from '../hooks/useStudents';

import { Plus } from 'lucide-react';

const StudentListPage = () => {
  const { students, loading, error, query, totalRecords, updateSearch, updatePage } = useStudents();

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
      <Pagination
        page={query.page}
        pageSize={query.pageSize}
        totalRecords={totalRecords}
        onPageChange={updatePage}
      />
    </PageContainer>
  );
};

export default StudentListPage;
