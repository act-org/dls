/**
 * @prettier
 */

import { isString } from 'lodash';

import SORT_DIRECTION_TYPES from '~/constants/sortDirectionTypes';
import { SortObject } from '~/types';

type SortFunction = (itemA: any, itemB: any) => number;

function sort({ dataKey, direction }: SortObject): SortFunction {
  return ({ [dataKey]: itemA }, { [dataKey]: itemB }): number => {
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
      return direction === SORT_DIRECTION_TYPES.ASC ? -1 : 1;
    }

    if (normalizedItemA > normalizedItemB) {
      return direction === SORT_DIRECTION_TYPES.ASC ? 1 : -1;
    }

    return 0;
  };
}

export default sort;
