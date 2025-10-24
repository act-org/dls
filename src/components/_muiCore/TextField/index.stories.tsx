/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { MenuItem } from '@mui/material';
import { Meta, StoryObj } from '@storybook/react-webpack5';
import range from 'lodash/range';

import { StoryVariation } from '~/components/StoryVariation';
import ThemeProvider from '~/components/ThemeProvider';
import { createThemeStory } from '~/helpers/createThemeStory';
import { Playground } from '~/helpers/playground';
import { ThemesArray } from '~/styles/themes';

import { TextField, TextFieldProps } from './internal';

/**
 * The default TextField exports
 */
export default {
  args: {
    label: 'Field Label',
    placeholder: 'Placeholder',
  },
  component: TextField,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  title: 'MUI Core / TextField',
} as Meta<TextField>;

type Story = StoryObj<TextFieldProps>;

// Documentation story (not snapshotted in Chromatic)
export const Documentation: Story = {
  args: {
    label: 'Field Label',
    placeholder: 'Placeholder',
  },
  parameters: {
    chromatic: { disable: true },
  },
};

// Playground story (not snapshotted in Chromatic)
export const PlaygroundStory: Story = {
  args: {
    label: 'Field Label',
    placeholder: 'Placeholder',
  },
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  argTypes: Playground({}, TextField),
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
    stories[theme] = createThemeStory<TextFieldProps>(theme, {
      render: () => (
        <ThemeProvider theme={theme}>
          <StoryVariation label="Primary">
            <TextField color="primary" label="Primary TextField" placeholder="Enter text" />
          </StoryVariation>

          <StoryVariation label="Secondary">
            <TextField color="secondary" label="Secondary TextField" placeholder="Enter text" />
          </StoryVariation>

          <StoryVariation label="Error">
            <TextField color="error" label="Error TextField" placeholder="Enter text" />
          </StoryVariation>

          <StoryVariation label="Info">
            <TextField color="info" label="Info TextField" placeholder="Enter text" />
          </StoryVariation>

          <StoryVariation label="Success">
            <TextField color="success" label="Success TextField" placeholder="Enter text" />
          </StoryVariation>

          <StoryVariation label="Warning">
            <TextField color="warning" label="Warning TextField" placeholder="Enter text" />
          </StoryVariation>

          <StoryVariation label="Standard Variant">
            <TextField color="primary" label="Standard TextField" placeholder="Enter text" variant="standard" />
          </StoryVariation>

          <StoryVariation label="Filled Variant">
            <TextField color="primary" label="Filled TextField" placeholder="Enter text" variant="filled" />
          </StoryVariation>

          <StoryVariation label="Outlined Variant">
            <TextField color="primary" label="Outlined TextField" placeholder="Enter text" variant="outlined" />
          </StoryVariation>

          <StoryVariation label="Small Size">
            <TextField color="primary" label="Small TextField" placeholder="Enter text" size="small" />
          </StoryVariation>

          <StoryVariation label="Disabled">
            <TextField color="primary" disabled label="Disabled TextField" placeholder="Enter text" />
          </StoryVariation>

          <StoryVariation label="Required">
            <TextField color="primary" label="Required TextField" placeholder="Enter text" required />
          </StoryVariation>

          <StoryVariation label="Select">
            <TextField color="primary" label="Select TextField" select>
              {range(5).map(i => (
                <MenuItem key={i} value={i}>
                  Option {i + 1}
                </MenuItem>
              ))}
            </TextField>
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
