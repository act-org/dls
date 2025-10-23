/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Meta, StoryObj } from '@storybook/react-webpack5';
import ChevronLeft from 'mdi-material-ui/ChevronLeft';
import ChevronRight from 'mdi-material-ui/ChevronRight';

import { StoryVariation } from '~/components/StoryVariation';
import ThemeProvider from '~/components/ThemeProvider';
import { createThemeStory } from '~/helpers/createThemeStory';
import { Playground } from '~/helpers/playground';
import { ThemesArray } from '~/styles/themes';

import { Button, ButtonProps } from './internal';

/**
 * The default Button exports
 */
export default {
  args: {
    children: 'Click Me',
    variant: 'contained',
  },
  component: Button,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  title: 'MUI Core / Button',
} as Meta<Button>;

type Story = StoryObj<ButtonProps>;

// Documentation story (not snapshotted in Chromatic)
export const Documentation: Story = {
  args: {
    children: 'Click Me',
    variant: 'contained',
    color: 'primary',
  },
  parameters: {
    chromatic: { disable: true },
  },
};

// Playground story (not snapshotted in Chromatic)
export const PlaygroundStory: Story = {
  args: {
    children: 'Click Me',
    variant: 'contained',
    color: 'primary',
  },
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  argTypes: Playground({}, Button),
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
    stories[theme] = createThemeStory<ButtonProps>(theme, {
      render: () => (
        <ThemeProvider theme={theme}>
          <StoryVariation label="Primary">
            <Button color="primary" variant="contained">
              Primary
            </Button>
          </StoryVariation>

          <StoryVariation label="Secondary">
            <Button color="secondary" variant="contained">
              Secondary
            </Button>
          </StoryVariation>

          <StoryVariation label="Error">
            <Button color="error" variant="contained">
              Error
            </Button>
          </StoryVariation>

          <StoryVariation label="Info">
            <Button color="info" variant="contained">
              Info
            </Button>
          </StoryVariation>

          <StoryVariation label="Success">
            <Button color="success" variant="contained">
              Success
            </Button>
          </StoryVariation>

          <StoryVariation label="Warning">
            <Button color="warning" variant="contained">
              Warning
            </Button>
          </StoryVariation>

          <StoryVariation label="Outlined">
            <Button color="primary" variant="outlined">
              Outlined
            </Button>
          </StoryVariation>

          <StoryVariation label="Text">
            <Button color="primary" variant="text">
              Text
            </Button>
          </StoryVariation>

          <StoryVariation label="Disabled">
            <Button color="primary" disabled variant="contained">
              Disabled
            </Button>
          </StoryVariation>

          <StoryVariation label="Small">
            <Button color="primary" size="small" variant="contained">
              Small
            </Button>
          </StoryVariation>

          <StoryVariation label="Large">
            <Button color="primary" size="large" variant="contained">
              Large
            </Button>
          </StoryVariation>

          <StoryVariation label="With Start Icon">
            <Button color="primary" startIcon={<ChevronLeft />} variant="contained">
              Start Icon
            </Button>
          </StoryVariation>

          <StoryVariation label="With End Icon">
            <Button color="primary" endIcon={<ChevronRight />} variant="contained">
              End Icon
            </Button>
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
