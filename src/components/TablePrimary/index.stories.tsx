/**
 * @prettier
 */

import * as React from 'react';
import moment from 'moment';

import SORT_DIRECTION_TYPES from '~/constants/sortDirectionTypes';
import { SortObject } from '~/types';

import TablePrimary from '.';

export const Primary = (): React.ReactElement<any> => {
  const [sortObject, setSortObject] = React.useState<SortObject>({
    dataKey: 'id',
    direction: SORT_DIRECTION_TYPES.ASC,
  });

  return (
    <TablePrimary
      cells={[
        {
          dataKey: 'id',
          label: 'ID',
          searchable: true,
          sortable: true,
          style: {
            width: 75,
          },
        },
        {
          dataKey: 'name',
          label: 'Name',
          searchable: true,
          sortable: true,
          style: {
            width: 100,
          },
        },
        {
          dataKey: 'createdAt',
          displayValueFn: (item: any): string =>
            moment(new Date(item.createdAt)).fromNow(),
          label: 'Created',
          searchable: false,
          sortable: true,
          style: {
            width: 150,
          },
        },
      ]}
      items={Array(...Array(5)).map((_, i): any => ({
        createdAt: new Date(`01/${i + 1}/2020`),
        id: i + 1,
        name: `Thing ${i + 1}`,
      }))}
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
