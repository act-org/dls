/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import {
  Button,
  Drawer as MuiDrawer,
  DrawerProps as MuiDrawerProps,
  Typography,
} from '@mui/material';
import { Story } from '@storybook/react/types-6-0';
import { useState } from 'react';

export const Drawer = MuiDrawer;
export type DrawerProps = MuiDrawerProps;

export const Template: Story<DrawerProps> = args => {
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
};