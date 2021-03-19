/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import * as React from 'react';
import { MenuItem } from '@material-ui/core';
import { noop } from 'lodash';

import { render, THEMES } from '~/helpers/test';

import { Select } from '.';

describe('Select', () => {
  test.each(THEMES)('%s theme matches the snapshot', theme => {
    const { container } = render(
      <Select onChange={noop} value="ONE">
        <MenuItem value="ONE">One</MenuItem>
      </Select>,
      theme,
    );

    expect(container).toMatchSnapshot();
  });
});
