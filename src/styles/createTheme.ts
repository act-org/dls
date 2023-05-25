/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import { createTheme as muiCreateTheme } from '@mui/material/styles';

import { CustomTheme, CustomThemeOptions } from '../types';

import CustomColorsDictionary from './colors/customColorsDictionary';

export const createTheme = <T extends object>(
  options: CustomThemeOptions<T>,
  ...args: object[]
): CustomTheme<T> => {
  const theme = muiCreateTheme(options, ...args) as CustomTheme<T>;
  if (!options.palette?.customColors) {
    theme.palette.customColors = new CustomColorsDictionary();
  }
  return theme;
};

export default createTheme;
