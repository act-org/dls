/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import * as React from 'react';
import { TextField } from '@material-ui/core';

import { standard } from '~/helpers/test';

describe('TextField', () => {
  const Component = (
    <TextField id="test-text-field" label="TextField Test Label" value="test" />
  );
  standard(Component);
});
