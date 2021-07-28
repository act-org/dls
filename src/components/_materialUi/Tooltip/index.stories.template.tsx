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
import { Tooltip, TooltipProps } from '@material-ui/core';

import HelpCircleOutline from '~/icons/HelpCircleOutline';
import { Playground } from '~/helpers/playground';

export const Template: Story<TooltipProps> = args => (
  <Tooltip {...args}>
    <HelpCircleOutline />
  </Tooltip>
);
export const argTypes = Playground(
  {
    title: { type: 'string' },
    arrow: {},
    interactive: {},
    placement: {},
    open: {},
  },
  Tooltip,
);
