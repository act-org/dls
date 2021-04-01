/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import React from 'react';
import THEMES from './themes';
import render from './render';
import { RenderOptions } from '@testing-library/react';

// eslint-disable-next-line jest/no-export
export default function snapshot(
  Component: React.ReactElement,
  renderOptions?: RenderOptions,
): void {
  test.each(THEMES)('%s theme matches the snapshot', theme => {
    const { container } = render(Component, theme, renderOptions);
    expect(container).toMatchSnapshot();
  });
}
