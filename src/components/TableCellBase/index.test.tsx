/**
 * @prettier
 */

import * as React from 'react';

import render from '~/helpers/test/render';

import TableCellBase from '.';

describe('TableCellBase', () => {
  it('matches the snapshot', () => {
    const { container } = render(
      <TableCellBase align="center">Table Cell</TableCellBase>,
    );

    expect(container).toMatchSnapshot();
  });
});
