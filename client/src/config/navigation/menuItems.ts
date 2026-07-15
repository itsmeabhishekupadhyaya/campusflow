import {
  CalendarDays,
  FileText,
  GraduationCap,
  Home,
  IndianRupee,
  Settings,
  Users,
} from 'lucide-react';

import type { MenuItemModel } from './MenuItemModel';

import { RoutePaths } from '../../routes/RoutePaths';

export const menuItems: MenuItemModel[] = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: Home,
    path: RoutePaths.DASHBOARD,
  },
  {
    id: 'students',
    label: 'Students',
    icon: GraduationCap,
    path: RoutePaths.STUDENTS,
  },
  {
    id: 'teachers',
    label: 'Teachers',
    icon: Users,
    path: RoutePaths.TEACHERS,
  },
  {
    id: 'attendance',
    label: 'Attendance',
    icon: CalendarDays,
    path: RoutePaths.ATTENDANCE,
  },
  {
    id: 'fees',
    label: 'Fees',
    icon: IndianRupee,
    path: RoutePaths.FEES,
  },
  {
    id: 'reports',
    label: 'Reports',
    icon: FileText,
    path: RoutePaths.REPORTS,
  },
  {
    id: 'settings',
    label: 'Settings',
    icon: Settings,
    path: RoutePaths.SETTINGS,
  },
];
