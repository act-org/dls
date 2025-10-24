/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Box, Typography } from '@mui/material';
import { Meta, StoryObj } from '@storybook/react-webpack5';

import { StoryVariation } from '~/components/StoryVariation';
import ThemeProvider from '~/components/ThemeProvider';
import { createThemeStory } from '~/helpers/createThemeStory';
import { Playground } from '~/helpers/playground';
import { ThemesArray } from '~/styles/themes';

import { Divider, DividerProps } from './internal';

/**
 * The default Divider exports
 */
export default {
  args: {},
  component: Divider,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  title: 'MUI Core / Divider',
} as Meta<Divider>;

type Story = StoryObj<DividerProps>;

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
  argTypes: Playground({}, Divider),
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
    stories[theme] = createThemeStory<DividerProps>(theme, {
      render: () => (
        <ThemeProvider theme={theme}>
          <StoryVariation label="Default Divider" sx={{ p: 4 }}>
            <Divider />
          </StoryVariation>

          <StoryVariation label="Light Divider" sx={{ p: 4 }}>
            <Divider light />
          </StoryVariation>

          <StoryVariation label="Inset Divider" sx={{ p: 4 }}>
            <Divider variant="inset" />
          </StoryVariation>

          <StoryVariation label="Middle Divider" sx={{ p: 4 }}>
            <Divider variant="middle" />
          </StoryVariation>

          <StoryVariation label="Divider with Text" sx={{ p: 4 }}>
            <Divider>OR</Divider>
          </StoryVariation>

          <StoryVariation label="Divider with Left Text" sx={{ p: 4 }}>
            <Divider textAlign="left">Left</Divider>
          </StoryVariation>

          <StoryVariation label="Vertical Divider" sx={{ height: 100, alignItems: 'center', p: 4, display: 'flex' }}>
            <Box sx={{ alignItems: 'center', display: 'flex', height: 100 }}>
              <Typography>Left</Typography>
              <Divider flexItem orientation="vertical" />
              <Typography>Right</Typography>
            </Box>
          </StoryVariation>

          <StoryVariation label="Divider in List" sx={{ p: 4 }}>
            <Box>
              <Typography>First Section</Typography>
              <Divider sx={{ my: 2 }} />
              <Typography>Second Section</Typography>
              <Divider sx={{ my: 2 }} />
              <Typography>Third Section</Typography>
            </Box>
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
