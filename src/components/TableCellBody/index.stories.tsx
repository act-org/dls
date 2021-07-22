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

import TableCellBody, { TableCellBodyProps } from '.';

interface StoryProps extends Props {
  text: string;
}

export const Body: Story<StoryProps> = ({ text, ...args }: StoryProps) => (
  <TableCellBody {...args}>{text}</TableCellBody>
);
Body.args = {
  text: 'Table Cell',
};

export default {
  component: TableCellBody,
  parameters: {},
  title: 'V3/Atoms/TableCell',
} as Meta<StoryProps>;
