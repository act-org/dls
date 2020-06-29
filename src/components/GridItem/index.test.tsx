/**
 * @prettier
 */

import * as React from 'react';

import render from '~/helpers/test/render';

import GridItem from '.';

describe('GridItem', () => {
  it('matches the snapshot', () => {
    const { container } = render(<GridItem>GridItem</GridItem>);

    expect(container).toMatchSnapshot();
  });
});
