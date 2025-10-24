/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Avatar, Button, IconButton } from '@mui/material';
import { Meta, StoryObj } from '@storybook/react-webpack5';
import NotificationsIcon from 'mdi-material-ui/Bell';
import ShoppingCartIcon from 'mdi-material-ui/Cart';
import MailIcon from 'mdi-material-ui/Email';

import { StoryVariation } from '~/components/StoryVariation';
import ThemeProvider from '~/components/ThemeProvider';
import { createThemeStory } from '~/helpers/createThemeStory';
import { Playground } from '~/helpers/playground';
import { ThemesArray } from '~/styles/themes';

import { Badge, BadgeProps } from './internal';

/**
 * The default Badge exports
 */
export default {
  args: {
    badgeContent: 4,
    children: <Button>Badge</Button>,
  },
  component: Badge,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  title: 'MUI Core / Badge',
} as Meta<Badge>;

type Story = StoryObj<BadgeProps>;

// Documentation story (not snapshotted in Chromatic)
export const Documentation: Story = {
  args: {
    badgeContent: 5,
    children: <Button>Documentation</Button>,
  },
  parameters: {
    chromatic: { disable: true },
  },
};

// Playground story (not snapshotted in Chromatic)
export const PlaygroundStory: Story = {
  args: {
    badgeContent: 3,
    children: <Button>Playground</Button>,
  },
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  argTypes: Playground({}, Badge),
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
    stories[theme] = createThemeStory<BadgeProps>(theme, {
      render: () => (
        <ThemeProvider theme={theme}>
          <StoryVariation label="Basic Badge" sx={{ p: 4 }}>
            <Badge badgeContent={4}>
              <Button>Badge</Button>
            </Badge>
          </StoryVariation>

          <StoryVariation label="Badge with Icon" sx={{ p: 4 }}>
            <Badge badgeContent={4}>
              <IconButton>
                <MailIcon />
              </IconButton>
            </Badge>
          </StoryVariation>

          <StoryVariation label="Badge with Avatar" sx={{ p: 4 }}>
            <Badge badgeContent={4}>
              <Avatar>A</Avatar>
            </Badge>
          </StoryVariation>

          <StoryVariation label="Badge with Shopping Cart" sx={{ p: 4 }}>
            <Badge badgeContent={4}>
              <IconButton>
                <ShoppingCartIcon />
              </IconButton>
            </Badge>
          </StoryVariation>

          <StoryVariation label="Badge with Notifications" sx={{ p: 4 }}>
            <Badge badgeContent={99}>
              <IconButton>
                <NotificationsIcon />
              </IconButton>
            </Badge>
          </StoryVariation>

          <StoryVariation label="Badge with Text" sx={{ p: 4 }}>
            <Badge badgeContent="NEW">
              <Button>Button</Button>
            </Badge>
          </StoryVariation>

          <StoryVariation label="Badge with Long Text" sx={{ p: 4 }}>
            <Badge badgeContent="999+">
              <Button>Button</Button>
            </Badge>
          </StoryVariation>

          <StoryVariation label="Badge with Zero" sx={{ p: 4 }}>
            <Badge badgeContent={0}>
              <Button>Button</Button>
            </Badge>
          </StoryVariation>

          <StoryVariation label="Badge with Show Zero" sx={{ p: 4 }}>
            <Badge badgeContent={0} showZero>
              <Button>Button</Button>
            </Badge>
          </StoryVariation>

          <StoryVariation label="Badge with Max" sx={{ p: 4 }}>
            <Badge badgeContent={150} max={99}>
              <Button>Button</Button>
            </Badge>
          </StoryVariation>

          <StoryVariation label="Badge Color Primary" sx={{ p: 4 }}>
            <Badge badgeContent={4} color="primary">
              <Button>Primary</Button>
            </Badge>
          </StoryVariation>

          <StoryVariation label="Badge Color Secondary" sx={{ p: 4 }}>
            <Badge badgeContent={4} color="secondary">
              <Button>Secondary</Button>
            </Badge>
          </StoryVariation>

          <StoryVariation label="Badge Color Error" sx={{ p: 4 }}>
            <Badge badgeContent={4} color="error">
              <Button>Error</Button>
            </Badge>
          </StoryVariation>

          <StoryVariation label="Badge Color Warning" sx={{ p: 4 }}>
            <Badge badgeContent={4} color="warning">
              <Button>Warning</Button>
            </Badge>
          </StoryVariation>

          <StoryVariation label="Badge Color Info" sx={{ p: 4 }}>
            <Badge badgeContent={4} color="info">
              <Button>Info</Button>
            </Badge>
          </StoryVariation>

          <StoryVariation label="Badge Color Success" sx={{ p: 4 }}>
            <Badge badgeContent={4} color="success">
              <Button>Success</Button>
            </Badge>
          </StoryVariation>

          <StoryVariation label="Badge Default" sx={{ p: 4 }}>
            <Badge badgeContent={4} color="default">
              <Button>Default</Button>
            </Badge>
          </StoryVariation>

          <StoryVariation label="Badge Variant Dot" sx={{ p: 4 }}>
            <Badge variant="dot">
              <Button>Dot</Button>
            </Badge>
          </StoryVariation>

          <StoryVariation label="Badge Variant Standard" sx={{ p: 4 }}>
            <Badge badgeContent={4} variant="standard">
              <Button>Standard</Button>
            </Badge>
          </StoryVariation>

          <StoryVariation label="Badge Invisible" sx={{ p: 4 }}>
            <Badge badgeContent={0} invisible>
              <Button>Invisible</Button>
            </Badge>
          </StoryVariation>

          <StoryVariation label="Badge Anchor Origin Top Right" sx={{ p: 4 }}>
            <Badge anchorOrigin={{ vertical: 'top', horizontal: 'right' }} badgeContent={4}>
              <Button>Top Right</Button>
            </Badge>
          </StoryVariation>

          <StoryVariation label="Badge Anchor Origin Top Left" sx={{ p: 4 }}>
            <Badge anchorOrigin={{ vertical: 'top', horizontal: 'left' }} badgeContent={4}>
              <Button>Top Left</Button>
            </Badge>
          </StoryVariation>

          <StoryVariation label="Badge Anchor Origin Bottom Right" sx={{ p: 4 }}>
            <Badge anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} badgeContent={4}>
              <Button>Bottom Right</Button>
            </Badge>
          </StoryVariation>

          <StoryVariation label="Badge Anchor Origin Bottom Left" sx={{ p: 4 }}>
            <Badge anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }} badgeContent={4}>
              <Button>Bottom Left</Button>
            </Badge>
          </StoryVariation>

          <StoryVariation label="Badge with Custom Overlap" sx={{ p: 4 }}>
            <Badge badgeContent={4} overlap="circular">
              <Avatar>A</Avatar>
            </Badge>
          </StoryVariation>

          <StoryVariation label="Badge with Rectangular Overlap" sx={{ p: 4 }}>
            <Badge badgeContent={4} overlap="rectangular">
              <Button>Rectangular</Button>
            </Badge>
          </StoryVariation>

          <StoryVariation label="Badge with Custom Badge Content" sx={{ p: 4 }}>
            <Badge badgeContent={<span style={{ fontSize: '10px' }}>!</span>}>
              <Button>Custom</Button>
            </Badge>
          </StoryVariation>

          <StoryVariation label="Badge with Large Number" sx={{ p: 4 }}>
            <Badge badgeContent={9999}>
              <Button>Large</Button>
            </Badge>
          </StoryVariation>

          <StoryVariation label="Badge with Single Digit" sx={{ p: 4 }}>
            <Badge badgeContent={1}>
              <Button>Single</Button>
            </Badge>
          </StoryVariation>

          <StoryVariation label="Badge with Double Digit" sx={{ p: 4 }}>
            <Badge badgeContent={42}>
              <Button>Double</Button>
            </Badge>
          </StoryVariation>

          <StoryVariation label="Badge with Triple Digit" sx={{ p: 4 }}>
            <Badge badgeContent={123}>
              <Button>Triple</Button>
            </Badge>
          </StoryVariation>

          <StoryVariation label="Badge with Special Characters" sx={{ p: 4 }}>
            <Badge badgeContent="★">
              <Button>Star</Button>
            </Badge>
          </StoryVariation>

          <StoryVariation label="Badge with Emoji" sx={{ p: 4 }}>
            <Badge badgeContent="🔥">
              <Button>Fire</Button>
            </Badge>
          </StoryVariation>

          <StoryVariation label="Badge with Long Text" sx={{ p: 4 }}>
            <Badge badgeContent="LONG">
              <Button>Long Text</Button>
            </Badge>
          </StoryVariation>

          <StoryVariation label="Badge with Very Long Text" sx={{ p: 4 }}>
            <Badge badgeContent="VERY LONG TEXT">
              <Button>Very Long</Button>
            </Badge>
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
