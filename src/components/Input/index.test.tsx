/**
 * @prettier
 */

import * as React from 'react';
import { noop } from 'lodash';

import render from '../../helpers/test/render';

import { Input } from '.';

describe('InputPrimary', () => {
  it('matches the snapshot', () => {
    const { container } = render(<Input onChange={noop} value="Value" />);

    expect(container).toMatchSnapshot();
  });
});
