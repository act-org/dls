/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import * as React from 'react';
import { Button, DialogActions } from '@mui/material';

import { standard } from '~/helpers/test';

describe('DialogActions', () => {
  const Component = (
    <DialogActions>
      <Button>Close</Button>
    </DialogActions>
  );
  standard(Component);
});
