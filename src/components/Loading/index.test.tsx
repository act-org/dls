/**
 * @prettier
 */

import * as React from 'react';

import render from '../../helpers/test/render';

import { Loading } from '.';

describe('LoadingPrimary', () => {
  it('matches the snapshot', () => {
    const { container } = render(<Loading title="Loading..." />);

    expect(container).toMatchSnapshot();
  });
});
