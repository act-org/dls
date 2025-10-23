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

import ThemeProvider from '~/components/ThemeProvider';
import { createThemeStory } from '~/helpers/createThemeStory';
import { Playground } from '~/helpers/playground';
import { ThemesArray } from '~/styles/themes';

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
// Generate stories for each theme dynamically

// Export theme-specific stories dynamically
const themeStories = ThemesArray.reduce(
  (stories, theme) => {
    // eslint-disable-next-line no-param-reassign
    stories[theme] = createThemeStory<AppBarProps>(theme, {
      render: args => (
        <ThemeProvider theme={theme}>
          {/* Default Color */}
          <AppBar {...args} color="default">
            {createAppBarChildren('Default')}
          </AppBar>

          {/* Primary Color */}
          <AppBar {...args} color="primary" style={{ marginTop: 16 }}>
            {createAppBarChildren('Primary')}
          </AppBar>

          {/* Secondary Color */}
          <AppBar {...args} color="secondary" style={{ marginTop: 16 }}>
            {createAppBarChildren('Secondary')}
          </AppBar>

          {/* Transparent Color */}
          <AppBar {...args} color="transparent" style={{ marginTop: 16 }}>
            {createAppBarChildren('Transparent')}
          </AppBar>

          {/* Error Color */}
          <AppBar {...args} color="error" style={{ marginTop: 16 }}>
            {createAppBarChildren('Error')}
          </AppBar>

          {/* Info Color */}
          <AppBar {...args} color="info" style={{ marginTop: 16 }}>
            {createAppBarChildren('Info')}
          </AppBar>

          {/* Success Color */}
          <AppBar {...args} color="success" style={{ marginTop: 16 }}>
            {createAppBarChildren('Success')}
          </AppBar>

          {/* Warning Color */}
          <AppBar {...args} color="warning" style={{ marginTop: 16 }}>
            {createAppBarChildren('Warning')}
          </AppBar>
        </ThemeProvider>
      ),
    });

    return stories;
  },
  {} as Record<string, Story>,
);

export const ThemeEncoura = { ...themeStories.ENCOURA, name: 'Theme: Encoura' };
export const ThemeEncouraClassic = { ...themeStories.ENCOURA_CLASSIC, name: 'Theme: Encoura Classic' };
export const ThemeEncourage = { ...themeStories.ENCOURAGE, name: 'Theme: Encourage' };
export const ThemeEncourageE4E = { ...themeStories.ENCOURAGE_E4E, name: 'Theme: Encourage E4E' };
