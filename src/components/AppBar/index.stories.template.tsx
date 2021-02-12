/** @format */

import * as React from 'react';
import { AppBar, AppBarProps } from '.';
import { PlayGround } from '../../helpers/argBlocks';
import { Story } from '@storybook/react/types-6-0';
import { IconButton, Toolbar } from '@material-ui/core';
import { Typography } from '../Typography';
import MenuIcon from '../../icons/Menu';

export const Template: Story<AppBarProps> = args => {
  return (
    <AppBar {...args}>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" color="inherit">
          Photos
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
export const argTypes = PlayGround(
  {
    color: {},
    position: {},
  },
  AppBar,
);
