/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { MenuItem, TextField } from '@mui/material';
import { Meta, StoryFn, StoryObj } from '@storybook/react-webpack5';
import { useState } from 'react';

import { Playground } from '~/helpers/playground';

import { GridGenerator, GridGeneratorProps } from '.';

const Template: StoryFn<GridGeneratorProps> = (props: GridGeneratorProps) => {
  const [value1, setValue1] = useState('Value 1');
  const [value2, setValue2] = useState('Value 2');
  const [value3, setValue3] = useState('undefined');
  const [value4, setValue4] = useState('Value 4');
  const [value5, setValue5] = useState('Value 5');

  return (
    <GridGenerator
      {...props}
      groups={[
        [
          {
            children: (
              <TextField
                fullWidth
                label="Input 1"
                onChange={(e: any): void => {
                  setValue1(e.target.value);
                }}
                placeholder="Required Text"
                required
                type="text"
                value={value1}
              />
            ),
            key: 'INPUT_1',
          },
          {
            children: (
              <TextField
                fullWidth
                label="Input 2"
                onChange={(e: any): void => {
                  setValue2(e.target.value);
                }}
                placeholder="Required Password"
                required
                type="password"
                value={value2}
              />
            ),
            key: 'INPUT_2',
          },
        ],
        [
          {
            children: (
              <TextField
                fullWidth
                label="Input 3"
                onChange={(e: any): void => {
                  setValue3(e.target.value);
                }}
                select
                type="password"
                value={value3}
              >
                <MenuItem key="undefined" value="undefined">
                  Select
                </MenuItem>

                <MenuItem key="ONE" value="ONE">
                  One
                </MenuItem>

                <MenuItem key="TWO" value="TWO">
                  Two
                </MenuItem>

                <MenuItem key="THREE" value="THREE">
                  Three
                </MenuItem>
              </TextField>
            ),
            key: 'INPUT_3',
          },
        ],
        [
          {
            children: (
              <TextField
                fullWidth
                label="Input 4"
                onChange={(e: any): void => {
                  setValue4(e.target.value);
                }}
                placeholder="Required Number"
                required
                type="number"
                value={value4}
              />
            ),
            key: 'INPUT_4',
          },
          {
            children: (
              <TextField
                fullWidth
                label="Input 5"
                onChange={(e: any): void => {
                  setValue5(e.target.value);
                }}
                placeholder="Optional Text"
                type="text"
                value={value5}
              />
            ),
            key: 'INPUT_5',
          },
        ],
      ]}
    />
  );
};

export default {
  args: {},
  argTypes: Playground({}, GridGenerator),
  component: Template,
  tags: ['autodocs'],
  title: 'Organisms / GridGenerator',
} as Meta<GridGeneratorProps>;

export const Preview: StoryObj<GridGeneratorProps> = {
  args: {},
};
