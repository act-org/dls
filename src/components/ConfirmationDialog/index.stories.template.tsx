/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import { Story } from '@storybook/react/types-6-0';

import { Playground } from '~/helpers/playground';

import { Box, Button } from '@mui/material';
import { useState } from 'react';
import { ConfirmationDialog, ConfirmDialogProps } from '.';

export const Template: Story<ConfirmDialogProps> = (
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
      <ConfirmationDialog
        {...props}
        isOpen={isOpen}
        onCancel={closeDialog}
        onClose={closeDialog}
        onConfirm={closeDialog}
      />
    </Box>
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
  ConfirmationDialog,
);
