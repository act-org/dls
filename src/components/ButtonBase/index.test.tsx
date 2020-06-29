/**
 * @prettier
 */

import * as React from 'react';
import { noop } from 'lodash';

import render from '~/helpers/test/render';

import ButtonBase from '.';

describe('ButtonBase', () => {
  it('matches the snapshot', () => {
    const { container } = render(
      <ButtonBase onClick={noop}>Button Label</ButtonBase>,
    );

    expect(container).toMatchSnapshot();
  });
});