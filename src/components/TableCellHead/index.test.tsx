/**
 * @prettier
 */

import * as React from 'react';
import { noop } from 'lodash';

import render from '~/helpers/test/render';

import TableCellHead from '.';

describe('TableCellHead', () => {
  it('matches the snapshot', () => {
    const { container } = render(
      <TableCellHead
        dataKey="itemKey"
        setSortObject={noop}
        sortable
        sortObject={{
          dataKey: 'itemKey',
          direction: 'ASC',
        }}
      >
        child
      </TableCellHead>,
    );

    expect(container).toMatchSnapshot();
  });
});
