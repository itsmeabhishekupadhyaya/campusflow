import { Navigate, Route, Routes } from 'react-router-dom';

import { RoutePaths } from './RoutePaths';

import ProtectedRoute from './ProtectedRoute';

import { AppLayout } from '../ui';

import StudentListPage from '../features/students/pages/StudentListPage';
import DashboardPage from '../features/dashboard/pages/DashboardPage';
import TeacherPage from '../features/teachers/pages/teachersPage';
import FeePage from '../features/fees/pages/feePage';
import AttendancePage from '../features/attendance/pages/attendancePage';
import SettingPage from '../features/settings/pages/settingPage';
import ReportPage from '../features/reports/pages/reportPage';
import StudentAddPage from '../features/students/pages/StudentAddPage/StudentAddPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={RoutePaths.ROOT} element={<Navigate to={RoutePaths.DASHBOARD} replace />} />

      <Route element={<ProtectedRoute />}>
        <Route element={<AppLayout />}>
          <Route path={RoutePaths.STUDENTS} element={<StudentListPage />} />
          <Route path={RoutePaths.STUDENT_ADD} element={<StudentAddPage />} />
          <Route path={RoutePaths.DASHBOARD} element={<DashboardPage />} />
          <Route path={RoutePaths.TEACHERS} element={<TeacherPage />} />
          <Route path={RoutePaths.FEES} element={<FeePage />} />
          <Route path={RoutePaths.ATTENDANCE} element={<AttendancePage />} />
          <Route path={RoutePaths.SETTINGS} element={<SettingPage />} />
          <Route path={RoutePaths.REPORTS} element={<ReportPage />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
