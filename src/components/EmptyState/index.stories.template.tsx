/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import { Story } from '@storybook/react/types-6-0';

import { Playground } from '@actinc/dls/helpers/playground';

import { EmptyState, EmptyStateProps } from '.';

export const Template: Story<EmptyStateProps> = args => (
  <EmptyState {...args} />
);
export const argTypes = Playground(
  {
    title: { type: 'string' },
    description: { type: 'string' },
    style: {},
  },
  EmptyState,
);
