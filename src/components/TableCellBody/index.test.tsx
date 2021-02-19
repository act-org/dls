/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import * as React from 'react';

import render from '~/helpers/test/render';

import TableCellBody from '.';

describe('TableCellBody', () => {
  it('matches the snapshot', () => {
    const { container } = render(<TableCellBody>TableCell</TableCellBody>);

    expect(container).toMatchSnapshot();
  });
});
