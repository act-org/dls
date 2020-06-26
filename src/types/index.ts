/**
 * @prettier
 */

export type SortDirection = 'ASC' | 'DESC';

export type SortObject<T> = {
  dataKey: keyof T;
  direction: SortDirection;
};
