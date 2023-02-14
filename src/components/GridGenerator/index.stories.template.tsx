/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import { MenuItem, TextField } from '@mui/material';
import { Story } from '@storybook/react/types-6-0';
import { useState } from 'react';

import { Playground } from '@actinc/dls/helpers/playground';

import { GridGenerator, GridGeneratorProps } from '.';

export const Template: Story<GridGeneratorProps> = (
  props: GridGeneratorProps,
) => {
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

export const argTypes = Playground({}, GridGenerator);
