/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Fab } from '@mui/material';
import AddIcon from '~/icons/Plus';

import { standard } from '~/helpers/test';

describe('Fab', () => {
  const Component = (
    <Fab aria-label="Floating Icon Button" color="primary">
      <AddIcon />
    </Fab>
  );
  standard(Component);
});
