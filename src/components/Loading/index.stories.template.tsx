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

import { Loading, LoadingProps } from '.';
import { Playground } from '~/helpers/playground';

export const Template: Story<LoadingProps> = args => <Loading {...args} />;
Template.args = {};

export const argTypes = Playground(
  {
    circularProgressProps: {
      size: {},
      thickness: {},
    },
    title: {},
    style: {},
  },
  Loading,
);
