/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import { Story } from '@storybook/react/types-6-0';
import React from 'react';
import { DataGrid, DataGridProps, ColDef } from '.';
import { PlayGround } from '../../helpers/argBlocks';

export const argTypes = PlayGround(
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
export const columns: ColDef[] = [
  { field: 'id', headerName: 'ID', flex: 0.5 },
  { field: 'firstName', headerName: 'First name', flex: 1 },
  { field: 'lastName', headerName: 'Last name', flex: 1 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 100,
    flex: 0.5,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    flex: 2,
    valueGetter: params =>
      `${params.getValue('firstName') || ''} ${
        params.getValue('lastName') || ''
      }`,
  },
];

export const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export const Template: Story<DataGridProps> = args => (
  <div style={{ display: 'flex', height: '100%', minHeight: '500px' }}>
    <div style={{ flexGrow: 1 }}>
      <DataGrid columns={columns} rows={rows} {...args} />
    </div>
  </div>
);
