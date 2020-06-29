/**
 * @prettier
 */

import * as React from 'react';

import render from '~/helpers/test/render';

import TypographyBase from '.';

describe('TypographyBase', () => {
  it('matches the snapshot', () => {
    const { container } = render(
      <TypographyBase variant="body1">This is a test.</TypographyBase>,
    );

    expect(container).toMatchSnapshot();
  });
});
