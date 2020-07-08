/**
 * @prettier
 */

import * as React from 'react';

import render from '~/helpers/test/render';

import ListItemIconBase from '.';

describe('ListItemIconBase', () => {
  it('matches the snapshot', () => {
    const { container } = render(
      <ListItemIconBase>ListItemIcon</ListItemIconBase>,
    );

    expect(container).toMatchSnapshot();
  });
});
