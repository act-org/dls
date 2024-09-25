/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { OutlinedInput } from '@mui/material';
import { noop } from 'lodash';

import { standard } from '~/helpers/test';

describe('OutlinedInput', () => {
  const Component = <OutlinedInput onChange={noop} value="Value" />;
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
