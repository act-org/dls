/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { DataGridProps, GridColDef, GridToolbar } from '@mui/x-data-grid';
import { Meta, StoryObj } from '@storybook/react-webpack5';

import { StoryVariation } from '~/components/StoryVariation';
import ThemeProvider from '~/components/ThemeProvider';
import { createThemeStory } from '~/helpers/createThemeStory';
import { Playground } from '~/helpers/playground';
import { ThemesArray } from '~/styles/themes';

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

/**
 * The default DataGrid exports
 */
export default {
  args: {
    autoHeight: true,
    columns,
    filterMode: 'client',
    paginationMode: 'client',
    rows,
    sortingMode: 'client',
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

// Documentation story (not snapshotted in Chromatic)
export const Documentation: Story = {
  args: {
    autoHeight: true,
    columns,
    filterMode: 'client',
    paginationMode: 'client',
    rows,
    sortingMode: 'client',
  },
  parameters: {
    chromatic: { disable: true },
  },
};

// Playground story (not snapshotted in Chromatic)
export const PlaygroundStory: Story = {
  args: {
    autoHeight: true,
    columns,
    filterMode: 'client',
    paginationMode: 'client',
    rows,
    sortingMode: 'client',
  },
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  argTypes: Playground({}, DataGrid),
  name: 'Playground',
  parameters: {
    chromatic: { disable: true },
  },
};

// Theme-specific stories (snapshotted in Chromatic)
// Generate stories for each theme dynamically

// Export theme-specific stories dynamically
const themeStories = ThemesArray.reduce(
  (stories, theme) => {
    // eslint-disable-next-line no-param-reassign
    stories[theme] = createThemeStory<DataGridProps>(theme, {
      render: () => (
        <ThemeProvider theme={theme}>
          <StoryVariation label="Basic DataGrid">
            <DataGrid autoHeight columns={columns} filterMode="client" paginationMode="client" rows={rows} sortingMode="client" />
          </StoryVariation>

          <StoryVariation label="With Toolbar">
            <DataGrid
              autoHeight
              columns={columns}
              filterMode="client"
              paginationMode="client"
              rows={rows}
              slots={{ toolbar: GridToolbar }}
              sortingMode="client"
            />
          </StoryVariation>

          <StoryVariation label="With Pagination">
            <DataGrid
              autoHeight
              columns={columns}
              filterMode="client"
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 5 },
                },
              }}
              pageSizeOptions={[5, 10, 25]}
              paginationMode="client"
              rows={rows}
              sortingMode="client"
            />
          </StoryVariation>

          <StoryVariation label="With Selection">
            <DataGrid autoHeight checkboxSelection columns={columns} filterMode="client" paginationMode="client" rows={rows} sortingMode="client" />
          </StoryVariation>

          <StoryVariation label="Dense">
            <DataGrid autoHeight columns={columns} density="compact" filterMode="client" paginationMode="client" rows={rows} sortingMode="client" />
          </StoryVariation>

          <StoryVariation label="With Filtering">
            <DataGrid
              autoHeight
              columns={columns}
              filterMode="client"
              initialState={{
                filter: {
                  filterModel: {
                    items: [
                      {
                        field: 'age',
                        operator: '>',
                        value: 30,
                      },
                    ],
                  },
                },
              }}
              paginationMode="client"
              rows={rows}
              sortingMode="client"
            />
          </StoryVariation>

          <StoryVariation label="With Sorting">
            <DataGrid
              autoHeight
              columns={columns}
              filterMode="client"
              initialState={{
                sorting: {
                  sortModel: [{ field: 'age', sort: 'desc' }],
                },
              }}
              paginationMode="client"
              rows={rows}
              sortingMode="client"
            />
          </StoryVariation>

          <StoryVariation label="Editable">
            <DataGrid autoHeight columns={columns} filterMode="client" paginationMode="client" rows={rows} sortingMode="client" />
          </StoryVariation>

          <StoryVariation label="With Column Visibility">
            <DataGrid
              autoHeight
              columns={columns}
              filterMode="client"
              initialState={{
                columns: {
                  columnVisibilityModel: {
                    age: false,
                  },
                },
              }}
              paginationMode="client"
              rows={rows}
              sortingMode="client"
            />
          </StoryVariation>

          <StoryVariation label="With Row Height">
            <DataGrid autoHeight columns={columns} filterMode="client" getRowHeight={() => 60} paginationMode="client" rows={rows} sortingMode="client" />
          </StoryVariation>

          <StoryVariation label="With Custom Styling">
            <DataGrid
              autoHeight
              columns={columns}
              filterMode="client"
              paginationMode="client"
              rows={rows}
              sortingMode="client"
              sx={{
                '& .MuiDataGrid-cell': {
                  borderBottom: '1px solid #e0e0e0',
                },
                '& .MuiDataGrid-columnHeaders': {
                  backgroundColor: 'primary.light',
                  color: 'primary.contrastText',
                },
              }}
            />
          </StoryVariation>

          <StoryVariation label="Loading State">
            <DataGrid autoHeight columns={columns} filterMode="client" loading paginationMode="client" rows={[]} sortingMode="client" />
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
