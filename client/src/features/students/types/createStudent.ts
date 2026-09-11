export type GenderType = 'Male' | 'Female' | 'Other';

export interface CreateStudentRequest {
  firstName: string;
  lastName: string;
  email: string;
  mobileNumber: string;
  classId: string;
  dateOfBirth: string;
  gender: GenderType;
  address?: string;
}

export interface CreateStudentResponse {
  id: string;
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  mobileNumber: string | null;
  classId: string;
  dateOfBirth: string;
  gender: GenderType;
  address: string | null;
}
