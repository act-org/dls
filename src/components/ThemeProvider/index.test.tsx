/**
 * @prettier
 */

import * as React from 'react';

import render from '../../helpers/test/render';

import { ThemeProvider } from '.';

describe('ThemeProviderPrimary', () => {
  it('matches the snapshot', () => {
    const { container } = render(
      <ThemeProvider theme="act">
        <p>This is a test</p>
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });
});
