/**
 * @prettier
 */

import * as React from 'react';
import { noop } from 'lodash';

import render from '~/helpers/test/render';

import InputSecondary from '.';

describe('InputSecondary', () => {
  it('matches the snapshot', () => {
    const { container } = render(
      <InputSecondary onChange={noop} value="Value" />,
    );

    expect(container).toMatchSnapshot();
  });
});
