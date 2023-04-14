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

import { Loading, LoadingProps } from '.';

export const Template: StoryFn<LoadingProps> = args => <Loading {...args} />;
Template.args = {};

export const argTypes = Playground(
  {
    circularProgressProps: {
      size: {},
      thickness: {},
    },
    style: {},
    title: {},
  },
  Loading,
);
