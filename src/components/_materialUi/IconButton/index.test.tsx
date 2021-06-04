/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import * as React from 'react';
import { IconButton } from '@material-ui/core';
import { noop } from 'lodash';

import { standard } from '~/helpers/test';
import { PencilCircle } from '~/icons';

describe('IconButton', () => {
  const Component = (
    <IconButton onClick={noop} title="icon button">
      <PencilCircle />
    </IconButton>
  );
  standard(Component);
});
