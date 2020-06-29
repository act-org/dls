/**
 * @prettier
 */

import * as React from 'react';

import render from '~/helpers/test/render';

import TableRowHead from '.';

describe('TableRowHead', () => {
  it('matches the snapshot', () => {
    const { container } = render(<TableRowHead>TableRow</TableRowHead>);

    expect(container).toMatchSnapshot();
  });
});
