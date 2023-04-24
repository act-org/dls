/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import { Radio } from '@mui/material';
import Box from '@mui/material/Box';
import { Meta, StoryObj } from '@storybook/react';
import { ReactElement, useState } from 'react';

import { Slider, SliderProps } from './internal';

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
  args: { max: 19, min: 17 },
};

export const Marks: StoryObj<Slider> = {
  args: { marks: true, max: 28, min: 17 },
};

export const Vertical = {
  render: (args: SliderProps): ReactElement<unknown> => {
    return (
      <Box sx={{ height: '100px' }}>
        <Slider {...args} max={28} min={17} orientation="vertical" />
      </Box>
    );
  },
};

export const Scale = {
  render: (args: SliderProps): ReactElement<unknown> => {
    const [value, setValue] = useState<number | number[]>(5);
    const scale = (number: number): number => 2 ** number;
    return (
      <Box>
        <Slider
          {...args}
          max={17}
          min={3}
          onChange={(event: Event, newValue: number | number[]): void =>
            setValue(newValue)
          }
          scale={scale}
          value={value}
        />
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
          <Slider {...args} max={28} min={17} valueLabelDisplay="on" />
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
            max={28}
            min={17}
            valueLabelDisplay="on"
            valueLabelFormat={(number: number): string =>
              `${number} alligators`
            }
          />
        </Box>
      </Box>
    );
  },
};
