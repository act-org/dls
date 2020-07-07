/**
 * @prettier
 */

import * as React from 'react';

import render from '~/helpers/test/render';
import theme from '~/styles/theme';

import ThemeProviderBase from '.';

describe('ThemeProviderBase', () => {
  it('matches the snapshot', () => {
    const { container } = render(
      <ThemeProviderBase theme={theme}>This is a test.</ThemeProviderBase>,
    );

    expect(container).toMatchSnapshot();
  });
});
