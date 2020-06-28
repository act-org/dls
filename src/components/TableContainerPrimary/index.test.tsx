/**
 * @prettier
 */

import * as React from 'react';
import renderer from 'react-test-renderer';

import TableContainerPrimary from '.';

describe('TableContainerPrimary', () => {
  it('matches the snapshot', () => {
    const tree = renderer.create(<TableContainerPrimary />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
