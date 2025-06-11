/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { DataGridProps, GridColDef, GridToolbar } from '@mui/x-data-grid';
import { Meta, StoryObj } from '@storybook/react-webpack5';

import { DataGrid } from './internal';

type StoryGridRow = {
  id: number;
  age?: number | null;
  firstName?: string | null;
  lastName?: string | null;
};

const columns: GridColDef[] = [
  {
    align: 'left',
    description: "The user's ID.",
    editable: true,
    field: 'id',
    filterable: true,
    headerAlign: 'left',
    headerName: 'User ID',
    sortable: true,
    type: 'string',
    width: 175,
  },
  {
    align: 'left',
    description: "The user's first name.",
    editable: true,
    field: 'firstName',
    filterable: true,
    flex: 1,
    headerAlign: 'left',
    headerName: 'First name',
    sortable: true,
    type: 'string',
  },
  {
    align: 'left',
    description: "The user's last name.",
    editable: true,
    field: 'lastName',
    filterable: true,
    flex: 1,
    headerAlign: 'left',
    headerName: 'Last name',
    sortable: true,
    type: 'string',
  },
  {
    align: 'left',
    description: "The user's full name.",
    editable: true,
    field: 'fullName',
    filterable: true,
    flex: 1,
    headerAlign: 'left',
    headerName: 'Full name',
    sortable: true,
    type: 'string',
    valueGetter: (_, row) => `${row.firstName || ''} ${row.lastName || ''}`,
  },
  {
    align: 'right',
    description: "The user's age.",
    editable: true,
    field: 'age',
    filterable: true,
    headerAlign: 'right',
    headerName: 'Age',
    sortable: true,
    type: 'number',
    width: 175,
  },
];

const rows: StoryGridRow[] = [
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
];
export default {
  args: {
    autoHeight: true,
    columns,
    filterMode: 'client',
    paginationMode: 'client',
    rows,
    sortingMode: 'client',
  },
  argTypes: {
    onCellClick: { action: 'onCellClick' },
    onCellDoubleClick: { action: 'onCellDoubleClick' },
    onColumnHeaderClick: { action: 'onColumnHeaderClick' },
    onColumnHeaderDoubleClick: { action: 'onColumnHeaderDoubleClick' },
    onColumnOrderChange: { action: 'onColumnOrderChange' },
    onColumnVisibilityChange: { action: 'onColumnVisibilityChange' },
    onFilterModelChange: { action: 'onFilterModelChange' },
    onPageSizeChange: { action: 'onPageSizeChange' },
    onResize: { action: 'onResize' },
    onRowClick: { action: 'onRowClick' },
    onRowDoubleClick: { action: 'onRowDoubleClick' },
    onSelectionModelChange: { action: 'onSelectionModelChange' },
    onSortModelChange: { action: 'onSortModelChange' },
  },
  component: DataGrid,
  parameters: {
    layout: 'padded',
  },
  render: (args: DataGridProps) => {
    return (
      <div style={{ display: 'flex', height: 'auto', width: '100%' }}>
        <div style={{ flexGrow: 1 }}>
          <DataGrid {...args} />
        </div>
      </div>
    );
  },
  tags: ['autodocs'],
  title: 'MUI X / DataGrid',
} as Meta<DataGridProps>;

type Story = StoryObj<DataGridProps>;

export const Primary: Story = {};
export const Toolbar: Story = {
  args: { slots: { toolbar: GridToolbar } },
};
