/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import * as React from 'react';
import { Radio as MuiRadio, RadioProps as MuiRadioProps } from '@mui/material';
import { Story } from '@storybook/react/types-6-0';

import { Playground } from '~/helpers/playground';

export const Radio = MuiRadio;
export type RadioProps = MuiRadioProps;

export const Template: Story<RadioProps> = (props: RadioProps) => (
  <Radio {...props} />
);

export const argTypes = Playground(
  {
    checked: {},
    color: {},
    disabled: {},
    onChange: { action: 'click' },
    size: {},
    value: {},
  },
  Radio,
);
