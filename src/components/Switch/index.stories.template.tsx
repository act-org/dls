/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import * as React from 'react';
import { Switch, SwitchProps } from '.';
import { PlayGround } from '../../helpers/argBlocks';
import { Story } from '@storybook/react/types-6-0';

export const Template: Story<SwitchProps> = args => {
  return <Switch {...args} />;
};
export const argTypes = PlayGround(
  {
    size: {},
    color: {},
    disabled: {},
    checked: {},
  },
  Switch,
);
