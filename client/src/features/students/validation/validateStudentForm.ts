import type { StudentFormModel } from '../types/studentForm';
import type { StudentFormErrors } from './StudentFormErrors';

export const validateStudentForm = (student: StudentFormModel): StudentFormErrors => {
  const errors: StudentFormErrors = {};

  if (!student.firstName.trim()) {
    errors.firstName = 'First name is required';
  }

  if (!student.lastName.trim()) {
    errors.lastName = 'Last name is required';
  }

  if (!student.email.trim()) {
    errors.email = 'Email is required';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(student.email)) {
    errors.email = 'Enter a valid email address';
  }

  if (!student.mobileNumber.trim()) {
    errors.mobileNumber = 'Mobile number is required';
  } else if (!/^\d{10}$/.test(student.mobileNumber)) {
    errors.mobileNumber = 'Enter a valid 10-digit mobile number';
  }

  if (!student.gender.trim()) {
    errors.gender = 'Gender is required';
  }

  if (!student.class.trim()) {
    errors.class = 'Class is required';
  }

  if (!student.dateOfBirth.trim()) {
    errors.dateOfBirth = 'Date of birth is required';
  }

  if (!student.address.trim()) {
    errors.address = 'Address is required';
  }

  return errors;
};
