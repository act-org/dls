/**
 * @prettier
 */

/* eslint-disable sort-keys */

import * as React from 'react';
import moment from 'moment';
import { select } from '@storybook/addon-knobs';

import PackageVariant from '~/icons/PackageVariant';
import sort from '~/helpers/sort';
import SORT_DIRECTION_TYPES from '~/constants/sortDirectionTypes';
import { SortObject } from '~/types';

import DataTablePrimary from '.';

interface Item {
  id: string;
  name: string;
  updatedAt: Date;
  fieldA: string;
  fieldB: string;
  fieldC: string;
}

export const Primary = (): React.ReactElement<any> => {
  const [sortObject, setSortObject] = React.useState<SortObject>({
    sortBy: 'id',
    sortDirection: SORT_DIRECTION_TYPES.ASCENDING,
  });

  let items: Item[] = Array(
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
        },
        5,
      ),
    ),
  ).map((_, i): any => ({
    updatedAt: moment()
      .subtract(2, 'year')
      .subtract(i + 1, 'day')
      .toDate(),
    fieldA: `Field A${i + 1}`,
    fieldB: `Field B${i + 1}`,
    fieldC: `Field C${i + 1}`,
    id: i + 1,
    name: `Item ${i + 1}`,
  }));

  // sort items
  items = items.sort(sort<Item>(sortObject));

  return (
    <DataTablePrimary<Item>
      columns={[
        {
          label: 'ID',
          renderValue: (i: Item): string => i.id,
          sortBy: 'id',
          style: {
            width: 50,
          },
        },
        {
          label: 'Name',
          renderValue: (i: Item): string => i.name,
          sortBy: 'name',
          style: {
            width: 100,
          },
        },
        {
          label: 'Field A',
          renderValue: (i: Item): string => i.fieldA,
          sortBy: 'fieldA',
          style: {
            width: 100,
          },
        },
        {
          label: 'Field B',
          renderValue: (i: Item): string => i.fieldB,
          sortBy: 'fieldB',
          style: {
            width: 100,
          },
        },
        {
          label: 'Field C',
          renderValue: (i: Item): string => i.fieldC,
          sortBy: 'fieldC',
          style: {
            width: 100,
          },
        },
        {
          label: 'Updated',
          renderValue: (i: Item): string =>
            moment(new Date(i.updatedAt)).fromNow(),
          sortBy: 'updatedAt',
          style: {
            width: 110,
          },
        },
      ]}
      currentSortObject={sortObject}
      emptyStateProps={{
        description: 'No Items Found',
        Icon: PackageVariant,
      }}
      items={items}
      onChangeSort={(newSortObject): void => {
        setSortObject(newSortObject);
      }}
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
