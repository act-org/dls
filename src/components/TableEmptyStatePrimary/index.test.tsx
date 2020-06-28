/**
 * @prettier
 */

import * as React from 'react';
import renderer from 'react-test-renderer';

import TableEmptyStatePrimary from '.';

describe('TableEmptyStatePrimary', () => {
  it('matches the snapshot', () => {
    const tree = renderer
      .create(<TableEmptyStatePrimary description="No Things Found" />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
