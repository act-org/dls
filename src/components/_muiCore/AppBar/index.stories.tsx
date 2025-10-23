/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { AppBarProps, IconButton, Toolbar, Typography } from '@mui/material';
import { Meta, StoryObj } from '@storybook/react-webpack5';
import Menu from 'mdi-material-ui/Menu';
import React from 'react';

import { Playground } from '~/helpers/playground';

import { AppBar } from './internal';

const createAppBarChildren = (title: string): React.ReactElement => (
  <Toolbar>
    <IconButton aria-label="menu" color="inherit" edge="start" size="medium">
      <Menu />
    </IconButton>

    <Typography style={{ marginLeft: 8 }} variant="h6">
      {title}
    </Typography>
  </Toolbar>
);

/**
 * The default App Bar exports
 */
export default {
  args: {
    children: createAppBarChildren('Title'),
    position: 'static',
  },
  component: AppBar,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  title: 'MUI Core / AppBar',
} as Meta<AppBar>;

type Story = StoryObj<AppBarProps>;

// Documentation story (not snapshotted in Chromatic)
export const Documentation: Story = {
  args: { color: 'primary' },
  parameters: {
    chromatic: { disable: true },
  },
};

// Playground story (not snapshotted in Chromatic)
export const PlaygroundStory: Story = {
  args: { color: 'primary' },
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  argTypes: Playground({}, AppBar),
  name: 'Playground',
  parameters: {
    chromatic: { disable: true },
  },
};

// Theme-specific stories (snapshotted in Chromatic)
export const ENCOURA: Story = {
  args: { color: 'primary' },
  parameters: {
    globals: { theme: 'ENCOURA' },
  },
  render: args => (
    <div>
      <AppBar {...args} color="primary">
        {createAppBarChildren('Primary')}
      </AppBar>
      <AppBar {...args} color="secondary" style={{ marginTop: 8 }}>
        {createAppBarChildren('Secondary')}
      </AppBar>
      <AppBar {...args} color="transparent" style={{ marginTop: 8 }}>
        {createAppBarChildren('Transparent')}
      </AppBar>
    </div>
  ),
};

export const ENCOURA_CLASSIC: Story = {
  args: { color: 'primary' },
  parameters: {
    globals: { theme: 'ENCOURA_CLASSIC' },
  },
  render: args => (
    <div>
      <AppBar {...args} color="primary">
        {createAppBarChildren('Primary')}
      </AppBar>
      <AppBar {...args} color="secondary" style={{ marginTop: 8 }}>
        {createAppBarChildren('Secondary')}
      </AppBar>
      <AppBar {...args} color="transparent" style={{ marginTop: 8 }}>
        {createAppBarChildren('Transparent')}
      </AppBar>
    </div>
  ),
};

export const ENCOURAGE: Story = {
  args: { color: 'primary' },
  parameters: {
    globals: { theme: 'ENCOURAGE' },
  },
  render: args => (
    <div>
      <AppBar {...args} color="primary">
        {createAppBarChildren('Primary')}
      </AppBar>
      <AppBar {...args} color="secondary" style={{ marginTop: 8 }}>
        {createAppBarChildren('Secondary')}
      </AppBar>
      <AppBar {...args} color="transparent" style={{ marginTop: 8 }}>
        {createAppBarChildren('Transparent')}
      </AppBar>
    </div>
  ),
};

export const ENCOURAGE_E4E: Story = {
  args: { color: 'primary' },
  parameters: {
    globals: { theme: 'ENCOURAGE_E4E' },
  },
  render: args => (
    <div>
      <AppBar {...args} color="primary">
        {createAppBarChildren('Primary')}
      </AppBar>
      <AppBar {...args} color="secondary" style={{ marginTop: 8 }}>
        {createAppBarChildren('Secondary')}
      </AppBar>
      <AppBar {...args} color="transparent" style={{ marginTop: 8 }}>
        {createAppBarChildren('Transparent')}
      </AppBar>
    </div>
  ),
};
