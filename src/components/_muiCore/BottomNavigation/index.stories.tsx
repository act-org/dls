/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Box, Paper } from '@mui/material';
import { Meta, StoryObj } from '@storybook/react-webpack5';
import PersonIcon from 'mdi-material-ui/Account';
import NotificationsIcon from 'mdi-material-ui/Bell';
import SettingsIcon from 'mdi-material-ui/Cog';
import MailIcon from 'mdi-material-ui/Email';
import FavoriteIcon from 'mdi-material-ui/Heart';
import HomeIcon from 'mdi-material-ui/Home';
import SearchIcon from 'mdi-material-ui/Magnify';
import LocationOnIcon from 'mdi-material-ui/MapMarker';
import { ReactNode, useState } from 'react';

import { StoryVariation } from '~/components/StoryVariation';
import ThemeProvider from '~/components/ThemeProvider';
import { createThemeStory } from '~/helpers/createThemeStory';
import { Playground } from '~/helpers/playground';
import { ThemesArray } from '~/styles/themes';

import { BottomNavigation, BottomNavigationAction, BottomNavigationProps } from './internal';

/**
 * The default BottomNavigation exports
 */
export default {
  args: {},
  component: BottomNavigation,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  title: 'MUI Core / BottomNavigation',
} as Meta<BottomNavigation>;

type Story = StoryObj<BottomNavigationProps>;

// Documentation story (not snapshotted in Chromatic)
export const Documentation: Story = {
  args: {},
  parameters: {
    chromatic: { disable: true },
  },
  render: () => {
    const [value, setValue] = useState(0);

    return (
      <Paper elevation={3} sx={{ position: 'static' }}>
        <BottomNavigation onChange={(_event, newValue) => setValue(newValue)} showLabels value={value}>
          <BottomNavigationAction icon={<HomeIcon />} label="Home" />
          <BottomNavigationAction icon={<FavoriteIcon />} label="Favorites" />
          <BottomNavigationAction icon={<LocationOnIcon />} label="Nearby" />
          <BottomNavigationAction icon={<PersonIcon />} label="Profile" />
        </BottomNavigation>
      </Paper>
    );
  },
};

// Playground story (not snapshotted in Chromatic)
export const PlaygroundStory: Story = {
  args: {},
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  argTypes: Playground({}, BottomNavigation),
  name: 'Playground',
  parameters: {
    chromatic: { disable: true },
  },
  render: () => {
    const [value, setValue] = useState(0);

    return (
      <Paper elevation={3} sx={{ position: 'static' }}>
        <BottomNavigation onChange={(_event, newValue) => setValue(newValue)} showLabels value={value}>
          <BottomNavigationAction icon={<HomeIcon />} label="Home" />
          <BottomNavigationAction icon={<FavoriteIcon />} label="Favorites" />
          <BottomNavigationAction icon={<LocationOnIcon />} label="Nearby" />
          <BottomNavigationAction icon={<PersonIcon />} label="Profile" />
        </BottomNavigation>
      </Paper>
    );
  },
};

// Interactive BottomNavigation Component for demonstration
const InteractiveBottomNavigation = ({ showLabels = true }: { showLabels?: boolean }): ReactNode => {
  const [value, setValue] = useState(0);

  return (
    <Paper elevation={3} sx={{ position: 'static' }}>
      <BottomNavigation onChange={(_event, newValue) => setValue(newValue)} showLabels={showLabels} value={value}>
        <BottomNavigationAction icon={<HomeIcon />} label="Home" />
        <BottomNavigationAction icon={<FavoriteIcon />} label="Favorites" />
        <BottomNavigationAction icon={<LocationOnIcon />} label="Nearby" />
        <BottomNavigationAction icon={<PersonIcon />} label="Profile" />
      </BottomNavigation>
    </Paper>
  );
};

// BottomNavigation with Custom Colors Component for demonstration
const ColoredBottomNavigation = (): ReactNode => {
  const [value, setValue] = useState(0);

  return (
    <Paper elevation={3} sx={{ position: 'static' }}>
      <BottomNavigation
        onChange={(_event, newValue) => setValue(newValue)}
        showLabels
        sx={{
          '& .MuiBottomNavigationAction-root': {
            '&.Mui-selected': {
              color: 'primary.main',
            },
            color: 'text.secondary',
          },
        }}
        value={value}
      >
        <BottomNavigationAction icon={<HomeIcon />} label="Home" />
        <BottomNavigationAction icon={<FavoriteIcon />} label="Favorites" />
        <BottomNavigationAction icon={<LocationOnIcon />} label="Nearby" />
      </BottomNavigation>
    </Paper>
  );
};

// BottomNavigation with Many Actions Component for demonstration
const ManyActionsBottomNavigation = (): ReactNode => {
  const [value, setValue] = useState(0);

  return (
    <Paper elevation={3} sx={{ position: 'static' }}>
      <BottomNavigation onChange={(_event, newValue) => setValue(newValue)} showLabels={false} value={value}>
        <BottomNavigationAction icon={<HomeIcon />} label="Home" />
        <BottomNavigationAction icon={<SearchIcon />} label="Search" />
        <BottomNavigationAction icon={<FavoriteIcon />} label="Favorites" />
        <BottomNavigationAction icon={<NotificationsIcon />} label="Notifications" />
        <BottomNavigationAction icon={<MailIcon />} label="Messages" />
        <BottomNavigationAction icon={<PersonIcon />} label="Profile" />
        <BottomNavigationAction icon={<SettingsIcon />} label="Settings" />
      </BottomNavigation>
    </Paper>
  );
};

// Theme-specific stories (snapshotted in Chromatic)
// Generate stories for each theme dynamically

// Export theme-specific stories dynamically
const themeStories = ThemesArray.reduce(
  (stories, theme) => {
    // eslint-disable-next-line no-param-reassign
    stories[theme] = createThemeStory<BottomNavigationProps>(theme, {
      render: () => (
        <ThemeProvider theme={theme}>
          <StoryVariation label="Basic BottomNavigation" sx={{ p: 4 }}>
            <InteractiveBottomNavigation />
          </StoryVariation>

          <StoryVariation label="Without Labels" sx={{ p: 4 }}>
            <InteractiveBottomNavigation showLabels={false} />
          </StoryVariation>

          <StoryVariation label="Custom Colors" sx={{ p: 4 }}>
            <ColoredBottomNavigation />
          </StoryVariation>

          <StoryVariation label="Many Actions" sx={{ p: 4 }}>
            <ManyActionsBottomNavigation />
          </StoryVariation>

          <StoryVariation label="Simple Navigation" sx={{ p: 4 }}>
            <Box>
              <BottomNavigation showLabels value={0}>
                <BottomNavigationAction icon={<HomeIcon />} label="Home" />
                <BottomNavigationAction icon={<PersonIcon />} label="Profile" />
              </BottomNavigation>
            </Box>
          </StoryVariation>

          <StoryVariation label="Icon Only Navigation" sx={{ p: 4 }}>
            <Box>
              <BottomNavigation showLabels={false} value={1}>
                <BottomNavigationAction icon={<HomeIcon />} />
                <BottomNavigationAction icon={<FavoriteIcon />} />
                <BottomNavigationAction icon={<LocationOnIcon />} />
              </BottomNavigation>
            </Box>
          </StoryVariation>

          <StoryVariation label="Navigation with Badge" sx={{ p: 4 }}>
            <Box>
              <BottomNavigation showLabels value={0}>
                <BottomNavigationAction icon={<HomeIcon />} label="Home" />
                <BottomNavigationAction icon={<NotificationsIcon />} label="Notifications" />
                <BottomNavigationAction icon={<MailIcon />} label="Messages" />
              </BottomNavigation>
            </Box>
          </StoryVariation>

          <StoryVariation label="Full Width Navigation" sx={{ p: 4 }}>
            <Box>
              <BottomNavigation showLabels sx={{ width: '100%' }} value={2}>
                <BottomNavigationAction icon={<HomeIcon />} label="Home" />
                <BottomNavigationAction icon={<SearchIcon />} label="Search" />
                <BottomNavigationAction icon={<FavoriteIcon />} label="Favorites" />
                <BottomNavigationAction icon={<PersonIcon />} label="Profile" />
              </BottomNavigation>
            </Box>
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
