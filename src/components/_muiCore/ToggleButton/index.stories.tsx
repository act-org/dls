/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Meta, StoryObj } from '@storybook/react-webpack5';
import FormatAlignCenterIcon from 'mdi-material-ui/FormatAlignCenter';
import FormatAlignJustifyIcon from 'mdi-material-ui/FormatAlignJustify';
import FormatAlignLeftIcon from 'mdi-material-ui/FormatAlignLeft';
import FormatAlignRightIcon from 'mdi-material-ui/FormatAlignRight';
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
            <ToggleButton selected value="selected">
              Selected
            </ToggleButton>
          </StoryVariation>

          <StoryVariation label="Disabled ToggleButton">
            <ToggleButton disabled value="disabled">
              Disabled
            </ToggleButton>
          </StoryVariation>

          <StoryVariation label="Small Size">
            <ToggleButton size="small" value="small">
              Small
            </ToggleButton>
          </StoryVariation>

          <StoryVariation label="Medium Size">
            <ToggleButton size="medium" value="medium">
              Medium
            </ToggleButton>
          </StoryVariation>

          <StoryVariation label="Large Size">
            <ToggleButton size="large" value="large">
              Large
            </ToggleButton>
          </StoryVariation>

          <StoryVariation label="Color Primary">
            <ToggleButton color="primary" value="primary">
              Primary
            </ToggleButton>
          </StoryVariation>

          <StoryVariation label="Color Secondary">
            <ToggleButton color="secondary" value="secondary">
              Secondary
            </ToggleButton>
          </StoryVariation>

          <StoryVariation label="Color Standard">
            <ToggleButton color="standard" value="standard">
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
            <ToggleButtonGroup exclusive value="left">
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
            <ToggleButtonGroup exclusive value="list">
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
            <ToggleButtonGroup exclusive value="option1">
              <ToggleButton value="option1">Option 1</ToggleButton>
              <ToggleButton value="option2">Option 2</ToggleButton>
              <ToggleButton value="option3">Option 3</ToggleButton>
            </ToggleButtonGroup>
          </StoryVariation>

          <StoryVariation label="ToggleButtonGroup - Disabled">
            <ToggleButtonGroup disabled exclusive value="left">
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
            <ToggleButtonGroup exclusive size="small" value="left">
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
            <ToggleButtonGroup exclusive size="large" value="left">
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
            <ToggleButtonGroup color="primary" exclusive value="left">
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
            <ToggleButtonGroup color="secondary" exclusive value="left">
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
            <ToggleButtonGroup exclusive orientation="vertical" value="left">
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
            <ToggleButtonGroup exclusive fullWidth value="left">
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
