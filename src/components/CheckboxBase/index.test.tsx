/**
 * @prettier
 */

import * as React from 'react';
import { noop } from 'lodash';

import render from '~/helpers/test/render';

import CheckboxBase from '.';

describe('CheckboxBase', () => {
  it('matches the snapshot', () => {
    const { container } = render(<CheckboxBase checked onChange={noop} />);

    expect(container).toMatchSnapshot();
  });
});
