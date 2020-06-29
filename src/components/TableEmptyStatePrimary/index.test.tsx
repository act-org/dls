/**
 * @prettier
 */

import * as React from 'react';

import render from '~/helpers/test/render';

import TableEmptyStatePrimary from '.';

describe('TableEmptyStatePrimary', () => {
  it('matches the snapshot', () => {
    const { container } = render(
      <TableEmptyStatePrimary description="No Things Found" />,
    );

    expect(container).toMatchSnapshot();
  });
});
