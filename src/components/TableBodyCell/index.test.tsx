/**
 * @prettier
 */

import * as React from 'react';
import renderer from 'react-test-renderer';

import TableBodyCell from '.';

describe('TableBodyCell', () => {
  it('matches the snapshot', () => {
    const tree = renderer
      .create(
        <TableBodyCell
          dataKey="itemKey"
          sortObject={{
            dataKey: 'itemKey',
            direction: 'ASC',
          }}
        >
          child
        </TableBodyCell>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
