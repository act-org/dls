/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import { Button, CircularProgress } from '@mui/material';
import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { Backdrop } from './internal';

/**
 * Renders a standard Material UI Button using the
 * chosen theme parameters
 */
export default {
  component: Backdrop,
  title: 'Material UI / Backdrop',
  args: {
    children: <CircularProgress />,
  },
  argTypes: {
    onClick: { action: 'onClick' },
  },
  parameters: {
    layout: 'padded',
    docs: {
      story: {
        inline: false,
      },
    },
  },
  render: args => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button
          color="primary"
          onClick={() => setOpen(true)}
          variant="contained"
        >
          Open Backdrop
        </Button>
        <Backdrop {...args} onClick={() => setOpen(false)} open={open} />
      </>
    );
  },
  tags: ['autodocs'],
} as Meta<Backdrop>;

/**
 * The Primary color palette
 */
export const Primary: StoryObj<Backdrop> = {};
