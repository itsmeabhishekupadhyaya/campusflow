import { getClasses } from '../api/classApi';
import type { ClassListResponse } from '../types/classListResponse';
import type { ClassQuery } from '../types/classQuery';

export const getClassesUseCase = async (query: ClassQuery): Promise<ClassListResponse> => {
  return getClasses(query);
};
