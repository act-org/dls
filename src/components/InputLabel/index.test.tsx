/**
 * @prettier
 */

import * as React from 'react';

import render from '../../helpers/test/render';

import { InputLabel } from '.';

describe('InputLabelPrimary', () => {
  it('matches the snapshot', () => {
    const { container } = render(
      <InputLabel color="primary" required>
        InputLabel
      </InputLabel>,
    );

    expect(container).toMatchSnapshot();
  });
});
