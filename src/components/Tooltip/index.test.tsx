/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import * as React from 'react';

import { HelpCircleOutline } from '~/icons';
import { render, THEMES } from '~/helpers/test';

import { Tooltip } from '.';

describe('Tooltip', () => {
  test.each(THEMES)('%s theme matches the snapshot', theme => {
    const { container } = render(
      <Tooltip title="Title text here">
        <HelpCircleOutline />
      </Tooltip>,
      theme,
    );

    expect(container).toMatchSnapshot();
  });
});
