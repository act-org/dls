/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Meta, StoryObj } from '@storybook/react-webpack5';
import Account from 'mdi-material-ui/Account';

import { StoryVariation } from '~/components/StoryVariation';
import ThemeProvider from '~/components/ThemeProvider';
import { createThemeStory } from '~/helpers/createThemeStory';
import { Playground } from '~/helpers/playground';
import { ThemesArray } from '~/styles/themes';

import { EmptyState, EmptyStateProps } from '.';

/**
 * The `<EmptyState />` component displays an empty state with an icon, title, and description.
 */
export default {
  args: {
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    Icon: Account,
    title: 'No users yet.',
  },
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  argTypes: Playground(
    {
      description: { type: 'string' },
      style: {},
      title: { type: 'string' },
    },
    EmptyState,
  ),
  component: EmptyState,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  title: 'Molecules / EmptyState',
} as Meta<EmptyStateProps>;

type Story = StoryObj<EmptyStateProps>;

// Documentation story (not snapshotted in Chromatic)
export const Documentation: Story = {
  args: {
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    Icon: Account,
    title: 'No users yet.',
  },
  parameters: {
    chromatic: { disable: true },
  },
};

// Playground story (not snapshotted in Chromatic)
export const PlaygroundStory: Story = {
  args: {
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    Icon: Account,
    title: 'No users yet.',
  },
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  argTypes: Playground(
    {
      description: { type: 'string' },
      style: {},
      title: { type: 'string' },
    },
    EmptyState,
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
    stories[theme] = createThemeStory<EmptyStateProps>(theme, {
      render: () => (
        <ThemeProvider theme={theme}>
          <StoryVariation label="Default">
            <EmptyState description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." Icon={Account} title="No users yet." />
          </StoryVariation>

          <StoryVariation label="Custom Title">
            <EmptyState
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              Icon={Account}
              title="Custom Title"
              titleTypographyProps={{
                color: 'primary',
              }}
            />
          </StoryVariation>

          <StoryVariation label="Custom Description">
            <EmptyState
              description="This is a custom description with primary color."
              descriptionTypographyProps={{
                color: 'primary',
              }}
              Icon={Account}
              title="No users yet."
            />
          </StoryVariation>

          <StoryVariation label="Custom Icon">
            <EmptyState
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              Icon={Account}
              iconProps={{
                color: 'error',
              }}
              title="No users yet."
            />
          </StoryVariation>

          <StoryVariation label="Long Title">
            <EmptyState
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              Icon={Account}
              title="This is a very long title to demonstrate that the title container will expand to fit the content."
              titleGridContainerProps={{
                maxWidth: 'unset !important',
              }}
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
