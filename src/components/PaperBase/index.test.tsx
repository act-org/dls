/**
 * @prettier
 */

import * as React from 'react';

import render from '~/helpers/test/render';

import PaperBase from '.';

describe('PaperBase', () => {
  it('matches the snapshot', () => {
    const { container } = render(
      <PaperBase elevation={3} square>
        Paper
      </PaperBase>,
    );

    expect(container).toMatchSnapshot();
  });
});
