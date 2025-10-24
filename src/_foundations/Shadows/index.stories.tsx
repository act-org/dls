/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Grid, ListItem, ListItemText, Paper } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Meta, StoryObj } from '@storybook/react-webpack5';
import React from 'react';

import ThemeProvider from '~/components/ThemeProvider';
import { createThemeStory } from '~/helpers/createThemeStory';
import { ThemesArray } from '~/styles/themes';

import { StyledGrid } from './styles';

const Story = (): React.ReactElement => {
  const { shadows } = useTheme();

  return (
    <Grid container>
      {shadows.map((shadow, i) => (
        <StyledGrid
          key={shadow}
          size={{
            xs: 12,
          }}
        >
          <Paper
            style={{
              boxShadow: shadow,
            }}
          >
            <ListItem>
              <ListItemText primary={`shadows[${i}]`} secondary={shadow} />
            </ListItem>
          </Paper>
        </StyledGrid>
      ))}
    </Grid>
  );
};

export default {
  args: {},
  component: Story,
  parameters: {
    layout: 'padded',
  },
  title: 'Foundations / Shadows',
} as Meta;

type Story = StoryObj;

// Preview story (not snapshotted in Chromatic)
export const Preview: Story = {
  args: {},
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
    stories[theme] = createThemeStory(theme, {
      render: () => (
        <ThemeProvider theme={theme}>
          <Story />
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
