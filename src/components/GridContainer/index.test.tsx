/**
 * @prettier
 */

import * as React from 'react';

import render from '~/helpers/test/render';

import GridContainer from '.';

describe('GridContainer', () => {
  it('matches the snapshot', () => {
    const { container } = render(<GridContainer>GridContainer</GridContainer>);

    expect(container).toMatchSnapshot();
  });
});
