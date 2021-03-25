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

import { render, THEMES } from '~/helpers/test';

import { Input } from '.';

describe('Input', () => {
  test.each(THEMES)('%s theme matches the snapshot', theme => {
    const { container } = render(
      <Input onChange={noop} value="Value" />,
      theme,
    );

    expect(container).toMatchSnapshot();
  });
});
