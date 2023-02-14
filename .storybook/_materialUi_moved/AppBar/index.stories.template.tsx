/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import {
  AppBar as MuiAppBar,
  AppBarProps as MuiAppBarProps,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import { Story } from '@storybook/react/types-6-0';
import Menu from '@actinc/dls/icons/Menu';

export const AppBar = MuiAppBar;
export type AppBarProps = MuiAppBarProps;

export const Template: Story<AppBarProps> = (props: AppBarProps) => (
  <AppBar position="static" {...props}>
    <Toolbar>
      <IconButton aria-label="menu" color="inherit" edge="start" size="large">
        <Menu />
      </IconButton>

      <Typography style={{ marginLeft: 8 }} variant="h6">
        Title
      </Typography>
    </Toolbar>
  </AppBar>
);
