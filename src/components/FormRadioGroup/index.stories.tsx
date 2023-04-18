/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import { action } from '@storybook/addon-actions';
import { Meta, StoryObj, StoryFn } from '@storybook/react';
import { useState } from 'react';

import { Playground } from '@actinc/dls/helpers/playground';

import { FormRadioGroup, FormRadioGroupProps } from '.';

const Template: StoryFn<FormRadioGroupProps> = args => {
  const [state, setState] = useState<string>('one');
  const clickAction = action('click');

  return (
    <FormRadioGroup
      onChange={(event, value): void => {
        setState(value);
        clickAction(event, value);
      }}
      value={state}
      {...args}
    />
  );
};

/**
 * This molecule wraps several controls together to bring a radio group
 * along with a label and options to display
 */
export default {
  args: {
    id: 'defaultradiogroup',
    label: 'The label',
    name: 'radiooptions',
    options: [
      { id: 'one', label: 'one', value: 'one' },
      { id: 'two', label: 'two', value: 'two' },
    ],
  },
  argTypes: Playground(
    {
      helpText: {},
      label: { type: 'string' },
      name: {},
      options: {},
      row: {},
    },
    FormRadioGroup,
  ),
  component: Template,
  tags: ['autodocs'],
  title: 'Forms (WIP) / FormRadioGroup',
} as Meta<FormRadioGroupProps>;

export const Preview: StoryObj<FormRadioGroupProps> = {
  args: {},
};
