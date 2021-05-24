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
import { axe, toHaveNoViolations } from 'jest-axe';
import { RunOptions } from 'axe-core';

expect.extend(toHaveNoViolations);
// eslint-disable-next-line jest/no-export
export default function accessibility(
  Component: React.ReactElement,
  renderOptions?: RenderOptions,
  axeOptions?: RunOptions,
): void {
  test.each(THEMES)(
    '%s theme should not have accessibility issues',
    async theme => {
      const { container } = render(Component, theme, renderOptions);
      expect(await axe(container, axeOptions)).toHaveNoViolations();
    },
  );
}
