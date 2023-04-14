/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import PencilCircle from '@actinc/dls/icons/PencilCircle';
import { IconButton } from '@mui/material';
import { noop } from 'lodash';

import { standard } from '@actinc/dls/helpers/test';

describe('IconButton', () => {
  const Component = (
    <IconButton onClick={noop} size="large" title="icon button">
      <PencilCircle />
    </IconButton>
  );
  standard(Component);
});
