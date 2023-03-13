/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import { Story } from '@storybook/react/types-6-0';
import { isNumber } from 'lodash';
import moment from 'moment';
import { useState } from 'react';

import SORT_DIRECTION_TYPES from '@actinc/dls/constants/SORT_DIRECTION_TYPES';
import { Playground } from '@actinc/dls/helpers/playground';
import sort from '@actinc/dls/helpers/sort';
import { SortObject } from '@actinc/dls/types';

import { DataTable, DataTableProps } from '.';

interface Item {
  id: string;
  name: string;
  updatedAt: Date;
  fieldA: string;
  fieldB: string;
  fieldC: string;
}

export const Template: Story<DataTableProps<Item>> = ({
  limit: limitProps,
  offset: offsetProps,
  totalCount,
  ...args
}: DataTableProps<Item>) => {
  const [limit, setLimit] = useState<number | undefined>(limitProps);
  const [offset, setOffset] = useState<number | undefined>(offsetProps);
  const [sortObject, setSortObject] = useState<SortObject>({
    sortBy: 'id',
    sortDirection: SORT_DIRECTION_TYPES.ASCENDING,
  });

  let items: Item[] = [...Array(totalCount || 0)].map((_, i): any => ({
    fieldA: `Field A${i + 1}`,
    fieldB: `Field B${i + 1}`,
    fieldC: `Field C${i + 1}`,
    id: i + 1,
    name: `Item ${i + 1}`,
    updatedAt: moment()
      .subtract(2, 'year')
      .subtract(i + 1, 'day')
      .toDate(),
  }));

  if (isNumber(limit) && isNumber(offset)) {
    items = items.slice(offset, offset + limit);
  }

  // sort items
  items = items.sort(sort<Item>(sortObject));

  return (
    <DataTable<Item>
      {...args}
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
      items={items}
      limit={limit}
      offset={offset}
      onChangeLimit={setLimit}
      onChangeOffset={setOffset}
      onChangeSort={setSortObject}
      totalCount={totalCount}
    />
  );
};

export const argTypes = Playground(
  {
    color: { type: 'string' },
  },
  DataTable,
);
