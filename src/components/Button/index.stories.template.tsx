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

import { PlayGround } from '~/helpers/argBlocks';
import Plus from '~/icons/Plus';

import { Button, ButtonProps } from '.';

export const Template: Story<ButtonProps> = (props: ButtonProps) => (
  <Button {...props} />
);

export const Icon = <Plus />;

export const argTypes = PlayGround(
  {
    children: {},
    color: {},
    disabled: {},
    fullWidth: {},
    onClick: { action: 'click' },
    size: {},
    type: {},
    variant: {},
  },
  Button,
);
