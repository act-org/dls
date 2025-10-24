/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Grid, TextField, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Meta, StoryObj } from '@storybook/react-webpack5';
import React from 'react';

import ThemeProvider from '~/components/ThemeProvider';
import { createThemeStory } from '~/helpers/createThemeStory';
import { ThemesArray } from '~/styles/themes';

import { StyledComment, StyledGridItem, StyledPaper } from './styles';

const Story = (): React.ReactElement => {
  const { shape } = useTheme();
  const [multiplier, setMultiplier] = React.useState(1);

  const borderRadius = Number(shape.borderRadius) * multiplier;

  return (
    <>
      <Grid container>
        <Grid>
          <TextField
            InputProps={{
              inputProps: {
                min: 0,
              },
            }}
            label="Border Radius Multiplier"
            onChange={(e): void => {
              setMultiplier(Number(e.target.value || 0));
            }}
            type="number"
            value={multiplier}
            variant="outlined"
          />
        </Grid>

        <StyledGridItem>
          <Typography>
            <code>
              border-radius: shape.borderRadius * {multiplier}&nbsp;
              {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
              <StyledComment>// {borderRadius}px</StyledComment>
            </code>
          </Typography>
        </StyledGridItem>
      </Grid>

      <StyledPaper
        sx={{
          borderRadius,
        }}
        variant="outlined"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </StyledPaper>
    </>
  );
};

export default {
  args: {},
  component: Story,
  parameters: {
    layout: 'padded',
  },
  title: 'Foundations / Shape',
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
