/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Button, IconButton, Typography } from '@mui/material';
import { Meta, StoryObj } from '@storybook/react-webpack5';
import HelpCircleOutline from 'mdi-material-ui/HelpCircleOutline';

import { StoryVariation } from '~/components/StoryVariation';
import ThemeProvider from '~/components/ThemeProvider';
import { createThemeStory } from '~/helpers/createThemeStory';
import { Playground } from '~/helpers/playground';
import { ThemesArray } from '~/styles/themes';

import { Tooltip, TooltipProps } from './internal';

/**
 * The default Tooltip exports
 */
export default {
  args: {
    children: <HelpCircleOutline />,
    open: true,
    placement: 'right',
    title: 'Tooltip title goes here',
  },
  component: Tooltip,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  title: 'MUI Core / Tooltip',
} as Meta<Tooltip>;

type Story = StoryObj<TooltipProps>;

// Documentation story (not snapshotted in Chromatic)
export const Documentation: Story = {
  args: {
    children: <HelpCircleOutline />,
    open: true,
    placement: 'right',
    title: 'Tooltip title goes here',
  },
  parameters: {
    chromatic: { disable: true },
  },
};

// Playground story (not snapshotted in Chromatic)
export const PlaygroundStory: Story = {
  args: {
    children: <HelpCircleOutline />,
    open: true,
    placement: 'right',
    title: 'Tooltip title goes here',
  },
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  argTypes: Playground({}, Tooltip),
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
    stories[theme] = createThemeStory<TooltipProps>(theme, {
      render: () => (
        <ThemeProvider theme={theme}>
          <StoryVariation label="Top Placement">
            <Tooltip open placement="top" title="Tooltip on top">
              <Button>Hover me</Button>
            </Tooltip>
          </StoryVariation>

          <StoryVariation label="Bottom Placement">
            <Tooltip open placement="bottom" title="Tooltip on bottom">
              <Button>Hover me</Button>
            </Tooltip>
          </StoryVariation>

          <StoryVariation label="Left Placement">
            <Tooltip open placement="left" title="Tooltip on left">
              <Button>Hover me</Button>
            </Tooltip>
          </StoryVariation>

          <StoryVariation label="Right Placement">
            <Tooltip open placement="right" title="Tooltip on right">
              <Button>Hover me</Button>
            </Tooltip>
          </StoryVariation>

          <StoryVariation label="With Arrow">
            <Tooltip arrow open placement="top" title="Tooltip with arrow">
              <Button>Hover me</Button>
            </Tooltip>
          </StoryVariation>

          <StoryVariation label="Without Arrow">
            <Tooltip arrow={false} open placement="top" title="Tooltip without arrow">
              <Button>Hover me</Button>
            </Tooltip>
          </StoryVariation>

          <StoryVariation label="Long Text">
            <Tooltip
              open
              placement="top"
              title="This is a very long tooltip text that demonstrates how the tooltip handles longer content and wraps appropriately"
            >
              <Button>Long tooltip</Button>
            </Tooltip>
          </StoryVariation>

          <StoryVariation label="Icon Button">
            <Tooltip open placement="top" title="Icon button tooltip">
              <IconButton>
                <HelpCircleOutline />
              </IconButton>
            </Tooltip>
          </StoryVariation>

          <StoryVariation label="Typography">
            <Tooltip open placement="top" title="Typography tooltip">
              <Typography color="primary" variant="h6">
                Hover me
              </Typography>
            </Tooltip>
          </StoryVariation>

          <StoryVariation label="Custom Color">
            <Tooltip open placement="top" sx={{ '& .MuiTooltip-tooltip': { bgcolor: 'error.main' } }} title="Custom colored tooltip">
              <Button>Custom color</Button>
            </Tooltip>
          </StoryVariation>

          <StoryVariation label="Disabled">
            <Tooltip open placement="top" title="This tooltip is disabled">
              <Button disabled>Disabled button</Button>
            </Tooltip>
          </StoryVariation>

          <StoryVariation label="Multiple Tooltips">
            <div style={{ display: 'flex', gap: '16px' }}>
              <Tooltip open placement="top" title="First tooltip">
                <Button>First</Button>
              </Tooltip>
              <Tooltip open placement="top" title="Second tooltip">
                <Button>Second</Button>
              </Tooltip>
              <Tooltip open placement="top" title="Third tooltip">
                <Button>Third</Button>
              </Tooltip>
            </div>
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
