/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ClickAwayListener } from '@mui/base';
import Box from '@mui/material/Box';
import { Meta, StoryObj } from '@storybook/react-webpack5';
import { ReactElement, useState } from 'react';
import HelpCircleOutline from '~/icons/HelpCircleOutline';

import { Tooltip, TooltipProps } from './internal';

export default {
  args: {
    children: <HelpCircleOutline />,
    placement: 'right',
    title: 'Tooltip title goes here',
  },
  argTypes: {
    onClose: { action: 'onClose' },
    onOpen: { action: 'onOpen' },
  },
  component: Tooltip,
  parameters: {},
  tags: ['autodocs'],
  title: 'MUI Core / Tooltip',
} as Meta<Tooltip>;

export const Primary: StoryObj<Tooltip> = { args: {} };

export const Left: StoryObj<Tooltip> = {
  args: { color: 'primary', placement: 'left' },
};

export const Top: StoryObj<Tooltip> = {
  args: { color: 'primary', placement: 'top' },
};

export const Bottom: StoryObj<Tooltip> = {
  args: { color: 'primary', placement: 'bottom' },
};

export const Open: StoryObj<Tooltip> = {
  args: { color: 'primary', open: true, placement: 'right' },
};

export const Arrowless: StoryObj<Tooltip> = {
  args: { arrow: false, color: 'primary' },
};

export const EnterDelay: StoryObj<Tooltip> = {
  args: { color: 'primary', enterDelay: 1000 },
};

export const EnterNextDelay: StoryObj<Tooltip> = {
  args: { color: 'primary', enterNextDelay: 1500 },
};

export const EnterTouchDelay: StoryObj<Tooltip> = {
  args: { color: 'primary', disableHoverListener: true, enterTouchDelay: 100 },
};

export const ClickOnly = {
  render: (args: TooltipProps): ReactElement<unknown> => {
    const [open, setOpen] = useState(false);
    const handleTooltipClose = (): void => {
      setOpen(false);
    };

    const handleTooltipOpen = (): void => {
      setOpen(true);
    };
    return (
      <Box>
        <ClickAwayListener onClickAway={handleTooltipClose}>
          <Tooltip
            {...args}
            disableFocusListener
            disableHoverListener
            disableTouchListener
            onClose={handleTooltipClose}
            open={open}
            placement="right"
            title="Tooltip title goes here"
          >
            <HelpCircleOutline onClick={handleTooltipOpen} />
          </Tooltip>
        </ClickAwayListener>
      </Box>
    );
  },
};
