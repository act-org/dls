/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Box, Tooltip } from '@mui/material';
import { Meta, StoryObj } from '@storybook/react-webpack5';
import CloseIcon from 'mdi-material-ui/Close';
import DeleteIcon from 'mdi-material-ui/Delete';
import EmailIcon from 'mdi-material-ui/Email';
import EditIcon from 'mdi-material-ui/Pencil';
import AddIcon from 'mdi-material-ui/Plus';
import PrintIcon from 'mdi-material-ui/Printer';
import ShareIcon from 'mdi-material-ui/Share';
import { ReactNode, useState } from 'react';

import { StoryVariation } from '~/components/StoryVariation';
import ThemeProvider from '~/components/ThemeProvider';
import { createThemeStory } from '~/helpers/createThemeStory';
import { Playground } from '~/helpers/playground';
import { ThemesArray } from '~/styles/themes';

import { SpeedDial, SpeedDialAction, SpeedDialIcon, SpeedDialProps } from './internal';

/**
 * The default SpeedDial exports
 */
export default {
  args: {},
  component: SpeedDial,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  title: 'MUI Core / SpeedDial',
} as Meta<SpeedDial>;

type Story = StoryObj<SpeedDialProps>;

// Documentation story (not snapshotted in Chromatic)
export const Documentation: Story = {
  args: {},
  parameters: {
    chromatic: { disable: true },
  },
  render: () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
      <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
        <SpeedDial ariaLabel="SpeedDial example" icon={<SpeedDialIcon />} onClose={handleClose} onOpen={handleOpen} open={open}>
          <SpeedDialAction icon={<EditIcon />} tooltipTitle="Edit" />
          <SpeedDialAction icon={<ShareIcon />} tooltipTitle="Share" />
          <SpeedDialAction icon={<DeleteIcon />} tooltipTitle="Delete" />
        </SpeedDial>
      </Box>
    );
  },
};

// Playground story (not snapshotted in Chromatic)
export const PlaygroundStory: Story = {
  args: {},
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  argTypes: Playground({}, SpeedDial),
  name: 'Playground',
  parameters: {
    chromatic: { disable: true },
  },
  render: () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
      <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
        <SpeedDial ariaLabel="SpeedDial example" icon={<SpeedDialIcon />} onClose={handleClose} onOpen={handleOpen} open={open}>
          <SpeedDialAction icon={<EditIcon />} tooltipTitle="Edit" />
          <SpeedDialAction icon={<ShareIcon />} tooltipTitle="Share" />
          <SpeedDialAction icon={<DeleteIcon />} tooltipTitle="Delete" />
        </SpeedDial>
      </Box>
    );
  },
};

// Basic SpeedDial Component for demonstration
const BasicSpeedDial = (): ReactNode => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
      <SpeedDial ariaLabel="SpeedDial example" icon={<SpeedDialIcon />} onClose={handleClose} onOpen={handleOpen} open={open}>
        <SpeedDialAction icon={<EditIcon />} tooltipTitle="Edit" />
        <SpeedDialAction icon={<ShareIcon />} tooltipTitle="Share" />
        <SpeedDialAction icon={<DeleteIcon />} tooltipTitle="Delete" />
      </SpeedDial>
    </Box>
  );
};

// SpeedDial with Custom Icon Component for demonstration
const SpeedDialWithCustomIcon = (): ReactNode => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial with custom icon"
        icon={<SpeedDialIcon icon={<AddIcon />} openIcon={<CloseIcon />} />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        <SpeedDialAction icon={<EditIcon />} tooltipTitle="Edit" />
        <SpeedDialAction icon={<ShareIcon />} tooltipTitle="Share" />
        <SpeedDialAction icon={<DeleteIcon />} tooltipTitle="Delete" />
      </SpeedDial>
    </Box>
  );
};

// SpeedDial with Direction Component for demonstration
const SpeedDialWithDirection = (): ReactNode => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
      <SpeedDial ariaLabel="SpeedDial with direction" direction="up" icon={<SpeedDialIcon />} onClose={handleClose} onOpen={handleOpen} open={open}>
        <SpeedDialAction icon={<EditIcon />} tooltipTitle="Edit" />
        <SpeedDialAction icon={<ShareIcon />} tooltipTitle="Share" />
        <SpeedDialAction icon={<DeleteIcon />} tooltipTitle="Delete" />
      </SpeedDial>
    </Box>
  );
};

// SpeedDial with Hidden Actions Component for demonstration
const SpeedDialWithHiddenActions = (): ReactNode => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
      <SpeedDial ariaLabel="SpeedDial with hidden actions" icon={<SpeedDialIcon />} onClose={handleClose} onOpen={handleOpen} open={open}>
        <SpeedDialAction icon={<EditIcon />} tooltipTitle="Edit" />
        <SpeedDialAction icon={<ShareIcon />} tooltipTitle="Share" />
        <SpeedDialAction icon={<DeleteIcon />} tooltipTitle="Delete" />
        <SpeedDialAction icon={<PrintIcon />} tooltipTitle="Print" />
        <SpeedDialAction icon={<EmailIcon />} tooltipTitle="Email" />
      </SpeedDial>
    </Box>
  );
};

// SpeedDial with Fab Component for demonstration
const SpeedDialWithFab = (): ReactNode => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial with Fab"
        icon={<SpeedDialIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
        sx={{ '& .MuiFab-primary': { width: 48, height: 48 } }}
      >
        <SpeedDialAction icon={<EditIcon />} tooltipTitle="Edit" />
        <SpeedDialAction icon={<ShareIcon />} tooltipTitle="Share" />
        <SpeedDialAction icon={<DeleteIcon />} tooltipTitle="Delete" />
      </SpeedDial>
    </Box>
  );
};

// SpeedDial with Tooltip Component for demonstration
const SpeedDialWithTooltip = (): ReactNode => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
      <SpeedDial ariaLabel="SpeedDial with tooltip" icon={<SpeedDialIcon />} onClose={handleClose} onOpen={handleOpen} open={open}>
        <SpeedDialAction
          icon={<EditIcon />}
          tooltipTitle={
            <Tooltip title="Edit this item">
              <span>Edit</span>
            </Tooltip>
          }
        />
        <SpeedDialAction
          icon={<ShareIcon />}
          tooltipTitle={
            <Tooltip title="Share this item">
              <span>Share</span>
            </Tooltip>
          }
        />
        <SpeedDialAction
          icon={<DeleteIcon />}
          tooltipTitle={
            <Tooltip title="Delete this item">
              <span>Delete</span>
            </Tooltip>
          }
        />
      </SpeedDial>
    </Box>
  );
};

// SpeedDial with Different Colors Component for demonstration
const SpeedDialWithColors = (): ReactNode => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial with colors"
        icon={<SpeedDialIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
        sx={{
          '& .MuiFab-primary': {
            bgcolor: 'secondary.main',
            '&:hover': {
              bgcolor: 'secondary.dark',
            },
          },
        }}
      >
        <SpeedDialAction icon={<EditIcon />} tooltipTitle="Edit" />
        <SpeedDialAction icon={<ShareIcon />} tooltipTitle="Share" />
        <SpeedDialAction icon={<DeleteIcon />} tooltipTitle="Delete" />
      </SpeedDial>
    </Box>
  );
};

// Theme-specific stories (snapshotted in Chromatic)
// Generate stories for each theme dynamically

// Export theme-specific stories dynamically
const themeStories = ThemesArray.reduce(
  (stories, theme) => {
    // eslint-disable-next-line no-param-reassign
    stories[theme] = createThemeStory<SpeedDialProps>(theme, {
      render: () => (
        <ThemeProvider theme={theme}>
          <StoryVariation label="Basic SpeedDial" sx={{ p: 4 }}>
            <BasicSpeedDial />
          </StoryVariation>

          <StoryVariation label="Custom Icon" sx={{ p: 4 }}>
            <SpeedDialWithCustomIcon />
          </StoryVariation>

          <StoryVariation label="Direction Up" sx={{ p: 4 }}>
            <SpeedDialWithDirection />
          </StoryVariation>

          <StoryVariation label="Multiple Actions" sx={{ p: 4 }}>
            <SpeedDialWithHiddenActions />
          </StoryVariation>

          <StoryVariation label="Custom Fab Size" sx={{ p: 4 }}>
            <SpeedDialWithFab />
          </StoryVariation>

          <StoryVariation label="With Tooltips" sx={{ p: 4 }}>
            <SpeedDialWithTooltip />
          </StoryVariation>

          <StoryVariation label="Custom Colors" sx={{ p: 4 }}>
            <SpeedDialWithColors />
          </StoryVariation>

          <StoryVariation label="Simple SpeedDial" sx={{ p: 4 }}>
            <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
              <SpeedDial ariaLabel="Simple SpeedDial" icon={<SpeedDialIcon />}>
                <SpeedDialAction icon={<EditIcon />} tooltipTitle="Edit" />
                <SpeedDialAction icon={<ShareIcon />} tooltipTitle="Share" />
              </SpeedDial>
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
