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
import {
  Tooltip as MuiTooltip,
  TooltipProps as MuiTooltipProps,
} from '@mui/material';

import HelpCircleOutline from '~/icons/HelpCircleOutline';
import { Playground } from '~/helpers/playground';

export const Tooltip = MuiTooltip;
export type TooltipProps = MuiTooltipProps;

export const Template: Story<TooltipProps> = args => (
  <Tooltip title="Tooltip text goes here." {...args}>
    <HelpCircleOutline />
  </Tooltip>
);
