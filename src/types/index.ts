/**
 * @prettier
 */

export type SortDirection = 'ASC' | 'DESC';

export type SortObject<T> = {
  dataKey: string;
  direction: SortDirection;
};
