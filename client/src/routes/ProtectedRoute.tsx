// import type { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';

// interface ProtectedRouteProps {
//   children: ReactNode;
// }

const ProtectedRoute = () => {
  // Future:
  // Authentication
  // Authorization
  // Token validation
  // Permission checks

  return <Outlet />;
};

export default ProtectedRoute;
