/**
 * @prettier
 */

import * as React from 'react';

import render from '~/helpers/test/render';

import DividerBase from '.';

describe('DividerBase', () => {
  it('matches the snapshot', () => {
    const { container } = render(<DividerBase light />);

    expect(container).toMatchSnapshot();
  });
});
