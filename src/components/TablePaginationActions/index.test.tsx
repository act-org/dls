/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import { noop } from 'lodash';

import { standard } from '~/helpers/test';

import TablePaginationActions from '.';

describe('TablePaginationActions', () => {
  const Component = (
    <TablePaginationActions
      count={1000}
      onPageChange={noop}
      page={1}
      rowsPerPage={100}
    />
  );

  standard(Component);
});
