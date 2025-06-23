/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import noop from 'lodash/noop';

import { standard } from '~/helpers/test';

import TablePaginationActions from '.';

describe('TablePaginationActions', () => {
  const Component = (
    <TablePaginationActions
      count={1000}
      key="test"
      onPageChange={noop}
      page={0}
      rowsPerPage={100}
    />
  );

  standard(Component);
});
