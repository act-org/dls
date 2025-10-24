/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Button, IconButton } from '@mui/material';
import { Meta, StoryObj } from '@storybook/react-webpack5';
import CloseIcon from 'mdi-material-ui/Close';
import { ReactNode, useState } from 'react';

import { StoryVariation } from '~/components/StoryVariation';
import ThemeProvider from '~/components/ThemeProvider';
import { createThemeStory } from '~/helpers/createThemeStory';
import { Playground } from '~/helpers/playground';
import { ThemesArray } from '~/styles/themes';

import { Alert, AlertProps, Snackbar, SnackbarProps } from './internal';

/**
 * The default Snackbar exports
 */
export default {
  args: {},
  component: Snackbar,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  title: 'MUI Core / Snackbar',
} as Meta<Snackbar>;

type Story = StoryObj<SnackbarProps>;

// Documentation story (not snapshotted in Chromatic)
export const Documentation: Story = {
  args: {},
  parameters: {
    chromatic: { disable: true },
  },
};

// Playground story (not snapshotted in Chromatic)
export const PlaygroundStory: Story = {
  args: {},
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  argTypes: Playground({}, Snackbar),
  name: 'Playground',
  parameters: {
    chromatic: { disable: true },
  },
};

// Snackbar with Alert Component for demonstration
const SnackbarWithAlert = ({ severity, message, action }: { severity: AlertProps['severity']; message: string; action?: ReactNode }): ReactNode => {
  const [open, setOpen] = useState(false);

  const handleClose = (): void => {
    setOpen(false);
  };

  const handleOpen = (): void => {
    setOpen(true);
  };

  return (
    <>
      <Button onClick={handleOpen} variant="contained">
        Show {severity} Alert
      </Button>
      <Snackbar autoHideDuration={6000} onClose={handleClose} open={open}>
        <Alert action={action} onClose={handleClose} severity={severity}>
          {message}
        </Alert>
      </Snackbar>
    </>
  );
};

// Snackbar with Action Component for demonstration
const SnackbarWithAction = ({ message }: { message: string }): ReactNode => {
  const [open, setOpen] = useState(false);

  const handleClose = (): void => {
    setOpen(false);
  };

  const handleOpen = (): void => {
    setOpen(true);
  };

  const handleUndo = (): void => {
    setOpen(false);
  };

  return (
    <>
      <Button onClick={handleOpen} variant="contained">
        Show Snackbar with Action
      </Button>
      <Snackbar
        action={
          <>
            <Button color="secondary" onClick={handleUndo} size="small">
              UNDO
            </Button>
            <IconButton aria-label="close" color="inherit" onClick={handleClose} size="small">
              <CloseIcon fontSize="small" />
            </IconButton>
          </>
        }
        autoHideDuration={6000}
        message={message}
        onClose={handleClose}
        open={open}
      />
    </>
  );
};

// Snackbar with Custom Position Component for demonstration
const SnackbarWithPosition = ({
  vertical,
  horizontal,
  message,
}: {
  vertical: 'top' | 'bottom';
  horizontal: 'left' | 'center' | 'right';
  message: string;
}): ReactNode => {
  const [open, setOpen] = useState(false);

  const handleClose = (): void => {
    setOpen(false);
  };

  const handleOpen = (): void => {
    setOpen(true);
  };

  return (
    <>
      <Button onClick={handleOpen} variant="contained">
        Show {vertical} {horizontal} Snackbar
      </Button>
      <Snackbar anchorOrigin={{ horizontal, vertical }} autoHideDuration={6000} message={message} onClose={handleClose} open={open} />
    </>
  );
};

// Theme-specific stories (snapshotted in Chromatic)
// Generate stories for each theme dynamically

// Export theme-specific stories dynamically
const themeStories = ThemesArray.reduce(
  (stories, theme) => {
    // eslint-disable-next-line no-param-reassign
    stories[theme] = createThemeStory<SnackbarProps>(theme, {
      render: () => {
        const [open, setOpen] = useState(false);

        return (
          <ThemeProvider theme={theme}>
            <StoryVariation label="Default Snackbar" sx={{ p: 4 }}>
              <Button onClick={() => setOpen(true)} variant="contained">
                Show Default Snackbar
              </Button>
              <Snackbar message="This is a default snackbar message" onClose={() => setOpen(false)} open={open} />
            </StoryVariation>

            <StoryVariation label="Snackbar with Action" sx={{ p: 4 }}>
              <SnackbarWithAction message="Item deleted successfully" />
            </StoryVariation>

            <StoryVariation label="Success Alert" sx={{ p: 4 }}>
              <SnackbarWithAlert message="Operation completed successfully!" severity="success" />
            </StoryVariation>

            <StoryVariation label="Error Alert" sx={{ p: 4 }}>
              <SnackbarWithAlert message="Something went wrong. Please try again." severity="error" />
            </StoryVariation>

            <StoryVariation label="Warning Alert" sx={{ p: 4 }}>
              <SnackbarWithAlert message="Please review your input before proceeding." severity="warning" />
            </StoryVariation>

            <StoryVariation label="Info Alert" sx={{ p: 4 }}>
              <SnackbarWithAlert message="New information is available." severity="info" />
            </StoryVariation>

            <StoryVariation label="Top Center Position" sx={{ p: 4 }}>
              <SnackbarWithPosition horizontal="center" message="Top center positioned snackbar" vertical="top" />
            </StoryVariation>

            <StoryVariation label="Bottom Right Position" sx={{ p: 4 }}>
              <SnackbarWithPosition horizontal="right" message="Bottom right positioned snackbar" vertical="bottom" />
            </StoryVariation>
          </ThemeProvider>
        );
      },
    });

    return stories;
  },
  {} as Record<string, Story>,
);

export const ThemeEncoura = { ...themeStories.ENCOURA, name: 'Theme: Encoura' };
export const ThemeEncouraClassic = { ...themeStories.ENCOURA_CLASSIC, name: 'Theme: Encoura Classic' };
export const ThemeEncourage = { ...themeStories.ENCOURAGE, name: 'Theme: Encourage' };
export const ThemeEncourageE4E = { ...themeStories.ENCOURAGE_E4E, name: 'Theme: Encourage E4E' };
