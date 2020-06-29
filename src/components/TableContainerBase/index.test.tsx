/**
 * @prettier
 */

import * as React from 'react';

import render from '~/helpers/test/render';

import TableContainer from '.';

describe('TableContainer', () => {
  it('matches the snapshot', () => {
    const { container } = render(<TableContainer />);

    expect(container).toMatchSnapshot();
  });
});
