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
  Toolbar,
  ToolbarProps,
  Typography,
} from '@material-ui/core';
import { Story } from '@storybook/react/types-6-0';

import Menu from '~/icons/Menu';
import { Playground } from '~/helpers/playground';

export const Template: Story<ToolbarProps> = args => (
  <Toolbar {...args}>
    <IconButton aria-label="menu" color="inherit" edge="start">
      <Menu />
    </IconButton>
    <Typography color="inherit" variant="h6">
      Photos
    </Typography>
  </Toolbar>
);
export const argTypes = Playground({}, Toolbar);
