/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import deepMerge from 'deepmerge';

import { typeOk } from '~/helpers/types';
import { createTheme } from '~/styles/createTheme';
import { CustomThemeOptions, ICustomDims } from '~/types';

import baseTheme from './baseTheme';
import components from './components';
import customDims from './customDims';
import palette, { CustomPaletteOptions, customPalette } from './palette';
import props from './props';
import shadows from './shadows';
import spacing, { SPACING_PX } from './spacing';
import typography from './typography';
import zIndex from './zIndex';

export type ThemeCustomizations = ICustomDims & {
  palette: CustomPaletteOptions;
  spacingPx: number;
};

/** @deprecated Use `THEME_ENCOURAGE_V2` instead. `THEME_ENCOURAGE` has planned obsolescence. */
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
      palette: deepMerge(palette, customPalette),
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

export const THEME_ENCOURAGE_V2: CustomThemeOptions<
  Omit<ThemeCustomizations, 'palette'>
> = deepMerge(
  baseTheme,
  typeOk<CustomThemeOptions<Omit<ThemeCustomizations, 'palette'>>>()({
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
