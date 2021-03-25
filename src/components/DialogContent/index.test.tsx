/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import * as React from 'react';

import { render, THEMES } from '~/helpers/test';

import { DialogContent } from '.';

describe('DialogContent', () => {
  test.each(THEMES)('%s theme matches the snapshot', theme => {
    const { container } = render(<DialogContent>Hey</DialogContent>, theme);

    expect(container).toMatchSnapshot();
  });
});
