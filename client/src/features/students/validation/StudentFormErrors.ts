import type { StudentFormModel } from '../types/studentForm';

export type StudentFormErrors = Partial<Record<keyof StudentFormModel, string>>;
