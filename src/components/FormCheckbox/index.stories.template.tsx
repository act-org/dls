/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import { StoryFn } from '@storybook/react';

import { Playground } from '@actinc/dls/helpers/playground';

import { FormCheckbox, FormCheckboxProps } from '.';

export const Template: StoryFn<FormCheckboxProps> = args => (
  <FormCheckbox {...args} />
);
export const argTypes = Playground(
  {
    checked: {},
    disabled: {},
    id: {},
    label: { type: 'string' },
    labelPlacement: {},
    onChange: { action: 'change' },
  },
  FormCheckbox,
);
