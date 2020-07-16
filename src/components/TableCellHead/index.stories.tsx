/**
 * @prettier
 */

/* eslint-disable sort-keys */

import * as React from 'react';
import { number, text } from '@storybook/addon-knobs';

import SORT_DIRECTION_TYPES from '~/constants/sortDirectionTypes';
import { SortObject } from '~/types';

import TableCellHead from '.';

export const Head = (): React.ReactElement<any> => {
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
        width: number('Style:Width', 300),
      }}
    >
      {text('Text', 'Table Cell')}
    </TableCellHead>
  );
};

export default {
  component: TableCellHead,
  parameters: {
    info: {
      text: 'This is the head variant of the TableCell component.',
    },
  },
  title: 'Atoms/TableCell',
};
