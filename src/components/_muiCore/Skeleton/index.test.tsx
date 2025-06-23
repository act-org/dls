/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Skeleton } from '@mui/material';

import { standard } from '~/helpers/test';

describe('Skeleton', () => {
  const Component = <Skeleton height={100} width={100} />;
  standard(Component);
});
