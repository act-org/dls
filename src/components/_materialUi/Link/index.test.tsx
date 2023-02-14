/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import { standard } from '@actinc/dls/helpers/test';
import { Link } from '@mui/material';

describe('Link', () => {
  const Component = (
    <Link href="https://www.act.org" target="_blank">
      <div>children</div>
    </Link>
  );
  standard(Component);
});
