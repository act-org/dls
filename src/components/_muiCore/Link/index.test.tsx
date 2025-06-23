/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Link } from '@mui/material';

import { standard } from '~/helpers/test';

describe('Link', () => {
  const Component = (
    <Link href="https://www.act.org" target="_blank">
      <div>children</div>
    </Link>
  );
  standard(Component);
});
