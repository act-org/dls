/**
 * @prettier
 */

import * as React from 'react';
import { noop } from 'lodash';

import render from '~/helpers/test/render';

import ButtonPrimary from '.';

describe('ButtonPrimary', () => {
  it('matches the snapshot', () => {
    const tree = render(
      <ButtonPrimary onClick={noop}>Button Label</ButtonPrimary>,
    );

    expect(tree).toMatchSnapshot();
  });
});
