/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import { Paper } from '@mui/material';

import { standard } from '@actinc/dls/helpers/test';

describe('Paper', () => {
  const Component = <Paper elevation={2}>Paper</Paper>;
  standard(Component);
});
