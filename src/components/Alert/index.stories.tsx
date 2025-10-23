/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Meta, StoryObj } from '@storybook/react-webpack5';
import noop from 'lodash/noop';

import { StoryVariation } from '~/components/StoryVariation';
import ThemeProvider from '~/components/ThemeProvider';
import { createThemeStory } from '~/helpers/createThemeStory';
import { Playground } from '~/helpers/playground';
import { ThemesArray } from '~/styles/themes';

import { Alert, AlertProps } from '.';

/**
 * The Alert component is used to notify the user of something. Our
 * implementation is based on the
 * <a href="https://mui.com/material-ui/react-alert/" target="_blank">Alert</a>
 * &nbsp;component from Material UI.
 */
export default {
  args: {
    children: 'Some alert description goes here.',
  },
  component: Alert,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  title: 'Atoms / Alert',
} as Meta<AlertProps>;

type Story = StoryObj<AlertProps>;

// Documentation story (not snapshotted in Chromatic)
export const Documentation: Story = {
  args: {
    children: 'Some alert description goes here.',
    severity: 'info',
    title: 'Alert Title',
  },
  parameters: {
    chromatic: { disable: true },
  },
};

// Playground story (not snapshotted in Chromatic)
export const PlaygroundStory: Story = {
  args: {
    children: 'Some alert description goes here.',
    severity: 'info',
    title: 'Alert Title',
  },
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  argTypes: Playground(
    {
      children: { type: 'string' },
      closeText: {},
      onClose: { action: 'close' },
      severity: {},
      title: { type: 'string' },
      variant: {},
    },
    Alert,
  ),
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
    stories[theme] = createThemeStory<AlertProps>(theme, {
      render: () => (
        <ThemeProvider theme={theme}>
          <StoryVariation label="Success Standard">
            <Alert severity="success" title="Success Alert" variant="standard">
              This is a success alert with standard variant.
            </Alert>
          </StoryVariation>

          <StoryVariation label="Success Filled">
            <Alert severity="success" title="Success Alert" variant="filled">
              This is a success alert with filled variant.
            </Alert>
          </StoryVariation>

          <StoryVariation label="Success Outlined">
            <Alert severity="success" title="Success Alert" variant="outlined">
              This is a success alert with outlined variant.
            </Alert>
          </StoryVariation>

          <StoryVariation label="Error Standard">
            <Alert severity="error" title="Error Alert" variant="standard">
              This is an error alert with standard variant.
            </Alert>
          </StoryVariation>

          <StoryVariation label="Error Filled">
            <Alert severity="error" title="Error Alert" variant="filled">
              This is an error alert with filled variant.
            </Alert>
          </StoryVariation>

          <StoryVariation label="Error Outlined">
            <Alert severity="error" title="Error Alert" variant="outlined">
              This is an error alert with outlined variant.
            </Alert>
          </StoryVariation>

          <StoryVariation label="Warning Standard">
            <Alert severity="warning" title="Warning Alert" variant="standard">
              This is a warning alert with standard variant.
            </Alert>
          </StoryVariation>

          <StoryVariation label="Warning Filled">
            <Alert severity="warning" title="Warning Alert" variant="filled">
              This is a warning alert with filled variant.
            </Alert>
          </StoryVariation>

          <StoryVariation label="Warning Outlined">
            <Alert severity="warning" title="Warning Alert" variant="outlined">
              This is a warning alert with outlined variant.
            </Alert>
          </StoryVariation>

          <StoryVariation label="Info Standard">
            <Alert severity="info" title="Info Alert" variant="standard">
              This is an info alert with standard variant.
            </Alert>
          </StoryVariation>

          <StoryVariation label="Info Filled">
            <Alert severity="info" title="Info Alert" variant="filled">
              This is an info alert with filled variant.
            </Alert>
          </StoryVariation>

          <StoryVariation label="Info Outlined">
            <Alert severity="info" title="Info Alert" variant="outlined">
              This is an info alert with outlined variant.
            </Alert>
          </StoryVariation>

          <StoryVariation label="Without Title">
            <Alert severity="info" variant="standard">
              This is an alert without a title.
            </Alert>
          </StoryVariation>

          <StoryVariation label="Closable">
            <Alert onClose={noop} severity="info" title="Closable Alert" variant="standard">
              This is a closable alert.
            </Alert>
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
