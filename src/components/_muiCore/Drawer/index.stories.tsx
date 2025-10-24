/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Button, Typography } from '@mui/material';
import { Meta, StoryObj } from '@storybook/react-webpack5';
import React, { useState } from 'react';

import { StoryVariation } from '~/components/StoryVariation';
import ThemeProvider from '~/components/ThemeProvider';
import { createThemeStory } from '~/helpers/createThemeStory';
import { Playground } from '~/helpers/playground';
import { ThemesArray } from '~/styles/themes';

import { Drawer, DrawerProps } from './internal';

const createDrawerContent = (): React.ReactElement => (
  <div style={{ padding: 50 }}>
    <Typography variant="body1">Drawer Content</Typography>
  </div>
);

// Drawer with launcher button component
const DrawerWithLauncher = ({
  children,
  label,
  ...drawerProps
}: {
  children: React.ReactElement;
  label: string;
} & Omit<DrawerProps, 'open'>): React.ReactElement => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button color="primary" onClick={(): void => setOpen(true)} style={{ marginBottom: 16 }} variant="contained">
        {label}
      </Button>
      <Drawer onClose={(): void => setOpen(false)} {...drawerProps} open={open}>
        {children}
      </Drawer>
    </>
  );
};

const DrawerWithToggle = ({
  anchor,
  label,
  ...props
}: {
  anchor: 'left' | 'right' | 'top' | 'bottom';
  label: string;
  [key: string]: unknown;
}): React.ReactElement => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        color="primary"
        onClick={(): void => {
          setOpen(!open);
        }}
        style={{ marginBottom: 16 }}
      >
        {open ? 'Close' : 'Open'} {label}
      </Button>

      <Drawer
        anchor={anchor}
        onClose={(): void => {
          setOpen(false);
        }}
        open={open}
        {...props}
      >
        {createDrawerContent()}
      </Drawer>
    </>
  );
};

/**
 * The default Drawer exports
 */
export default {
  component: Drawer,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  title: 'MUI Core / Drawer',
} as Meta<Drawer>;

type Story = StoryObj<DrawerProps>;

// Documentation story (not snapshotted in Chromatic)
export const Documentation: Story = {
  args: {
    anchor: 'left',
  },
  parameters: {
    chromatic: { disable: true },
  },
  render: args => (
    <DrawerWithLauncher label="Open Drawer" {...args}>
      {createDrawerContent()}
    </DrawerWithLauncher>
  ),
};

// Playground story (not snapshotted in Chromatic)
export const PlaygroundStory: Story = {
  args: {
    anchor: 'left',
    open: true,
  },
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  argTypes: Playground({}, Drawer),
  name: 'Playground',
  parameters: {
    chromatic: { disable: true },
  },
  render: args => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button
          color="primary"
          onClick={(): void => {
            setOpen(!open);
          }}
        >
          {open ? 'Close' : 'Open'} Drawer
        </Button>

        <Drawer
          {...args}
          onClose={(): void => {
            setOpen(false);
          }}
          open={open}
        >
          {createDrawerContent()}
        </Drawer>
      </>
    );
  },
};

// Theme-specific stories (snapshotted in Chromatic)
// Generate stories for each theme dynamically

// Export theme-specific stories dynamically
const themeStories = ThemesArray.reduce(
  (stories, theme) => {
    // eslint-disable-next-line no-param-reassign
    stories[theme] = createThemeStory<DrawerProps>(theme, {
      render: () => (
        <ThemeProvider theme={theme}>
          <StoryVariation label="Left Anchor">
            <DrawerWithToggle anchor="left" label="Left Drawer" />
          </StoryVariation>

          <StoryVariation label="Right Anchor">
            <DrawerWithToggle anchor="right" label="Right Drawer" />
          </StoryVariation>

          <StoryVariation label="Top Anchor">
            <DrawerWithToggle anchor="top" label="Top Drawer" />
          </StoryVariation>

          <StoryVariation label="Bottom Anchor">
            <DrawerWithToggle anchor="bottom" label="Bottom Drawer" />
          </StoryVariation>

          <StoryVariation label="Persistent Variant">
            <DrawerWithToggle anchor="left" label="Persistent Drawer" variant="persistent" />
          </StoryVariation>

          <StoryVariation label="Temporary Variant">
            <DrawerWithToggle anchor="left" label="Temporary Drawer" variant="temporary" />
          </StoryVariation>

          <StoryVariation label="No Elevation">
            <DrawerWithToggle anchor="left" elevation={0} label="No Elevation Drawer" />
          </StoryVariation>

          <StoryVariation label="With Paper Props">
            <DrawerWithToggle
              anchor="left"
              label="Custom Styled Drawer"
              PaperProps={{
                sx: { backgroundColor: 'primary.light', color: 'primary.contrastText' },
              }}
            />
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
