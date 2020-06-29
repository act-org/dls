/**
 * @prettier
 */

import * as React from 'react';

import render from '~/helpers/test/render';

import TableRowBase from '.';

describe('TableRowBase', () => {
  it('matches the snapshot', () => {
    const { container } = render(<TableRowBase>TableRow</TableRowBase>);

    expect(container).toMatchSnapshot();
  });
});
