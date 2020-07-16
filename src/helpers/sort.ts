/**
 * @prettier
 */

import { isString } from 'lodash';

import SORT_DIRECTION_TYPES from '~/constants/sortDirectionTypes';
import { SortObject } from '~/types';

type SortFunction<T> = (itemA: T, itemB: T) => number;

function sort<T>({ sortBy, sortDirection }: SortObject): SortFunction<T> {
  return (
    { [sortBy as keyof T]: itemA },
    { [sortBy as keyof T]: itemB },
  ): number => {
    if (itemA === null || itemB === null) return 0;

    let normalizedItemA: any = itemA;
    let normalizedItemB: any = itemB;

    if (isString(itemA)) {
      normalizedItemA = itemA.trim().toLowerCase();
    }

    if (isString(itemB)) {
      normalizedItemB = itemB.trim().toLowerCase();
    }

    if (normalizedItemA < normalizedItemB) {
      return sortDirection === SORT_DIRECTION_TYPES.ASCENDING ? -1 : 1;
    }

    if (normalizedItemA > normalizedItemB) {
      return sortDirection === SORT_DIRECTION_TYPES.ASCENDING ? 1 : -1;
    }

    return 0;
  };
}

export default sort;
