/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import { RenderOptions } from '@testing-library/react';
import { ReactElement } from 'react';

import render from './render';
import THEMES from './themes';

// eslint-disable-next-line jest/no-export
export default function snapshot(
  Component: ReactElement,
  renderOptions?: RenderOptions,
): void {
  test.each(THEMES)('%s theme matches the snapshot', theme => {
    const { container } = render(Component, theme, renderOptions);
    expect(container).toMatchSnapshot();
  });
}
