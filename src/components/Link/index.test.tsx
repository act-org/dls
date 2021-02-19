/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import * as React from 'react';

import render from '../../helpers/test/render';

import { Link } from '.';

describe('LinkText', () => {
  it('matches the snapshot', () => {
    const { container } = render(
      <Link href="https://www.act.org" target="_blank">
        <div>children</div>
      </Link>,
    );

    expect(container).toMatchSnapshot();
  });
});
