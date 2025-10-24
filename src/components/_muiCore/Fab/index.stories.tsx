/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Meta, StoryObj } from '@storybook/react-webpack5';
import AddIcon from 'mdi-material-ui/Plus';

import { StoryVariation } from '~/components/StoryVariation';
import ThemeProvider from '~/components/ThemeProvider';
import { createThemeStory } from '~/helpers/createThemeStory';
import { Playground } from '~/helpers/playground';
import { ThemesArray } from '~/styles/themes';

import { Fab, FabProps } from './internal';

/**
 * The default Fab exports
 */
export default {
  args: {
    'aria-label': 'Floating Icon Button',
    children: <AddIcon />,
    size: 'medium',
  },
  component: Fab,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  title: 'MUI Core / Fab',
} as Meta<Fab>;

type Story = StoryObj<FabProps>;

// Documentation story (not snapshotted in Chromatic)
export const Documentation: Story = {
  args: {
    'aria-label': 'Floating Icon Button',
    children: <AddIcon />,
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
    'aria-label': 'Floating Icon Button',
    children: <AddIcon />,
    color: 'primary',
    size: 'medium',
  },
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  argTypes: Playground({}, Fab),
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
    stories[theme] = createThemeStory<FabProps>(theme, {
      render: () => (
        <ThemeProvider theme={theme}>
          <StoryVariation label="Primary">
            <Fab aria-label="Primary FAB" color="primary">
              <AddIcon />
            </Fab>
          </StoryVariation>

          <StoryVariation label="Secondary">
            <Fab aria-label="Secondary FAB" color="secondary">
              <AddIcon />
            </Fab>
          </StoryVariation>

          <StoryVariation label="Error">
            <Fab aria-label="Error FAB" color="error">
              <AddIcon />
            </Fab>
          </StoryVariation>

          <StoryVariation label="Info">
            <Fab aria-label="Info FAB" color="info">
              <AddIcon />
            </Fab>
          </StoryVariation>

          <StoryVariation label="Success">
            <Fab aria-label="Success FAB" color="success">
              <AddIcon />
            </Fab>
          </StoryVariation>

          <StoryVariation label="Warning">
            <Fab aria-label="Warning FAB" color="warning">
              <AddIcon />
            </Fab>
          </StoryVariation>

          <StoryVariation label="Disabled">
            <Fab aria-label="Disabled FAB" color="primary" disabled>
              <AddIcon />
            </Fab>
          </StoryVariation>

          <StoryVariation label="Small">
            <Fab aria-label="Small FAB" color="primary" size="small">
              <AddIcon />
            </Fab>
          </StoryVariation>

          <StoryVariation label="Large">
            <Fab aria-label="Large FAB" color="primary" size="large">
              <AddIcon />
            </Fab>
          </StoryVariation>

          <StoryVariation label="Extended">
            <Fab aria-label="Extended FAB" color="primary" variant="extended">
              <AddIcon />
              Add
            </Fab>
          </StoryVariation>

          <StoryVariation label="Extended with Text">
            <Fab aria-label="Extended FAB with Text" color="secondary" variant="extended">
              <AddIcon />
              Create New
            </Fab>
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
