import { Plus, X } from 'lucide-react';
import { Button, ButtonGroup, PageContainer, PageHeader } from '../../../../ui';
import TextBox from '../../../../ui/components/Form/Controls/TextBox';
import FormField from '../../../../ui/components/Form/Infrastructure/FormField';
import styles from './StudentAddPage.module.css';

const StudentAddPage = () => {
  return (
    <PageContainer>
      <PageHeader title="Add Student" />
      <form className={styles.form}>
        <FormField label="First Name" required inputId="firstName">
          <TextBox id="firstName" placeholder="Enter first name"></TextBox>
        </FormField>

        <FormField label="Last Name" required inputId="lastName">
          <TextBox id="lastName" placeholder="Enter last name"></TextBox>
        </FormField>

        <FormField label="Email" required inputId="email">
          <TextBox id="email" placeholder="Enter email"></TextBox>
        </FormField>

        <FormField label="Mobile" required inputId="mobileNumber">
          <TextBox id="mobileNumber" placeholder="Enter mobile number"></TextBox>
        </FormField>

        <FormField label="Gender" required inputId="gender">
          <TextBox id="gender" placeholder="Enter gender"></TextBox>
        </FormField>

        <FormField label="Class" required inputId="class">
          <TextBox id="class" placeholder="Enter class"></TextBox>
        </FormField>

        <FormField label="Date of Birth" required inputId="dob">
          <TextBox id="dob" placeholder="Enter date of birth"></TextBox>
        </FormField>

        <FormField label="Address" required inputId="address">
          <TextBox id="address" placeholder="Enter address"></TextBox>
        </FormField>

        <ButtonGroup className={styles.actions}>
          <Button startIcon={Plus} type="submit" size="sm" variant="primary">
            Save
          </Button>
          <Button startIcon={X} type="button" size="sm" variant="secondary">
            Cancel
          </Button>
        </ButtonGroup>
      </form>
    </PageContainer>
  );
};
export default StudentAddPage;
