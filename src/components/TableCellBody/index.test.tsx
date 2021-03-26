/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import * as React from 'react';
import { snapshot } from '../../helpers/test';
import TableCellBody from '.';

describe('TableCellBody', () => {
  const Component = <TableCellBody>TableCell</TableCellBody>;
  const tableRow = document.createElement('tr');
  snapshot(Component, { container: document.body.appendChild(tableRow) });
});
