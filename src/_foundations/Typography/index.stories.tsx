/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Grid, IconButton, Tooltip, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { TypographyVariant } from '@mui/material/styles/createTypography';
import { Meta, StoryObj } from '@storybook/react-webpack5';
import compact from 'lodash/compact';
import isPlainObject from 'lodash/isPlainObject';
import InformationOutline from 'mdi-material-ui/InformationOutline';
import React from 'react';

import ThemeProvider from '~/components/ThemeProvider';
import { createThemeStory } from '~/helpers/createThemeStory';
import { ThemesArray } from '~/styles/themes';

import { StyledCode, StyledDivider, StyledGridContainerInfo, StyledGridItem, StyledGridItemTypography } from './styles';

const properties = {
  color: 'color',
  fontFamily: 'font-family',
  fontSize: 'font-size',
  fontWeight: 'font-weight',
  letterSpacing: 'letter-spacing',
  lineHeight: 'line-height',
};

const Story = (): React.ReactElement => {
  const { typography } = useTheme();

  const variants = compact(
    Object.keys(typography).map((key: string) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      if (isPlainObject((typography as any)[key])) {
        return key as TypographyVariant;
      }

      return null;
    }),
  ).filter((v: string): boolean => v !== 'allVariants');

  const sortedVariants = variants;

  return (
    <>
      {sortedVariants.map(variant => {
        return (
          <React.Fragment key={variant}>
            <Grid container>
              <StyledGridItem
                size={{
                  xs: 2,
                }}
              >
                <StyledGridContainerInfo container>
                  <Grid>
                    <Typography variant="body1">{variant}</Typography>
                  </Grid>

                  <Grid>
                    <Tooltip
                      arrow
                      title={
                        <>
                          {Object.keys(properties).map((key): React.ReactElement => {
                            const cssStyle = properties[key as keyof typeof properties];
                            const value = typography[variant][key as keyof (typeof typography)[typeof variant]];

                            return (
                              <>
                                <StyledCode key={cssStyle}>
                                  {cssStyle}: {String(value)}
                                </StyledCode>

                                <StyledDivider />
                              </>
                            );
                          })}
                        </>
                      }
                    >
                      <IconButton>
                        <InformationOutline />
                      </IconButton>
                    </Tooltip>
                  </Grid>
                </StyledGridContainerInfo>
              </StyledGridItem>

              <StyledGridItemTypography
                size={{
                  xs: 10,
                }}
              >
                <Typography variant={variant}>The quick brown fox jumps over the lazy dog.</Typography>
              </StyledGridItemTypography>
            </Grid>
          </React.Fragment>
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
  title: 'Foundations / Typography',
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
