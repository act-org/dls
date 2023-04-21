/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import { Meta, StoryObj } from '@storybook/react';
import Box from '@mui/material/Box';

import { Slider, SliderProps } from './internal';
import { ReactElement, useState } from 'react';
import { Radio } from '@mui/material';

export default {
  args: {
    defaultValue: 0,
    max: 100,
    min: 0,
  },
  argTypes: {},
  component: Slider,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  title: 'MUI Core / Slider',
} as Meta<Slider>;

export const Primary: StoryObj<Slider> = { args: { color: 'primary' } };

export const DefaultValue: StoryObj<Slider> = {
  args: { color: 'primary', defaultValue: 67 },
};

export const MinMax: StoryObj<Slider> = {
  args: { min: 17, max: 19 },
};

export const Marks: StoryObj<Slider> = {
  args: { min: 17, max: 28, marks: true },
};

export const Vertical = {
  render: (args: SliderProps): ReactElement<unknown> => {
    return (
      <Box sx={{ height: '100px' }}>
        <Slider {...args} min={17} max={28} orientation="vertical"></Slider>
      </Box>
    );
  },
};

export const Scale = {
  render: (args: SliderProps): ReactElement<unknown> => {
    const [value, setValue] = useState<number | number[]>(5);
    const scale = (number: number) => 2 ** number;
    return (
      <Box>
        <Slider
          {...args}
          min={3}
          max={17}
          onChange={(event: Event, newValue: number | number[]) =>
            setValue(newValue)
          }
          scale={scale}
          value={value}
        ></Slider>
        <Box>{Array.isArray(value) ? value : scale(value)}</Box>
      </Box>
    );
  },
};

export const SizeMedium: StoryObj<Slider> = {
  args: { size: 'medium' },
};

export const SizeSmall: StoryObj<Slider> = {
  args: { size: 'small' },
};

export const ValueLabelDisplay = {
  render: (args: SliderProps): ReactElement<unknown> => {
    return (
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          height: '100px',
          justifyContent: 'center',
        }}
      >
        <Box sx={{ width: '60%' }}>
          <Slider {...args} min={17} max={28} valueLabelDisplay="on"></Slider>
        </Box>
      </Box>
    );
  },
};

export const ValueLabelFormat = {
  render: (args: SliderProps): ReactElement<unknown> => {
    return (
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          height: '100px',
          justifyContent: 'center',
        }}
      >
        <Box sx={{ width: '60%' }}>
          <Slider
            {...args}
            min={17}
            max={28}
            valueLabelDisplay="on"
            valueLabelFormat={(number: number) => number + ' alligators'}
          ></Slider>
        </Box>
      </Box>
    );
  },
};
