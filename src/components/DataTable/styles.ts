/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import { grey } from '@mui/material/colors';
import makeStyles from '@mui/styles/makeStyles';

export default makeStyles(({ spacing, typography }) => ({
  emptyStateContainer: {
    paddingBottom: spacing(1),
    paddingLeft: spacing(1),
    paddingRight: spacing(1),
    paddingTop: spacing(2.5),
    width: '100%',
  },
  tablePaginationRoot: {
    backgroundColor: grey[50],
    fontSize: typography.body2.fontSize,
  },
}));
