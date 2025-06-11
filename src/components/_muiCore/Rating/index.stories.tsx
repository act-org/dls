/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import Box from '@mui/material/Box';
import { Meta, StoryObj } from '@storybook/react-webpack5';
import { ReactElement, useState } from 'react';

import { Rating, RatingProps } from './internal';

/**
 * Renders a standard Material UI Button using the
 * chosen theme parameters
 */
export default {
  args: {},
  argTypes: {
    onChange: { action: 'onChange' },
    onClick: { action: 'onClick' },
  },
  component: Rating,
  tags: ['autodocs'],
  title: 'MUI Core / Rating',
} as Meta<Rating>;

export const Primary: StoryObj<Rating> = { args: {} };

export const DefaultValue: StoryObj<Rating> = { args: { defaultValue: 4 } };

export const Disabled: StoryObj<Rating> = {
  args: { defaultValue: 3, disabled: true },
};

export const EmptyLabelText: StoryObj<Rating> = {
  args: { emptyLabelText: 'Select a number of stars' },
};

const labels: { [index: string]: string } = {
  1: 'Very Negative',
  2: 'Negative',
  3: 'Slightly Negative',
  4: 'Slightly Positive',
  5: 'Positive',
  6: 'Very Positive',
};
const getLabelText = (value: number): string => {
  return `${labels[value]}`;
};

export const HoverLabel = {
  render: (args: RatingProps): ReactElement<unknown> => {
    const [value, setValue] = useState<number | null>(2);
    const [hover, setHover] = useState(-1);
    return (
      <Box sx={{ width: '300px' }}>
        <Rating
          {...args}
          getLabelText={getLabelText}
          max={6}
          onChange={(_, newValue): void => {
            setValue(newValue);
          }}
          onChangeActive={(_, newHover): void => {
            setHover(newHover);
          }}
          value={value}
        />
        {value !== null && (
          <Box component="span" sx={{ ml: 3 }}>
            {labels[hover !== -1 ? hover : value]}
          </Box>
        )}
      </Box>
    );
  },
};

export const MaxMin: StoryObj<Rating> = { args: { max: 17 } };

export const Precision: StoryObj<Rating> = { args: { precision: 0.1 } };
