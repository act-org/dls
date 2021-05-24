/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  navLink: {
    '&, &:hover': {
      color: 'unset',
      textDecoration: 'none',
    },
  },
  navTypography: ({ isActive }: any) => ({
    '&:after': {
      backgroundColor: isActive ? 'currentcolor' : 'transparent',
      borderRadius: 4,
      bottom: '-2px',
      content: '""',
      height: 4,
      left: 0,
      position: 'absolute',
      right: 0,
    },
    '&:hover': {
      '&:after': {
        backgroundColor: 'currentcolor',
      },
      fontWeight: 'bold',
    },
    '&:not(:hover)': !isActive ? { color: 'unset' } : {},
    fontSize: '0.75rem',
    fontWeight: isActive ? 'bold' : 'initial',
    lineHeight: '1.5rem',
    position: 'relative',
    transition: 'all .15s linear',
  }),
});
