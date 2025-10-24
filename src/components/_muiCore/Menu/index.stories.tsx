/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Button, Paper, Typography } from '@mui/material';
import { Meta, StoryObj } from '@storybook/react-webpack5';
import PersonIcon from 'mdi-material-ui/Account';
import SettingsIcon from 'mdi-material-ui/Cog';
import DeleteIcon from 'mdi-material-ui/Delete';
import HomeIcon from 'mdi-material-ui/Home';
import EditIcon from 'mdi-material-ui/Pencil';
import ShareIcon from 'mdi-material-ui/Share';
import { ReactNode, useRef, useState } from 'react';

import { StoryVariation } from '~/components/StoryVariation';
import ThemeProvider from '~/components/ThemeProvider';
import { createThemeStory } from '~/helpers/createThemeStory';
import { Playground } from '~/helpers/playground';
import { ThemesArray } from '~/styles/themes';

import { ClickAwayListener, Menu, MenuItem, MenuList, MenuProps, Popover, Popper } from './internal';

/**
 * The default Menu exports
 */
export default {
  args: {},
  component: Menu,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  title: 'MUI Core / Menu',
} as Meta<Menu>;

type Story = StoryObj<MenuProps>;

// Documentation story (not snapshotted in Chromatic)
export const Documentation: Story = {
  args: {},
  parameters: {
    chromatic: { disable: true },
  },
  render: () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>): void => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = (): void => {
      setAnchorEl(null);
    };

    return (
      <>
        <Button onClick={handleClick}>Open Menu</Button>
        <Menu anchorEl={anchorEl} onClose={handleClose} open={open}>
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My Account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </>
    );
  },
};

// Playground story (not snapshotted in Chromatic)
export const PlaygroundStory: Story = {
  args: {},
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  argTypes: Playground({}, Menu),
  name: 'Playground',
  parameters: {
    chromatic: { disable: true },
  },
  render: () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>): void => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = (): void => {
      setAnchorEl(null);
    };

    return (
      <>
        <Button onClick={handleClick}>Open Menu</Button>
        <Menu anchorEl={anchorEl} onClose={handleClose} open={open}>
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My Account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </>
    );
  },
};

// Menu with Popover Component for demonstration
const MenuWithPopover = (): ReactNode => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>): void => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (): void => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button onClick={handleClick}>Open Popover Menu</Button>
      <Popover
        anchorEl={anchorEl}
        anchorOrigin={{
          horizontal: 'left',
          vertical: 'bottom',
        }}
        onClose={handleClose}
        open={open}
        transformOrigin={{
          horizontal: 'left',
          vertical: 'top',
        }}
      >
        <MenuList>
          <MenuItem onClick={handleClose}>
            <HomeIcon sx={{ mr: 1 }} />
            Home
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <PersonIcon sx={{ mr: 1 }} />
            Profile
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <SettingsIcon sx={{ mr: 1 }} />
            Settings
          </MenuItem>
        </MenuList>
      </Popover>
    </>
  );
};

// Menu with Popper Component for demonstration
const MenuWithPopper = (): ReactNode => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const anchorRef = useRef<HTMLButtonElement>(null);

  const handleClick = (): void => {
    setAnchorEl(anchorRef.current);
  };

  const handleClose = (): void => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button onClick={handleClick} ref={anchorRef}>
        Open Popper Menu
      </Button>
      <Popper anchorEl={anchorEl} open={open} placement="bottom-start">
        <Paper>
          <ClickAwayListener onClickAway={handleClose}>
            <MenuList>
              <MenuItem onClick={handleClose}>Edit</MenuItem>
              <MenuItem onClick={handleClose}>Share</MenuItem>
              <MenuItem onClick={handleClose}>Delete</MenuItem>
            </MenuList>
          </ClickAwayListener>
        </Paper>
      </Popper>
    </>
  );
};

// Menu with Icons Component for demonstration
const MenuWithIcons = (): ReactNode => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>): void => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (): void => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button onClick={handleClick}>Open Menu with Icons</Button>
      <Menu anchorEl={anchorEl} onClose={handleClose} open={open}>
        <MenuItem onClick={handleClose}>
          <EditIcon sx={{ mr: 1 }} />
          Edit
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ShareIcon sx={{ mr: 1 }} />
          Share
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <DeleteIcon sx={{ mr: 1 }} />
          Delete
        </MenuItem>
      </Menu>
    </>
  );
};

// Menu with Dense Items Component for demonstration
const MenuWithDenseItems = (): ReactNode => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>): void => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (): void => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button onClick={handleClick}>Open Dense Menu</Button>
      <Menu anchorEl={anchorEl} onClose={handleClose} open={open}>
        <MenuItem dense onClick={handleClose}>
          Dense Item 1
        </MenuItem>
        <MenuItem dense onClick={handleClose}>
          Dense Item 2
        </MenuItem>
        <MenuItem dense onClick={handleClose}>
          Dense Item 3
        </MenuItem>
      </Menu>
    </>
  );
};

// Menu with Disabled Items Component for demonstration
const MenuWithDisabledItems = (): ReactNode => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>): void => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (): void => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button onClick={handleClick}>Open Menu with Disabled Items</Button>
      <Menu anchorEl={anchorEl} onClose={handleClose} open={open}>
        <MenuItem onClick={handleClose}>Enabled Item</MenuItem>
        <MenuItem disabled onClick={handleClose}>
          Disabled Item
        </MenuItem>
        <MenuItem onClick={handleClose}>Another Enabled Item</MenuItem>
      </Menu>
    </>
  );
};

// Menu with Divider Component for demonstration
const MenuWithDivider = (): ReactNode => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>): void => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (): void => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button onClick={handleClick}>Open Menu with Divider</Button>
      <Menu anchorEl={anchorEl} onClose={handleClose} open={open}>
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My Account</MenuItem>
        <MenuItem disabled>
          <Typography color="text.secondary" variant="body2">
            Account Settings
          </Typography>
        </MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </>
  );
};

// Menu with Custom Positioning Component for demonstration
const MenuWithCustomPositioning = (): ReactNode => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>): void => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (): void => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button onClick={handleClick}>Open Custom Positioned Menu</Button>
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{
          horizontal: 'right',
          vertical: 'top',
        }}
        onClose={handleClose}
        open={open}
        transformOrigin={{
          horizontal: 'right',
          vertical: 'bottom',
        }}
      >
        <MenuItem onClick={handleClose}>Top Right Positioned</MenuItem>
        <MenuItem onClick={handleClose}>Menu Item 2</MenuItem>
        <MenuItem onClick={handleClose}>Menu Item 3</MenuItem>
      </Menu>
    </>
  );
};

// Theme-specific stories (snapshotted in Chromatic)
// Generate stories for each theme dynamically

// Export theme-specific stories dynamically
const themeStories = ThemesArray.reduce(
  (stories, theme) => {
    // eslint-disable-next-line no-param-reassign
    stories[theme] = createThemeStory<MenuProps>(theme, {
      render: () => (
        <ThemeProvider theme={theme}>
          <StoryVariation label="Basic Menu" sx={{ p: 4 }}>
            <MenuWithIcons />
          </StoryVariation>

          <StoryVariation label="Menu with Popover" sx={{ p: 4 }}>
            <MenuWithPopover />
          </StoryVariation>

          <StoryVariation label="Menu with Popper" sx={{ p: 4 }}>
            <MenuWithPopper />
          </StoryVariation>

          <StoryVariation label="Menu with Icons" sx={{ p: 4 }}>
            <MenuWithIcons />
          </StoryVariation>

          <StoryVariation label="Dense Menu Items" sx={{ p: 4 }}>
            <MenuWithDenseItems />
          </StoryVariation>

          <StoryVariation label="Menu with Disabled Items" sx={{ p: 4 }}>
            <MenuWithDisabledItems />
          </StoryVariation>

          <StoryVariation label="Menu with Divider" sx={{ p: 4 }}>
            <MenuWithDivider />
          </StoryVariation>

          <StoryVariation label="Custom Positioned Menu" sx={{ p: 4 }}>
            <MenuWithCustomPositioning />
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
