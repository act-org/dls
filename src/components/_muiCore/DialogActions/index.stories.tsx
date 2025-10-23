/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Button } from '@mui/material';
import { Meta, StoryObj } from '@storybook/react-webpack5';
import { ReactElement } from 'react';

import { StoryVariation } from '~/components/StoryVariation';
import ThemeProvider from '~/components/ThemeProvider';
import { createThemeStory } from '~/helpers/createThemeStory';
import { Playground } from '~/helpers/playground';
import { ThemesArray } from '~/styles/themes';

import { DialogActions, DialogActionsProps } from './internal';

const createDialogActionsChildren = (): ReactElement => (
  <>
    <Button>Cancel</Button>
    <Button variant="contained">Save</Button>
  </>
);

/**
 * The default DialogActions exports
 */
export default {
  args: {
    children: createDialogActionsChildren(),
  },
  component: DialogActions,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  title: 'MUI Core / DialogActions',
} as Meta<DialogActions>;

type Story = StoryObj<DialogActionsProps>;

// Documentation story (not snapshotted in Chromatic)
export const Documentation: Story = {
  args: {
    children: createDialogActionsChildren(),
  },
  parameters: {
    chromatic: { disable: true },
  },
};

// Playground story (not snapshotted in Chromatic)
export const PlaygroundStory: Story = {
  args: {
    children: createDialogActionsChildren(),
  },
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  argTypes: Playground({}, DialogActions),
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
    stories[theme] = createThemeStory<DialogActionsProps>(theme, {
      render: () => (
        <ThemeProvider theme={theme}>
          <StoryVariation label="Default">
            <DialogActions>{createDialogActionsChildren()}</DialogActions>
          </StoryVariation>

          <StoryVariation label="With Three Buttons">
            <DialogActions>
              <Button>Cancel</Button>
              <Button>Save Draft</Button>
              <Button variant="contained">Save</Button>
            </DialogActions>
          </StoryVariation>

          <StoryVariation label="With Different Button Variants">
            <DialogActions>
              <Button variant="text">Text</Button>
              <Button variant="outlined">Outlined</Button>
              <Button variant="contained">Contained</Button>
            </DialogActions>
          </StoryVariation>

          <StoryVariation label="With Different Button Colors">
            <DialogActions>
              <Button color="primary">Primary</Button>
              <Button color="secondary">Secondary</Button>
              <Button color="error">Error</Button>
            </DialogActions>
          </StoryVariation>

          <StoryVariation label="With Disabled Buttons">
            <DialogActions>
              <Button disabled>Disabled</Button>
              <Button variant="contained">Enabled</Button>
            </DialogActions>
          </StoryVariation>

          <StoryVariation label="With Icons">
            <DialogActions>
              <Button>Cancel</Button>
              <Button startIcon={<span>✓</span>} variant="contained">
                Save
              </Button>
            </DialogActions>
          </StoryVariation>

          <StoryVariation label="Single Button">
            <DialogActions>
              <Button variant="contained">OK</Button>
            </DialogActions>
          </StoryVariation>

          <StoryVariation label="Many Buttons">
            <DialogActions>
              <Button>Cancel</Button>
              <Button>Reset</Button>
              <Button>Save Draft</Button>
              <Button variant="contained">Save</Button>
            </DialogActions>
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
