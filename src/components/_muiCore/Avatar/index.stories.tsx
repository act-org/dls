/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Meta, StoryObj } from '@storybook/react-webpack5';
import PersonIcon from 'mdi-material-ui/Account';

import { StoryVariation } from '~/components/StoryVariation';
import ThemeProvider from '~/components/ThemeProvider';
import { createThemeStory } from '~/helpers/createThemeStory';
import { Playground } from '~/helpers/playground';
import { ThemesArray } from '~/styles/themes';

import { Avatar, AvatarGroup, AvatarProps } from './internal';

/**
 * The default Avatar exports
 */
export default {
  args: {
    children: 'A',
  },
  component: Avatar,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  title: 'MUI Core / Avatar',
} as Meta<Avatar>;

type Story = StoryObj<AvatarProps>;

// Documentation story (not snapshotted in Chromatic)
export const Documentation: Story = {
  args: {
    children: 'JD',
  },
  parameters: {
    chromatic: { disable: true },
  },
};

// Playground story (not snapshotted in Chromatic)
export const PlaygroundStory: Story = {
  args: {
    children: 'AB',
  },
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  argTypes: Playground({}, Avatar),
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
    stories[theme] = createThemeStory<AvatarProps>(theme, {
      render: () => (
        <ThemeProvider theme={theme}>
          <StoryVariation label="Basic Avatar">
            <Avatar>A</Avatar>
          </StoryVariation>

          <StoryVariation label="Avatar with Image">
            <Avatar src="https://mui.com/static/images/avatar/1.jpg" alt="User" />
          </StoryVariation>

          <StoryVariation label="Avatar with Icon">
            <Avatar>
              <PersonIcon />
            </Avatar>
          </StoryVariation>

          <StoryVariation label="Small Size">
            <Avatar sx={{ width: 24, height: 24 }}>S</Avatar>
          </StoryVariation>

          <StoryVariation label="Medium Size">
            <Avatar sx={{ width: 40, height: 40 }}>M</Avatar>
          </StoryVariation>

          <StoryVariation label="Large Size">
            <Avatar sx={{ width: 56, height: 56 }}>L</Avatar>
          </StoryVariation>

          <StoryVariation label="Color Primary">
            <Avatar color="primary">P</Avatar>
          </StoryVariation>

          <StoryVariation label="Color Secondary">
            <Avatar color="secondary">S</Avatar>
          </StoryVariation>

          <StoryVariation label="Color Success">
            <Avatar color="success">S</Avatar>
          </StoryVariation>

          <StoryVariation label="Color Error">
            <Avatar color="error">E</Avatar>
          </StoryVariation>

          <StoryVariation label="Color Warning">
            <Avatar color="warning">W</Avatar>
          </StoryVariation>

          <StoryVariation label="Color Info">
            <Avatar color="info">I</Avatar>
          </StoryVariation>

          <StoryVariation label="Variant Circular">
            <Avatar variant="circular">C</Avatar>
          </StoryVariation>

          <StoryVariation label="Variant Rounded">
            <Avatar variant="rounded">R</Avatar>
          </StoryVariation>

          <StoryVariation label="Variant Square">
            <Avatar variant="square">S</Avatar>
          </StoryVariation>

          <StoryVariation label="Custom Size">
            <Avatar sx={{ width: 32, height: 32 }}>C</Avatar>
          </StoryVariation>

          <StoryVariation label="AvatarGroup - Basic">
            <AvatarGroup max={4}>
              <Avatar>A</Avatar>
              <Avatar>B</Avatar>
              <Avatar>C</Avatar>
              <Avatar>D</Avatar>
              <Avatar>E</Avatar>
            </AvatarGroup>
          </StoryVariation>

          <StoryVariation label="AvatarGroup - With Images">
            <AvatarGroup max={3}>
              <Avatar src="https://mui.com/static/images/avatar/1.jpg" />
              <Avatar src="https://mui.com/static/images/avatar/2.jpg" />
              <Avatar src="https://mui.com/static/images/avatar/3.jpg" />
              <Avatar src="https://mui.com/static/images/avatar/4.jpg" />
            </AvatarGroup>
          </StoryVariation>

          <StoryVariation label="AvatarGroup - Small Size">
            <AvatarGroup max={3}>
              <Avatar sx={{ width: 24, height: 24 }}>A</Avatar>
              <Avatar sx={{ width: 24, height: 24 }}>B</Avatar>
              <Avatar sx={{ width: 24, height: 24 }}>C</Avatar>
              <Avatar sx={{ width: 24, height: 24 }}>D</Avatar>
            </AvatarGroup>
          </StoryVariation>

          <StoryVariation label="AvatarGroup - Large Size">
            <AvatarGroup max={3}>
              <Avatar sx={{ width: 56, height: 56 }}>A</Avatar>
              <Avatar sx={{ width: 56, height: 56 }}>B</Avatar>
              <Avatar sx={{ width: 56, height: 56 }}>C</Avatar>
              <Avatar sx={{ width: 56, height: 56 }}>D</Avatar>
            </AvatarGroup>
          </StoryVariation>

          <StoryVariation label="AvatarGroup - Spacing">
            <AvatarGroup max={4} spacing="small">
              <Avatar>A</Avatar>
              <Avatar>B</Avatar>
              <Avatar>C</Avatar>
              <Avatar>D</Avatar>
            </AvatarGroup>
          </StoryVariation>

          <StoryVariation label="AvatarGroup - Total">
            <AvatarGroup max={2} total={10}>
              <Avatar>A</Avatar>
              <Avatar>B</Avatar>
            </AvatarGroup>
          </StoryVariation>

          <StoryVariation label="AvatarGroup - Variant Rounded">
            <AvatarGroup max={3} variant="rounded">
              <Avatar variant="rounded">A</Avatar>
              <Avatar variant="rounded">B</Avatar>
              <Avatar variant="rounded">C</Avatar>
              <Avatar variant="rounded">D</Avatar>
            </AvatarGroup>
          </StoryVariation>

          <StoryVariation label="AvatarGroup - Variant Square">
            <AvatarGroup max={3} variant="square">
              <Avatar variant="square">A</Avatar>
              <Avatar variant="square">B</Avatar>
              <Avatar variant="square">C</Avatar>
              <Avatar variant="square">D</Avatar>
            </AvatarGroup>
          </StoryVariation>

          <StoryVariation label="AvatarGroup - Color Variants">
            <AvatarGroup max={4}>
              <Avatar color="primary">P</Avatar>
              <Avatar color="secondary">S</Avatar>
              <Avatar color="success">S</Avatar>
              <Avatar color="error">E</Avatar>
            </AvatarGroup>
          </StoryVariation>

          <StoryVariation label="Long Names">
            <Avatar>JD</Avatar>
            <Avatar>AB</Avatar>
            <Avatar>XYZ</Avatar>
          </StoryVariation>

          <StoryVariation label="Single Character">
            <Avatar>X</Avatar>
          </StoryVariation>

          <StoryVariation label="Numbers">
            <Avatar>1</Avatar>
            <Avatar>42</Avatar>
            <Avatar>999</Avatar>
          </StoryVariation>

          <StoryVariation label="Special Characters">
            <Avatar>@</Avatar>
            <Avatar>#</Avatar>
            <Avatar>$</Avatar>
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
