/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import { BreakpointsOptions } from '@mui/material/styles';
import deepMerge from 'deepmerge';

import { typeOk } from '@actinc/dls/helpers/types';
import { createTheme } from '@actinc/dls/styles/createTheme';
import { CustomThemeOptions, ICustomDims } from '@actinc/dls/types';

import baseTheme from './baseTheme';
import components from './components';
import customDims from './customDims';
import palette, { CustomPaletteOptions } from './palette';
import props from './props';
import shadows from './shadows';
import spacing, { SPACING_PX } from './spacing';
import typography from './typography';
import zIndex from './zIndex';

type ThemeCustomizations = ICustomDims & {
  breakpoints: BreakpointsOptions & {
    values: BreakpointsOptions['values'] & { mobile: number };
  };
  palette: CustomPaletteOptions;
  spacingPx: number;
};

export const THEME_ENCOURAGE: CustomThemeOptions<ThemeCustomizations> =
  deepMerge(
    baseTheme,
    typeOk<CustomThemeOptions<ThemeCustomizations>>()({
      breakpoints: {
        values: {
          lg: 1280,
          md: 960,
          mobile: 720,
          sm: 720,
          xl: 1280,
          xs: 375,
        },
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
    }),
    // Replace arrays instead of merging them together
    { arrayMerge: (_: unknown[], source: unknown[]) => source },
  );

export default createTheme(THEME_ENCOURAGE);