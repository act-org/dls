/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import * as React from 'react';
import { Button, DialogActions, DialogContent } from '@material-ui/core';
import { Story } from '@storybook/react/types-6-0';

import { Playground } from '~/helpers/playground';

import { Dialog, DialogProps } from '.';

interface StoryProps extends DialogProps {
  text?: string;
}

// eslint-disable-next-line react/prop-types
export const Template: Story<StoryProps> = ({ text, ...args }) => {
  const [open, setOpen] = React.useState<boolean>(false);
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
        onClose={(): void => {
          setOpen(false);
        }}
        open={open}
        {...args}
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
    title: {},
    text: {},
    fullScreen: {},
    fullWidth: {},
    maxWidth: {},
    scroll: {},
    draggable: { type: 'boolean' },
  },
  Dialog,
);
