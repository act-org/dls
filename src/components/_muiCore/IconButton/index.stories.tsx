/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Meta, StoryObj } from '@storybook/react-webpack5';
import PencilCircle from 'mdi-material-ui/PencilCircle';

import { StoryVariation } from '~/components/StoryVariation';
import ThemeProvider from '~/components/ThemeProvider';
import { createThemeStory } from '~/helpers/createThemeStory';
import { Playground } from '~/helpers/playground';
import { ThemesArray } from '~/styles/themes';

import { IconButton, IconButtonProps } from './internal';

/**
 * The default IconButton exports
 */
export default {
  args: {
    children: <PencilCircle />,
    color: 'primary',
    size: 'medium',
  },
  component: IconButton,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  title: 'MUI Core / IconButton',
} as Meta<IconButton>;

type Story = StoryObj<IconButtonProps>;

// Documentation story (not snapshotted in Chromatic)
export const Documentation: Story = {
  args: {
    children: <PencilCircle />,
    color: 'primary',
    size: 'medium',
  },
  parameters: {
    chromatic: { disable: true },
  },
};

// Playground story (not snapshotted in Chromatic)
export const PlaygroundStory: Story = {
  args: {
    children: <PencilCircle />,
    color: 'primary',
    size: 'medium',
  },
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  argTypes: Playground({}, IconButton),
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
    stories[theme] = createThemeStory<IconButtonProps>(theme, {
      render: () => (
        <ThemeProvider theme={theme}>
          <StoryVariation label="Primary">
            <IconButton color="primary">
              <PencilCircle />
            </IconButton>
          </StoryVariation>

          <StoryVariation label="Secondary">
            <IconButton color="secondary">
              <PencilCircle />
            </IconButton>
          </StoryVariation>

          <StoryVariation label="Error">
            <IconButton color="error">
              <PencilCircle />
            </IconButton>
          </StoryVariation>

          <StoryVariation label="Info">
            <IconButton color="info">
              <PencilCircle />
            </IconButton>
          </StoryVariation>

          <StoryVariation label="Success">
            <IconButton color="success">
              <PencilCircle />
            </IconButton>
          </StoryVariation>

          <StoryVariation label="Warning">
            <IconButton color="warning">
              <PencilCircle />
            </IconButton>
          </StoryVariation>

          <StoryVariation label="Disabled">
            <IconButton color="primary" disabled>
              <PencilCircle />
            </IconButton>
          </StoryVariation>

          <StoryVariation label="Small">
            <IconButton color="primary" size="small">
              <PencilCircle />
            </IconButton>
          </StoryVariation>

          <StoryVariation label="Large">
            <IconButton color="primary" size="large">
              <PencilCircle />
            </IconButton>
          </StoryVariation>

          <StoryVariation label="Edge Start">
            <IconButton color="primary" edge="start">
              <PencilCircle />
            </IconButton>
          </StoryVariation>

          <StoryVariation label="Edge End">
            <IconButton color="primary" edge="end">
              <PencilCircle />
            </IconButton>
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
