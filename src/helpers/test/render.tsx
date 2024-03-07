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

import { Theme } from '@mui/material';
import { StyledEngineProvider } from '@mui/material/styles';
import {
  render as originalRender,
  RenderOptions,
  RenderResult,
} from '@testing-library/react';
import { ReactElement } from 'react';

import ThemeProvider from '~/components/ThemeProvider';

export const render = (
  Component: ReactElement,
  theme?:
    | 'ACT'
    | 'ACT_ET'
    | 'ENCOURA'
    | 'ENCOURA_CLASSIC'
    | 'ENCOURAGE'
    | Theme,
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
