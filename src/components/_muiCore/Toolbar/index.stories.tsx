/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Button, IconButton, Typography } from '@mui/material';
import { Meta, StoryObj } from '@storybook/react-webpack5';
import Menu from 'mdi-material-ui/Menu';

import { StoryVariation } from '~/components/StoryVariation';
import ThemeProvider from '~/components/ThemeProvider';
import { createThemeStory } from '~/helpers/createThemeStory';
import { Playground } from '~/helpers/playground';
import { ThemesArray } from '~/styles/themes';

import { Toolbar, ToolbarProps } from './internal';

/**
 * The default Toolbar exports
 */
export default {
  args: {
    children: (
      <>
        <IconButton aria-label="menu" color="inherit" edge="start" size="large">
          <Menu />
        </IconButton>
        <Typography color="inherit" variant="h6">
          Photos
        </Typography>
      </>
    ),
  },
  component: Toolbar,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  title: 'MUI Core / Toolbar',
} as Meta<Toolbar>;

type Story = StoryObj<ToolbarProps>;

// Documentation story (not snapshotted in Chromatic)
export const Documentation: Story = {
  args: {
    children: (
      <>
        <IconButton aria-label="menu" color="inherit" edge="start" size="large">
          <Menu />
        </IconButton>
        <Typography color="inherit" variant="h6">
          Photos
        </Typography>
      </>
    ),
  },
  parameters: {
    chromatic: { disable: true },
  },
};

// Playground story (not snapshotted in Chromatic)
export const PlaygroundStory: Story = {
  args: {
    children: (
      <>
        <IconButton aria-label="menu" color="inherit" edge="start" size="large">
          <Menu />
        </IconButton>
        <Typography color="inherit" variant="h6">
          Photos
        </Typography>
      </>
    ),
  },
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  argTypes: Playground({}, Toolbar),
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
    stories[theme] = createThemeStory<ToolbarProps>(theme, {
      render: () => (
        <ThemeProvider theme={theme}>
          <StoryVariation label="Default">
            <Toolbar>
              <IconButton aria-label="menu" color="inherit" edge="start" size="large">
                <Menu />
              </IconButton>
              <Typography color="inherit" variant="h6">
                Default Toolbar
              </Typography>
            </Toolbar>
          </StoryVariation>

          <StoryVariation label="With Buttons">
            <Toolbar>
              <IconButton aria-label="menu" color="inherit" edge="start" size="large">
                <Menu />
              </IconButton>
              <Typography color="inherit" sx={{ flexGrow: 1 }} variant="h6">
                With Buttons
              </Typography>
              <Button color="inherit">Login</Button>
              <Button color="inherit">Sign Up</Button>
            </Toolbar>
          </StoryVariation>

          <StoryVariation label="Dense Variant">
            <Toolbar variant="dense">
              <IconButton aria-label="menu" color="inherit" edge="start" size="small">
                <Menu />
              </IconButton>
              <Typography color="inherit" variant="h6">
                Dense Toolbar
              </Typography>
            </Toolbar>
          </StoryVariation>

          <StoryVariation label="Regular Variant">
            <Toolbar variant="regular">
              <IconButton aria-label="menu" color="inherit" edge="start" size="large">
                <Menu />
              </IconButton>
              <Typography color="inherit" variant="h6">
                Regular Toolbar
              </Typography>
            </Toolbar>
          </StoryVariation>

          <StoryVariation label="Disable Gutters">
            <Toolbar disableGutters>
              <IconButton aria-label="menu" color="inherit" edge="start" size="large">
                <Menu />
              </IconButton>
              <Typography color="inherit" variant="h6">
                No Gutters
              </Typography>
            </Toolbar>
          </StoryVariation>

          <StoryVariation label="With Spacing">
            <Toolbar sx={{ gap: 2 }}>
              <IconButton aria-label="menu" color="inherit" edge="start" size="large">
                <Menu />
              </IconButton>
              <Typography color="inherit" variant="h6">
                Spaced Toolbar
              </Typography>
              <Button color="inherit">Action 1</Button>
              <Button color="inherit">Action 2</Button>
            </Toolbar>
          </StoryVariation>

          <StoryVariation label="Centered Content">
            <Toolbar>
              <Typography color="inherit" sx={{ flexGrow: 1, textAlign: 'center' }} variant="h6">
                Centered Title
              </Typography>
            </Toolbar>
          </StoryVariation>

          <StoryVariation label="With Divider">
            <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <IconButton aria-label="menu" color="inherit" edge="start" size="large">
                <Menu />
              </IconButton>
              <Typography color="inherit" variant="h6">
                With Divider
              </Typography>
            </Toolbar>
          </StoryVariation>

          <StoryVariation label="Custom Background">
            <Toolbar sx={{ bgcolor: 'primary.light' }}>
              <IconButton aria-label="menu" color="inherit" edge="start" size="large">
                <Menu />
              </IconButton>
              <Typography color="inherit" variant="h6">
                Custom Background
              </Typography>
            </Toolbar>
          </StoryVariation>

          <StoryVariation label="Minimal">
            <Toolbar>
              <Typography color="inherit" variant="h6">
                Minimal Toolbar
              </Typography>
            </Toolbar>
          </StoryVariation>

          <StoryVariation label="With Actions">
            <Toolbar>
              <Typography color="inherit" sx={{ flexGrow: 1 }} variant="h6">
                With Actions
              </Typography>
              <Button color="inherit" size="small">
                Save
              </Button>
              <Button color="inherit" size="small">
                Cancel
              </Button>
            </Toolbar>
          </StoryVariation>

          <StoryVariation label="Full Width">
            <Toolbar sx={{ width: '100%' }}>
              <IconButton aria-label="menu" color="inherit" edge="start" size="large">
                <Menu />
              </IconButton>
              <Typography color="inherit" sx={{ flexGrow: 1 }} variant="h6">
                Full Width Toolbar
              </Typography>
              <Button color="inherit">Settings</Button>
            </Toolbar>
          </StoryVariation>
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
