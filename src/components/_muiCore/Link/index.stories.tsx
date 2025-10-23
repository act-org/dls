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

import { Link, LinkProps } from './internal';

/**
 * The default Link exports
 */
export default {
  args: {
    children: <Typography>Click Me</Typography>,
  },
  component: Link,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  title: 'MUI Core / Link',
} as Meta<Link>;

type Story = StoryObj<LinkProps>;

// Documentation story (not snapshotted in Chromatic)
export const Documentation: Story = {
  args: {
    children: <Typography>Click Me</Typography>,
    color: 'primary',
  },
  parameters: {
    chromatic: { disable: true },
  },
};

// Playground story (not snapshotted in Chromatic)
export const PlaygroundStory: Story = {
  args: {
    children: <Typography>Click Me</Typography>,
    color: 'primary',
  },
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  argTypes: Playground({}, Link),
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
    stories[theme] = createThemeStory<LinkProps>(theme, {
      render: () => (
        <ThemeProvider theme={theme}>
          <StoryVariation label="Primary">
            <Link color="primary">
              <Typography>Primary Link</Typography>
            </Link>
          </StoryVariation>

          <StoryVariation label="Secondary">
            <Link color="secondary">
              <Typography>Secondary Link</Typography>
            </Link>
          </StoryVariation>

          <StoryVariation label="Text Primary">
            <Link color="textPrimary">
              <Typography>Text Primary Link</Typography>
            </Link>
          </StoryVariation>

          <StoryVariation label="Text Secondary">
            <Link color="textSecondary">
              <Typography>Text Secondary Link</Typography>
            </Link>
          </StoryVariation>

          <StoryVariation label="Error">
            <Link color="error">
              <Typography>Error Link</Typography>
            </Link>
          </StoryVariation>

          <StoryVariation label="Info">
            <Link color="info">
              <Typography>Info Link</Typography>
            </Link>
          </StoryVariation>

          <StoryVariation label="Success">
            <Link color="success">
              <Typography>Success Link</Typography>
            </Link>
          </StoryVariation>

          <StoryVariation label="Warning">
            <Link color="warning">
              <Typography>Warning Link</Typography>
            </Link>
          </StoryVariation>

          <StoryVariation label="No Underline">
            <Link color="primary" underline="none">
              <Typography>No Underline Link</Typography>
            </Link>
          </StoryVariation>

          <StoryVariation label="Hover Underline">
            <Link color="primary" underline="hover">
              <Typography>Hover Underline Link</Typography>
            </Link>
          </StoryVariation>

          <StoryVariation label="Always Underline">
            <Link color="primary" underline="always">
              <Typography>Always Underline Link</Typography>
            </Link>
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
