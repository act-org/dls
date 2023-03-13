/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import { Button } from '@mui/material';
import { Story } from '@storybook/react/types-6-0';
import { ReactElement } from 'react';

import { ConfirmDialog, ConfirmDialogProps } from '@actinc/dls/components';
import { ConfirmProvider } from '@actinc/dls/context';
import { Playground } from '@actinc/dls/helpers/playground';

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

export const Template: Story<ConfirmDialogProps> = (
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
    title: {
      type: 'string',
    },
    description: {
      type: 'string',
    },
    isOpen: {},
    allowClose: {},
  },
  ConfirmDialog,
);
