/**
 * @prettier
 */

import * as React from 'react';

import render from '~/helpers/test/render';

import LoadingBase from '.';

describe('LoadingBase', () => {
  it('matches the snapshot', () => {
    const { container } = render(<LoadingBase title="Loading..." />);

    expect(container).toMatchSnapshot();
  });
});
