/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import * as React from 'react';
import { action } from '@storybook/addon-actions';
import {
  DataGrid,
  DataGridProps,
  GridValueGetterParams,
} from '@material-ui/data-grid';
import { Story } from '@storybook/react/types-6-0';

import { Playground } from '~/helpers/playground';

interface StoryProps extends DataGridProps {
  sortable?: boolean;
}

export const Template: Story<StoryProps> = ({
  autoHeight,
  autoPageSize,
  page: pageProps,
  pageSize,
  sortable,
  ...otherProps
}: StoryProps) => {
  const [page, setPage] = React.useState(pageProps || 0);

  return (
    <div
      style={{
        height: autoHeight || autoPageSize ? undefined : 370,
        width: 902,
      }}
    >
      <DataGrid
        autoHeight={autoHeight || autoPageSize}
        autoPageSize={autoPageSize}
        columns={[
          {
            description: "The user's ID.",
            field: 'id',
            headerName: 'User ID',
            sortable,
            width: 150,
          },
          {
            description: "The user's first name.",
            field: 'firstName',
            headerName: 'First name',
            sortable,
            width: 200,
          },
          {
            description: "The user's last name.",
            field: 'lastName',
            headerName: 'Last name',
            sortable,
            width: 200,
          },
          {
            description: "The user's full name.",
            field: 'fullName',
            headerName: 'Full name',
            sortable,
            valueGetter: (params: GridValueGetterParams): string =>
              `${params.getValue(params.id, 'firstName') || ''} ${
                params.getValue(params.id, 'lastName') || ''
              }`,
            width: 200,
          },
          {
            description: "The user's age.",
            field: 'age',
            headerName: 'Age',
            sortable,
            type: 'number',
            width: 150,
          },
        ]}
        onCellClick={action('onCellClick')}
        onCellDoubleClick={action('onCellDoubleClick')}
        onCellModeChange={action('onCellModeChange')}
        onColumnHeaderClick={action('onColumnHeaderClick')}
        onColumnHeaderDoubleClick={action('onColumnHeaderDoubleClick')}
        onColumnOrderChange={action('onColumnOrderChange')}
        onColumnResize={action('onColumnResize')}
        onColumnVisibilityChange={action('onColumnVisibilityChange')}
        onColumnWidthChange={action('onColumnWidthChange')}
        onEditCellChange={action('onEditCellChange')}
        onEditCellChangeCommitted={action('onEditCellChangeCommitted')}
        onEditRowModelChange={action('onEditRowModelChange')}
        onFilterModelChange={action('onFilterModelChange')}
        onPageChange={({ page: p }): void => {
          setPage(p);

          action('onPageChange')();
        }}
        onPageSizeChange={action('onPageSizeChange')}
        onResize={action('onResize')}
        onRowClick={action('onRowClick')}
        onRowDoubleClick={action('onRowDoubleClick')}
        onSelectionModelChange={action('onSelectionModelChange')}
        onSortModelChange={action('onSortModelChange')}
        page={page}
        pageSize={autoPageSize ? undefined : pageSize || 5}
        paginationMode="client"
        rows={[
          {
            age: 35,
            firstName: 'Jon',
            id: 1,
            lastName: 'Snow',
          },
          {
            age: 42,
            firstName: 'Cersei',
            id: 2,
            lastName: 'Lannister',
          },
          {
            age: 45,
            firstName: 'Jaime',
            id: 3,
            lastName: 'Lannister',
          },
          {
            age: 16,
            firstName: 'Arya',
            id: 4,
            lastName: 'Stark',
          },
          {
            age: null,
            firstName: 'Daenerys',
            id: 5,
            lastName: 'Targaryen',
          },
          {
            age: 150,
            firstName: null,
            id: 6,
            lastName: 'Melisandre',
          },
          {
            age: 44,
            firstName: 'Ferrara',
            id: 7,
            lastName: 'Clifford',
          },
          {
            age: 36,
            firstName: 'Rossini',
            id: 8,
            lastName: 'Frances',
          },
          {
            age: 65,
            firstName: 'Harvey',
            id: 9,
            lastName: 'Roxie',
          },
        ]}
        sortingMode="client"
        {...otherProps}
      />
    </div>
  );
};

Template.defaultProps = {
  sortable: undefined,
};

export const argTypes = Playground(
  {
    autoHeight: {},
    autoPageSize: {},
    checkboxSelection: {},
    columns: {},
    density: {},
    disableColumnFilter: {},
    disableColumnMenu: {},
    disableColumnSelector: {},
    disableDensitySelector: {},
    disableExtendRowFullWidth: {},
    disableSelectionOnClick: {},
    error: {},
    filterMode: {},
    headerHeight: {},
    hideFooter: {},
    hideFooterPagination: {},
    hideFooterRowCount: {},
    hideFooterSelectedRowCount: {},
    loading: {},
    page: {},
    pageSize: {},
    paginationMode: {},
    rowHeight: {},
    rows: {},
    rowsPerPageOptions: {},
    scrollbarSize: {},
    showCellRightBorder: {},
    showColumnRightBorder: {},
    showToolbar: {},
    sortingMode: {},
    sortingOrder: {},
  },
  DataGrid,
);
