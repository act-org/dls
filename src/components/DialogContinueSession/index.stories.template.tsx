/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import * as React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@material-ui/core';
import { Story } from '@storybook/react/types-6-0';

import { Playground } from '~/helpers/playground';

import { DialogContinueSession, DialogContinueSessionProps } from '.';

export const Template: Story<DialogContinueSessionProps> = args => {
  const [open, setOpen] = React.useState(false);

  const onContinue = action('onContinue');
  const onExpire = action('onExpire');

  if (open)
    return (
      <DialogContinueSession
        onContinue={(): void => {
          onContinue();

          setOpen(false);
        }}
        onExpire={(): void => {
          onExpire();

          window.location.reload();
        }}
        {...args}
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

export const argTypes = Playground(
  {
    expiresAt: { type: 'Date' },
  },
  DialogContinueSession,
);
