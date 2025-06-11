/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Button, Typography } from '@mui/material';
import { Meta, StoryObj } from '@storybook/react-webpack5';
import { useState } from 'react';

import { Drawer } from './internal';

export default {
  args: {},
  component: Drawer,
  render: args => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button
          color="primary"
          onClick={(): void => {
            setOpen(!open);
          }}
        >
          {open ? 'Close' : 'Open'} Drawer
        </Button>

        <Drawer
          {...args}
          onClose={(): void => {
            setOpen(false);
          }}
          open={open}
        >
          <div
            style={{
              padding: 50,
            }}
          >
            <Typography variant="body1">Drawer Content</Typography>
          </div>
        </Drawer>
      </>
    );
  },
  tags: ['autodocs'],
  title: 'MUI Core / Drawer',
} as Meta<Drawer>;

export const Left: StoryObj<Drawer> = { args: { anchor: 'left' } };
export const Right: StoryObj<Drawer> = { args: { anchor: 'right' } };
export const Top: StoryObj<Drawer> = { args: { anchor: 'top' } };
export const Bottom: StoryObj<Drawer> = { args: { anchor: 'bottom' } };
export const NoElevation: StoryObj<Drawer> = {
  args: { anchor: 'left', elevation: 0 },
};
export const Persistent: StoryObj<Drawer> = {
  args: { anchor: 'left', variant: 'persistent' },
};
export const Temporary: StoryObj<Drawer> = {
  args: { anchor: 'left', variant: 'temporary' },
};
