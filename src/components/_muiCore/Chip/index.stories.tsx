/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Meta, StoryObj } from '@storybook/react-webpack5';
import CheckIcon from 'mdi-material-ui/Check';
import CloseIcon from 'mdi-material-ui/Close';
import DeleteIcon from 'mdi-material-ui/Delete';
import StarIcon from 'mdi-material-ui/Star';

import { StoryVariation } from '~/components/StoryVariation';
import ThemeProvider from '~/components/ThemeProvider';
import { createThemeStory } from '~/helpers/createThemeStory';
import { Playground } from '~/helpers/playground';
import { ThemesArray } from '~/styles/themes';

import { Chip, ChipProps } from './internal';

/**
 * The default Chip exports
 */
export default {
  args: {
    label: 'Chip',
  },
  component: Chip,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  title: 'MUI Core / Chip',
} as Meta<Chip>;

type Story = StoryObj<ChipProps>;

// Documentation story (not snapshotted in Chromatic)
export const Documentation: Story = {
  args: {
    label: 'Documentation',
  },
  parameters: {
    chromatic: { disable: true },
  },
};

// Playground story (not snapshotted in Chromatic)
export const PlaygroundStory: Story = {
  args: {
    label: 'Playground',
  },
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  argTypes: Playground({}, Chip),
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
    stories[theme] = createThemeStory<ChipProps>(theme, {
      render: () => (
        <ThemeProvider theme={theme}>
          <StoryVariation label="Basic Chip" sx={{ p: 4 }}>
            <Chip label="Basic" />
          </StoryVariation>

          <StoryVariation label="Chip with Avatar" sx={{ p: 4 }}>
            <Chip avatar={<div>A</div>} label="Avatar" />
          </StoryVariation>

          <StoryVariation label="Chip with Icon" sx={{ p: 4 }}>
            <Chip icon={<StarIcon />} label="Icon" />
          </StoryVariation>

          <StoryVariation label="Chip with Delete Icon" sx={{ p: 4 }}>
            <Chip deleteIcon={<DeleteIcon />} label="Delete" onDelete={() => {}} />
          </StoryVariation>

          <StoryVariation label="Chip with Custom Delete Icon" sx={{ p: 4 }}>
            <Chip deleteIcon={<CloseIcon />} label="Custom Delete" onDelete={() => {}} />
          </StoryVariation>

          <StoryVariation label="Chip Clickable" sx={{ p: 4 }}>
            <Chip clickable label="Clickable" />
          </StoryVariation>

          <StoryVariation label="Chip Deletable" sx={{ p: 4 }}>
            <Chip label="Deletable" onDelete={() => {}} />
          </StoryVariation>

          <StoryVariation label="Chip Disabled" sx={{ p: 4 }}>
            <Chip disabled label="Disabled" />
          </StoryVariation>

          <StoryVariation label="Chip Size Small" sx={{ p: 4 }}>
            <Chip label="Small" size="small" />
          </StoryVariation>

          <StoryVariation label="Chip Size Medium" sx={{ p: 4 }}>
            <Chip label="Medium" size="medium" />
          </StoryVariation>

          <StoryVariation label="Chip Color Primary" sx={{ p: 4 }}>
            <Chip color="primary" label="Primary" />
          </StoryVariation>

          <StoryVariation label="Chip Color Secondary" sx={{ p: 4 }}>
            <Chip color="secondary" label="Secondary" />
          </StoryVariation>

          <StoryVariation label="Chip Color Default" sx={{ p: 4 }}>
            <Chip color="default" label="Default" />
          </StoryVariation>

          <StoryVariation label="Chip Color Error" sx={{ p: 4 }}>
            <Chip color="error" label="Error" />
          </StoryVariation>

          <StoryVariation label="Chip Color Info" sx={{ p: 4 }}>
            <Chip color="info" label="Info" />
          </StoryVariation>

          <StoryVariation label="Chip Color Success" sx={{ p: 4 }}>
            <Chip color="success" label="Success" />
          </StoryVariation>

          <StoryVariation label="Chip Color Warning" sx={{ p: 4 }}>
            <Chip color="warning" label="Warning" />
          </StoryVariation>

          <StoryVariation label="Chip Variant Filled" sx={{ p: 4 }}>
            <Chip label="Filled" variant="filled" />
          </StoryVariation>

          <StoryVariation label="Chip Variant Outlined" sx={{ p: 4 }}>
            <Chip label="Outlined" variant="outlined" />
          </StoryVariation>

          <StoryVariation label="Chip with Long Text" sx={{ p: 4 }}>
            <Chip label="Very Long Chip Text That Might Wrap" />
          </StoryVariation>

          <StoryVariation label="Chip with Check Icon" sx={{ p: 4 }}>
            <Chip icon={<CheckIcon />} label="Checked" />
          </StoryVariation>

          <StoryVariation label="Chip with Star Icon" sx={{ p: 4 }}>
            <Chip icon={<StarIcon />} label="Starred" />
          </StoryVariation>

          <StoryVariation label="Chip with Avatar and Delete" sx={{ p: 4 }}>
            <Chip avatar={<div>U</div>} label="User" onDelete={() => {}} />
          </StoryVariation>

          <StoryVariation label="Chip with Icon and Delete" sx={{ p: 4 }}>
            <Chip deleteIcon={<DeleteIcon />} icon={<StarIcon />} label="Starred" onDelete={() => {}} />
          </StoryVariation>

          <StoryVariation label="Chip Clickable with Delete" sx={{ p: 4 }}>
            <Chip clickable label="Clickable Delete" onDelete={() => {}} />
          </StoryVariation>

          <StoryVariation label="Chip Disabled with Delete" sx={{ p: 4 }}>
            <Chip disabled label="Disabled Delete" onDelete={() => {}} />
          </StoryVariation>

          <StoryVariation label="Chip Small with Delete" sx={{ p: 4 }}>
            <Chip label="Small Delete" size="small" onDelete={() => {}} />
          </StoryVariation>

          <StoryVariation label="Chip Primary with Delete" sx={{ p: 4 }}>
            <Chip color="primary" label="Primary Delete" onDelete={() => {}} />
          </StoryVariation>

          <StoryVariation label="Chip Outlined with Delete" sx={{ p: 4 }}>
            <Chip label="Outlined Delete" onDelete={() => {}} variant="outlined" />
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
