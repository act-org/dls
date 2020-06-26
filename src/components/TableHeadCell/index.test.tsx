/**
 * @prettier
 */

import * as React from 'react';
import { noop } from 'lodash';
import renderer from 'react-test-renderer';

import TableHeadCell from '.';

describe('TableHeadCell', () => {
  it('matches the snapshot', () => {
    const tree = renderer
      .create(
        <TableHeadCell
          dataKey="itemKey"
          setSortObject={noop}
          sortable
          sortObject={{
            dataKey: 'itemKey',
            direction: 'ASC',
          }}
        >
          child
        </TableHeadCell>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
