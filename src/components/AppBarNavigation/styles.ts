/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import AppBar, { AppBarProps, appBarClasses } from '@mui/material/AppBar';
import Grid2, { grid2Classes } from '@mui/material/Grid2';

import { styled } from '~/helpers/styled';

export const StyledAppBar = styled(AppBar)<
  AppBarProps & {
    $appBarHeight: number;
  }
>(({ $appBarHeight, theme }) => ({
  [`&.${appBarClasses.root}`]: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    height: $appBarHeight,
    padding: `0 calc(${theme.spacing(1)} * 2.58)`,
  },
}));

export const StyledGrid = styled(Grid2)(({ theme }) => ({
  [`&.${grid2Classes.container}`]: {
    alignItems: 'center',
    paddingLeft: theme.spacing(3),
  },
}));
