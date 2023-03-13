/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import { MenuItem, Select } from '@mui/material';
import { noop } from 'lodash';

import { standard } from '@actinc/dls/helpers/test';

describe('Select', () => {
  const Component = (
    <Select defaultValue="" onChange={noop} value="ONE">
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
