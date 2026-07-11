export const SortDirection = {
  Ascending: 'Ascending',
  Descending: 'Descending',
} as const;

export type SortDirection = (typeof SortDirection)[keyof typeof SortDirection];
