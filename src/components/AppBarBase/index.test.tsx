/**
 * @prettier
 */

import * as React from 'react';

import render from '~/helpers/test/render';

import AppBarBase from '.';

describe('AppBarBase', () => {
  it('matches the snapshot', () => {
    const { container } = render(
      <AppBarBase color="primary" position="fixed">
        AppBar Base
      </AppBarBase>,
    );

    expect(container).toMatchSnapshot();
  });
});
