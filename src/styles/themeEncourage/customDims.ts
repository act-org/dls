/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import deepmerge from 'deepmerge';

import baseTheme from './baseTheme';

export const customDims = deepmerge(baseTheme.customDims, {
  heights: {
    header: 60,
    input: 40,
    tableHeader: 58,
  },
  widths: {
    listItemIcon: 40,
  },
});

export default customDims;
