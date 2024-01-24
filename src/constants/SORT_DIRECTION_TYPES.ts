/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

/* eslint-disable filenames/match-exported */

import { SortDirection } from '~/types';

export const SORT_DIRECTION_TYPES: Record<SortDirection, SortDirection> = {
  ASCENDING: 'ASCENDING' as SortDirection,
  DESCENDING: 'DESCENDING' as SortDirection,
};

export default SORT_DIRECTION_TYPES;
