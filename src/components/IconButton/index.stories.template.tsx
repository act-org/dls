/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import * as React from 'react';
import { Story } from '@storybook/react/types-6-0';

import { PencilCircle, PencilCircleOutline } from '~/icons';
import { Playground } from '~/helpers/playground';

import { IconButton, IconButtonProps } from '.';

export const Template: Story<IconButtonProps> = (props: IconButtonProps) => (
  <>
    <IconButton {...props}>
      <PencilCircle />
    </IconButton>

    <IconButton {...props}>
      <PencilCircleOutline />
    </IconButton>
  </>
);

export const argTypes = Playground(
  {
    color: {},
    disabled: {},
    edge: {},
    onClick: { action: 'click' },
    size: {},
  },
  IconButton,
);
