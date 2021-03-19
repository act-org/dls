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

import { PlayGround } from '~/helpers/playground';

import { Radio, RadioProps } from '.';

export const Template: Story<RadioProps> = (props: RadioProps) => (
  <Radio {...props} />
);

export const argTypes = PlayGround(
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
