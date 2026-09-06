import { Plus, X } from 'lucide-react';
import { Button, ButtonGroup, PageContainer, PageHeader } from '../../../../ui';
import TextBox from '../../../../ui/components/Form/Controls/TextBox';
import FormField from '../../../../ui/components/Form/Infrastructure/FormField';
import Select from '../../../../ui/components/Form/Controls/Select';
import DatePicker from '../../../../ui/components/Form/Controls/DatePicker';
import styles from './StudentAddPage.module.css';
import { useState } from 'react';
import type { ChangeEvent } from 'react';
import type { StudentFormModel } from '../../types/studentForm';
import type { StudentFormErrors } from '../../validation/StudentFormErrors';
import { validateStudentForm } from '../../validation/validateStudentForm';

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

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;

    setStudent((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const [errors, setErrors] = useState<StudentFormErrors>({});
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const validationErrors = validateStudentForm(student);

    setErrors(validationErrors);
  };
  return (
    <PageContainer>
      <PageHeader title="Add Student" />
      <form className={styles.form} onSubmit={handleSubmit}>
        <FormField label="First Name" required inputId="firstName" error={errors.firstName}>
          <TextBox
            id="firstName"
            name="firstName"
            value={student.firstName}
            onChange={handleChange}
            placeholder="Enter first name"
          ></TextBox>
        </FormField>

        <FormField label="Last Name" required inputId="lastName" error={errors.lastName}>
          <TextBox
            id="lastName"
            name="lastName"
            value={student.lastName}
            onChange={handleChange}
            placeholder="Enter last name"
          ></TextBox>
        </FormField>

        <FormField label="Email" required inputId="email" error={errors.email}>
          <TextBox
            id="email"
            name="email"
            value={student.email}
            onChange={handleChange}
            placeholder="Enter email"
          ></TextBox>
        </FormField>

        <FormField label="Mobile" required inputId="mobileNumber" error={errors.mobileNumber}>
          <TextBox
            id="mobileNumber"
            name="mobileNumber"
            value={student.mobileNumber}
            onChange={handleChange}
            placeholder="Enter mobile number"
          ></TextBox>
        </FormField>

        <FormField label="Gender" required inputId="gender" error={errors.gender}>
          <Select id="gender" name="gender" value={student.gender} onChange={handleChange}>
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </Select>
        </FormField>

        <FormField label="Class" required inputId="class" error={errors.class}>
          <Select id="class" name="class" value={student.class} onChange={handleChange}>
            <option value="">Select class</option>
            <option value="1">Class 1</option>
            <option value="2">Class 2</option>
            <option value="3">Class 3</option>
            <option value="4">Class 4</option>
            <option value="5">Class 5</option>
          </Select>
        </FormField>

        <FormField label="Date of Birth" required inputId="dob" error={errors.dateOfBirth}>
          <DatePicker
            id="dob"
            name="dateOfBirth"
            value={student.dateOfBirth}
            onChange={handleChange}
          />
        </FormField>

        <FormField label="Address" required inputId="address" error={errors.address}>
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
