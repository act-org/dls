/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import * as React from 'react';
import { ButtonGroup } from '@material-ui/core';

import { standard } from '~/helpers/test';

describe('ButtonGroup', () => {
  const Component = <ButtonGroup color="primary">Click me</ButtonGroup>;
  standard(Component);
});