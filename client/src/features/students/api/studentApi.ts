import type { Student } from '../types/student';
import { mockStudents } from '../mocks/studentMock';

/**
 * Retrieves all students.
 * Currently returns mock data.
 * Will be replaced with REST API in future iterations.
 */
export const getStudents = async (): Promise<Student[]> => {
  return mockStudents;
};
