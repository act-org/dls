/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import { Button, DialogActions, DialogContent } from '@mui/material';
import { StoryFn } from '@storybook/react';
import { useState } from 'react';

import { Playground } from '@actinc/dls/helpers/playground';

import { Dialog, DialogProps } from '.';

interface StoryProps extends DialogProps {
  text?: string;
}

// eslint-disable-next-line react/prop-types
export const Template: StoryFn<StoryProps> = ({ text, ...args }) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <Button
        onClick={(): void => {
          setOpen(true);
        }}
      >
        open
      </Button>
      <Dialog
        {...args}
        onClose={(): void => {
          setOpen(false);
        }}
        open={open}
      >
        <DialogContent>{text}</DialogContent>
        <DialogActions>
          <Button
            onClick={(): void => {
              setOpen(false);
            }}
          >
            close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
export const argTypes = Playground(
  {
    draggable: { type: 'boolean' },
    fullScreen: {},
    fullWidth: {},
    maxWidth: {},
    scroll: {},
    text: {},
    title: {},
  },
  Dialog,
);
