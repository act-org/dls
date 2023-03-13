/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import HelpCircleOutline from '@actinc/dls/icons/HelpCircleOutline';
import { Tooltip } from '@mui/material';

import { standard } from '@actinc/dls/helpers/test';

describe('Tooltip', () => {
  const Component = (
    <Tooltip title="Title text here">
      <HelpCircleOutline />
    </Tooltip>
  );
  standard(Component);
});
