/**
 * @prettier
 */

import * as React from 'react';

import render from '~/helpers/test/render';

import ListBase from '.';

describe('ListBase', () => {
  it('matches the snapshot', () => {
    const { container } = render(<ListBase dense>List</ListBase>);

    expect(container).toMatchSnapshot();
  });
});
