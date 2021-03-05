/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import * as React from 'react';

import { render, THEMES } from '~/helpers/test';

import { DataGrid, ValueGetterParams } from '.';

describe.skip('DataGrid', () => {
  test.each(THEMES)('%s theme matches the snapshot', theme => {
    const { container } = render(
      <DataGrid
        checkboxSelection
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
            field: 'age',
            headerName: 'Age',
            type: 'number',
            width: 150,
          },
          {
            description: 'This column has a value getter and is not sortable.',
            field: 'fullName',
            headerName: 'Full name',
            sortable: false,
            valueGetter: (params: ValueGetterParams): string =>
              `${params.getValue('firstName') || ''} ${
                params.getValue('lastName') || ''
              }`,
            width: 200,
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
      />,
      theme,
    );

    expect(container).toMatchSnapshot();
  });
});
