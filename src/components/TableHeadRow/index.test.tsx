/**
 * @prettier
 */

import * as React from 'react';

import render from '~/helpers/test/render';

import TableHeadRow from '.';

describe('TableHeadRow', () => {
  it('matches the snapshot', () => {
    const { container } = render(<TableHeadRow>child</TableHeadRow>);

    expect(container).toMatchSnapshot();
  });
});
