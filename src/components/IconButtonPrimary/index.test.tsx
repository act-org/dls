/**
 * @prettier
 */

import * as React from 'react';
import { noop } from 'lodash';

import render from '~/helpers/test/render';

import IconButtonPrimary from '.';

describe('IconButtonPrimary', () => {
  it('matches the snapshot', () => {
    const { container } = render(
      <IconButtonPrimary onClick={noop}>
        <div>Icon</div>
      </IconButtonPrimary>,
    );

    expect(container).toMatchSnapshot();
  });
});
