/**
 * @prettier
 */

/* eslint-disable sort-keys */

import * as React from 'react';
import moment from 'moment';
import { select } from '@storybook/addon-knobs';

import SORT_DIRECTION_TYPES from '~/constants/sortDirectionTypes';
import { SortObject } from '~/types';

import DataTablePrimary from '.';

export const Primary = (): React.ReactElement<any> => {
  const [sortObject, setSortObject] = React.useState<SortObject>({
    dataKey: 'id',
    direction: SORT_DIRECTION_TYPES.ASC,
  });

  return (
    <DataTablePrimary
      columns={[
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
      items={Array(
        ...Array(
          select(
            'Items Count',
            {
              0: 0,
              1: 1,
              2: 2,
              3: 3,
              4: 4,
              5: 5,
              6: 6,
              7: 7,
              8: 8,
              9: 9,
              10: 10,
              11: 11,
              12: 12,
              13: 13,
              14: 14,
              15: 15,
              16: 16,
              17: 17,
              18: 18,
              19: 19,
              20: 20,
              21: 21,
              22: 22,
              23: 23,
              24: 24,
            },
            5,
          ),
        ),
      ).map((_, i): any => ({
        createdAt: moment()
          .subtract(2, 'year')
          .subtract(i + 1, 'day')
          .toDate(),
        id: i + 1,
        name: `Thing ${i + 1}`,
      }))}
      setSortObject={setSortObject}
      sortObject={sortObject}
    />
  );
};

export default {
  component: DataTablePrimary,
  parameters: {
    info: {
      text: 'This is the primary variant of the DataTable component.',
    },
  },
  title: 'Organisms/DataTable',
};
