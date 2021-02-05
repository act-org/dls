/**
 * @prettier
 */

import * as React from 'react';
import { MenuItem } from '@material-ui/core';
import { noop } from 'lodash';

import render from '../../helpers/test/render';

import { Select } from '.';

describe('SelectPrimary', () => {
  it('matches the snapshot', () => {
    const { container } = render(
      <Select onChange={noop} value="ONE">
        <MenuItem value="ONE">One</MenuItem>
      </Select>,
    );

    expect(container).toMatchSnapshot();
  });
});
