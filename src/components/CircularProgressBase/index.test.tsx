/**
 * @prettier
 */

import * as React from 'react';
import { noop } from 'lodash';

import render from '~/helpers/test/render';

import CircularProgressBase from '.';

describe('CircularProgressBase', () => {
  it('matches the snapshot', () => {
    const { container } = render(
      <CircularProgressBase size={30} thickness={4} />,
    );

    expect(container).toMatchSnapshot();
  });
});
