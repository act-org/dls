/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Tooltip } from '@mui/material';
import HelpCircleOutline from '~/icons/HelpCircleOutline';

import { standard } from '~/helpers/test';

describe('Tooltip', () => {
  const Component = (
    <Tooltip title="Title text here">
      <HelpCircleOutline />
    </Tooltip>
  );
  standard(Component);
});
