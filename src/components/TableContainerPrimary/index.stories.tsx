/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

/* eslint-disable sort-keys */

import * as React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import TableContainerPrimary, { Props } from '.';

export const Primary: Story<Props> = args => (
  <TableContainerPrimary {...args} />
);

export default {
  component: TableContainerPrimary,
  parameters: {
    info: {
      text: 'This is the primary variant of the TableContainer component.',
    },
  },
  title: 'Atoms/TableContainer',
} as Meta<Props>;
