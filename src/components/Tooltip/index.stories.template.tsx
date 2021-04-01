/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import * as React from 'react';
import { Tooltip, TooltipProps } from '.';
import { Playground } from '../../helpers/playground';
import { Story } from '@storybook/react/types-6-0';
import { HelpCircleOutline } from '~/icons';

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
