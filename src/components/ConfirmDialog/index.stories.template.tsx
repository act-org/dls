/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import { Box, Button } from '@mui/material';
import { Story } from '@storybook/react/types-6-0';
import { useState } from 'react';

import { Playground } from '@actinc/dls/helpers/playground';

import { ConfirmDialog, ConfirmDialogProps } from '.';

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