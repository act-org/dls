/**
 * @prettier
 */

import * as React from 'react';

import render from '~/helpers/test/render';

import TableCellBody from '.';

describe('TableCellBody', () => {
  it('matches the snapshot', () => {
    const { container } = render(<TableCellBody>TableCell</TableCellBody>);

    expect(container).toMatchSnapshot();
  });
});
