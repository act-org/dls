/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import * as React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import SORT_DIRECTION_TYPES from '~/constants/sortDirectionTypes';
import { SortObject } from '~/types';

import TableCellHead, { TableCellHeadProps } from '.';

interface StoryProps extends TableCellHeadProps {
  text: string;
}

export const Head: Story<StoryProps> = ({ text, ...args }: StoryProps) => {
  const [sortObject, setSortObject] = React.useState<SortObject>({
    sortBy: 'ITEM_KEY',
    sortDirection: SORT_DIRECTION_TYPES.ASCENDING,
  });

  return (
    <TableCellHead
      currentSortObject={sortObject}
      onChangeSort={(newSortObject): void => {
        setSortObject(newSortObject);
      }}
      sortBy="ITEM_KEY"
      style={{
        width: 300,
      }}
      {...args}
    >
      {text}
    </TableCellHead>
  );
};

Head.args = {
  text: 'Table Cell',
};

export default {
  component: TableCellHead,
  parameters: {},
  title: 'V3/Atoms/TableCell',
} as Meta<StoryProps>;
