import { useState, useCallback } from 'react';

import type { Student } from '../types/student';
import type { StudentQuery } from '../types/studentQuery';
import { getStudents } from '../api/studentApi';

export const useStudents = () => {
  const [students, setStudents] = useState<Student[]>([]);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState<string | null>(null);

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
  return {
    students,
    loading,
    error,
    loadStudents,
  };
};
