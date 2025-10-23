/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Box, Button } from '@mui/material';
import { Meta, StoryFn, StoryObj } from '@storybook/react-webpack5';
import { ReactElement, useState } from 'react';

import { StoryVariation } from '~/components/StoryVariation';
import ThemeProvider from '~/components/ThemeProvider';
import { createThemeStory } from '~/helpers/createThemeStory';
import { Playground } from '~/helpers/playground';
import { ThemesArray } from '~/styles/themes';

import { ConfirmDialog, ConfirmDialogProps } from '.';

const Template: StoryFn<ConfirmDialogProps> = (props: ConfirmDialogProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const openDialog = (): void => {
    setIsOpen(true);
  };

  const closeDialog = (): void => {
    setIsOpen(false);
  };
  return (
    <Box>
      <Button color="primary" onClick={openDialog} variant="contained">
        open
      </Button>
      <ConfirmDialog {...props} isOpen={isOpen} onCancel={closeDialog} onClose={closeDialog} onConfirm={closeDialog} />
    </Box>
  );
};

const DialogWithLauncher = ({ label, ...dialogProps }: ConfirmDialogProps & { label: string }): ReactElement => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        onClick={(): void => {
          setOpen(true);
        }}
      >
        {label}
      </Button>
      <ConfirmDialog
        onCancel={(): void => {
          setOpen(false);
        }}
        onClose={(): void => {
          setOpen(false);
        }}
        onConfirm={(): void => {
          setOpen(false);
        }}
        {...dialogProps}
        isOpen={open}
      />
    </>
  );
};

/**
 * The `<ConfirmDialog />` component displays a confirmation dialog with customizable title and description.
 */
export default {
  args: {},
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  argTypes: Playground(
    {
      allowClose: {},
      description: {
        type: 'string',
      },
      isOpen: {},
      title: {
        type: 'string',
      },
    },
    ConfirmDialog,
  ),
  component: ConfirmDialog,
  parameters: {
    layout: 'padded',
  },
  render: Template,
  tags: ['autodocs'],
  title: 'Organisms / ConfirmDialog',
} as Meta<ConfirmDialogProps>;

type Story = StoryObj<ConfirmDialogProps>;

// Documentation story (not snapshotted in Chromatic)
export const Documentation: Story = {
  args: {},
  parameters: {
    chromatic: { disable: true },
  },
  render: args => <DialogWithLauncher {...args} label="Open Documentation Dialog" />,
};

// Playground story (not snapshotted in Chromatic)
export const PlaygroundStory: Story = {
  args: {},
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  argTypes: Playground(
    {
      allowClose: {},
      description: {
        type: 'string',
      },
      isOpen: {},
      title: {
        type: 'string',
      },
    },
    ConfirmDialog,
  ),
  name: 'Playground',
  parameters: {
    chromatic: { disable: true },
  },
  render: args => <DialogWithLauncher {...args} label="Open Playground Dialog" />,
};

// Theme-specific stories (snapshotted in Chromatic)
// Generate stories for each theme dynamically

// Export theme-specific stories dynamically
const themeStories = ThemesArray.reduce(
  (stories, theme) => {
    // eslint-disable-next-line no-param-reassign
    stories[theme] = createThemeStory<ConfirmDialogProps>(theme, {
      render: () => (
        <ThemeProvider theme={theme}>
          <StoryVariation label="Default">
            <DialogWithLauncher label="Default Dialog" />
          </StoryVariation>

          <StoryVariation label="With Title">
            <DialogWithLauncher label="With Title Dialog" title="Confirm Action" />
          </StoryVariation>

          <StoryVariation label="With Description">
            <DialogWithLauncher description="Are you sure you want to proceed with this action?" label="With Description Dialog" title="Confirm Action" />
          </StoryVariation>

          <StoryVariation label="Allow Close">
            <DialogWithLauncher allowClose description="This dialog can be closed with the X button." label="Allow Close Dialog" title="Confirm Action" />
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
