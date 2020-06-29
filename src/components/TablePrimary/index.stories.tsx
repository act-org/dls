/**
 * @prettier
 */

import * as React from 'react';

import SORT_DIRECTION_TYPES from '~/constants/sortDirectionTypes';
import { SortObject } from '~/types';

import TablePrimary from '.';

interface Item {
  id: string;
}

export const Primary = (): React.ReactElement<any> => {
  const [sortObject, setSortObject] = React.useState<SortObject<Item>>({
    dataKey: 'id',
    direction: SORT_DIRECTION_TYPES.ASC,
  });

  return (
    <TablePrimary<Item>
      cells={[
        {
          dataKey: 'id' as keyof Item,
          label: 'ID',
          searchable: true,
          sortable: true,
        },
      ]}
      items={[
        {
          id: '1',
        },
        {
          id: '2',
        },
        {
          id: '3',
        },
      ]}
      searchQuery=""
      setSortObject={setSortObject}
      sortObject={sortObject}
    />
  );
};

export default {
  component: TablePrimary,
  parameters: {
    info: {
      text: 'This is the primary variant of the Table component.',
    },
  },
  title: 'Organisms/Table',
};
