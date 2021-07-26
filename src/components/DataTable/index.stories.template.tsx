/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import * as React from 'react';
import moment from 'moment';
import { Story } from '@storybook/react/types-6-0';

import { PackageVariant } from '~/icons';
import { Playground } from '~/helpers/playground';
import sort from '~/helpers/sort';
import SORT_DIRECTION_TYPES from '~/constants/sortDirectionTypes';

import { DataTable, DataTableProps } from '.';

interface Item {
  id: string;
  name: string;
  updatedAt: Date;
  fieldA: string;
  fieldB: string;
  fieldC: string;
}

export const Template: Story<DataTableProps<Item>> = args => {
  const [sortObject, setSortObject] = React.useState<SortObject>({
    sortBy: 'id',
    sortDirection: SORT_DIRECTION_TYPES.ASCENDING,
  });

  let items: Item[] = [...Array(10)].map((_, i): any => ({
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
    <DataTable<Item>
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
      {...args}
    />
  );
};

export const argTypes = Playground(
  {
    color: { type: 'string' },
  },
  DataTable,
);
