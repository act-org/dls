/**
 * @prettier
 */

import * as React from 'react';
import renderer from 'react-test-renderer';

import TableEmptyState from '.';

describe('TableEmptyState', () => {
  it('matches the snapshot', () => {
    const tree = renderer
      .create(<TableEmptyState description="No Things Found" />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
