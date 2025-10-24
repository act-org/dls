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

import { Switch, SwitchProps } from './internal';

/**
 * The default Switch exports
 */
export default {
  args: {},
  component: Switch,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  title: 'MUI Core / Switch',
} as Meta<Switch>;

type Story = StoryObj<SwitchProps>;

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
  argTypes: Playground({}, Switch),
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
    stories[theme] = createThemeStory<SwitchProps>(theme, {
      render: () => (
        <ThemeProvider theme={theme}>
          <StoryVariation label="Primary">
            <FormControlLabel control={<Switch checked color="primary" />} label={<Typography>Primary Switch</Typography>} />
          </StoryVariation>

          <StoryVariation label="Secondary">
            <FormControlLabel control={<Switch checked color="secondary" />} label={<Typography>Secondary Switch</Typography>} />
          </StoryVariation>

          <StoryVariation label="Error">
            <FormControlLabel control={<Switch checked color="error" />} label={<Typography>Error Switch</Typography>} />
          </StoryVariation>

          <StoryVariation label="Info">
            <FormControlLabel control={<Switch checked color="info" />} label={<Typography>Info Switch</Typography>} />
          </StoryVariation>

          <StoryVariation label="Success">
            <FormControlLabel control={<Switch checked color="success" />} label={<Typography>Success Switch</Typography>} />
          </StoryVariation>

          <StoryVariation label="Warning">
            <FormControlLabel control={<Switch checked color="warning" />} label={<Typography>Warning Switch</Typography>} />
          </StoryVariation>

          <StoryVariation label="Small Size">
            <FormControlLabel control={<Switch checked color="primary" size="small" />} label={<Typography>Small Switch</Typography>} />
          </StoryVariation>

          <StoryVariation label="Medium Size">
            <FormControlLabel control={<Switch checked color="primary" size="medium" />} label={<Typography>Medium Switch</Typography>} />
          </StoryVariation>

          <StoryVariation label="Unchecked">
            <FormControlLabel control={<Switch color="primary" />} label={<Typography>Unchecked Switch</Typography>} />
          </StoryVariation>

          <StoryVariation label="Disabled">
            <FormControlLabel control={<Switch color="primary" disabled />} label={<Typography>Disabled Switch</Typography>} />
          </StoryVariation>

          <StoryVariation label="Disabled Checked">
            <FormControlLabel control={<Switch checked color="primary" disabled />} label={<Typography>Disabled Checked Switch</Typography>} />
          </StoryVariation>

          <StoryVariation label="Required">
            <FormControlLabel control={<Switch checked color="primary" required />} label={<Typography>Required Switch</Typography>} />
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
