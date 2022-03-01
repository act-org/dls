/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import makeStyles from '@mui/styles/makeStyles';

export default makeStyles(theme => ({
  appBarRoot: ({ appBarHeight }: any): any => ({
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    height: appBarHeight,
    padding: `0 calc(${theme.spacing(1)} * 2.58)`,
  }),
  navContainer: {
    alignItems: 'center',
    paddingLeft: theme.spacing(3),
  },
}));
