import { useEffect, useState } from 'react';

import type { Student } from '../types/student';
import type { StudentQuery } from '../types/studentQuery';

import { getStudents } from '../api/studentApi';
import { SortDirection } from '../../../shared/enums/SortDirection';

export const useStudents = () => {
  const [students, setStudents] = useState<Student[]>([]);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState<string | null>(null);

  const [totalRecords, setTotalRecords] = useState(0);

  const [query, setQuery] = useState<StudentQuery>({
    page: 1,
    pageSize: 10,
    sortBy: 'firstName',
    sortDirection: SortDirection.Ascending,
    search: '',
  });

  const updateSearch = (search: string) => {
    setQuery((previousQuery) => ({
      ...previousQuery,
      search,
      page: 1,
    }));
  };

  const updatePage = (page: number) => {
    setQuery((previousQuery) => ({
      ...previousQuery,
      page,
    }));
  };

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        setLoading(true);

        setError(null);

        const response = await getStudents(query);

        setStudents(response.items);

        setTotalRecords(response.totalRecords);
      } catch {
        setError('Unable to load students.');
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, [query]);

  return {
    students,
    loading,
    error,
    query,
    totalRecords,
    updateSearch,
    updatePage,
  };
};
