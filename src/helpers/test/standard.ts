/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */
import React from 'react';
import snapshot from './snapshot';
import accessibility from './accessibility';
import { RenderOptions } from '@testing-library/react';
import { JestAxeConfigureOptions } from 'jest-axe';

export default function standard(
  Component: React.ReactElement,
  renderOptions?: RenderOptions,
  runOptions?: JestAxeConfigureOptions,
): void {
  snapshot(Component, renderOptions);
  accessibility(Component, renderOptions, runOptions);
}
