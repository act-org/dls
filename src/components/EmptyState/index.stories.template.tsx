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

import { EmptyState, EmptyStateProps } from '.';
import { PlayGround } from '../../helpers/argBlocks';

export const Template: Story<EmptyStateProps> = args => (
  <EmptyState {...args} />
);
export const argTypes = PlayGround(
  {
    title: { type: 'string' },
    description: { type: 'string' },
    style: {},
  },
  EmptyState,
);
