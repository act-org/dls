/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Box, Typography } from '@mui/material';
import { Meta, StoryObj } from '@storybook/react-webpack5';
import { ReactNode } from 'react';

import { StoryVariation } from '~/components/StoryVariation';
import ThemeProvider from '~/components/ThemeProvider';
import { createThemeStory } from '~/helpers/createThemeStory';
import { Playground } from '~/helpers/playground';
import { ThemesArray } from '~/styles/themes';

import { CircularProgress, CircularProgressProps, LinearProgress } from './internal';

/**
 * The default Progress exports
 */
export default {
  args: {},
  component: CircularProgress,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  title: 'MUI Core / Progress',
} as Meta<CircularProgress>;

type Story = StoryObj<CircularProgressProps>;

// Documentation story (not snapshotted in Chromatic)
export const Documentation: Story = {
  args: {},
  parameters: {
    chromatic: { disable: true },
  },
};

// Playground story (not snapshotted in Chromatic)
export const PlaygroundStory: Story = {
  args: {},
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  argTypes: Playground({}, CircularProgress),
  name: 'Playground',
  parameters: {
    chromatic: { disable: true },
  },
};

// Circular Progress with Label Component for demonstration
const CircularProgressWithLabel = ({ value }: { value: number }): ReactNode => (
  <Box sx={{ position: 'relative', display: 'inline-flex' }}>
    <CircularProgress variant="determinate" value={value} />
    <Box
      sx={{
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography variant="caption" component="div" color="text.secondary">
        {`${Math.round(value)}%`}
      </Typography>
    </Box>
  </Box>
);

// Linear Progress with Label Component for demonstration
const LinearProgressWithLabel = ({ value }: { value: number }): ReactNode => (
  <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
    <Box sx={{ width: '100%', mr: 1 }}>
      <LinearProgress variant="determinate" value={value} />
    </Box>
    <Box sx={{ minWidth: 35 }}>
      <Typography variant="body2" color="text.secondary">
        {`${Math.round(value)}%`}
      </Typography>
    </Box>
  </Box>
);

// Theme-specific stories (snapshotted in Chromatic)
// Generate stories for each theme dynamically

// Export theme-specific stories dynamically
const themeStories = ThemesArray.reduce(
  (stories, theme) => {
    // eslint-disable-next-line no-param-reassign
    stories[theme] = createThemeStory<CircularProgressProps>(theme, {
      render: () => (
        <ThemeProvider theme={theme}>
          <StoryVariation label="Circular Indeterminate" sx={{ p: 4 }}>
            <CircularProgress />
          </StoryVariation>

          <StoryVariation label="Circular Determinate" sx={{ p: 4 }}>
            <CircularProgress variant="determinate" value={75} />
          </StoryVariation>

          <StoryVariation label="Circular with Label" sx={{ p: 4 }}>
            <CircularProgressWithLabel value={75} />
          </StoryVariation>

          <StoryVariation label="Circular Size Variations" sx={{ p: 4 }}>
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
              <CircularProgress size={40} />
              <CircularProgress size={60} />
              <CircularProgress size={80} />
            </Box>
          </StoryVariation>

          <StoryVariation label="Linear Indeterminate" sx={{ p: 4 }}>
            <LinearProgress />
          </StoryVariation>

          <StoryVariation label="Linear Determinate" sx={{ p: 4 }}>
            <LinearProgress variant="determinate" value={50} />
          </StoryVariation>

          <StoryVariation label="Linear Buffer" sx={{ p: 4 }}>
            <LinearProgress variant="buffer" value={60} valueBuffer={80} />
          </StoryVariation>

          <StoryVariation label="Linear with Label" sx={{ p: 4 }}>
            <LinearProgressWithLabel value={50} />
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
