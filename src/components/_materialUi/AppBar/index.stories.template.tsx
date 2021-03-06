/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import * as React from 'react';
import {
  AppBar,
  AppBarProps,
  IconButton,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { Story } from '@storybook/react/types-6-0';

import { Menu } from '~/icons';
import { Playground } from '~/helpers/playground';

export const Template: Story<AppBarProps> = (props: AppBarProps) => (
  <AppBar position="static" {...props}>
    <Toolbar>
      <IconButton aria-label="menu" color="inherit" edge="start">
        <Menu />
      </IconButton>

      <Typography style={{ marginLeft: 8 }} variant="h6">
        Title
      </Typography>
    </Toolbar>
  </AppBar>
);

export const argTypes = Playground(
  {
    color: {},
    position: {},
  },
  AppBar,
);
