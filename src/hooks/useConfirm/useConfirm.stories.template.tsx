/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Button } from '@mui/material';
import { StoryFn } from '@storybook/react';
import { ReactElement } from 'react';

import { ConfirmDialog, ConfirmDialogProps } from '~/components';
import { ConfirmProvider } from '~/context';
import { Playground } from '~/helpers/playground';

import { useConfirm } from '.';

const ConfirmHook = (props: ConfirmDialogProps): ReactElement => {
  const confirm = useConfirm();
  const openDialog = async (): Promise<void> => {
    if (await confirm(props)) {
      console.log('confirmed');
    } else {
      console.log('cancelled');
    }
  };
  return (
    <Button color="primary" onClick={openDialog} variant="contained">
      open
    </Button>
  );
};

export const Template: StoryFn<ConfirmDialogProps> = (
  props: ConfirmDialogProps,
) => {
  return (
    <ConfirmProvider>
      <ConfirmHook {...props} />
    </ConfirmProvider>
  );
};

export const argTypes = Playground(
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
);
