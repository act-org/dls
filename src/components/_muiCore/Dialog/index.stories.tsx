/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Button, DialogActions, DialogContent, DialogTitle, Typography } from '@mui/material';
import { Meta, StoryObj } from '@storybook/react-webpack5';
import { ReactElement, useState } from 'react';

import { StoryVariation } from '~/components/StoryVariation';
import ThemeProvider from '~/components/ThemeProvider';
import { createThemeStory } from '~/helpers/createThemeStory';
import { Playground } from '~/helpers/playground';
import { ThemesArray } from '~/styles/themes';

import { Dialog, DialogProps } from './internal';

// Dialog with launcher button component
const DialogWithLauncher = ({
  children,
  label,
  ...dialogProps
}: {
  children: ReactElement | ReactElement[];
  label: string;
} & Omit<DialogProps, 'open'>): ReactElement => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button color="primary" onClick={(): void => setOpen(true)} style={{ marginBottom: 16 }} variant="contained">
        {label}
      </Button>
      <Dialog onClose={(): void => setOpen(false)} {...dialogProps} open={open}>
        {children}
      </Dialog>
    </>
  );
};

/**
 * The default Dialog exports
 */
export default {
  args: {
    open: false,
  },
  component: Dialog,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  title: 'MUI Core / Dialog',
} as Meta<DialogProps>;

type Story = StoryObj<DialogProps>;

// Documentation story (not snapshotted in Chromatic)
export const Documentation: Story = {
  parameters: {
    chromatic: { disable: true },
  },
  render: () => (
    <DialogWithLauncher label="Open Documentation Dialog">
      <DialogTitle>Dialog Title</DialogTitle>
      <DialogContent>
        <Typography>This is the dialog content. It can contain any React elements.</Typography>
      </DialogContent>
      <DialogActions>
        <Button>Cancel</Button>
        <Button variant="contained">Save</Button>
      </DialogActions>
    </DialogWithLauncher>
  ),
};

// Playground story (not snapshotted in Chromatic)
export const PlaygroundStory: Story = {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  argTypes: Playground({}, Dialog),

  name: 'Playground',
  parameters: {
    chromatic: { disable: true },
  },
  render: () => (
    <DialogWithLauncher label="Open Playground Dialog">
      <DialogTitle>Dialog Title</DialogTitle>
      <DialogContent>
        <Typography>This is the dialog content. It can contain any React elements.</Typography>
      </DialogContent>
      <DialogActions>
        <Button>Cancel</Button>
        <Button variant="contained">Save</Button>
      </DialogActions>
    </DialogWithLauncher>
  ),
};

// Theme-specific stories (snapshotted in Chromatic)
// Generate stories for each theme dynamically

// Export theme-specific stories dynamically
const themeStories = ThemesArray.reduce(
  (stories, theme) => {
    // eslint-disable-next-line no-param-reassign
    stories[theme] = createThemeStory<DialogProps>(theme, {
      render: () => (
        <ThemeProvider theme={theme}>
          <StoryVariation label="Basic Dialog">
            <DialogWithLauncher label="Open Basic Dialog">
              <DialogTitle>Basic Dialog</DialogTitle>
              <DialogContent>
                <Typography>This is a basic dialog with a title, content, and actions.</Typography>
              </DialogContent>
              <DialogActions>
                <Button>Cancel</Button>
                <Button variant="contained">Save</Button>
              </DialogActions>
            </DialogWithLauncher>
          </StoryVariation>

          <StoryVariation label="Confirmation Dialog">
            <DialogWithLauncher label="Open Confirmation Dialog">
              <DialogTitle>Confirm Action</DialogTitle>
              <DialogContent>
                <Typography>Are you sure you want to delete this item? This action cannot be undone.</Typography>
              </DialogContent>
              <DialogActions>
                <Button>Cancel</Button>
                <Button color="error" variant="contained">
                  Delete
                </Button>
              </DialogActions>
            </DialogWithLauncher>
          </StoryVariation>

          <StoryVariation label="Form Dialog">
            <DialogWithLauncher label="Open Form Dialog">
              <DialogTitle>User Information</DialogTitle>
              <DialogContent>
                <Typography>Please fill out the form below with your information.</Typography>
                <div style={{ marginTop: 16 }}>
                  <input placeholder="Name" style={{ marginBottom: 8, padding: 8, width: '100%' }} />
                  <input placeholder="Email" style={{ padding: 8, width: '100%' }} />
                </div>
              </DialogContent>
              <DialogActions>
                <Button>Cancel</Button>
                <Button variant="contained">Submit</Button>
              </DialogActions>
            </DialogWithLauncher>
          </StoryVariation>

          <StoryVariation label="Alert Dialog">
            <DialogWithLauncher label="Open Alert Dialog">
              <DialogTitle>Alert</DialogTitle>
              <DialogContent>
                <Typography>This is an alert dialog with important information.</Typography>
              </DialogContent>
              <DialogActions>
                <Button variant="contained">OK</Button>
              </DialogActions>
            </DialogWithLauncher>
          </StoryVariation>

          <StoryVariation label="Scrollable Dialog">
            <DialogWithLauncher label="Open Scrollable Dialog">
              <DialogTitle>Scrollable Content</DialogTitle>
              <DialogContent>
                <Typography>This dialog has scrollable content. Scroll down to see more content.</Typography>
                {Array.from({ length: 20 }, (_, i) => (
                  <Typography key={i} style={{ marginBottom: 16 }}>
                    This is paragraph {i + 1}. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.
                  </Typography>
                ))}
              </DialogContent>
              <DialogActions>
                <Button>Cancel</Button>
                <Button variant="contained">Save</Button>
              </DialogActions>
            </DialogWithLauncher>
          </StoryVariation>

          <StoryVariation label="Full Width Dialog">
            <DialogWithLauncher label="Open Full Width Dialog" maxWidth={false}>
              <DialogTitle>Full Width Dialog</DialogTitle>
              <DialogContent>
                <Typography>This dialog takes up the full width of the screen.</Typography>
              </DialogContent>
              <DialogActions>
                <Button>Cancel</Button>
                <Button variant="contained">Save</Button>
              </DialogActions>
            </DialogWithLauncher>
          </StoryVariation>

          <StoryVariation label="Dialog with Custom Size">
            <DialogWithLauncher label="Open Custom Size Dialog" maxWidth="sm">
              <DialogTitle>Custom Size Dialog</DialogTitle>
              <DialogContent>
                <Typography>This dialog has a custom maximum width (small).</Typography>
              </DialogContent>
              <DialogActions>
                <Button>Cancel</Button>
                <Button variant="contained">Save</Button>
              </DialogActions>
            </DialogWithLauncher>
          </StoryVariation>

          <StoryVariation label="Dialog with Three Actions">
            <DialogWithLauncher label="Open Three Actions Dialog">
              <DialogTitle>Multiple Actions</DialogTitle>
              <DialogContent>
                <Typography>This dialog has three action buttons.</Typography>
              </DialogContent>
              <DialogActions>
                <Button>Cancel</Button>
                <Button>Save Draft</Button>
                <Button variant="contained">Save</Button>
              </DialogActions>
            </DialogWithLauncher>
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
