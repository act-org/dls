/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import * as React from 'react';
import { noop } from 'lodash';

import { snapshot } from '~/helpers/test';

import TableCellHead from '.';

describe('TableCellHead', () => {
  const Component = (
    <TableCellHead
      currentSortObject={{
        sortBy: 'ITEM_KEY',
        sortDirection: 'ASCENDING',
      }}
      onChangeSort={noop}
      sortBy="ITEM_KEY"
    >
      TableCellHead
    </TableCellHead>
  );
  const tableRow = document.createElement('tr');
  snapshot(Component, { container: document.body.appendChild(tableRow) });
});
