/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  createTheme as muiCreateTheme,
  Theme,
  ThemeOptions,
} from '@mui/material/styles';
import { createBreakpoints } from '@mui/system';
import deepMerge from 'deepmerge';

import baseTheme from './baseTheme';
import components from './components';
import E4ECustomDimensions from './E4ECustomDimensions';
import palette, { CustomPaletteOptions } from './palette';
import props from './props';
import shadows from './shadows';
import spacing, { SPACING_PX } from './spacing';
import typography from './typography';

export type CustomTheme<T extends object> = Theme & T;

export interface ICustomDims {
  customDims: {
    heights: Record<string, number>;
    widths: Record<string, number>;
  };
}

export type CustomThemeOptions<T extends object = Record<string, never>> =
  ThemeOptions & T;

export const createTheme = <T extends object>(
  options: CustomThemeOptions<T>,
  ...args: object[]
): CustomTheme<T> => muiCreateTheme(options, ...args) as CustomTheme<T>;

export type ThemeCustomizations = ICustomDims & {
  palette: CustomPaletteOptions;
  spacingPx: number;
};

export const THEME_ENCOURAGE_E4E_OPTIONS: CustomThemeOptions<ThemeCustomizations> =
  deepMerge(
    baseTheme,
    {
      breakpoints: createBreakpoints({
        values: {
          lg: 1440,
          md: 1280,
          sm: 820,
          xl: 1920,
          xs: 0,
        },
      }),
      components,
      customDims: {
        ...E4ECustomDimensions,
      },
      palette,
      props,
      shadows,
      spacing,
      spacingPx: SPACING_PX,
      typography,
    },
    // Replace arrays instead of merging them together
    { arrayMerge: (_: unknown[], source: unknown[]) => source },
  );

export const THEME_ENCOURAGE_E4E = createTheme(THEME_ENCOURAGE_E4E_OPTIONS);

export default THEME_ENCOURAGE_E4E;
