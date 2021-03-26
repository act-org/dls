/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import * as React from 'react';
import { Drawer, DrawerProps } from '.';
import { Playground } from '../../helpers/playground';
import { Story } from '@storybook/react/types-6-0';

export const Template: Story<DrawerProps> = args => (
  <Drawer {...args}>some text</Drawer>
);
export const argTypes = Playground({}, Drawer);
