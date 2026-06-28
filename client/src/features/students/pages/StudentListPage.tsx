import { useEffect, useState } from 'react';
import type { Student } from '../types/student';
import { getStudents } from '../services/studentService';

const StudentListPage = () => {
  const [students, setStudents] = useState<Student[]>([]);
  useEffect(() => {
    const loadStudents = async () => {
      const data = await getStudents();
      setStudents(data);
    };

    loadStudents();
  }, []);
  return (
    <div>
      <h1>Students</h1>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            {student.firstName} {student.lastName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentListPage;
