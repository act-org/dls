/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Meta, StoryObj } from '@storybook/react-webpack5';
import FormatAlignLeftIcon from 'mdi-material-ui/FormatAlignLeft';
import FormatAlignCenterIcon from 'mdi-material-ui/FormatAlignCenter';
import FormatAlignRightIcon from 'mdi-material-ui/FormatAlignRight';
import FormatAlignJustifyIcon from 'mdi-material-ui/FormatAlignJustify';
import FormatBoldIcon from 'mdi-material-ui/FormatBold';
import FormatItalicIcon from 'mdi-material-ui/FormatItalic';
import FormatUnderlinedIcon from 'mdi-material-ui/FormatUnderline';
import ViewListIcon from 'mdi-material-ui/ViewList';
import ViewModuleIcon from 'mdi-material-ui/ViewModule';
import ViewQuiltIcon from 'mdi-material-ui/ViewQuilt';

import { StoryVariation } from '~/components/StoryVariation';
import ThemeProvider from '~/components/ThemeProvider';
import { createThemeStory } from '~/helpers/createThemeStory';
import { Playground } from '~/helpers/playground';
import { ThemesArray } from '~/styles/themes';

import { ToggleButton, ToggleButtonGroup, ToggleButtonProps } from './internal';

/**
 * The default ToggleButton exports
 */
export default {
  args: {
    children: 'Toggle',
    value: 'toggle',
  },
  component: ToggleButton,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  title: 'MUI Core / ToggleButton',
} as Meta<ToggleButton>;

type Story = StoryObj<ToggleButtonProps>;

// Documentation story (not snapshotted in Chromatic)
export const Documentation: Story = {
  args: {
    children: 'Basic Toggle',
    value: 'basic',
  },
  parameters: {
    chromatic: { disable: true },
  },
};

// Playground story (not snapshotted in Chromatic)
export const PlaygroundStory: Story = {
  args: {
    children: 'Playground Toggle',
    value: 'playground',
  },
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  argTypes: Playground({}, ToggleButton),
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
    stories[theme] = createThemeStory<ToggleButtonProps>(theme, {
      render: () => (
        <ThemeProvider theme={theme}>
          <StoryVariation label="Basic ToggleButton">
            <ToggleButton value="basic">Basic</ToggleButton>
          </StoryVariation>

          <StoryVariation label="Selected ToggleButton">
            <ToggleButton value="selected" selected>
              Selected
            </ToggleButton>
          </StoryVariation>

          <StoryVariation label="Disabled ToggleButton">
            <ToggleButton value="disabled" disabled>
              Disabled
            </ToggleButton>
          </StoryVariation>

          <StoryVariation label="Small Size">
            <ToggleButton value="small" size="small">
              Small
            </ToggleButton>
          </StoryVariation>

          <StoryVariation label="Medium Size">
            <ToggleButton value="medium" size="medium">
              Medium
            </ToggleButton>
          </StoryVariation>

          <StoryVariation label="Large Size">
            <ToggleButton value="large" size="large">
              Large
            </ToggleButton>
          </StoryVariation>

          <StoryVariation label="Color Primary">
            <ToggleButton value="primary" color="primary">
              Primary
            </ToggleButton>
          </StoryVariation>

          <StoryVariation label="Color Secondary">
            <ToggleButton value="secondary" color="secondary">
              Secondary
            </ToggleButton>
          </StoryVariation>

          <StoryVariation label="Color Standard">
            <ToggleButton value="standard" color="standard">
              Standard
            </ToggleButton>
          </StoryVariation>

          <StoryVariation label="With Icon">
            <ToggleButton value="icon">
              <FormatBoldIcon />
            </ToggleButton>
          </StoryVariation>

          <StoryVariation label="With Icon and Text">
            <ToggleButton value="icon-text">
              <FormatBoldIcon />
              Bold
            </ToggleButton>
          </StoryVariation>

          <StoryVariation label="ToggleButtonGroup - Single Selection">
            <ToggleButtonGroup value="left" exclusive>
              <ToggleButton value="left">
                <FormatAlignLeftIcon />
              </ToggleButton>
              <ToggleButton value="center">
                <FormatAlignCenterIcon />
              </ToggleButton>
              <ToggleButton value="right">
                <FormatAlignRightIcon />
              </ToggleButton>
              <ToggleButton value="justify">
                <FormatAlignJustifyIcon />
              </ToggleButton>
            </ToggleButtonGroup>
          </StoryVariation>

          <StoryVariation label="ToggleButtonGroup - Multiple Selection">
            <ToggleButtonGroup value={['bold', 'italic']}>
              <ToggleButton value="bold">
                <FormatBoldIcon />
              </ToggleButton>
              <ToggleButton value="italic">
                <FormatItalicIcon />
              </ToggleButton>
              <ToggleButton value="underlined">
                <FormatUnderlinedIcon />
              </ToggleButton>
            </ToggleButtonGroup>
          </StoryVariation>

          <StoryVariation label="ToggleButtonGroup - View Options">
            <ToggleButtonGroup value="list" exclusive>
              <ToggleButton value="list">
                <ViewListIcon />
              </ToggleButton>
              <ToggleButton value="module">
                <ViewModuleIcon />
              </ToggleButton>
              <ToggleButton value="quilt">
                <ViewQuiltIcon />
              </ToggleButton>
            </ToggleButtonGroup>
          </StoryVariation>

          <StoryVariation label="ToggleButtonGroup - Text Options">
            <ToggleButtonGroup value="option1" exclusive>
              <ToggleButton value="option1">Option 1</ToggleButton>
              <ToggleButton value="option2">Option 2</ToggleButton>
              <ToggleButton value="option3">Option 3</ToggleButton>
            </ToggleButtonGroup>
          </StoryVariation>

          <StoryVariation label="ToggleButtonGroup - Disabled">
            <ToggleButtonGroup value="left" exclusive disabled>
              <ToggleButton value="left">
                <FormatAlignLeftIcon />
              </ToggleButton>
              <ToggleButton value="center">
                <FormatAlignCenterIcon />
              </ToggleButton>
              <ToggleButton value="right">
                <FormatAlignRightIcon />
              </ToggleButton>
            </ToggleButtonGroup>
          </StoryVariation>

          <StoryVariation label="ToggleButtonGroup - Small Size">
            <ToggleButtonGroup value="left" exclusive size="small">
              <ToggleButton value="left">
                <FormatAlignLeftIcon />
              </ToggleButton>
              <ToggleButton value="center">
                <FormatAlignCenterIcon />
              </ToggleButton>
              <ToggleButton value="right">
                <FormatAlignRightIcon />
              </ToggleButton>
            </ToggleButtonGroup>
          </StoryVariation>

          <StoryVariation label="ToggleButtonGroup - Large Size">
            <ToggleButtonGroup value="left" exclusive size="large">
              <ToggleButton value="left">
                <FormatAlignLeftIcon />
              </ToggleButton>
              <ToggleButton value="center">
                <FormatAlignCenterIcon />
              </ToggleButton>
              <ToggleButton value="right">
                <FormatAlignRightIcon />
              </ToggleButton>
            </ToggleButtonGroup>
          </StoryVariation>

          <StoryVariation label="ToggleButtonGroup - Color Primary">
            <ToggleButtonGroup value="left" exclusive color="primary">
              <ToggleButton value="left">
                <FormatAlignLeftIcon />
              </ToggleButton>
              <ToggleButton value="center">
                <FormatAlignCenterIcon />
              </ToggleButton>
              <ToggleButton value="right">
                <FormatAlignRightIcon />
              </ToggleButton>
            </ToggleButtonGroup>
          </StoryVariation>

          <StoryVariation label="ToggleButtonGroup - Color Secondary">
            <ToggleButtonGroup value="left" exclusive color="secondary">
              <ToggleButton value="left">
                <FormatAlignLeftIcon />
              </ToggleButton>
              <ToggleButton value="center">
                <FormatAlignCenterIcon />
              </ToggleButton>
              <ToggleButton value="right">
                <FormatAlignRightIcon />
              </ToggleButton>
            </ToggleButtonGroup>
          </StoryVariation>

          <StoryVariation label="ToggleButtonGroup - Vertical Orientation">
            <ToggleButtonGroup value="left" exclusive orientation="vertical">
              <ToggleButton value="left">
                <FormatAlignLeftIcon />
              </ToggleButton>
              <ToggleButton value="center">
                <FormatAlignCenterIcon />
              </ToggleButton>
              <ToggleButton value="right">
                <FormatAlignRightIcon />
              </ToggleButton>
            </ToggleButtonGroup>
          </StoryVariation>

          <StoryVariation label="ToggleButtonGroup - Full Width">
            <ToggleButtonGroup value="left" exclusive fullWidth>
              <ToggleButton value="left">Left</ToggleButton>
              <ToggleButton value="center">Center</ToggleButton>
              <ToggleButton value="right">Right</ToggleButton>
            </ToggleButtonGroup>
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
