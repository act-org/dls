/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import * as React from 'react';
import { Button, Drawer, DrawerProps } from '@material-ui/core';
import { Story } from '@storybook/react/types-6-0';

import { Playground } from '~/helpers/playground';

export const Template: Story<DrawerProps> = args => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Button
        color="primary"
        onClick={(): void => {
          setOpen(true);
        }}
      >
        Open Drawer
      </Button>

      <Drawer
        {...args}
        onClose={(): void => {
          setOpen(false);
        }}
        open={open}
      >
        Drawer Content
      </Drawer>
    </>
  );
};
export const argTypes = Playground({}, Drawer);
