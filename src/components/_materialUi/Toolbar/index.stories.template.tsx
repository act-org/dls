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
  IconButton,
  Toolbar as MuiToolbar,
  ToolbarProps as MuiToolbarProps,
  Typography,
} from '@mui/material';
import { Story } from '@storybook/react/types-6-0';

import Menu from '~/icons/Menu';
import { Playground } from '~/helpers/playground';

export const Toolbar = MuiToolbar;
export type ToolbarProps = MuiToolbarProps;

export const Template: Story<ToolbarProps> = args => (
  <Toolbar {...args}>
    <IconButton aria-label="menu" color="inherit" edge="start" size="large">
      <Menu />
    </IconButton>
    <Typography color="inherit" variant="h6">
      Photos
    </Typography>
  </Toolbar>
);
