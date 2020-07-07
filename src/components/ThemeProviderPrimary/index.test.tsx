/**
 * @prettier
 */

import * as React from 'react';

import render from '~/helpers/test/render';

import ThemeProviderPrimary from '.';

describe('ThemeProviderPrimary', () => {
  it('matches the snapshot', () => {
    const { container } = render(
      <ThemeProviderPrimary>This is a test.</ThemeProviderPrimary>,
    );

    expect(container).toMatchSnapshot();
  });
});
