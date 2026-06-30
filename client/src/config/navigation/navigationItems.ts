import {
  CalendarDays,
  FileText,
  GraduationCap,
  Home,
  IndianRupee,
  Settings,
  Users,
} from 'lucide-react';

import type { NavigationItem } from './NavigationItem';

export const navigationItems: NavigationItem[] = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: Home,
    path: '/dashboard',
  },
  {
    id: 'students',
    label: 'Students',
    icon: GraduationCap,
    path: '/students',
  },
  {
    id: 'teachers',
    label: 'Teachers',
    icon: Users,
    path: '/teachers',
  },
  {
    id: 'attendance',
    label: 'Attendance',
    icon: CalendarDays,
    path: '/attendance',
  },
  {
    id: 'fees',
    label: 'Fees',
    icon: IndianRupee,
    path: '/fees',
  },
  {
    id: 'reports',
    label: 'Reports',
    icon: FileText,
    path: '/reports',
  },
  {
    id: 'settings',
    label: 'Settings',
    icon: Settings,
    path: '/settings',
  },
];
