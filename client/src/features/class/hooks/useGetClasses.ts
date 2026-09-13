import { useCallback, useEffect, useState } from 'react';

import { SortDirection } from '../../../shared/enums/SortDirection';
import { getClassesUseCase } from '../useCases/getClassesUseCase';

import type { ClassListResponse } from '../types/classListResponse';
import type { ClassQuery } from '../types/classQuery';

const defaultClassQuery: ClassQuery = {
  page: 1,
  pageSize: 100,
  sortBy: 'name',
  sortDirection: SortDirection.Ascending,
};

export const useGetClasses = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [classes, setClasses] = useState<ClassListResponse | null>(null);

  const execute = useCallback(async (query: ClassQuery = defaultClassQuery) => {
    try {
      setLoading(true);
      setError(null);

      const response = await getClassesUseCase(query);

      setClasses(response);

      return response;
    } catch (error) {
      setError('Unable to fetch classes.');
      throw error;
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const loadClasses = async () => {
      try {
        await execute();
      } catch {
        // Error state is already handled by execute.
      }
    };

    void loadClasses();
  }, [execute]);

  return {
    loading,
    error,
    execute,
    classes,
  };
};
