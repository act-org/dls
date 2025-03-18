/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Link } from '@mui/material';
import { Meta, StoryFn, StoryObj } from '@storybook/react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import isNumber from 'lodash/isNumber';
import { useState } from 'react';
import PackageVariant from '~/icons/PackageVariant';

import SORT_DIRECTION_TYPES from '~/constants/SORT_DIRECTION_TYPES';
import { Playground } from '~/helpers/playground';
import sort from '~/helpers/sort';
import { SortObject } from '~/types';

import { DataTable, DataTableProps } from '.';

dayjs.extend(relativeTime);

/* eslint-disable react/no-unused-prop-types */
interface Item {
  id: string;
  name: string;
  updatedAt: Date;
  fieldA: string;
  fieldB: string;
  fieldC: string;
}
/* eslint-enable react/no-unused-prop-types */

const Template: StoryFn<DataTableProps<Item>> = ({
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
    updatedAt: dayjs()
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
            dayjs(new Date(i.updatedAt)).fromNow(),
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

/**
 * The `<DataTable />` component is a lightweight alternative to the
 * `<DataGrid />` component from Material UI.
 */
export default {
  args: {
    totalCount: 10,
  },
  argTypes: Playground(
    {
      color: { type: 'string' },
    },
    DataTable,
  ),
  component: Template,
  tags: ['autodocs'],
  title: 'Organisms / DataTable',
} as Meta<DataTableProps<Item>>;

export const ColorDefault: StoryObj<DataTableProps<Item>> = {
  args: { color: 'default' },
};

export const ColorPrimary: StoryObj<DataTableProps<Item>> = {
  args: { color: 'primary' },
};

export const ColorSecondary: StoryObj<DataTableProps<Item>> = {
  args: { color: 'secondary' },
};

export const LinkedRows: StoryObj<DataTableProps<Item>> = {
  args: {
    RowWrapper: ({ name }: Item, children) => (
      <Link
        href={`https://www.google.com/search?q=${name}`}
        style={{
          display: 'contents',
        }}
        target="_blank"
        underline="none"
      >
        {children}
      </Link>
    ),
  },
};

export const EmptyState: StoryObj<DataTableProps<Item>> = {
  args: {
    emptyStateProps: {
      description: 'No Items Found',
      Icon: PackageVariant,
    },
    totalCount: 0,
  },
};

export const Paginated: StoryObj<DataTableProps<Item>> = {
  args: {
    limit: 10,
    offset: 0,
    rowsPerPageOptions: [10, 25, 50],
    totalCount: 100,
  },
};
