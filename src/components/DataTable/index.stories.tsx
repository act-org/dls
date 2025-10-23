/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Link } from '@mui/material';
import { Meta, StoryFn, StoryObj } from '@storybook/react-webpack5';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import isNumber from 'lodash/isNumber';
import PackageVariant from 'mdi-material-ui/PackageVariant';
import { useState } from 'react';

import { StoryVariation } from '~/components/StoryVariation';
import ThemeProvider from '~/components/ThemeProvider';
import SORT_DIRECTION_TYPES from '~/constants/SORT_DIRECTION_TYPES';
import { createThemeStory } from '~/helpers/createThemeStory';
import { Playground } from '~/helpers/playground';
import sort from '~/helpers/sort';
import { ThemesArray } from '~/styles/themes';
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

const Template: StoryFn<DataTableProps<Item>> = ({ limit: limitProps, offset: offsetProps, totalCount, ...args }: DataTableProps<Item>) => {
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
          renderValue: (i: Item): string => dayjs(new Date(i.updatedAt)).fromNow(),
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
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  argTypes: Playground(
    {
      color: { type: 'string' },
    },
    DataTable,
  ),
  component: DataTable,
  parameters: {
    layout: 'padded',
  },
  render: Template,
  tags: ['autodocs'],
  title: 'Organisms / DataTable',
} as Meta<DataTableProps<Item>>;

type Story = StoryObj<DataTableProps<Item>>;

// Documentation story (not snapshotted in Chromatic)
export const Documentation: Story = {
  args: {
    totalCount: 10,
  },
  parameters: {
    chromatic: { disable: true },
  },
  render: Template,
};

// Playground story (not snapshotted in Chromatic)
export const PlaygroundStory: Story = {
  args: {
    totalCount: 10,
  },
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  argTypes: Playground(
    {
      color: { type: 'string' },
    },
    DataTable,
  ),
  name: 'Playground',
  parameters: {
    chromatic: { disable: true },
  },
  render: Template,
};

// Theme-specific stories (snapshotted in Chromatic)
// Generate stories for each theme dynamically

// Export theme-specific stories dynamically
const themeStories = ThemesArray.reduce(
  (stories, theme) => {
    // eslint-disable-next-line no-param-reassign
    stories[theme] = createThemeStory<DataTableProps<Item>>(theme, {
      render: () => (
        <ThemeProvider theme={theme}>
          <StoryVariation label="Default">
            <Template totalCount={10} />
          </StoryVariation>

          <StoryVariation label="Primary Color">
            <Template color="primary" totalCount={10} />
          </StoryVariation>

          <StoryVariation label="Secondary Color">
            <Template color="secondary" totalCount={10} />
          </StoryVariation>

          <StoryVariation label="Linked Rows">
            <Template
              RowWrapper={({ name }: Item, children) => (
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
              )}
              totalCount={10}
            />
          </StoryVariation>

          <StoryVariation label="Empty State">
            <Template
              emptyStateProps={{
                description: 'No Items Found',
                Icon: PackageVariant,
              }}
              totalCount={0}
            />
          </StoryVariation>

          <StoryVariation label="Paginated">
            <Template limit={10} offset={0} rowsPerPageOptions={[10, 25, 50]} totalCount={100} />
          </StoryVariation>
        </ThemeProvider>
      ),
    });

    return stories;
  },
  {} as Record<string, Story>,
);

export const ThemeEncoura = { ...themeStories.ENCOURA, name: 'Theme: Encoura' };
export const ThemeEncouraClassic = { ...themeStories.ENCOURA_CLASSIC, name: 'Theme: Encoura Classic' };
export const ThemeEncourage = { ...themeStories.ENCOURAGE, name: 'Theme: Encourage' };
export const ThemeEncourageE4E = { ...themeStories.ENCOURAGE_E4E, name: 'Theme: Encourage E4E' };
