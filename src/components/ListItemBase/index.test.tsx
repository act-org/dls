/**
 * @prettier
 */

import * as React from 'react';

import render from '~/helpers/test/render';

import ListItemBase from '.';

describe('ListItemBase', () => {
  it('matches the snapshot', () => {
    const { container } = render(
      <ListItemBase button dense>
        ListItem
      </ListItemBase>,
    );

    expect(container).toMatchSnapshot();
  });
});
