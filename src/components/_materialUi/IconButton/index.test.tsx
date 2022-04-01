/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

;
import { IconButton } from '@mui/material';
import { noop } from 'lodash';

import PencilCircle from '~/icons/PencilCircle';
import { standard } from '~/helpers/test';

describe('IconButton', () => {
  const Component = (
    <IconButton onClick={noop} size="large" title="icon button">
      <PencilCircle />
    </IconButton>
  );
  standard(Component);
});
