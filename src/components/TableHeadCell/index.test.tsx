/**
 * @prettier
 */

import * as React from 'react';
import { noop } from 'lodash';

import render from '~/helpers/test/render';

import TableHeadCell from '.';

describe('TableHeadCell', () => {
  it('matches the snapshot', () => {
    const { container } = render(
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
    );

    expect(container).toMatchSnapshot();
  });
});
