/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import { Drawer } from '@mui/material';

import { standard } from '~/helpers/test';

describe('Drawer', () => {
  const Component = <Drawer open>Hey</Drawer>;
  standard(Component);
});
