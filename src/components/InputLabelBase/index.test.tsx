/**
 * @prettier
 */

import * as React from 'react';

import render from '~/helpers/test/render';

import InputLabelBase from '.';

describe('InputLabelBase', () => {
  it('matches the snapshot', () => {
    const { container } = render(
      <InputLabelBase color="primary" required>
        InputLabel
      </InputLabelBase>,
    );

    expect(container).toMatchSnapshot();
  });
});
