/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { FormControlLabel, Typography } from '@mui/material';
import { Meta, StoryObj } from '@storybook/react-webpack5';

import { StoryVariation } from '~/components/StoryVariation';
import ThemeProvider from '~/components/ThemeProvider';
import { createThemeStory } from '~/helpers/createThemeStory';
import { Playground } from '~/helpers/playground';
import { ThemesArray } from '~/styles/themes';

import { Radio, RadioProps } from './internal';

/**
 * The default Radio exports
 */
export default {
  args: {},
  component: Radio,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  title: 'MUI Core / Radio',
} as Meta<Radio>;

type Story = StoryObj<RadioProps>;

// Documentation story (not snapshotted in Chromatic)
export const Documentation: Story = {
  args: {
    color: 'primary',
  },
  parameters: {
    chromatic: { disable: true },
  },
};

// Playground story (not snapshotted in Chromatic)
export const PlaygroundStory: Story = {
  args: {
    color: 'primary',
  },
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  argTypes: Playground({}, Radio),
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
    stories[theme] = createThemeStory<RadioProps>(theme, {
      render: () => (
        <ThemeProvider theme={theme}>
          <StoryVariation label="Primary">
            <FormControlLabel control={<Radio checked color="primary" />} label={<Typography>Primary Radio</Typography>} />
          </StoryVariation>

          <StoryVariation label="Secondary">
            <FormControlLabel control={<Radio checked color="secondary" />} label={<Typography>Secondary Radio</Typography>} />
          </StoryVariation>

          <StoryVariation label="Error">
            <FormControlLabel control={<Radio checked color="error" />} label={<Typography>Error Radio</Typography>} />
          </StoryVariation>

          <StoryVariation label="Info">
            <FormControlLabel control={<Radio checked color="info" />} label={<Typography>Info Radio</Typography>} />
          </StoryVariation>

          <StoryVariation label="Success">
            <FormControlLabel control={<Radio checked color="success" />} label={<Typography>Success Radio</Typography>} />
          </StoryVariation>

          <StoryVariation label="Warning">
            <FormControlLabel control={<Radio checked color="warning" />} label={<Typography>Warning Radio</Typography>} />
          </StoryVariation>

          <StoryVariation label="Small Size">
            <FormControlLabel control={<Radio checked color="primary" size="small" />} label={<Typography>Small Radio</Typography>} />
          </StoryVariation>

          <StoryVariation label="Medium Size">
            <FormControlLabel control={<Radio checked color="primary" size="medium" />} label={<Typography>Medium Radio</Typography>} />
          </StoryVariation>

          <StoryVariation label="Unchecked">
            <FormControlLabel control={<Radio color="primary" />} label={<Typography>Unchecked Radio</Typography>} />
          </StoryVariation>

          <StoryVariation label="Disabled">
            <FormControlLabel control={<Radio color="primary" disabled />} label={<Typography>Disabled Radio</Typography>} />
          </StoryVariation>

          <StoryVariation label="Disabled Checked">
            <FormControlLabel control={<Radio checked color="primary" disabled />} label={<Typography>Disabled Checked Radio</Typography>} />
          </StoryVariation>

          <StoryVariation label="Required">
            <FormControlLabel control={<Radio checked color="primary" required />} label={<Typography>Required Radio</Typography>} />
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
