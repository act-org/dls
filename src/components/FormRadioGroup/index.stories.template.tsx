/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import { action } from '@storybook/addon-actions';
import { Story } from '@storybook/react/types-6-0';
import { useState } from 'react';

import { Playground } from '~/helpers/playground';

import { FormRadioGroup, FormRadioGroupProps } from '.';

export const Template: Story<FormRadioGroupProps> = args => {
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
export const argTypes = Playground(
  {
    label: { type: 'string' },
    name: {},
    options: {},
    row: {},
    helpText: {},
  },
  FormRadioGroup,
);
