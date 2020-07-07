/**
 * @prettier
 */

import * as React from 'react';

import render from '~/helpers/test/render';

import ContainerBase from '.';

describe('ContainerBase', () => {
  it('matches the snapshot', () => {
    const { container } = render(
      <ContainerBase maxWidth="lg">This is a test.</ContainerBase>,
    );

    expect(container).toMatchSnapshot();
  });
});
