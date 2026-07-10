export interface StudentQuery {
  page: number;
  pazeSize: number;
  serach?: string;
  sortBy?: string;
  sortDirection?: 'Asc' | 'Desc';
}
