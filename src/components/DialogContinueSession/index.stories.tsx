/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import { Button } from '@mui/material';
import { action } from '@storybook/addon-actions';
import { Meta, StoryFn, StoryObj } from '@storybook/react';
import moment from 'moment';
import { useState } from 'react';

import { DialogContinueSession, DialogContinueSessionProps } from '.';

interface StoryProps extends DialogContinueSessionProps {
  text?: string;
}

const Template: StoryFn<StoryProps> = args => {
  const [open, setOpen] = useState(false);

  const onContinue = action('onContinue');
  const onExpire = action('onExpire');

  if (open)
    return (
      <DialogContinueSession
        {...args}
        onContinue={(): void => {
          onContinue();

          setOpen(false);
        }}
        onExpire={(): void => {
          onExpire();

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
    expiresAt: moment().add(30, 'minutes').toDate(),
  },
  argTypes: {},
  component: Template,
  tags: ['autodocs'],
  title: 'Molecules / DialogContinueSession',
} as Meta<DialogContinueSessionProps>;

export const Preview: StoryObj<DialogContinueSessionProps> = {
  args: {},
};
