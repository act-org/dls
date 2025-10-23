/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { FormControlLabel } from '@mui/material';
import { Meta, StoryObj } from '@storybook/react-webpack5';

import { StoryVariation } from '~/components/StoryVariation';
import ThemeProvider from '~/components/ThemeProvider';
import { createThemeStory } from '~/helpers/createThemeStory';
import { Playground } from '~/helpers/playground';
import { ThemesArray } from '~/styles/themes';

import { Checkbox, CheckboxProps } from './internal';

/**
 * The default Checkbox exports
 */
export default {
  component: Checkbox,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  title: 'MUI Core / Checkbox',
} as Meta<Checkbox>;

type Story = StoryObj<CheckboxProps>;

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
  argTypes: Playground({}, Checkbox),
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
    stories[theme] = createThemeStory<CheckboxProps>(theme, {
      render: () => (
        <ThemeProvider theme={theme}>
          <StoryVariation label="Primary">
            <Checkbox checked color="primary" />
          </StoryVariation>

          <StoryVariation label="Secondary">
            <Checkbox checked color="secondary" />
          </StoryVariation>

          <StoryVariation label="Error">
            <Checkbox checked color="error" />
          </StoryVariation>

          <StoryVariation label="Info">
            <Checkbox checked color="info" />
          </StoryVariation>

          <StoryVariation label="Success">
            <Checkbox checked color="success" />
          </StoryVariation>

          <StoryVariation label="Warning">
            <Checkbox checked color="warning" />
          </StoryVariation>

          <StoryVariation label="Disabled">
            <Checkbox disabled />
          </StoryVariation>

          <StoryVariation label="Indeterminate">
            <Checkbox indeterminate />
          </StoryVariation>

          <StoryVariation label="Small">
            <Checkbox size="small" />
          </StoryVariation>

          <StoryVariation label="With Label">
            <FormControlLabel control={<Checkbox />} label="Checkbox Label" />
          </StoryVariation>

          <StoryVariation label="Checked">
            <Checkbox checked />
          </StoryVariation>

          <StoryVariation label="Unchecked">
            <Checkbox checked={false} />
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
