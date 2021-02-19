/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import * as React from 'react';
import { Toolbar, ToolbarProps } from '.';
import { PlayGround } from '../../helpers/argBlocks';
import { Story } from '@storybook/react/types-6-0';
import { IconButton } from '@material-ui/core';
import { Typography } from '../Typography';
import MenuIcon from '../../icons/Menu';

export const Template: Story<ToolbarProps> = args => {
  return (
    <Toolbar {...args}>
      <IconButton edge="start" color="inherit" aria-label="menu">
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" color="inherit">
        Photos
      </Typography>
    </Toolbar>
  );
};
export const argTypes = PlayGround({}, Toolbar);
