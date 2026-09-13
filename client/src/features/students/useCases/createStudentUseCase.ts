import type { StudentFormModel } from '../types/studentForm';
import type { CreateStudentResponse } from '../types/createStudent';

import { mapToCreateStudentRequest } from '../mappers/createStudentRequestMapper';
import { createStudent } from '../api/studentApi';

export const createStudentUseCase = async (
  form: StudentFormModel
): Promise<CreateStudentResponse> => {
  const request = mapToCreateStudentRequest(form);

  return createStudent(request);
};
