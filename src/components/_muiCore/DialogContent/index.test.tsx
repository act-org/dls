/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import { DialogContent } from '@mui/material';

import { standard } from '~/helpers/test';

describe('DialogContent', () => {
  const Component = <DialogContent>Hey</DialogContent>;
  standard(Component);
});
