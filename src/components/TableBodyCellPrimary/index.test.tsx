/**
 * @prettier
 */

import * as React from 'react';

import render from '~/helpers/test/render';

import TableBodyCellPrimary from '.';

describe('TableBodyCellPrimary', () => {
  it('matches the snapshot', () => {
    const { container } = render(
      <TableBodyCellPrimary
        dataKey="itemKey"
        sortObject={{
          dataKey: 'itemKey',
          direction: 'ASC',
        }}
      >
        child
      </TableBodyCellPrimary>,
    );

    expect(container).toMatchSnapshot();
  });
});
