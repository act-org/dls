/**
 * @prettier
 */

import * as React from 'react';

import render from '~/helpers/test/render';

import InputAdornmentBase from '.';

describe('InputAdornmentBase', () => {
  it('matches the snapshot', () => {
    const { container } = render(
      <InputAdornmentBase position="start">InputAdornment</InputAdornmentBase>,
    );

    expect(container).toMatchSnapshot();
  });
});
