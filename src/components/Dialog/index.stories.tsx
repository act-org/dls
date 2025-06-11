/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Button, DialogActions, DialogContent } from '@mui/material';
import { Meta, StoryObj } from '@storybook/react-webpack5';
import { useState } from 'react';

import { Playground } from '~/helpers/playground';

import { Dialog, DialogProps } from '.';

interface StoryProps extends DialogProps {
  text?: string;
}

export default {
  args: {
    text: 'Some sample dialog text',
    title: 'Dialog Title',
  },
  argTypes: Playground(
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
  ),
  render: ({ text, ...args }: StoryProps) => {
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
  },
  tags: ['autodocs'],
  title: 'Molecules / Dialog',
} as Meta<DialogProps>;

export const Preview: StoryObj<DialogProps> = {
  args: {},
};
