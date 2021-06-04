/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import * as React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import { FormInput } from '~/components/FormInput';
import { FormSelect } from '~/components/FormSelect';

import FormInputGroups, { FormInputGroupsProps } from '.';

const Template: Story<FormInputGroupsProps> = args => {
  const [value1, setValue1] = React.useState('Value 1');
  const [value2, setValue2] = React.useState('Value 2');
  const [value3, setValue3] = React.useState('THREE');
  const [value4, setValue4] = React.useState('Value 4');
  const [value5, setValue5] = React.useState('Value 5');

  return (
    <FormInputGroups
      groups={[
        [
          {
            formInput: (
              <FormInput
                inputProps={{
                  onChange: (e: any): void => {
                    setValue1(e.target.value);
                  },
                  placeholder: 'Input 1',
                  type: 'text',
                  value: value1,
                }}
                labelProps={{
                  children: 'Input 1',
                }}
                required
              />
            ),
            key: 'INPUT_1',
          },
          {
            formInput: (
              <FormInput
                inputProps={{
                  onChange: (e: any): void => {
                    setValue2(e.target.value);
                  },
                  placeholder: 'Input 2',
                  type: 'password',
                  value: value2,
                }}
                labelProps={{
                  children: 'Input 2',
                }}
                required
              />
            ),
            key: 'INPUT_2',
          },
        ],
        [
          {
            formInput: (
              <FormSelect
                labelProps={{
                  children: 'Input 3',
                }}
                options={[
                  {
                    label: 'One',
                    value: 'ONE',
                  },
                  {
                    label: 'Two',
                    value: 'TWO',
                  },
                  {
                    label: 'Three',
                    value: 'THREE',
                  },
                ]}
                selectProps={{
                  onChange: (e: any): void => {
                    setValue3(e.target.value);
                  },
                  value: value3,
                }}
              />
            ),
            key: 'INPUT_3',
          },
        ],
        [
          {
            formInput: (
              <FormInput
                inputProps={{
                  onChange: (e: any): void => {
                    setValue4(e.target.value);
                  },
                  placeholder: 'Input 4',
                  type: 'number',
                  value: value4,
                }}
                labelProps={{
                  children: 'Input 4',
                }}
                required
              />
            ),
            key: 'INPUT_4',
          },
          {
            formInput: (
              <FormInput
                inputProps={{
                  onChange: (e: any): void => {
                    setValue5(e.target.value);
                  },
                  placeholder: 'Input 5',
                  type: 'text',
                  value: value5,
                }}
                labelProps={{
                  children: 'Input 5',
                }}
                required
              />
            ),
            key: 'INPUT_5',
          },
        ],
      ]}
      {...args}
    />
  );
};

export const Preview: Story<FormInputGroupsProps> = Template.bind({});

export default {
  component: FormInputGroups,
  parameters: {
    info: {
      text: 'This is a custom FormInputGroups component.',
    },
  },
  title: 'Organisms/FormInputGroups',
} as Meta<FormInputGroupsProps>;
