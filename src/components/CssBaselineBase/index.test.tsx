/**
 * @prettier
 */

import * as React from 'react';

import render from '~/helpers/test/render';

import CssBaselineBase from '.';

describe('CssBaselineBase', () => {
  it('matches the snapshot', () => {
    const { container } = render(
      <CssBaselineBase>This is a test.</CssBaselineBase>,
    );

    expect(container).toMatchSnapshot();
  });
});
