import type { StudentFormModel } from '../types/studentForm';
import type { CreateStudentRequest, GenderType } from '../types/createStudent';
export const mapToCreateStudentRequest = (form: StudentFormModel): CreateStudentRequest => {
  return {
    firstName: form.firstName,
    lastName: form.lastName,
    email: form.email,
    mobileNumber: form.mobileNumber,
    classId: form.class,
    dateOfBirth: form.dateOfBirth,
    gender: mapGender(form.gender),
    address: form.address || undefined,
  };
};
const mapGender = (gender: string): GenderType => {
  switch (gender) {
    case 'male':
      return 'Male';

    case 'female':
      return 'Female';

    case 'other':
      return 'Other';

    default:
      throw new Error(`Unsupported gender: ${gender}`);
  }
};
