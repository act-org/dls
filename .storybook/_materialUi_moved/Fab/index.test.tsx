/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import { standard } from '@actinc/dls/helpers/test';
import AddIcon from '@actinc/dls/icons/Plus';
import { Fab } from '@mui/material';

describe('Fab', () => {
  const Component = (
    <Fab aria-label="Floating Icon Button" color="primary">
      <AddIcon />
    </Fab>
  );
  standard(Component);
});
