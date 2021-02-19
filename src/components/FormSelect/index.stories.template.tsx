/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import * as React from 'react';
import { Story } from '@storybook/react/types-6-0';

import { FormSelect, FormSelectProps } from '.';
import { PlayGround } from '../../helpers/argBlocks';
import { get } from 'lodash';

export const Template: Story<FormSelectProps> = args => (
  <FormSelect {...args} />
);
export const argTypes = PlayGround(
  {
    disabled: {},
    id: {},
    options: {},
    placeholder: {},
    placeholderIsDisabled: {},
    required: {},
  },
  FormSelect,
);
