/**
 * @prettier
 */

export type SortDirection = 'ASC' | 'DESC';

export type SortObject = {
  dataKey: string;
  direction: SortDirection;
};
