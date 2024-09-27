/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { isString } from 'lodash';

import SORT_DIRECTION_TYPES from '~/constants/SORT_DIRECTION_TYPES';
import { SortObject } from '~/types';

type SortFunction<T> = (itemA: T, itemB: T) => number;

export function sort<T>({
  sortBy,
  sortDirection,
}: SortObject): SortFunction<T> {
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
