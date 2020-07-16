/**
 * @prettier
 */

export type SortDirection = 'ASCENDING' | 'DESCENDING';

export type SortObject = {
  sortBy: string;
  sortDirection: SortDirection;
};
