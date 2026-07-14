import { useState, useCallback } from 'react';

import type { Student } from '../types/student';
import type { StudentQuery } from '../types/studentQuery';
import { getStudents } from '../api/studentApi';
import { SortDirection } from '../../../shared/enums/SortDirection';

export const useStudents = () => {
  const [students, setStudents] = useState<Student[]>([]);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState<string | null>(null);
  const [query, setQuery] = useState<StudentQuery>({
    page: 1,
    pageSize: 10,
    sortBy: 'firstname',
    sortDirection: SortDirection.Ascending,
    search: '',
  });

  const loadStudents = useCallback(async (query: StudentQuery) => {
    try {
      setLoading(true);

      setError(null);

      const response = await getStudents(query);

      setStudents(response.items);
    } catch {
      setError('Unable to load students.');
    } finally {
      setLoading(false);
    }
  }, []);

  const updateSearch = (search: string) => {
    setQuery((previousQuery) => ({
      ...previousQuery,

      search,

      page: 1,
    }));
  };
  return {
    students,
    loading,
    error,
    query,
    loadStudents,
    updateSearch,
  };
};
