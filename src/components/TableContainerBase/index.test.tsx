/**
 * @prettier
 */

import * as React from 'react';
import renderer from 'react-test-renderer';

import TableContainer from '.';

describe('TableContainer', () => {
  it('matches the snapshot', () => {
    const tree = renderer.create(<TableContainer />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
