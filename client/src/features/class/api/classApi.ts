import { apiClient, endpoints } from '../../../services/api';
import type { ClassListResponse } from '../types/classListResponse';
import type { ClassQuery } from '../types/classQuery';

export const getClasses = async (query: ClassQuery): Promise<ClassListResponse> => {
  const response = await apiClient.get<ClassListResponse>(endpoints.classes, {
    params: query,
  });
  return response.data;
};
