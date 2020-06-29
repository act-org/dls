/**
 * @prettier
 */

import * as React from 'react';

import render from '~/helpers/test/render';

import GridBase from '.';

describe('GridBase', () => {
  it('matches the snapshot', () => {
    const { container } = render(<GridBase>GridBase</GridBase>);

    expect(container).toMatchSnapshot();
  });
});
