/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Meta, StoryObj } from '@storybook/react';

import { Playground } from '~/helpers/playground';

import { Loading, LoadingProps } from '.';

/**
 * This component is the primary label for various form fields.  In general, when applicable, you should use
 * a molecule or organism that already contains this component to make it easier.  This would be used in a scenario where
 * a molecule does not exist for your use case.
 */
export default {
  args: {},
  argTypes: Playground(
    {
      circularProgressProps: {
        size: {},
        thickness: {},
      },
      style: {},
      title: {},
    },
    Loading,
  ),
  component: Loading,
  tags: ['autodocs'],
  title: 'Molecules / Loading',
} as Meta<LoadingProps>;

export const Preview: StoryObj<LoadingProps> = {
  args: {},
};

export const WithText: StoryObj<LoadingProps> = {
  args: {
    title: 'Loading...',
  },
};

export const CustomSpinner: StoryObj<LoadingProps> = {
  args: {
    circularProgressProps: {
      size: 50,
      thickness: 4.5,
    },
  },
};
