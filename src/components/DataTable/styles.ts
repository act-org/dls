/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import { grey } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(({ spacing, typography }) => ({
  emptyStateContainer: {
    paddingBottom: spacing(1),
    paddingLeft: spacing(1),
    paddingRight: spacing(1),
    paddingTop: spacing(1) * 2.5,
    width: '100%',
  },
  tablePaginationRoot: {
    backgroundColor: grey[50],
    fontSize: typography.body2.fontSize,
  },
}));
