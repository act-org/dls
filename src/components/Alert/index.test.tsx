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

import { Alert } from '.';

describe('Alert', () => {
  it('ACT theme matches the snapshot', () => {
    const { container } = render(
      <Alert text="Some alert description goes here." title="Title Here" />,
      'ACT',
    );
    expect(container).toMatchSnapshot();
  });

  it('ACT_ET theme matches the snapshot', () => {
    const { container } = render(
      <Alert text="Some alert description goes here." title="Title Here" />,
      'ACT_ET',
    );
    expect(container).toMatchSnapshot();
  });
});
