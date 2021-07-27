/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import * as React from 'react';
import {
  DataGrid,
  DataGridProps,
  GridValueGetterParams,
} from '@material-ui/data-grid';
import { Story } from '@storybook/react/types-6-0';

import { Playground } from '~/helpers/playground';

export const Template: Story<DataGridProps> = (props: DataGridProps) => (
  <div style={{ height: 370, width: 902 }}>
    <DataGrid
      columns={[
        {
          field: 'id',
          headerName: 'ID',
          width: 150,
        },
        {
          field: 'firstName',
          headerName: 'First name',
          width: 200,
        },
        {
          field: 'lastName',
          headerName: 'Last name',
          width: 200,
        },
        {
          description: 'This column has a value getter and is not sortable.',
          field: 'fullName',
          headerName: 'Full name',
          sortable: false,
          valueGetter: (params: GridValueGetterParams): string =>
            `${params.getValue(params.id, 'firstName') || ''} ${
              params.getValue(params.id, 'lastName') || ''
            }`,
          width: 200,
        },
        {
          field: 'age',
          headerName: 'Age',
          type: 'number',
          width: 150,
        },
      ]}
      pageSize={5}
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
      {...props}
    />
  </div>
);

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
