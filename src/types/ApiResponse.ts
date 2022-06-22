export type ApiListResponse<T> = {
  count: number;
  next?: string;
  previous?: string;
  results: T[];
};
