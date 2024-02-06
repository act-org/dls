/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import { Box, MenuItem, Tooltip, Typography } from '@mui/material';
import { Meta, StoryObj } from '@storybook/react';
import { range } from 'lodash';
import { useState } from 'react';
import HelpIcon from '~/icons/HelpCircle';

import { TextField, TextFieldProps } from './internal';

export default {
  args: {
    label: 'Field Label',
    placeholder: 'Placeholder',
  },
  argTypes: {
    onBlur: { action: 'onBlur' },
    onChange: { action: 'onChange' },
    onFocus: { action: 'onFocus' },
  },
  component: TextField,
  parameters: {
    docs: {
      inlineStories: false,
    },
  },
  tags: ['autodocs'],
  title: 'MUI Core / TextField',
} as Meta<TextField>;

type Story = StoryObj<TextFieldProps>;

export const Primary: Story = {};

export const Standard: Story = { args: { variant: 'standard' } };

export const ToolTipLabel: Story = {
  args: {
    label: (
      <Tooltip
        placement="right"
        title={
          <Box>
            <Typography variant="body1">
              Tool tips can be very complex renders
            </Typography>
            <Typography variant="caption">
              With many lines and styles
            </Typography>
          </Box>
        }
      >
        <Typography variant="h6">
          Tooltip Label <HelpIcon color="primary" />
        </Typography>
      </Tooltip>
    ),
  },
};

/**
 * You most likely will want to use this version of the Select component where it incorporates a label
 */
export const Select: Story = {
  args: {
    children: range(10).map((i): any => (
      <MenuItem key={i} value={i}>
        {i + 1}
      </MenuItem>
    )),
    select: true,
  },
};

export const SelectMultiple: Story = {
  render: (args: TextFieldProps) => {
    const [value, setValue] = useState<string[]>([]);
    return (
      <TextField
        {...args}
        onChange={(event): void =>
          setValue(event.target.value as unknown as string[])
        }
        select
        SelectProps={{ multiple: true }}
        value={value}
      >
        {range(10).map((i): any => (
          <MenuItem key={i} value={i}>
            {i + 1}
          </MenuItem>
        ))}
      </TextField>
    );
  },
};
