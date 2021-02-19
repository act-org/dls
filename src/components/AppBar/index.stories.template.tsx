/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import * as React from 'react';
import { AppBar, AppBarProps } from '.';
import { PlayGround } from '../../helpers/argBlocks';
import { Story } from '@storybook/react/types-6-0';
import { IconButton, Toolbar } from '@material-ui/core';
import { Typography } from '../Typography';
import MenuIcon from '../../icons/Menu';

export const Template: Story<AppBarProps> = args => (
  <AppBar {...args}>
    <Toolbar>
      <IconButton aria-label="menu" color="inherit" edge="start">
        <MenuIcon />
      </IconButton>
      <Typography color="inherit" variant="h6">
        Photos
      </Typography>
    </Toolbar>
  </AppBar>
);
export const argTypes = PlayGround(
  {
    color: {},
    position: {},
  },
  AppBar,
);
