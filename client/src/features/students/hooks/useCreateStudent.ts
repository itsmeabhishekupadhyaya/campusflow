import { useState } from 'react';
import type { CreateStudentResponse } from '../types/createStudent';
import { createStudentUseCase } from '../useCases/createStudentUseCase';
import type { StudentFormModel } from '../types/studentForm';

export const useCreateStudent = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [student, setStudent] = useState<CreateStudentResponse | null>(null);

  const execute = async (form: StudentFormModel) => {
    try {
      setLoading(true);
      setError(null);

      const response = await createStudentUseCase(form);
      setStudent(response);
      return response;
    } catch (error) {
      setError('Unable to create student.');
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return { execute, loading, error, student };
};
