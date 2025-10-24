/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Meta, StoryObj } from '@storybook/react-webpack5';

import { StoryVariation } from '~/components/StoryVariation';
import ThemeProvider from '~/components/ThemeProvider';
import { createThemeStory } from '~/helpers/createThemeStory';
import { Playground } from '~/helpers/playground';
import { ThemesArray } from '~/styles/themes';

import { Loading, LoadingProps } from '.';

/**
 * The `<Loading />` component displays a loading spinner with optional text.
 */
export default {
  args: {},
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  argTypes: Playground(
    {
      circularProgressProps: {
        size: {},
        thickness: {},
      },
      style: {},
      title: {},
    },
    Loading,
  ),
  component: Loading,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  title: 'Molecules / Loading',
} as Meta<LoadingProps>;

type Story = StoryObj<LoadingProps>;

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
  argTypes: Playground(
    {
      circularProgressProps: {
        size: {},
        thickness: {},
      },
      style: {},
      title: {},
    },
    Loading,
  ),
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
    stories[theme] = createThemeStory<LoadingProps>(theme, {
      render: () => (
        <ThemeProvider theme={theme}>
          <StoryVariation label="Default">
            <Loading />
          </StoryVariation>

          <StoryVariation label="With Text">
            <Loading title="Loading..." />
          </StoryVariation>

          <StoryVariation label="Custom Spinner">
            <Loading
              circularProgressProps={{
                size: 50,
                thickness: 4.5,
              }}
            />
          </StoryVariation>

          <StoryVariation label="Large Spinner">
            <Loading
              circularProgressProps={{
                size: 80,
                thickness: 6,
              }}
              title="Loading large content..."
            />
          </StoryVariation>

          <StoryVariation label="Thin Spinner">
            <Loading
              circularProgressProps={{
                size: 30,
                thickness: 2,
              }}
              title="Loading..."
            />
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
