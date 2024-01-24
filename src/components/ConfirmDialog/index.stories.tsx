/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import { Box, Button } from '@mui/material';
import { Meta, StoryFn } from '@storybook/react';
import { useState } from 'react';

import { Playground } from '~/helpers/playground';

import { ConfirmDialog, ConfirmDialogProps } from '.';

export const Preview: StoryFn<ConfirmDialogProps> = (
  props: ConfirmDialogProps,
) => {
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
      <ConfirmDialog
        {...props}
        isOpen={isOpen}
        onCancel={closeDialog}
        onClose={closeDialog}
        onConfirm={closeDialog}
      />
    </Box>
  );
};

export default {
  args: {},
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
  component: Preview,
  title: 'Organisms / ConfirmDialog / Component',
} as Meta<ConfirmDialogProps>;
