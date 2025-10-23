/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Typography } from '@mui/material';
import { Meta, StoryObj } from '@storybook/react-webpack5';

import { StoryVariation } from '~/components/StoryVariation';
import ThemeProvider from '~/components/ThemeProvider';
import { createThemeStory } from '~/helpers/createThemeStory';
import { Playground } from '~/helpers/playground';
import { ThemesArray } from '~/styles/themes';

import { Paper, PaperProps } from './internal';

/**
 * The default Paper exports
 */
export default {
  args: {
    children: <Typography variant="h6">Paper Content</Typography>,
    sx: {
      display: 'flex',
      justifyContent: 'center',
      minHeight: '100px',
    },
  },
  component: Paper,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  title: 'MUI Core / Paper',
} as Meta<Paper>;

type Story = StoryObj<PaperProps>;

// Documentation story (not snapshotted in Chromatic)
export const Documentation: Story = {
  args: {
    children: <Typography variant="h6">Paper Content</Typography>,
    sx: {
      display: 'flex',
      justifyContent: 'center',
      minHeight: '100px',
    },
  },
  parameters: {
    chromatic: { disable: true },
  },
};

// Playground story (not snapshotted in Chromatic)
export const PlaygroundStory: Story = {
  args: {
    children: <Typography variant="h6">Paper Content</Typography>,
    sx: {
      display: 'flex',
      justifyContent: 'center',
      minHeight: '100px',
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  argTypes: Playground({}, Paper),
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
    stories[theme] = createThemeStory<PaperProps>(theme, {
      render: () => (
        <ThemeProvider theme={theme}>
          <StoryVariation label="Default">
            <Paper sx={{ alignItems: 'center', display: 'flex', justifyContent: 'center', minHeight: '80px', p: 2 }}>
              <Typography variant="h6">Default Paper</Typography>
            </Paper>
          </StoryVariation>

          <StoryVariation label="Outlined">
            <Paper sx={{ alignItems: 'center', display: 'flex', justifyContent: 'center', minHeight: '80px', p: 2 }} variant="outlined">
              <Typography variant="h6">Outlined Paper</Typography>
            </Paper>
          </StoryVariation>

          <StoryVariation label="Elevation 1">
            <Paper elevation={1} sx={{ alignItems: 'center', display: 'flex', justifyContent: 'center', minHeight: '80px', p: 2 }}>
              <Typography variant="h6">Elevation 1</Typography>
            </Paper>
          </StoryVariation>

          <StoryVariation label="Elevation 2">
            <Paper elevation={2} sx={{ alignItems: 'center', display: 'flex', justifyContent: 'center', minHeight: '80px', p: 2 }}>
              <Typography variant="h6">Elevation 2</Typography>
            </Paper>
          </StoryVariation>

          <StoryVariation label="Elevation 3">
            <Paper elevation={3} sx={{ alignItems: 'center', display: 'flex', justifyContent: 'center', minHeight: '80px', p: 2 }}>
              <Typography variant="h6">Elevation 3</Typography>
            </Paper>
          </StoryVariation>

          <StoryVariation label="Elevation 4">
            <Paper elevation={4} sx={{ alignItems: 'center', display: 'flex', justifyContent: 'center', minHeight: '80px', p: 2 }}>
              <Typography variant="h6">Elevation 4</Typography>
            </Paper>
          </StoryVariation>

          <StoryVariation label="Rounded">
            <Paper square={false} sx={{ alignItems: 'center', display: 'flex', justifyContent: 'center', minHeight: '80px', p: 2 }}>
              <Typography variant="h6">Rounded Paper</Typography>
            </Paper>
          </StoryVariation>

          <StoryVariation label="Square">
            <Paper square sx={{ alignItems: 'center', display: 'flex', justifyContent: 'center', minHeight: '80px', p: 2 }}>
              <Typography variant="h6">Square Paper</Typography>
            </Paper>
          </StoryVariation>

          <StoryVariation label="With Custom Background">
            <Paper sx={{ alignItems: 'center', bgcolor: 'primary.light', display: 'flex', justifyContent: 'center', minHeight: '80px', p: 2 }}>
              <Typography color="primary.contrastText" variant="h6">
                Custom Background
              </Typography>
            </Paper>
          </StoryVariation>

          <StoryVariation label="With Border">
            <Paper
              sx={{
                alignItems: 'center',
                border: '2px solid',
                borderColor: 'primary.main',
                display: 'flex',
                justifyContent: 'center',
                minHeight: '80px',
                p: 2,
              }}
            >
              <Typography variant="h6">With Border</Typography>
            </Paper>
          </StoryVariation>

          <StoryVariation label="Small Padding">
            <Paper sx={{ alignItems: 'center', display: 'flex', justifyContent: 'center', minHeight: '80px', p: 1 }}>
              <Typography variant="body2">Small Padding</Typography>
            </Paper>
          </StoryVariation>

          <StoryVariation label="Large Padding">
            <Paper sx={{ alignItems: 'center', display: 'flex', justifyContent: 'center', minHeight: '80px', p: 4 }}>
              <Typography variant="h5">Large Padding</Typography>
            </Paper>
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
