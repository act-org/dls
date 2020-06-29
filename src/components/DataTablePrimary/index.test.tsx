/**
 * @prettier
 */

import * as React from 'react';
import { noop } from 'lodash';

import render from '~/helpers/test/render';

import DataTablePrimary from '.';

describe('DataTablePrimary', () => {
  it('matches the snapshot', () => {
    const { container } = render(
      <DataTablePrimary
        columns={[
          {
            dataKey: 'id',
            label: 'ID',
            searchable: true,
            sortable: true,
            style: {
              width: 75,
            },
          },
          {
            dataKey: 'name',
            label: 'Name',
            searchable: true,
            sortable: true,
            style: {
              width: 100,
            },
          },
        ]}
        items={Array(...Array(5)).map((_, i): any => ({
          id: i + 1,
          name: `Thing ${i + 1}`,
        }))}
        setSortObject={noop}
        sortObject={{
          dataKey: 'id',
          direction: 'ASC',
        }}
      />,
    );

    expect(container).toMatchSnapshot();
  });
});
