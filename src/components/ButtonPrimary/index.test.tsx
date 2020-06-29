/**
 * @prettier
 */

import * as React from 'react';
import { noop } from 'lodash';

import render from '~/helpers/test/render';

import ButtonPrimary from '.';

describe('ButtonPrimary', () => {
  it('matches the snapshot', () => {
    const { container } = render(
      <ButtonPrimary onClick={noop}>Button Label</ButtonPrimary>,
    );

    expect(container).toMatchSnapshot();
  });
});
