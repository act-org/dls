/**
 * @prettier
 */

import * as React from 'react';
import { noop } from 'lodash';

import render from '~/helpers/test/render';

import InputBase from '.';

describe('InputBase', () => {
  it('matches the snapshot', () => {
    const { container } = render(<InputBase onChange={noop} value="Value" />);

    expect(container).toMatchSnapshot();
  });
});
