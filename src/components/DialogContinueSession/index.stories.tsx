/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Button } from '@mui/material';
import { Meta, StoryFn, StoryObj } from '@storybook/react';
import dayjs from 'dayjs';
import { useState } from 'react';

import { Playground } from '~/helpers/playground';

import { DialogContinueSession, DialogContinueSessionProps } from '.';

interface StoryProps extends DialogContinueSessionProps {
  text?: string;
}

const Template: StoryFn<StoryProps> = args => {
  const [open, setOpen] = useState(false);

  if (open)
    return (
      <DialogContinueSession
        {...args}
        onContinue={(): void => {
          setOpen(false);
        }}
        onExpire={(): void => {
          window.location.reload();
        }}
      />
    );

  return (
    <Button
      onClick={(): void => {
        setOpen(true);
      }}
    >
      Open
    </Button>
  );
};

/*
 * The `<DialogContinueSession />` component is used to prompt the user to continue
 * their current session. If the user does not choose to continue their session by
 * the provided date, the user's session will expire.
 */
export default {
  args: {
    expiresAt: dayjs().add(30, 'minutes').toDate(),
  },
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
  component: Template,
  tags: ['autodocs'],
  title: 'Molecules / DialogContinueSession',
} as Meta<DialogContinueSessionProps>;

export const Preview: StoryObj<DialogContinueSessionProps> = {
  args: {},
};
