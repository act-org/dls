/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import * as React from 'react';

import { PencilCircle } from '~/icons';
import render from '~/helpers/test/render';

import { IconButton } from '.';

describe('IconButton', () => {
  it('ACT theme matches the snapshot', () => {
    const { container } = render(
      <IconButton>
        <PencilCircle />
      </IconButton>,
      'ACT',
    );
    expect(container).toMatchSnapshot();
  });

  it('ACT_ET theme matches the snapshot', () => {
    const { container } = render(
      <IconButton>
        <PencilCircle />
      </IconButton>,
      'ACT_ET',
    );
    expect(container).toMatchSnapshot();
  });
});
