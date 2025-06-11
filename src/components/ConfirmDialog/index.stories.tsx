/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Box, Button } from '@mui/material';
import { Meta, StoryObj } from '@storybook/react-webpack5';
import { useState } from 'react';

import { Playground } from '~/helpers/playground';

import { ConfirmDialog, ConfirmDialogProps } from '.';

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
  render: (props: ConfirmDialogProps) => {
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
  },
  tags: ['autodocs'],
  title: 'Organisms / ConfirmDialog',
} as Meta<ConfirmDialogProps>;

type Story = StoryObj<ConfirmDialogProps>;

export const Preview: Story = {
  args: {},
};
