/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import * as React from 'react';
import { standard } from '../../helpers/test';
import { MenuItem } from '@material-ui/core';
import { noop } from 'lodash';
import { Select } from '.';

describe('Select', () => {
  const Component = (
    <Select onChange={noop} value="ONE">
      <MenuItem value="ONE">One</MenuItem>
    </Select>
  );
  standard(
    Component,
    {},
    {
      rules: {
        label: { enabled: false }, // specific unit test for the control without the label
      },
    },
  );
});
