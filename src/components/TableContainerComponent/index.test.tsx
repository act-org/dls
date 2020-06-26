/**
 * @prettier
 */

import * as React from 'react';
import renderer from 'react-test-renderer';

import TableContainerComponent from '.';

describe('TableContainerComponent', () => {
  it('matches the snapshot', () => {
    const tree = renderer
      .create(<TableContainerComponent elevation={0} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
