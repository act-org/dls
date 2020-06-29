/**
 * @prettier
 */

import * as React from 'react';

import render from '~/helpers/test/render';

import MenuItemBase from '.';

describe('MenuItemBase', () => {
  it('matches the snapshot', () => {
    const { container } = render(
      <MenuItemBase value="ONE">MenuItem</MenuItemBase>,
    );

    expect(container).toMatchSnapshot();
  });
});
