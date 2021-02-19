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

import TableContainerPrimary from '.';

describe('TableContainerPrimary', () => {
  it('matches the snapshot', () => {
    const { container } = render(<TableContainerPrimary />);

    expect(container).toMatchSnapshot();
  });
});
