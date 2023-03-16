/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import { RenderOptions } from '@testing-library/react';
import { JestAxeConfigureOptions } from 'jest-axe';
import { ReactElement } from 'react';

import accessibility from './accessibility';
import snapshot from './snapshot';

export const standard = (
  Component: ReactElement,
  renderOptions?: RenderOptions,
  runOptions?: JestAxeConfigureOptions,
): void => {
  snapshot(Component, renderOptions);
  accessibility(Component, renderOptions, runOptions);
};

export default standard;
