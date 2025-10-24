/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Box } from '@mui/material';
import { Meta, StoryObj } from '@storybook/react-webpack5';

import { StoryVariation } from '~/components/StoryVariation';
import ThemeProvider from '~/components/ThemeProvider';
import { createThemeStory } from '~/helpers/createThemeStory';
import { Playground } from '~/helpers/playground';
import { ThemesArray } from '~/styles/themes';

import { Slider, SliderProps } from './internal';

/**
 * The default Slider exports
 */
export default {
  args: {
    defaultValue: 30,
    max: 100,
    min: 0,
  },
  component: Slider,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  title: 'MUI Core / Slider',
} as Meta<Slider>;

type Story = StoryObj<SliderProps>;

// Documentation story (not snapshotted in Chromatic)
export const Documentation: Story = {
  args: {
    defaultValue: 30,
    max: 100,
    min: 0,
  },
  parameters: {
    chromatic: { disable: true },
  },
};

// Playground story (not snapshotted in Chromatic)
export const PlaygroundStory: Story = {
  args: {
    defaultValue: 30,
    max: 100,
    min: 0,
  },
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  argTypes: Playground({}, Slider),
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
    stories[theme] = createThemeStory<SliderProps>(theme, {
      render: () => (
        <ThemeProvider theme={theme}>
          <StoryVariation label="Primary">
            <Box sx={{ width: 300 }}>
              <Slider color="primary" defaultValue={30} max={100} min={0} />
            </Box>
          </StoryVariation>

          <StoryVariation label="Secondary">
            <Box sx={{ width: 300 }}>
              <Slider color="secondary" defaultValue={50} max={100} min={0} />
            </Box>
          </StoryVariation>

          <StoryVariation label="Error">
            <Box sx={{ width: 300 }}>
              <Slider color="error" defaultValue={70} max={100} min={0} />
            </Box>
          </StoryVariation>

          <StoryVariation label="Info">
            <Box sx={{ width: 300 }}>
              <Slider color="info" defaultValue={40} max={100} min={0} />
            </Box>
          </StoryVariation>

          <StoryVariation label="Success">
            <Box sx={{ width: 300 }}>
              <Slider color="success" defaultValue={60} max={100} min={0} />
            </Box>
          </StoryVariation>

          <StoryVariation label="Warning">
            <Box sx={{ width: 300 }}>
              <Slider color="warning" defaultValue={80} max={100} min={0} />
            </Box>
          </StoryVariation>

          <StoryVariation label="Small Size">
            <Box sx={{ width: 300 }}>
              <Slider color="primary" defaultValue={25} max={100} min={0} size="small" />
            </Box>
          </StoryVariation>

          <StoryVariation label="Medium Size">
            <Box sx={{ width: 300 }}>
              <Slider color="primary" defaultValue={35} max={100} min={0} size="medium" />
            </Box>
          </StoryVariation>

          <StoryVariation label="With Marks">
            <Box sx={{ width: 300 }}>
              <Slider color="primary" defaultValue={45} marks max={100} min={0} />
            </Box>
          </StoryVariation>

          <StoryVariation label="Disabled">
            <Box sx={{ width: 300 }}>
              <Slider color="primary" defaultValue={55} disabled max={100} min={0} />
            </Box>
          </StoryVariation>

          <StoryVariation label="With Value Label">
            <Box sx={{ width: 300 }}>
              <Slider color="primary" defaultValue={65} max={100} min={0} valueLabelDisplay="on" />
            </Box>
          </StoryVariation>

          <StoryVariation label="Range Slider">
            <Box sx={{ width: 300 }}>
              <Slider color="primary" defaultValue={[20, 80]} max={100} min={0} />
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
