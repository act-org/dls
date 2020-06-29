/**
 * @prettier
 */

import * as React from 'react';

import render from '~/helpers/test/render';

import TableBodyBase from '.';

describe('TableBodyBase', () => {
  it('matches the snapshot', () => {
    const { container } = render(<TableBodyBase>TableBody</TableBodyBase>);

    expect(container).toMatchSnapshot();
  });
});
