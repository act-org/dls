/**
 * @prettier
 */

import * as React from 'react';
import { noop } from 'lodash';

import render from '~/helpers/test/render';

import ButtonSecondary from '.';

describe('ButtonSecondary', () => {
  it('matches the snapshot', () => {
    const { container } = render(
      <ButtonSecondary onClick={noop}>Button Label</ButtonSecondary>,
    );

    expect(container).toMatchSnapshot();
  });
});
