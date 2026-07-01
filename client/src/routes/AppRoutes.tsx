import { Navigate, Route, Routes } from 'react-router-dom';

import { RoutePaths } from './RoutePaths';

import ProtectedRoute from './ProtectedRoute';

import { AppLayout } from '../ui';

import StudentListPage from '../features/students/pages/StudentListPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={RoutePaths.ROOT} element={<Navigate to={RoutePaths.STUDENTS} replace />} />

      <Route element={<ProtectedRoute />}>
        <Route element={<AppLayout />}>
          <Route path={RoutePaths.STUDENTS} element={<StudentListPage />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
