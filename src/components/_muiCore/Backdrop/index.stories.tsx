/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Button, CircularProgress } from '@mui/material';
import { Meta, StoryObj } from '@storybook/react-webpack5';
import { useState } from 'react';

import { Backdrop } from './internal';

/**
 * Renders a standard Material UI Button using the
 * chosen theme parameters
 */
export default {
  args: {
    children: <CircularProgress />,
  },
  argTypes: {
    onClick: { action: 'onClick' },
  },
  component: Backdrop,
  parameters: {
    docs: {
      story: {
        inline: false,
      },
    },
    layout: 'padded',
  },
  render: args => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button color="primary" onClick={(): void => setOpen(true)} variant="contained">
          Open Backdrop
        </Button>
        <Backdrop {...args} onClick={(): void => setOpen(false)} open={open} />
      </>
    );
  },
  tags: ['autodocs'],
  title: 'MUI Core / Backdrop',
} as Meta<Backdrop>;

/**
 * The Primary color palette
 */
export const Primary: StoryObj<Backdrop> = {};
