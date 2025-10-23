/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable jest/no-export */

import { configure, RenderOptions } from '@testing-library/react';
import { axe, JestAxeConfigureOptions, toHaveNoViolations } from 'jest-axe';
import { ReactElement } from 'react';

import render from './render';
import THEMES from './themes';

expect.extend(toHaveNoViolations);

export const accessibility = (
  Component: ReactElement,
  renderOptions?: RenderOptions,
  axeOptions?: JestAxeConfigureOptions,
): void => {
  configure({
    computedStyleSupportsPseudoElements: false,
  });
  test.each(THEMES)('%s theme should not have accessibility issues', async theme => {
    const { container } = render(Component, theme, renderOptions);
    expect(await axe(container, axeOptions)).toHaveNoViolations();
  });
};

export default accessibility;
