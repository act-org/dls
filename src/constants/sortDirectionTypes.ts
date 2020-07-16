/**
 * @prettier
 */

import { SortDirection } from '~/types';

const SORT_DIRECTION_TYPES: Record<SortDirection, SortDirection> = {
  ASCENDING: 'ASCENDING' as SortDirection,
  DESCENDING: 'DESCENDING' as SortDirection,
};

export default SORT_DIRECTION_TYPES;
