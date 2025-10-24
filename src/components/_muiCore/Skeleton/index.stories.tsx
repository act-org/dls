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

import { Skeleton, SkeletonProps } from './internal';

/**
 * The default Skeleton exports
 */
export default {
  args: {
    height: 100,
    width: 300,
  },
  component: Skeleton,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  title: 'MUI Core / Skeleton',
} as Meta<Skeleton>;

type Story = StoryObj<SkeletonProps>;

// Documentation story (not snapshotted in Chromatic)
export const Documentation: Story = {
  args: {
    height: 100,
    width: 300,
  },
  parameters: {
    chromatic: { disable: true },
  },
};

// Playground story (not snapshotted in Chromatic)
export const PlaygroundStory: Story = {
  args: {
    height: 100,
    width: 300,
  },
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  argTypes: Playground({}, Skeleton),
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
    stories[theme] = createThemeStory<SkeletonProps>(theme, {
      render: () => (
        <ThemeProvider theme={theme}>
          <StoryVariation label="Default">
            <Skeleton height={100} width={300} />
          </StoryVariation>

          <StoryVariation label="Pulse Animation">
            <Skeleton animation="pulse" height={100} width={300} />
          </StoryVariation>

          <StoryVariation label="Wave Animation">
            <Skeleton animation="wave" height={100} width={300} />
          </StoryVariation>

          <StoryVariation label="No Animation">
            <Skeleton animation={false} height={100} width={300} />
          </StoryVariation>

          <StoryVariation label="Rectangular">
            <Skeleton height={100} variant="rectangular" width={300} />
          </StoryVariation>

          <StoryVariation label="Circular">
            <Skeleton height={100} variant="circular" width={100} />
          </StoryVariation>

          <StoryVariation label="Rounded">
            <Skeleton height={100} variant="rounded" width={300} />
          </StoryVariation>

          <StoryVariation label="Text">
            <Skeleton variant="text" width={300} />
          </StoryVariation>

          <StoryVariation label="Small">
            <Skeleton height={50} width={150} />
          </StoryVariation>

          <StoryVariation label="Large">
            <Skeleton height={200} width={400} />
          </StoryVariation>

          <StoryVariation label="Custom Color">
            <Skeleton height={100} sx={{ bgcolor: 'primary.light' }} width={300} />
          </StoryVariation>

          <StoryVariation label="Multiple Text Lines">
            <div>
              <Skeleton height={20} width="80%" />
              <Skeleton height={20} width="60%" />
              <Skeleton height={20} width="90%" />
            </div>
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
