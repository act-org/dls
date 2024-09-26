/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Meta, StoryObj } from '@storybook/react';
import Account from '~/icons/Account';

import { Playground } from '~/helpers/playground';

import { EmptyState, EmptyStateProps } from '.';

export default {
  args: {
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    Icon: Account,
    title: 'No users yet.',
  },
  argTypes: Playground(
    {
      description: { type: 'string' },
      style: {},
      title: { type: 'string' },
    },
    EmptyState,
  ),
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

export const CustomTitleContainer: StoryObj<EmptyStateProps> = {
  args: {
    title:
      'This is a very long title to demonstrate that the title container will expand to fit the content.',
    titleGridContainerProps: {
      maxWidth: 'unset !important',
    },
  },
};
