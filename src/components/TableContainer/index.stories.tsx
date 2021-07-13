/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import * as React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import TableContainer, { TableContainerProps } from '.';

export const Preview: Story<TableContainerProps> = args => (
  <TableContainer {...args} />
);

export default {
  component: TableContainer,
  parameters: {
    info: {
      text: 'This is a customized version of the MUI TableContainer component.',
    },
  },
  title: 'V3/Atoms/TableContainer',
} as Meta<TableContainerProps>;
