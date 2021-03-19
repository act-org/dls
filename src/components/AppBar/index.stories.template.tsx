/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import * as React from 'react';
import { Story } from '@storybook/react/types-6-0';

import { IconButton } from '~/components/IconButton';
import { Menu } from '~/icons';
import { PlayGround } from '~/helpers/playground';
import { Toolbar } from '~/components/Toolbar';
import { Typography } from '~/components/Typography';

import { AppBar, AppBarProps } from '.';

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

export const argTypes = PlayGround(
  {
    color: {},
    position: {},
  },
  AppBar,
);
