/**
 * @prettier
 */

import * as React from 'react';
import renderer from 'react-test-renderer';

import TableBodyCellPrimary from '.';

describe('TableBodyCellPrimary', () => {
  it('matches the snapshot', () => {
    const tree = renderer
      .create(
        <TableBodyCellPrimary
          dataKey="itemKey"
          sortObject={{
            dataKey: 'itemKey',
            direction: 'ASC',
          }}
        >
          child
        </TableBodyCellPrimary>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
