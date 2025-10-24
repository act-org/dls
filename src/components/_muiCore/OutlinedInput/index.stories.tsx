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

import { OutlinedInput, OutlinedInputProps } from './internal';

/**
 * The default OutlinedInput exports
 */
export default {
  args: {
    color: 'primary',
    placeholder: 'Placeholder',
  },
  component: OutlinedInput,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  title: 'MUI Core / OutlinedInput',
} as Meta<OutlinedInput>;

type Story = StoryObj<OutlinedInputProps>;

// Documentation story (not snapshotted in Chromatic)
export const Documentation: Story = {
  args: {
    color: 'primary',
    placeholder: 'Placeholder',
  },
  parameters: {
    chromatic: { disable: true },
  },
};

// Playground story (not snapshotted in Chromatic)
export const PlaygroundStory: Story = {
  args: {
    color: 'primary',
    placeholder: 'Placeholder',
  },
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  argTypes: Playground({}, OutlinedInput),
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
    stories[theme] = createThemeStory<OutlinedInputProps>(theme, {
      render: () => (
        <ThemeProvider theme={theme}>
          <StoryVariation label="Primary">
            <OutlinedInput color="primary" placeholder="Primary Input" />
          </StoryVariation>

          <StoryVariation label="Secondary">
            <OutlinedInput color="secondary" placeholder="Secondary Input" />
          </StoryVariation>

          <StoryVariation label="Error">
            <OutlinedInput color="error" placeholder="Error Input" />
          </StoryVariation>

          <StoryVariation label="Info">
            <OutlinedInput color="info" placeholder="Info Input" />
          </StoryVariation>

          <StoryVariation label="Success">
            <OutlinedInput color="success" placeholder="Success Input" />
          </StoryVariation>

          <StoryVariation label="Warning">
            <OutlinedInput color="warning" placeholder="Warning Input" />
          </StoryVariation>

          <StoryVariation label="Disabled">
            <OutlinedInput color="primary" disabled placeholder="Disabled Input" />
          </StoryVariation>

          <StoryVariation label="With Value">
            <OutlinedInput color="primary" placeholder="With Value" value="Some Value" />
          </StoryVariation>

          <StoryVariation label="Small">
            <OutlinedInput color="primary" placeholder="Small Input" size="small" />
          </StoryVariation>

          <StoryVariation label="Multiline">
            <OutlinedInput color="primary" multiline placeholder="Multiline Input" />
          </StoryVariation>

          <StoryVariation label="With Label">
            <OutlinedInput color="primary" placeholder="Input with Label" />
          </StoryVariation>

          <StoryVariation label="Required">
            <OutlinedInput color="primary" placeholder="Required Input" required />
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
