/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

export type Size = 'default' | 'large';

export type SortDirection = 'ASCENDING' | 'DESCENDING';

export type SortObject = {
  sortBy: string;
  sortDirection: SortDirection;
};
