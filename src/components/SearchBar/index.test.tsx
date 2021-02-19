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

import render from '../../helpers/test/render';

import { SearchBar } from '.';

describe('SearchBarPrimary', () => {
  it('matches the snapshot', () => {
    const { container } = render(<SearchBar onChange={noop} value="Value" />);

    expect(container).toMatchSnapshot();
  });
});