/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import { action } from '@storybook/addon-actions';
import {
  DataGrid as MuiDataGrid,
  DataGridProps as MuiDataGridProps,
  GridColDef,
  GridValueGetterParams,
} from '@mui/x-data-grid';
import { Story } from '@storybook/react/types-6-0';
import { useState } from 'react';

export const DataGrid = MuiDataGrid;
export type DataGridProps = MuiDataGridProps;
type PropType<TObj, TProp extends keyof TObj> = TObj[TProp];

interface StoryProps extends DataGridProps {
  editable?: boolean;
  filterable?: boolean;
  renderCell?: PropType<GridColDef, 'renderCell'>;
  sortable?: boolean;
}
type DefaultProps = { defaultProps: Record<string, unknown> };
export const Template: Story<StoryProps> & DefaultProps = ({
  autoHeight,
  autoPageSize,
  editable,
  filterable = true,
  page: pageProps,
  pageSize,
  renderCell,
  sortable,
  ...otherProps
}: StoryProps) => {
  const [page, setPage] = useState(pageProps || 0);

  return (
    <div
      style={{
        height: autoHeight || autoPageSize ? undefined : 370,
        minWidth: 902,
      }}
    >
      <DataGrid
        {...otherProps}
        autoHeight={autoHeight || autoPageSize}
        autoPageSize={autoPageSize}
        columns={[
          {
            align: 'left',
            description: "The user's ID.",
            editable,
            field: 'id',
            filterable,
            headerAlign: 'left',
            headerName: 'User ID',
            renderCell,
            sortable,
            type: 'string',
            width: 175,
          },
          {
            align: 'left',
            description: "The user's first name.",
            editable,
            field: 'firstName',
            filterable,
            flex: 1,
            headerAlign: 'left',
            headerName: 'First name',
            renderCell,
            sortable,
            type: 'string',
          },
          {
            align: 'left',
            description: "The user's last name.",
            editable,
            field: 'lastName',
            filterable,
            flex: 1,
            headerAlign: 'left',
            headerName: 'Last name',
            renderCell,
            sortable,
            type: 'string',
          },
          {
            align: 'left',
            description: "The user's full name.",
            editable,
            field: 'fullName',
            filterable,
            flex: 1,
            headerAlign: 'left',
            headerName: 'Full name',
            renderCell,
            sortable,
            type: 'string',
            valueGetter: (params: GridValueGetterParams): string =>
              // don't wrap the next line
              // eslint-disable-next-line prettier/prettier
              `${params.getValue(params.id, 'firstName') || ''} ${params.getValue(params.id, 'lastName') || ''}`,
          },
          {
            align: 'right',
            description: "The user's age.",
            editable,
            field: 'age',
            filterable,
            headerAlign: 'right',
            headerName: 'Age',
            renderCell,
            sortable,
            type: 'number',
            width: 175,
          },
        ]}
        onCellClick={action('onCellClick')}
        onCellDoubleClick={action('onCellDoubleClick')}
        onColumnHeaderClick={action('onColumnHeaderClick')}
        onColumnHeaderDoubleClick={action('onColumnHeaderDoubleClick')}
        onColumnOrderChange={action('onColumnOrderChange')}
        onColumnVisibilityChange={action('onColumnVisibilityChange')}
        onFilterModelChange={action('onFilterModelChange')}
        onPageChange={(p): void => {
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
        rowsPerPageOptions={[5, 10, 20]}
        sortingMode="client"
      />
    </div>
  );
};

Template.defaultProps = {
  editable: undefined,
  filterable: undefined,
  renderCell: undefined,
  sortable: undefined,
};