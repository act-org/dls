/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import * as React from 'react';
import { Checkbox, CheckboxProps } from '@material-ui/core';
import { Story } from '@storybook/react/types-6-0';

import { Playground } from '~/helpers/playground';

export const Template: Story<CheckboxProps> = (props: CheckboxProps) => (
  <Checkbox {...props} />
);

export const argTypes = Playground(
  {
    checked: {},
    color: {},
    disabled: {},
    indeterminate: {},
    onChange: { action: 'click' },
    size: {},
    value: {},
  },
  Checkbox,
);
