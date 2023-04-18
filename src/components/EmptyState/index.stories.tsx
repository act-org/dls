/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import Account from '@actinc/dls/icons/Account';
import { Meta, StoryObj } from '@storybook/react';

import { EmptyState, EmptyStateProps } from '.';

export default {
  args: {
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    Icon: Account,
    title: 'No users yet.',
  },
  argTypes: {},
  component: EmptyState,
  tags: ['autodocs'],
  title: 'Molecules / EmptyState',
} as Meta<EmptyStateProps>;

export const Default: StoryObj<EmptyStateProps> = {
  args: {},
};

export const CustomTitle: StoryObj<EmptyStateProps> = {
  args: {
    titleTypographyProps: {
      color: 'primary',
    },
  },
};

export const CustomDescription: StoryObj<EmptyStateProps> = {
  args: {
    descriptionTypographyProps: {
      color: 'primary',
    },
  },
};

export const CustomIcon: StoryObj<EmptyStateProps> = {
  args: {
    iconProps: {
      color: 'error',
    },
  },
};
