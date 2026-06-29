import { Button, PageContainer, PageHeader, SearchInput } from '../../../ui';

const StudentListPage = () => {
  return (
    <PageContainer>
      <PageHeader
        title="Student Management"
        description="Manage all students from one place."
        actions={<Button>Add Student</Button>}
      />
      <SearchInput placeholder="Search students..." />
    </PageContainer>
  );
};

export default StudentListPage;
