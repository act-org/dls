/**
 * @prettier
 */

import * as React from 'react';

import render from '~/helpers/test/render';

import LoadingPrimary from '.';

describe('LoadingPrimary', () => {
  it('matches the snapshot', () => {
    const { container } = render(<LoadingPrimary title="Loading..." />);

    expect(container).toMatchSnapshot();
  });
});
