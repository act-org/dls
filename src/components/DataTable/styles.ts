/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(({ spacing }) => ({
  emptyStateContainer: {
    padding: `${spacing(1) * 2.5}px ${spacing(1)}px
      ${spacing(1)}px ${spacing(1)}px`,
    width: '100%',
  },
}));
