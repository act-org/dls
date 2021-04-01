/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import * as React from 'react';
import { standard } from '../../helpers/test';
import { DataGrid, GridValueGetterParams } from '.';

jest.mock('@material-ui/core/utils', () => {
  let initialId = 12345;
  const sourceLib = jest.requireActual<Record<string, unknown>>(
    '@material-ui/core/utils',
  );
  return {
    ...sourceLib,
    unstable_useId: jest.fn(() => {
      // eslint-disable-next-line no-plusplus
      return `mui-${initialId++}`;
    }),
  };
});

describe('DataGrid', () => {
  const Component = (
    <DataGrid
      autoHeight
      checkboxSelection
      columnBuffer={4}
      columns={[
        {
          field: 'id',
          flex: 1,
          headerName: 'ID',
        },
        {
          field: 'firstName',
          flex: 1,
          headerName: 'First name',
        },
        {
          field: 'lastName',
          flex: 1,
          headerName: 'Last name',
        },
        {
          field: 'age',
          flex: 1,
          headerName: 'Age',
          type: 'number',
        },
        {
          description: 'This column has a value getter and is not sortable.',
          field: 'fullName',
          flex: 1,
          headerName: 'Full name',
          sortable: false,
          valueGetter: (params: GridValueGetterParams): string =>
            `${params.getValue('firstName') || ''} ${
              params.getValue('lastName') || ''
            }`,
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
    />
  );
  // need to set a width and height on the DataGrid to avoid a warning
  const gridContainer = document.createElement('div');
  gridContainer.style.width = '100%';
  gridContainer.style.height = '100vh';
  gridContainer.setAttribute('role', 'main');
  gridContainer.setAttribute('width', '100%');
  standard(Component, {
    container: document.body.appendChild(gridContainer),
  });
});
