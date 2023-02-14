/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import {
  Tooltip as MuiTooltip,
  TooltipProps as MuiTooltipProps,
} from '@mui/material';
import { Story } from '@storybook/react/types-6-0';

import HelpCircleOutline from '@actinc/dls/icons/HelpCircleOutline';

export const Tooltip = MuiTooltip;
export type TooltipProps = MuiTooltipProps;

export const Template: Story<TooltipProps> = args => (
  <Tooltip {...args} title="Tooltip text goes here.">
    <HelpCircleOutline />
  </Tooltip>
);
