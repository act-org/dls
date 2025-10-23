/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Button } from '@mui/material';
import { Meta, StoryFn, StoryObj } from '@storybook/react-webpack5';
import dayjs from 'dayjs';
import { ReactElement, useState } from 'react';

import { StoryVariation } from '~/components/StoryVariation';
import ThemeProvider from '~/components/ThemeProvider';
import { createThemeStory } from '~/helpers/createThemeStory';
import { Playground } from '~/helpers/playground';
import { ThemesArray } from '~/styles/themes';

import { DialogContinueSession, DialogContinueSessionProps } from '.';

interface StoryProps extends DialogContinueSessionProps {
  text?: string;
}

const Template: StoryFn<StoryProps> = args => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        onClick={(): void => {
          setOpen(true);
        }}
      >
        Open
      </Button>
      <DialogContinueSession
        {...args}
        open={open}
        onContinue={(): void => {
          setOpen(false);
        }}
        onExpire={(): void => {
          window.location.reload();
        }}
      />
    </>
  );
};

const DialogWithLauncher = ({ label, ...dialogProps }: Omit<DialogContinueSessionProps, 'open'> & { label: string }): ReactElement => {
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
      <DialogContinueSession
        {...dialogProps}
        open={open}
        onContinue={(): void => {
          setOpen(false);
        }}
        onExpire={(): void => {
          window.location.reload();
        }}
      />
    </>
  );
};

/**
 * The `<DialogContinueSession />` component is used to prompt the user to continue
 * their current session. If the user does not choose to continue their session by
 * the provided date, the user's session will expire.
 */
export default {
  args: {
    expiresAt: dayjs().add(30, 'minutes').toDate(),
  },
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  argTypes: Playground(
    {
      cancellationText: { type: 'string' },
      confirmationText: { type: 'string' },
      expiresAt: { type: 'Date' },
      onContinue: { action: 'onContinue' },
      onExpire: { action: 'onExpire' },
      title: { type: 'string' },
    },
    DialogContinueSession,
  ),
  component: DialogContinueSession,
  parameters: {
    layout: 'padded',
  },
  render: Template,
  tags: ['autodocs'],
  title: 'Molecules / DialogContinueSession',
} as Meta<DialogContinueSessionProps>;

type Story = StoryObj<DialogContinueSessionProps>;

// Documentation story (not snapshotted in Chromatic)
export const Documentation: Story = {
  args: {
    expiresAt: dayjs().add(30, 'minutes').toDate(),
  },
  parameters: {
    chromatic: { disable: true },
  },
  render: args => <DialogWithLauncher {...args} label="Open Documentation Dialog" />,
};

// Playground story (not snapshotted in Chromatic)
export const PlaygroundStory: Story = {
  args: {
    expiresAt: dayjs().add(30, 'minutes').toDate(),
  },
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  argTypes: Playground(
    {
      cancellationText: { type: 'string' },
      confirmationText: { type: 'string' },
      expiresAt: { type: 'Date' },
      onContinue: { action: 'onContinue' },
      onExpire: { action: 'onExpire' },
      title: { type: 'string' },
    },
    DialogContinueSession,
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
    stories[theme] = createThemeStory<DialogContinueSessionProps>(theme, {
      render: () => (
        <ThemeProvider theme={theme}>
          <StoryVariation label="Default">
            <DialogWithLauncher expiresAt={dayjs().add(30, 'minutes').toDate()} label="Default Dialog" onContinue={() => {}} onExpire={() => {}} />
          </StoryVariation>

          <StoryVariation label="Custom Title">
            <DialogWithLauncher
              expiresAt={dayjs().add(30, 'minutes').toDate()}
              label="Custom Title Dialog"
              onContinue={() => {}}
              onExpire={() => {}}
              title="Custom Session Title"
            />
          </StoryVariation>

          <StoryVariation label="Custom Text">
            <DialogWithLauncher
              cancellationText="Cancel Session"
              confirmationText="Keep Session"
              expiresAt={dayjs().add(30, 'minutes').toDate()}
              label="Custom Text Dialog"
              onContinue={() => {}}
              onExpire={() => {}}
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
