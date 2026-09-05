import { Plus, X } from 'lucide-react';
import { Button, ButtonGroup, PageContainer, PageHeader } from '../../../../ui';
import TextBox from '../../../../ui/components/Form/Controls/TextBox';
import FormField from '../../../../ui/components/Form/Infrastructure/FormField';
import styles from './StudentAddPage.module.css';
import { useState } from 'react';
import type { ChangeEvent } from 'react';
import type { StudentFormModel } from '../../types/studentForm';

const StudentAddPage = () => {
  const [student, setStudent] = useState<StudentFormModel>({
    firstName: '',
    lastName: '',
    email: '',
    mobileNumber: '',
    gender: '',
    class: '',
    dateOfBirth: '',
    address: '',
  });
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setStudent((previous) => ({
      ...previous,
      [name]: value,
    }));
    console.log(student);
  };
  return (
    <PageContainer>
      <PageHeader title="Add Student" />
      <form className={styles.form}>
        <FormField label="First Name" required inputId="firstName">
          <TextBox
            id="firstName"
            name="firstName"
            value={student.firstName}
            onChange={handleChange}
            placeholder="Enter first name"
          ></TextBox>
        </FormField>

        <FormField label="Last Name" required inputId="lastName">
          <TextBox
            id="lastName"
            name="lastName"
            value={student.lastName}
            onChange={handleChange}
            placeholder="Enter last name"
          ></TextBox>
        </FormField>

        <FormField label="Email" required inputId="email">
          <TextBox
            id="email"
            name="email"
            value={student.email}
            onChange={handleChange}
            placeholder="Enter email"
          ></TextBox>
        </FormField>

        <FormField label="Mobile" required inputId="mobileNumber">
          <TextBox
            id="mobileNumber"
            name="mobileNumber"
            value={student.mobileNumber}
            onChange={handleChange}
            placeholder="Enter mobile number"
          ></TextBox>
        </FormField>

        <FormField label="Gender" required inputId="gender">
          <TextBox
            id="gender"
            name="gender"
            value={student.gender}
            onChange={handleChange}
            placeholder="Enter gender"
          ></TextBox>
        </FormField>

        <FormField label="Class" required inputId="class">
          <TextBox
            id="class"
            name="class"
            value={student.class}
            onChange={handleChange}
            placeholder="Enter class"
          ></TextBox>
        </FormField>

        <FormField label="Date of Birth" required inputId="dob">
          <TextBox
            id="dob"
            name="dob"
            value={student.dateOfBirth}
            onChange={handleChange}
            placeholder="Enter date of birth"
          ></TextBox>
        </FormField>

        <FormField label="Address" required inputId="address">
          <TextBox
            id="address"
            name="address"
            value={student.address}
            onChange={handleChange}
            placeholder="Enter address"
          ></TextBox>
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
