/**
 * @prettier
 */

import * as React from 'react';
import { noop } from 'lodash';

import render from '~/helpers/test/render';

import OutlinedInputBase from '.';

describe('OutlinedInputBase', () => {
  it('matches the snapshot', () => {
    const { container } = render(
      <OutlinedInputBase onChange={noop} value="Value" />,
    );

    expect(container).toMatchSnapshot();
  });
});
