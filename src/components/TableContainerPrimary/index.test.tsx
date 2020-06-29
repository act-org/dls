/**
 * @prettier
 */

import * as React from 'react';

import render from '~/helpers/test/render';

import TableContainerPrimary from '.';

describe('TableContainerPrimary', () => {
  it('matches the snapshot', () => {
    const { container } = render(<TableContainerPrimary />);

    expect(container).toMatchSnapshot();
  });
});
