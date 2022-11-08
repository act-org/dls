/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Breakpoints, createTheme, ThemeOptions } from '@mui/material/styles';
import deepMerge from 'deepmerge';

import baseTheme from './baseTheme';
import components from './components';
import customDims from './customDims';
import palette from './palette';
import props from './props';
import shadows from './shadows';
import spacing, { SPACING_PX } from './spacing';
import typography from './typography';
import zIndex from './zIndex';

export const THEME_ENCOURAGE_E4S_OPTIONS: ThemeOptions = deepMerge(
  baseTheme as ThemeOptions,
  {
    breakpoints: {
      values: {
        md: 960,
        mobile: 720,
        sm: 720,
        xl: 1280,
        xs: 375,
      } as Breakpoints['values'],
    },
    components,
    customDims,
    palette,
    props,
    shadows,
    spacing,
    spacingPx: SPACING_PX,
    typography,
    zIndex,
  } as ThemeOptions,
  // Replace arrays instead of merging them together
  { arrayMerge: (_: unknown[], source: unknown[]) => source },
);

export const THEME_ENCOURAGE_E4S = createTheme(THEME_ENCOURAGE_E4S_OPTIONS);

export default THEME_ENCOURAGE_E4S;
