/**
 * @prettier
 */

import * as React from 'react';

import render from '~/helpers/test/render';

import TableBase from '.';

describe('TableBase', () => {
  it('matches the snapshot', () => {
    const { container } = render(<TableBase>Table</TableBase>);

    expect(container).toMatchSnapshot();
  });
});
