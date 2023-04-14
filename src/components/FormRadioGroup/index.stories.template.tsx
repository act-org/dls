/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import { action } from '@storybook/addon-actions';
import { StoryFn } from '@storybook/react';
import { useState } from 'react';

import { Playground } from '@actinc/dls/helpers/playground';

import { FormRadioGroup, FormRadioGroupProps } from '.';

export const Template: StoryFn<FormRadioGroupProps> = args => {
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
    helpText: {},
    label: { type: 'string' },
    name: {},
    options: {},
    row: {},
  },
  FormRadioGroup,
);
