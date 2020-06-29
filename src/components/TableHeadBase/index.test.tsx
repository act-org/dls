/**
 * @prettier
 */

import * as React from 'react';

import render from '~/helpers/test/render';

import TableHeadBase from '.';

describe('TableHeadBase', () => {
  it('matches the snapshot', () => {
    const { container } = render(<TableHeadBase>TableHead</TableHeadBase>);

    expect(container).toMatchSnapshot();
  });
});
