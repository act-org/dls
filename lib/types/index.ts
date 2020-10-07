/**
 * @prettier
 */

export type Size = 'default' | 'large';

export type SortDirection = 'ASCENDING' | 'DESCENDING';

export type SortObject = {
  sortBy: string;
  sortDirection: SortDirection;
};
