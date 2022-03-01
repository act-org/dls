/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import makeStyles from '@mui/styles/makeStyles';

export default makeStyles(({ spacing, typography }) => ({
  tableCellRoot: {
    fontSize: '0.888rem',
    fontWeight: Number(typography.fontWeightRegular),
    padding: `${spacing(1)} !important`,
  },
}));
