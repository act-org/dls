/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Grid, ListItemText, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Meta, StoryObj } from '@storybook/react-webpack5';
import { flatten } from 'flat';
import includes from 'lodash/includes';
import isFunction from 'lodash/isFunction';
import isString from 'lodash/isString';
import React from 'react';

import ThemeProvider from '~/components/ThemeProvider';
import { createThemeStory } from '~/helpers/createThemeStory';
import { ThemesArray } from '~/styles/themes';

import { StyledAvatar, StyledDivider, StyledGridContainer, StyledListItem, StyledListItemIcon } from './styles';

const Story = (): React.ReactElement => {
  const { palette } = useTheme();

  const paletteGroups = Object.keys(palette)
    .filter((group): boolean => !includes(['augmentColor', 'contrastThreshold', 'getContrastText', 'mode'], group))
    .sort();

  const paletteFlat: Record<string, unknown> = flatten(palette);

  return (
    <>
      {paletteGroups.map(group => {
        return (
          <>
            <Typography variant="h1">{group}</Typography>

            <StyledDivider />

            <StyledGridContainer container spacing={2}>
              {Object.keys(paletteFlat)
                .sort()
                .map(key => {
                  if (!key.startsWith(group)) {
                    return null;
                  }

                  const value = paletteFlat[key];

                  if (isFunction(value)) {
                    return null;
                  }

                  return (
                    <Grid
                      key={key}
                      size={{
                        md: 3,
                        sm: 6,
                        xs: 12,
                      }}
                    >
                      <StyledListItem>
                        <StyledListItemIcon>
                          <StyledAvatar
                            sx={{
                              bgcolor: isString(value) ? value : undefined,
                              borderStyle: isString(value) ? 'solid' : 'dashed',
                            }}
                            variant="rounded"
                          >
                            &nbsp;
                          </StyledAvatar>
                        </StyledListItemIcon>

                        <ListItemText primary={key} secondary={String(value)} />
                      </StyledListItem>
                    </Grid>
                  );
                })}
            </StyledGridContainer>
          </>
        );
      })}
    </>
  );
};

export default {
  args: {},
  component: Story,
  parameters: {
    layout: 'padded',
  },
  title: 'Foundations / Palette',
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
