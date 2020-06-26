/**
 * @prettier
 */

import * as React from 'react';
import renderer from 'react-test-renderer';

import TableHeadRow from '.';

describe('TableHeadRow', () => {
  it('matches the snapshot', () => {
    const tree = renderer.create(<TableHeadRow>child</TableHeadRow>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
