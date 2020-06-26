/**
 * @prettier
 */

import { SortDirection } from '~/types';

const SORT_DIRECTION_TYPES: Record<SortDirection, SortDirection> = {
  ASC: 'ASC' as SortDirection,
  DESC: 'DESC' as SortDirection,
};

export default SORT_DIRECTION_TYPES;
