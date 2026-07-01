# DS-010 – Enterprise Routing

## Status

✅ Completed

## Deliverables

- React Router integrated
- BrowserRouter configured
- RoutePaths created
- AppRoutes created
- ProtectedRoute placeholder implemented
- AppLayout converted to Layout Route
- Feature-first routing established

## Technical Decisions

### Layout Routes

CampusFlow uses React Router Layout Routes.

Benefits:

- Header is rendered once.
- Sidebar is rendered once.
- Feature pages are rendered using `<Outlet />`.
- No duplicated layout code.

### Route Constants

All routes are defined in `RoutePaths.ts`.

Hardcoded URLs are not allowed.

### Feature First

Feature pages remain inside their respective feature folders.

No global `pages` folder is used.
