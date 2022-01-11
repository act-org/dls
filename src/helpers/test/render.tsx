/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */
/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import * as React from 'react';
import {
  render as originalRender,
  RenderResult,
  RenderOptions,
} from '@testing-library/react';

import ThemeProvider from '../../components/ThemeProvider';
import { Theme } from '@material-ui/core';

export const render = (
  Component: React.ReactElement,
  theme?: 'ACT' | 'ACT_ET' | 'ENCOURA' | Theme,
  options?: RenderOptions,
): RenderResult =>
  originalRender(Component, {
    wrapper: ({ children }) => (
      <ThemeProvider theme={theme || 'ACT'}>{children}</ThemeProvider>
    ),
    ...options,
  });
export default render;
