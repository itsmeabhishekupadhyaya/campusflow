import type { StudentListResponse } from '../types/studentListResponse';
import type { StudentQuery } from '../types/studentQuery';
import { apiClient, endpoints } from '../../../services/api';
import type { CreateStudentRequest, CreateStudentResponse } from '../types/createStudent';

/**
 * Retrieves all students.
 * Currently returns mock data.
 * Will be replaced with REST API in future iterations.
 */
// export const getStudents = async (): Promise<Student[]> => {
//   return mockStudents;
// };

export const getStudents = async (query: StudentQuery): Promise<StudentListResponse> => {
  const response = await apiClient.get<StudentListResponse>(endpoints.students, {
    params: query,
  });
  return response.data;
};
export const createStudent = async (
  request: CreateStudentRequest
): Promise<CreateStudentResponse> => {
  const response = await apiClient.post<CreateStudentResponse>(endpoints.students, request);
  return response.data;
};
