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

import { Rating, RatingProps } from './internal';

/**
 * The default Rating exports
 */
export default {
  args: {},
  component: Rating,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  title: 'MUI Core / Rating',
} as Meta<Rating>;

type Story = StoryObj<RatingProps>;

// Documentation story (not snapshotted in Chromatic)
export const Documentation: Story = {
  args: {
    defaultValue: 3,
  },
  parameters: {
    chromatic: { disable: true },
  },
};

// Playground story (not snapshotted in Chromatic)
export const PlaygroundStory: Story = {
  args: {
    defaultValue: 3,
  },
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  argTypes: Playground({}, Rating),
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
    stories[theme] = createThemeStory<RatingProps>(theme, {
      render: () => (
        <ThemeProvider theme={theme}>
          <StoryVariation label="Default">
            <Rating defaultValue={3} />
          </StoryVariation>

          <StoryVariation label="High Rating">
            <Rating defaultValue={5} />
          </StoryVariation>

          <StoryVariation label="Low Rating">
            <Rating defaultValue={1} />
          </StoryVariation>

          <StoryVariation label="Half Rating">
            <Rating defaultValue={2.5} precision={0.5} />
          </StoryVariation>

          <StoryVariation label="Read Only">
            <Rating defaultValue={4} readOnly />
          </StoryVariation>

          <StoryVariation label="Disabled">
            <Rating defaultValue={3} disabled />
          </StoryVariation>

          <StoryVariation label="Small Size">
            <Rating defaultValue={3} size="small" />
          </StoryVariation>

          <StoryVariation label="Large Size">
            <Rating defaultValue={3} size="large" />
          </StoryVariation>

          <StoryVariation label="Custom Max">
            <Rating defaultValue={7} max={10} />
          </StoryVariation>

          <StoryVariation label="With Labels">
            <Rating defaultValue={3} getLabelText={value => `${value} Star${value !== 1 ? 's' : ''}`} />
          </StoryVariation>

          <StoryVariation label="Precision">
            <Rating defaultValue={3.2} precision={0.1} />
          </StoryVariation>

          <StoryVariation label="Empty">
            <Rating defaultValue={0} />
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
