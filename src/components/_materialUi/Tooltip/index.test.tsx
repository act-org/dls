/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import * as React from 'react';
import { Tooltip } from '@material-ui/core';

import { standard } from '~/helpers/test';
import { HelpCircleOutline } from '~/icons';

describe('Tooltip', () => {
  const Component = (
    <Tooltip title="Title text here">
      <HelpCircleOutline />
    </Tooltip>
  );
  standard(Component);
});
