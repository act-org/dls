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
import { StyledEngineProvider } from '@mui/material/styles';
import { Theme } from '@mui/material';

import ThemeProvider from '../../components/ThemeProvider';

export const render = (
  Component: React.ReactElement,
  theme?: 'ACT' | 'ACT_ET' | 'ENCOURA_DATALAB' | Theme,
  options?: RenderOptions,
): RenderResult =>
  originalRender(Component, {
    wrapper: ({ children }) => (
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme || 'ACT'}>{children}</ThemeProvider>
      </StyledEngineProvider>
    ),
    ...options,
  });
export default render;
