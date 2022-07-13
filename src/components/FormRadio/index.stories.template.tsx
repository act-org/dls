/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import { Story } from '@storybook/react/types-6-0';

import { Playground } from '~/helpers/playground';

import { FormRadio, FormRadioProps } from '.';

export const Template: Story<FormRadioProps> = args => <FormRadio {...args} />;
export const argTypes = Playground(
  {
    checked: {},
    disabled: {},
    id: {},
    label: { type: 'string' },
    labelPlacement: {},
    onChange: { action: 'change' },
  },
  FormRadio,
);
